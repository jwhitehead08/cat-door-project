'use client';

import React from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsIcon from '@mui/icons-material/Sports';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmailIcon from '@mui/icons-material/Email';
import smartDoorDog from '../assets/smart_door_dog.webp';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:3001';

const NEIGHBORHOODS = [
  { name: 'Northgate', note: 'High-density living near campus — perfect for smart pet access.' },
  { name: 'Southwood Valley', note: 'Family homes with yards that benefit most from permanent pet doors.' },
  { name: 'The Traditions', note: 'Premium residences where aesthetics matter as much as function.' },
];

const SERVICES = [
  {
    icon: <HomeRepairServiceIcon />,
    title: 'Dog Door Installation',
    body: 'From sliding glass panel inserts to in-wall cuts, we install dog doors that fit your home and your breed — sealed tight against Texas heat and humidity.',
  },
  {
    icon: <PetsIcon />,
    title: 'Cat Door Installation',
    body: 'Discreet cat door solutions for interior and exterior walls, including microchip-controlled options that keep raccoons and strays out of your BCS home.',
  },
  {
    icon: <HomeRepairServiceIcon />,
    title: 'Custom Pet Home Modifications',
    body: 'Built-in feeding stations, wall-mounted cat walks, and pet nooks — modern habitat engineering that blends seamlessly with your interior.',
  },
];

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  zip: string;
  message: string;
}

const CollegeStationBryan: React.FC = () => {
  const [form, setForm] = React.useState<ContactFormState>({ name: '', email: '', phone: '', zip: '', message: '' });
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
    <Box>
      {/* ── Hero: image+text left · form right ── */}
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
            backgroundImage: `url(${smartDoorDog.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          {/* dark gradient so text is legible */}
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
              Digsy · College Station & Bryan, TX
            </Typography>
            <Typography variant="h1" component="h1" color="white" sx={{ mt: 1, mb: 2 }}>
              Elevate Your Aggieland Home for Your Modern Pet
            </Typography>
            <Typography
              variant="h6"
              fontWeight={400}
              sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 520 }}
            >
              Precision pet door and home modification installation for the Brazos Valley.
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
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', zip: '', message: '' }); }}
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

      {/* ── Professional Pet Door Installations ── */}
      <Box id="services" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            color="primary"
            sx={{ letterSpacing: '0.15em', fontWeight: 600 }}
          >
            What We Do
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Professional Pet Door Installations
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: 600 }}>
            Whether you need a dog door installation for your Lab or a discreet cat door installation
            for your indoor-outdoor tabby, our specialists handle every detail — from measurement to
            weatherproofing to cleanup.
          </Typography>
          <Grid container spacing={4}>
            {SERVICES.map(({ icon, title, body }) => (
              <Grid size={{ xs: 12, md: 4 }} key={title}>
                <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
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
                    <Typography variant="h6" gutterBottom>{title}</Typography>
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

      {/* ── Neighborhoods + Game Day ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                color="primary"
                sx={{ letterSpacing: '0.15em', fontWeight: 600 }}
              >
                Serving the BCS Area
              </Typography>
              <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>
                Your Neighborhood, Our Expertise
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                We serve homeowners and renters (with landlord approval) across College Station and
                Bryan — from high-rise condos near campus to sprawling lots in the suburbs.
              </Typography>
              <Stack spacing={2}>
                {NEIGHBORHOODS.map(({ name, note }) => (
                  <Box key={name} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <LocationOnIcon sx={{ color: 'primary.main', mt: 0.25, flexShrink: 0 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>{name}</Typography>
                      <Typography variant="body2" color="text.secondary">{note}</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', p: 1 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mb: 2 }}>
                    <SportsIcon sx={{ color: '#F59E0B', fontSize: 32, flexShrink: 0 }} />
                    <Typography variant="h6" color="white" fontWeight={700}>
                      Freedom on Game Day
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.80)', lineHeight: 1.8, mb: 3 }}>
                    Long Texas A&M game days shouldn&apos;t mean rushing home between quarters to let your
                    dog out. A Digsy-installed pet door gives your pup access to the backyard on their
                    own schedule — so you can watch every play without the guilt.
                  </Typography>
                  <Stack spacing={1.5}>
                    {[
                      'No more mid-game sprints home',
                      'Microchip locks keep strays out',
                      'Insulated flaps handle the Texas heat',
                    ].map((point) => (
                      <Box key={point} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <CheckCircleOutlineIcon sx={{ color: '#14B8A6', fontSize: 18 }} />
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.80)' }}>
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Why Digsy ── */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
            Why Aggieland Pet Owners Choose Digsy
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 6, maxWidth: 560, mx: 'auto' }}
          >
            We are not a big-box handyman service. Every Digsy technician is trained specifically in
            pet home modifications — from door sizing to weatherproofing to aesthetic finishing.
          </Typography>
          <Grid container spacing={4}>
            {[
              { label: 'Clean, Precise Work', body: 'We cut once. Installations are finished with trim, caulk, and paint-ready edges — no jagged cutouts or gaps.' },
              { label: 'Pet-Specific Knowledge', body: 'We know the difference between a Maine Coon flap and a Labrador panel. Our recommendations are based on your specific pet.' },
              { label: 'Local & Reliable', body: 'Based in the Brazos Valley. We show up on time and stand behind our work with a satisfaction guarantee.' },
            ].map(({ label, body }) => (
              <Grid size={{ xs: 12, md: 4 }} key={label}>
                <Typography variant="h6" color="primary" gutterBottom>{label}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>{body}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: 'linear-gradient(135deg, #0D9488 0%, #0F766E 100%)',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h2" color="white" sx={{ mb: 2 }}>
            Ready to Upgrade Your BCS Home?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 4 }}>
            Book a free, no-obligation estimate and one of our College Station specialists will
            assess your home and recommend the right installation for your pet.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="#contact"
            sx={{
              backgroundColor: 'white',
              color: 'primary.dark',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.90)' },
            }}
          >
            Schedule Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default CollegeStationBryan;
