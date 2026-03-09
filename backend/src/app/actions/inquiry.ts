'use server';

import { Resend } from 'resend';
import { InquirySchema, buildMetadata } from '@/lib/schemas';
import { createServerClient } from '@/lib/supabase';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type ActionState = {
  success: boolean;
  message: string;
};

// ---------------------------------------------------------------------------
// Label map for email subject lines
// ---------------------------------------------------------------------------
const FORM_TYPE_LABEL: Record<string, string> = {
  general: 'General',
  career: 'Career',
  franchise: 'Franchise',
};

// ---------------------------------------------------------------------------
// submitInquiry
//
// Designed to work with React's useActionState / useFormState:
//
//   const [state, action] = useActionState(submitInquiry, { success: false, message: '' });
//   <form action={action}>...</form>
//
// Or called directly from a Route Handler (see app/api/inquiry/route.ts).
// ---------------------------------------------------------------------------
export async function submitInquiry(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // 1. Parse + validate -------------------------------------------------
  const raw = Object.fromEntries(formData.entries());
  const parsed = InquirySchema.safeParse(raw);

  if (!parsed.success) {
    const firstError = parsed.error.errors[0];
    return {
      success: false,
      message: firstError?.message ?? 'Invalid form data. Please check your inputs.',
    };
  }

  const { form_type, full_name, email, phone, zip_code, message } = parsed.data;
  const metadata = buildMetadata(parsed.data);

  // 2. Insert lead into Supabase ----------------------------------------
  const supabase = createServerClient();
  const { error: dbError } = await supabase.from('leads').insert({
    form_type,
    status: 'new',
    full_name,
    email,
    phone,
    zip_code,
    message,
    metadata,
  });

  if (dbError) {
    console.error('[inquiry] Supabase insert error:', dbError.message);
    return {
      success: false,
      message: 'We could not save your enquiry. Please try again or email us directly.',
    };
  }

  // 3. Send admin notification email ------------------------------------
  const resend = new Resend(process.env.RESEND_API_KEY);
  const label = FORM_TYPE_LABEL[form_type] ?? form_type;
  const adminEmail = process.env.ADMIN_EMAIL ?? 'admin@Digsy.com';

  const metaRows = Object.entries(metadata)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#606880;font-size:14px">${k.replace(/_/g, ' ')}</td><td style="padding:4px 0;font-size:14px">${v}</td></tr>`)
    .join('');

  const { error: emailError } = await resend.emails.send({
    from: 'Digsy <noreply@Digsy.com>',
    to: [adminEmail],
    subject: `[${label} Enquiry] ${full_name} — Digsy`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#2D3142">
        <div style="background:#FF8C42;padding:20px 24px;border-radius:6px 6px 0 0">
          <h1 style="margin:0;color:#fff;font-size:20px">New ${label} Enquiry</h1>
        </div>
        <div style="background:#f8f9fb;padding:24px;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 6px 6px">
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:4px 12px 4px 0;color:#606880;font-size:14px">Name</td><td style="padding:4px 0;font-size:14px">${full_name}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#606880;font-size:14px">Email</td><td style="padding:4px 0;font-size:14px"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:4px 12px 4px 0;color:#606880;font-size:14px">Phone</td><td style="padding:4px 0;font-size:14px">${phone}</td></tr>` : ''}
            ${zip_code ? `<tr><td style="padding:4px 12px 4px 0;color:#606880;font-size:14px">Zip / Region</td><td style="padding:4px 0;font-size:14px">${zip_code}</td></tr>` : ''}
            ${message ? `<tr><td style="padding:4px 12px 4px 0;color:#606880;font-size:14px;vertical-align:top">Message</td><td style="padding:4px 0;font-size:14px">${message}</td></tr>` : ''}
            ${metaRows}
          </table>
        </div>
        <p style="font-size:12px;color:#9e9e9e;margin-top:16px">Sent via Digsy ${label} form</p>
      </div>
    `,
  });

  if (emailError) {
    // Non-fatal — lead is already saved; log and continue.
    console.error('[inquiry] Resend email error:', emailError.message);
  }

  // 4. Return success ---------------------------------------------------
  return {
    success: true,
    message: 'Thank you — we will be in touch within one business day.',
  };
}
