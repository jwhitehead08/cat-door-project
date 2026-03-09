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
  Chip,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CodeIcon from '@mui/icons-material/Code';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

interface Role {
  title: string;
  team: string;
  location: string;
  type: string;
  icon: React.ReactNode;
  description: string;
}

const ROLES: Role[] = [
  {
    title: 'Installation Specialist',
    team: 'Field Operations',
    location: 'College Station, Texas',
    type: 'Full-time',
    icon: <EngineeringIcon />,
    description:
      'Deliver precision pet-door and vertical habitat installations across Greater London. You take pride in clean work and leaving every home better than you found it.',
  },
  {
    title: 'Customer Success Manager',
    team: 'Customer Experience',
    location: 'College Station, Texas',
    type: 'Full-time',
    icon: <SupportAgentIcon />,
    description:
      'Own the relationship from booking to long-term satisfaction. You guide clients through the process and turn great installations into glowing reviews.',
  },
  {
    title: 'Full-Stack Engineer',
    team: 'Product & Tech',
    location: 'Remote',
    type: 'Full-time',
    icon: <CodeIcon />,
    description:
      'Build and maintain the platform that powers scheduling, client portals, and franchise tooling. We use TypeScript, React, and a Node.js backend.',
  },
];

interface ApplicationForm {
  name: string;
  email: string;
  role: string;
  message: string;
}

const Careers: React.FC = () => {
  const [form, setForm] = React.useState<ApplicationForm>({ name: '', email: '', role: '', message: '' });
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
    fd.append('form_type', 'career');
    fd.append('full_name', form.name);
    fd.append('email', form.email);
    // Prepend role to message so it's captured in the lead
    const fullMessage = form.role ? `Role of Interest: ${form.role}\n\n${form.message}` : form.message;
    fd.append('message', fullMessage);

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
              color="secondary"
              sx={{ letterSpacing: '0.15em', fontWeight: 600 }}
            >
              Careers at Digsy
            </Typography>
            <Typography variant="h1" sx={{ mt: 1, mb: 3 }}>
              Join the Habitat Engineering Team
            </Typography>
            <Typography variant="h6" color="text.secondary" fontWeight={400} sx={{ mb: 4, maxWidth: 560 }}>
              We are looking for precision installers and customer success specialists who believe
              pets deserve a better home experience. Build the future of pet-centric living with us.
            </Typography>
            <Button variant="contained" color="secondary" size="large" href="#open-roles">
              See Open Roles
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Values */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { label: 'Quality Craft', body: 'We take pride in installations done right — clean, precise, and built to last.' },
              { label: 'Real Ownership', body: 'Small team means your contribution is visible. What you build matters.' },
              { label: 'Pet-First Culture', body: 'We genuinely care about the animals (and their humans) we serve.' },
            ].map(({ label, body }) => (
              <Grid size={{ xs: 12, md: 4 }} key={label}>
                <Typography variant="h6" color="secondary" gutterBottom>{label}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>{body}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Open roles */}
      <Box id="open-roles" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2 }}>Open Roles</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
            All roles include competitive pay, flexible working where applicable, and an annual
            Digsy hardware budget for your own home.
          </Typography>
          <Stack spacing={3}>
            {ROLES.map(({ title, team, location, type, icon, description }) => (
              <Card key={title} sx={{ backgroundColor: 'background.default' }}>
                <CardContent sx={{ p: 3 }}>
                  <Grid container spacing={2} alignItems="flex-start">
                    <Grid size={{ xs: 12, sm: 'auto' }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          backgroundColor: 'rgba(30,41,59,0.12)',
                          color: 'secondary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {icon}
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 'grow' }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <Typography variant="h6" sx={{ fontSize: '1rem' }}>{title}</Typography>
                        <Chip label={team} size="small" sx={{ backgroundColor: 'rgba(30,41,59,0.10)', color: 'secondary.dark' }} />
                        <Chip label={type} size="small" variant="outlined" />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                        <LocationOnIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                        <Typography variant="caption" color="text.secondary">{location}</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        {description}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 'auto' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        href="#apply"
                        onClick={() => setForm((f) => ({ ...f, role: title }))}
                      >
                        Apply
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Application form */}
      <Box id="apply" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="sm">
          <Typography variant="h2" textAlign="center" sx={{ mb: 1 }}>
            Send Your Application
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 5 }}>
            No role that fits? Send a speculative application — we are always interested in
            exceptional people.
          </Typography>

          {submitted ? (
            <Box textAlign="center" sx={{ py: 6 }}>
              <WorkOutlineIcon sx={{ fontSize: 56, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Application received!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We review every application and will be in touch if there is a match.
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
                <TextField label="Role of Interest" name="role" value={form.role} onChange={handleChange} required fullWidth placeholder="e.g. Installation Specialist" disabled={loading} />
                <TextField label="Tell us about yourself" name="message" value={form.message} onChange={handleChange} required multiline rows={5} fullWidth disabled={loading} />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={18} color="inherit" /> : null}
                >
                  {loading ? 'Sending…' : 'Submit Application'}
                </Button>
              </Stack>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Careers;
