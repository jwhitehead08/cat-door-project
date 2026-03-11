'use client';

import React from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PetsIcon from '@mui/icons-material/Pets';
import catDoorImageSrc from '../assets/cat_door_image.jpeg';
import verticalHabitatSrc from '../assets/vertical_habitat.webp';
import catEnteringSrc from '../assets/cat_entering.webp';

interface Phase {
  number: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  body: string;
  details: string[];
  image: { src: string };
  imageAlt: string;
  flip?: boolean;
}

const PHASES: Phase[] = [
  {
    number: '01',
    icon: <ShoppingCartCheckoutIcon sx={{ fontSize: 28 }} />,
    title: 'Expert Consultation',
    subtitle: 'Assess & Design',
    body: 'Every home is different. Before we touch a single wall, one of our specialists visits in person to assess your home\'s structure, your pet\'s size and behavior, and the best installation approach. You\'ll leave the consultation with a clear plan, a fixed price, and a confirmed install date.',
    details: [
      'In-home structural assessment at no charge',
      'Breed- and species-specific door sizing',
      'Recommendations for door type, placement, and brand',
      'Fixed quote — no surprise charges on install day',
      'Flexible scheduling, including evenings and weekends',
    ],
    image: catEnteringSrc,
    imageAlt: 'Digsy specialist conducting an in-home pet door consultation',
  },
  {
    number: '02',
    icon: <BuildIcon sx={{ fontSize: 28 }} />,
    title: 'Precision Installation',
    subtitle: 'Crafted Install',
    body: 'Our installers are trained exclusively in pet home modifications — not general handymen. We make clean, precise cuts, fit the door or habitat system with structural integrity, and finish every edge with trim, caulk, and paint-ready surfaces. Most installs are completed in a single visit.',
    details: [
      'Single-day installation in most cases',
      'Structural cuts with stud-finder and thermal checks',
      'Weatherproof sealing on all exterior installs',
      'Trim matched to your existing door or wall finish',
      'Full site cleanup — we leave no mess behind',
    ],
    image: catDoorImageSrc,
    imageAlt: 'Digsy technician performing a precise pet door installation',
    flip: true,
  },
  {
    number: '03',
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 28 }} />,
    title: 'Seamless Living',
    subtitle: 'Total Freedom',
    body: 'Once installed, we walk you through the new setup, answer any questions, and make sure your pet is comfortable using their new access. We don\'t leave until you\'re satisfied. And if anything isn\'t right after we\'re gone, we come back and fix it — no questions asked.',
    details: [
      'On-site walkthrough and pet introduction session',
      'Smart door pairing and app setup if applicable',
      'Care and maintenance guide for your installation',
      '30-day satisfaction guarantee on all installs',
      'Ongoing support for adjustments or upgrades',
    ],
    image: verticalHabitatSrc,
    imageAlt: 'Happy pet using a newly installed Digsy pet door',
  },
];

const WHAT_TO_EXPECT = [
  {
    icon: <AccessTimeIcon />,
    title: 'How long does an install take?',
    body: 'Most pet door installations take 1–3 hours. Vertical habitat systems or complex in-wall cuts can take 3–5 hours. We\'ll give you a time estimate at consultation.',
  },
  {
    icon: <HomeRepairServiceIcon />,
    title: 'Will it damage my walls or doors?',
    body: 'All cuts are made with precision tools after a full structural check. Finishes are paint-ready and weatherproofed. Renters can opt for non-permanent sliding panel inserts.',
  },
  {
    icon: <PetsIcon />,
    title: 'What if my pet won\'t use the door?',
    body: 'We include a pet introduction session at the end of every install. Most pets adapt within a few days. We\'re also available by phone if you need guidance after we leave.',
  },
  {
    icon: <BuildIcon />,
    title: 'Do you handle all wall types?',
    body: 'Yes — drywall, brick, stucco, siding, and glass. Each material requires different tools and techniques; our technicians are trained for all of them.',
  },
];

const ProcessPage: React.FC = () => {
  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(13,148,136,0.10) 0%, transparent 70%), linear-gradient(180deg, #F8FAFC 0%, #F8FAFC 100%)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Chip
            label="No surprise charges · Single-day installs · Satisfaction guaranteed"
            size="small"
            sx={{
              mb: 2,
              backgroundColor: 'rgba(13,148,136,0.10)',
              color: 'primary.dark',
              fontWeight: 600,
              border: '1px solid rgba(13,148,136,0.25)',
            }}
          />
          <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
            From First Call to First Use in Three Steps
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={400}
            sx={{ mb: 5, maxWidth: 600, mx: 'auto' }}
          >
            We handle every detail — structural assessment, precision installation, and a
            thorough walkthrough — so you never have to wonder what comes next.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/#contact"
              endIcon={<ArrowForwardIcon />}
            >
              Book Your Consultation
            </Button>
            <Button variant="outlined" color="secondary" size="large" href="#phases">
              See the Phases
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* ── Phase panels ── */}
      <Box id="phases">
        {PHASES.map(({ number, icon, title, subtitle, body, details, image, imageAlt, flip }, i) => (
          <Box
            key={number}
            sx={{ backgroundColor: i % 2 === 0 ? 'background.default' : 'background.paper' }}
          >
            <Grid
              container
              sx={{ minHeight: { md: 520 } }}
              direction={{ xs: 'column', md: flip ? 'row-reverse' : 'row' }}
            >
              {/* Image */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    height: { xs: 260, md: '100%' },
                    minHeight: { md: 520 },
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                  }}
                  role="img"
                  aria-label={imageAlt}
                >
                  {/* Step number watermark */}
                  <Typography
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      right: 24,
                      fontSize: '6rem',
                      fontWeight: 900,
                      lineHeight: 1,
                      color: 'rgba(255,255,255,0.25)',
                      userSelect: 'none',
                    }}
                  >
                    {number}
                  </Typography>
                </Box>
              </Grid>

              {/* Content */}
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ display: 'flex', alignItems: 'center', p: { xs: 4, sm: 6, md: 8 } }}
              >
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        backgroundColor: 'rgba(13,148,136,0.12)',
                        border: '1px solid rgba(13,148,136,0.25)',
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="overline"
                        color="primary"
                        sx={{ letterSpacing: '0.15em', fontWeight: 600, display: 'block' }}
                      >
                        Phase {number} — {subtitle}
                      </Typography>
                      <Typography variant="h2">{title}</Typography>
                    </Box>
                  </Box>

                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                    {body}
                  </Typography>

                  <Stack spacing={1.25} sx={{ mb: 4 }}>
                    {details.map((d) => (
                      <Box key={d} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            mt: 0.3,
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(13,148,136,0.12)',
                            color: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <CheckCircleOutlineIcon sx={{ fontSize: 13 }} />
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          {d}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  {i === PHASES.length - 1 && (
                    <Button
                      variant="contained"
                      color="primary"
                      href="/#contact"
                      endIcon={<ArrowForwardIcon />}
                    >
                      Book Your Consultation
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>

      {/* ── What to expect ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="overline"
              color="primary"
              sx={{ letterSpacing: '0.15em', fontWeight: 600 }}
            >
              Common Questions
            </Typography>
            <Typography variant="h2" sx={{ mt: 1 }}>
              What to Expect on Install Day
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {WHAT_TO_EXPECT.map(({ icon, title, body }) => (
              <Grid size={{ xs: 12, sm: 6 }} key={title}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(13,148,136,0.10)',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                      {body}
                    </Typography>
                  </Box>
                </Box>
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
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 4 }}>
            Book your free in-home consultation. We'll assess your home, answer every question,
            and give you a fixed quote — no obligation.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/#contact"
            sx={{
              backgroundColor: 'white',
              color: 'primary.dark',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.90)' },
            }}
          >
            Book My Free Consultation
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default ProcessPage;
