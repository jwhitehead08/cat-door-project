import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    icon: <ShoppingCartCheckoutIcon fontSize="large" />,
    title: 'Expert Consultation',
    description:
      'Assess & Design. Book a professional site visit where we analyze your home’s structure and your pet’s specific needs to design the perfect integration.',
  },
  {
    number: '02',
    icon: <BuildIcon fontSize="large" />,
    title: 'Precision Installation',
    description:
      'Crafted Install. Our specialists execute a clean, architecturally sound installation—ensuring thermal integrity for doors and structural security for vertical habitats.',
  },
  {
    number: '03',
    icon: <CheckCircleOutlineIcon fontSize="large" />,
    title: 'Seamless Living',
    description:
      'Total Freedom. Your pet enjoys new-found autonomy on their terms, while you enjoy a home that is perfectly tuned for the modern pet lifestyle.',
  },
];

const Process: React.FC = () => {
  return (
    <Box
      id="process"
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        background:
          'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(13,148,136,0.10) 0%, transparent 70%), #F8FAFC',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="overline"
            color="primary"
            sx={{ letterSpacing: '0.15em', fontWeight: 600 }}
          >
            How It Works
          </Typography>
          <Typography variant="h2" sx={{ mt: 1 }}>
            Taming the Home in Three Phases
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 480, mx: 'auto' }}
          >
            From the initial structural assessment to the final signature of approval—we handle every detail with engineering precision.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 3 }}>
          {STEPS.map((step) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={step.number}>
              <Stack spacing={2} sx={{ position: 'relative' }}>
                {/* Step number accent */}
                <Typography
                  sx={{
                    fontSize: '4.5rem',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: 'rgba(13,148,136,0.15)',
                    position: 'absolute',
                    top: -16,
                    left: -8,
                    userSelect: 'none',
                  }}
                >
                  {step.number}
                </Typography>

                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    backgroundColor: 'rgba(13,148,136,0.10)',
                    border: '1px solid rgba(13,148,136,0.30)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.main',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {step.icon}
                </Box>

                {/* Connector line (hidden on last item) */}
                {/* {index < STEPS.length - 1 && (
                  <Box
                    aria-hidden="true"
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      position: 'absolute',
                      top: 28,
                      left: 56,
                      right: -24,
                      height: 1,
                      backgroundColor: 'rgba(255,140,66,0.2)',
                      borderStyle: 'dashed',
                      borderWidth: '0 0 1px 0',
                      borderColor: 'rgba(255,140,66,0.3)',
                    }}
                  />
                )} */}

                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {step.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="/process"
            endIcon={<ArrowForwardIcon />}
          >
            See the Full Process
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Process;
