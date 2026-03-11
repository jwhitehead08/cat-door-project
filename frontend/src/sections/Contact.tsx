'use client';

import React from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import catEntering from '../assets/cat_entering.webp';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:3001';

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  zip: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = React.useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    zip: '',
    message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const fd = new FormData();
    fd.append('form_type', 'general');
    fd.append('full_name', form.name);
    fd.append('email', form.email);
    fd.append('phone', form.phone);
    fd.append('zip', form.zip);
    fd.append('message', form.message);

    try {
      const res = await fetch(`${BACKEND_URL}/api/inquiry`, {
        method: 'POST',
        body: fd,
      });
      const data = (await res.json()) as { success: boolean; message: string };
      if (!data.success) { setError(data.message); return; }
      setSubmitted(true);
    } catch {
      setError('Could not reach the server. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: { md: '90vh' } }}
    >
      {/* Left — background image with text overlay */}
      <Box
        sx={{
          flex: { md: '0 0 58%' },
          minHeight: { xs: 340, md: 'auto' },
          position: 'relative',
          backgroundImage: `url(${catEntering.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)',
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1, p: { xs: 4, md: 8 }, pb: { xs: 5, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'rgba(255,255,255,0.75)', letterSpacing: '0.15em', fontWeight: 600 }}
          >
            Home Mods for the Modern Pet
          </Typography>
          <Typography variant="h1" component="h1" color="white" sx={{ mt: 1, mb: 2 }}>
            Built For Their Nature.
          </Typography>
          <Typography
            variant="h6"
            fontWeight={400}
            sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 520 }}
          >
            Precision pet-door installation and architectural habitat systems for the modern home.
          </Typography>
        </Box>
      </Box>

      {/* Right — consultation form */}
      <Box
        sx={{
          flex: { md: '0 0 42%' },
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: { xs: 4, sm: 5, md: 7 },
        }}
      >
        <Typography
          variant="overline"
          color="primary"
          sx={{ letterSpacing: '0.15em', fontWeight: 600, mb: 1 }}
        >
          Free In-Home Design Consultation & Estimate
        </Typography>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 0.5 }}>
          Book a Consultation
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Fill out the form and we'll be in touch within one business day.
        </Typography>

        {submitted ? (
          <Stack spacing={1.5} alignItems="center" sx={{ py: 3 }}>
            <EmailIcon sx={{ fontSize: 48, color: 'primary.main' }} />
            <Typography variant="h6" fontWeight={600}>Message Sent!</Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Thanks for reaching out. We'll be in touch within one business day.
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                setSubmitted(false);
                setForm({ name: '', email: '', phone: '', zip: '', message: '' });
              }}
            >
              Send Another
            </Button>
          </Stack>
        ) : (
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={2.5}>
              {error && (
                <Alert severity="error" onClose={() => setError(null)}>{error}</Alert>
              )}
              <TextField
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                fullWidth
                autoComplete="name"
                disabled={loading}
                size="small"
              />
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                fullWidth
                autoComplete="email"
                disabled={loading}
                size="small"
              />
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 7 }}>
                  <TextField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    fullWidth
                    autoComplete="tel"
                    disabled={loading}
                    size="small"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 5 }}>
                  <TextField
                    label="Zip Code"
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    fullWidth
                    autoComplete="postal-code"
                    disabled={loading}
                    size="small"
                    inputProps={{ maxLength: 10 }}
                  />
                </Grid>
              </Grid>
              <TextField
                label="How can we help?"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                rows={4}
                disabled={loading}
                size="small"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={loading}
                startIcon={loading ? <CircularProgress size={18} color="inherit" /> : null}
              >
                {loading ? 'Sending…' : 'Schedule Now'}
              </Button>
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Contact;
