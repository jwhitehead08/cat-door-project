-- ============================================================
-- Digsy leads table
-- Run this in the Supabase SQL editor (Database → SQL Editor)
-- ============================================================

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),

  -- Which form originated this lead
  form_type   text not null check (form_type in ('general', 'career', 'franchise')),

  -- Workflow status — update as you work the lead
  status      text not null default 'new'
              check (status in ('new', 'contacted', 'qualified', 'closed', 'spam')),

  -- Core contact fields (shared across all form types)
  full_name   text not null,
  email       text not null,
  phone       text not null default '',
  zip_code    text not null default '',
  message     text,

  -- Form-specific extras stored as flexible JSON:
  --   franchise: { "liquid_capital": "50000" }
  --   career:    { "portfolio_url": "https://..." }
  --   general:   {}
  metadata    jsonb not null default '{}'::jsonb
);

-- Index for the most common admin query (newest leads first, by type)
create index if not exists leads_form_type_created_at_idx
  on public.leads (form_type, created_at desc);

-- Index for looking up a lead by email
create index if not exists leads_email_idx
  on public.leads (email);

-- Row-Level Security: only service-role key can read/write
alter table public.leads enable row level security;

-- No public access — all writes go through the backend using the service-role key
-- If you need anon reads for a dashboard, add a policy here.
