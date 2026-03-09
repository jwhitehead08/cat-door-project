import { z } from 'zod';

// ---------------------------------------------------------------------------
// Base fields shared by all three form types
// ---------------------------------------------------------------------------
const baseSchema = z.object({
  form_type: z.enum(['general', 'career', 'franchise']),
  full_name: z.string().min(1, 'Name is required').max(200),
  email: z.string().email('A valid email address is required'),
  phone: z.string().max(30).optional().default(''),
  zip_code: z.string().max(20).optional().default(''),
  message: z.string().max(5000).optional().default(''),
});

// ---------------------------------------------------------------------------
// Franchise extras
// ---------------------------------------------------------------------------
const franchiseExtras = z.object({
  form_type: z.literal('franchise'),
  liquid_capital: z.string().max(100).optional().default(''),
});

// ---------------------------------------------------------------------------
// Career extras
// ---------------------------------------------------------------------------
const careerExtras = z.object({
  form_type: z.literal('career'),
  portfolio_url: z
    .string()
    .url('Portfolio URL must be a valid URL')
    .max(500)
    .optional()
    .or(z.literal('')),
});

// ---------------------------------------------------------------------------
// General — no extras beyond the base
// ---------------------------------------------------------------------------
const generalExtras = z.object({
  form_type: z.literal('general'),
});

// ---------------------------------------------------------------------------
// Discriminated union so TypeScript narrows the type automatically
// ---------------------------------------------------------------------------
export const InquirySchema = z.discriminatedUnion('form_type', [
  baseSchema.merge(franchiseExtras),
  baseSchema.merge(careerExtras),
  baseSchema.merge(generalExtras),
]);

export type InquiryInput = z.infer<typeof InquirySchema>;

// ---------------------------------------------------------------------------
// Helper — build the metadata object from the parsed input
// ---------------------------------------------------------------------------
export function buildMetadata(data: InquiryInput): Record<string, string> {
  if (data.form_type === 'franchise') {
    return { liquid_capital: data.liquid_capital };
  }
  if (data.form_type === 'career' && data.portfolio_url) {
    return { portfolio_url: data.portfolio_url };
  }
  return {};
}
