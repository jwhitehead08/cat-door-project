'use client';

import React from 'react';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:3001';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StoreIcon from '@mui/icons-material/Store';
import PublicIcon from '@mui/icons-material/Public';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';

interface PillarItem {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const PILLARS: PillarItem[] = [
  {
    icon: <TrendingUpIcon />,
    title: 'Recession-Proof Industry',
    body: 'Pet spending grows year-over-year regardless of economic cycles. Combine that with the booming home-tech market and you have a powerful foundation.',
  },
  {
    icon: <HandshakeIcon />,
    title: 'Full Supply Chain Access',
    body: 'Leverage our supplier network for doors, hardware, and habitat materials at franchise pricing — no sourcing headaches.',
  },
  {
    icon: <StoreIcon />,
    title: 'Exclusive Territory',
    body: 'Each franchise is granted a protected geographic zone. You build equity in your market with no internal competition.',
  },
  {
    icon: <PublicIcon />,
    title: 'Brand & Marketing',
    body: 'Launch with a complete suite of digital assets, a local SEO playbook, and ongoing campaign support from our marketing team.',
  },
  {
    icon: <BuildIcon />,
    title: 'Proven Playbook',
    body: 'Our operations manual covers everything from lead acquisition to post-install care — refined across hundreds of jobs.',
  },
  {
    icon: <SchoolIcon />,
    title: 'Certified Training',
    body: 'Two-week onboarding programme plus annual upskilling keeps your team at the cutting edge of installation techniques.',
  },
];

interface EnquiryForm {
  name: string;
  email: string;
  city: string;
  message: string;
}

const Franchise: React.FC = () => {
  const [form, setForm] = React.useState<EnquiryForm>({ name: '', email: '', city: '', message: '' });
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
    fd.append('form_type', 'franchise');
    fd.append('full_name', form.name);
    fd.append('email', form.email);
    fd.append('zip_code', form.city);
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
    <Box>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          background: 'linear-gradient(135deg, #F8FAFC 0%, #F8FAFC 100%)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 680 }}>
            <Typography
              variant="overline"
              color="primary"
              sx={{ letterSpacing: '0.15em', fontWeight: 600 }}
            >
              Franchise Opportunities
            </Typography>
            <Typography variant="h1" sx={{ mt: 1, mb: 3 }}>
              Bring Digsy to Your Territory
            </Typography>
            <Typography variant="h6" color="text.secondary" fontWeight={400} sx={{ mb: 4, maxWidth: 560 }}>
              The pet industry is recession-proof. The home-tech industry is booming. Combine them
              with a Digsy franchise — and we provide the supply chain, the tech stack, and the
              training.
            </Typography>
            <Button variant="contained" size="large" href="#enquiry-form">
              Request a Prospectus
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Why Digsy */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography variant="h2">Why Digsy?</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 500, mx: 'auto' }}>
              Everything you need to launch, grow, and exit a profitable home-services franchise.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {PILLARS.map(({ icon, title, body }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={title}>
                <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        backgroundColor: 'rgba(13,148,136,0.12)',
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      {icon}
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem' }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                      {body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Territory map placeholder */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
            Tamed Territories
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6, maxWidth: 480, mx: 'auto' }}>
            Active franchise zones across the country. White areas are still available.
          </Typography>
          {/* Map placeholder — swap in a real map (Mapbox, Google Maps, etc.) */}
          <Box
            sx={{
              width: '100%',
              height: { xs: 260, md: 400 },
              borderRadius: 3,
              backgroundColor: '#E2E8F0',
              border: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <PublicIcon sx={{ fontSize: 56, color: 'text.secondary', opacity: 0.4 }} />
            <Typography variant="body2" color="text.secondary">
              Interactive territory map — coming soon
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Lead capture form */}
      <Box id="enquiry-form" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="sm">
          <Typography variant="h2" textAlign="center" sx={{ mb: 1 }}>
            Request a Prospectus
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 5 }}>
            Fill in your details and we will send you our full franchise information pack within
            one business day.
          </Typography>

          {submitted ? (
            <Box textAlign="center" sx={{ py: 6 }}>
              <HandshakeIcon sx={{ fontSize: 56, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Thanks — we will be in touch!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Check your inbox within one business day for your franchise prospectus.
              </Typography>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Stack spacing={3}>
                {error && (
                  <Alert severity="error" onClose={() => setError(null)}>
                    {error}
                  </Alert>
                )}
                <TextField label="Full Name" name="name" value={form.name} onChange={handleChange} required fullWidth disabled={loading} />
                <TextField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required fullWidth disabled={loading} />
                <TextField label="City / Region of Interest" name="city" value={form.city} onChange={handleChange} required fullWidth disabled={loading} />
                <TextField label="Tell us about yourself (optional)" name="message" value={form.message} onChange={handleChange} multiline rows={4} fullWidth disabled={loading} />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={18} color="inherit" /> : null}
                >
                  {loading ? 'Sending…' : 'Send Enquiry'}
                </Button>
              </Stack>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Franchise;
