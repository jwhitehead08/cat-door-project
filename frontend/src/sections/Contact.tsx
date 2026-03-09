'use client';

import React from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:3001';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = React.useState<ContactFormState>({
    name: '',
    email: '',
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
    fd.append('message', form.message);

    try {
      const res = await fetch(`${BACKEND_URL}/api/inquiry`, {
        method: 'POST',
        body: fd,
      });

      const data = (await res.json()) as { success: boolean; message: string };

      if (!data.success) {
        setError(data.message);
        return;
      }

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
      sx={{
        py: { xs: 8, md: 14 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="overline"
            color="primary"
            sx={{ letterSpacing: '0.15em', fontWeight: 600 }}
          >
            Get In Touch
          </Typography>
          <Typography variant="h2" sx={{ mt: 1 }}>
            Ready to Get Started?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 480, mx: 'auto' }}
          >
            Book a consultation with our team or drop us a message and we'll be
            in touch within one business day.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {/* Scheduler embed placeholder */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              variant="outlined"
              sx={{
                height: '100%',
                minHeight: 480,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 4,
                borderColor: 'divider',
                backgroundColor: 'background.default',
                borderRadius: 3,
                gap: 2,
              }}
            >
              {/*
                Replace this placeholder with the real Calendly embed:
                <InlineWidget url="https://calendly.com/your-handle/30min" />
                Install: npm install react-calendly
              */}
              <CalendarMonthIcon sx={{ fontSize: 56, color: 'primary.main', opacity: 0.7 }} />
              <Typography variant="h5" fontWeight={600} textAlign="center">
                Schedule a Consultation
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="center" maxWidth={320}>
                Pick a time that suits you. Our team will walk you through the
                product, analyze your home's structure and your pet's specific needs, and answer any questions.
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<CalendarMonthIcon />}
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mt: 1 }}
              >
                Open Scheduler
              </Button>
              <Typography variant="caption" color="text.secondary">
                Powered by Calendly · 30-min session
              </Typography>
            </Paper>
          </Grid>

          {/* Contact form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              variant="outlined"
              sx={{
                height: '100%',
                p: 4,
                borderColor: 'divider',
                backgroundColor: 'background.default',
                borderRadius: 3,
              }}
            >
              {submitted ? (
                <Stack
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  sx={{ height: '100%', minHeight: 320 }}
                >
                  <EmailIcon sx={{ fontSize: 56, color: 'primary.main' }} />
                  <Typography variant="h5" fontWeight={600}>
                    Message Sent!
                  </Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="center">
                    Thanks for reaching out. We'll be in touch within one
                    business day.
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', message: '' });
                    }}
                  >
                    Send Another
                  </Button>
                </Stack>
              ) : (
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Stack spacing={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <ChatBubbleOutlineIcon color="primary" />
                      <Typography variant="h6" fontWeight={600}>
                        Send Us a Message
                      </Typography>
                    </Box>

                    {error && (
                      <Alert severity="error" onClose={() => setError(null)}>
                        {error}
                      </Alert>
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
                    />
                    <TextField
                      label="How can we help?"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      fullWidth
                      multiline
                      rows={5}
                      disabled={loading}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      startIcon={loading ? <CircularProgress size={18} color="inherit" /> : null}
                    >
                      {loading ? 'Sending…' : 'Send Message'}
                    </Button>
                  </Stack>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
