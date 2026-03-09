'use client';

import React from 'react';
import { Box, Button, Container, Typography, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Hero: React.FC = () => {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(13,148,136,0.10) 0%, transparent 70%), linear-gradient(180deg, #F8FAFC 0%, #F8FAFC 100%)',
      }}
    >
      {/* Decorative grid */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(30,41,59,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 780, mx: 'auto', textAlign: 'center', py: 12 }}>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 560, mx: 'auto', fontWeight: 400 }}
          >
            Precision pet-door installation and architectural habitat systems. We’re upgrading the modern home with professional access and custom vertical territory for the urban pet.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => scrollToSection('contact')}
              sx={{ fontSize: '1rem', py: 1.5, px: 4 }}
            >
              Book a Demo
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<PlayCircleOutlineIcon />}
              onClick={() => scrollToSection('services')}
              sx={{ fontSize: '1rem', py: 1.5, px: 4 }}
            >
              See How It Works
            </Button>
          </Stack>

          {/* Social proof */}
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            sx={{ mt: 8, pt: 6, borderTop: '1px solid', borderColor: 'divider' }}
          >
            {[
              { value: '10K+', label: 'Happy Pets' },
              { value: '99.9%', label: 'Uptime' },
              { value: '4.9★', label: 'App Rating' },
            ].map(({ value, label }) => (
              <Box key={label} sx={{ textAlign: 'center' }}>
                <Typography variant="h5" color="primary" fontWeight={700}>
                  {value}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
