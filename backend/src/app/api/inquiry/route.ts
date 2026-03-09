import { NextRequest, NextResponse } from 'next/server';
import { submitInquiry } from '@/app/actions/inquiry';

// ---------------------------------------------------------------------------
// POST /api/inquiry
//
// Thin Route Handler that wraps the Server Action so the frontend (a separate
// Next.js app) can call it over HTTP via fetch:
//
//   const res = await fetch('http://localhost:3001/api/inquiry', {
//     method: 'POST',
//     body: formData,   // standard FormData — no JSON encoding needed
//   });
//   const { success, message } = await res.json();
//
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  let formData: FormData;

  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Request body must be multipart/form-data.' },
      { status: 400 }
    );
  }

  const result = await submitInquiry({ success: false, message: '' }, formData);

  const status = result.success ? 200 : 422;
  return NextResponse.json(result, { status });
}

// Reject anything that isn't POST
export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
