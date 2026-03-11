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
import CheckIcon from '@mui/icons-material/Check';
import catDoorImageSrc from '../assets/cat_door_image.jpeg';
import verticalHabitatSrc from '../assets/vertical_habitat.webp';
import smartDoorSrc from '../assets/smart_door_dog.webp';
import catEnteringSrc from '../assets/cat_entering.webp';

interface ServicePanel {
  overline: string;
  title: string;
  body: string;
  bullets: string[];
  image: { src: string };
  imageAlt: string;
  flip?: boolean;
  startingPrice?: string;
}

const PANELS: ServicePanel[] = [
  {
    overline: 'Most Popular',
    title: 'Pet Door Installation',
    body: 'Our most-requested service. We handle every door type — in-wall cuts, sliding glass panel inserts, French door glass cuts, and more — with clean, finished edges and a weatherproof seal.',
    bullets: [
      'All wall types: drywall, brick, stucco, siding',
      'Single, double, and sliding glass door options',
      'Insulated flaps rated for Texas heat and cold snaps',
      'Paint-matched trim finish on every install',
    ],
    startingPrice: '$299*',
    image: catDoorImageSrc,
    imageAlt: 'Professional cat door installation in a home wall',
  },
  {
    overline: 'Dog Owners',
    title: 'Dog Door Installation',
    body: 'From a Chihuahua to a Great Dane, we size and install dog doors that fit your breed and your home. Panel inserts for renters, in-wall cuts for permanent installs — we handle the whole job.',
    startingPrice: '$299*',
    bullets: [
      'Breed-specific sizing consultation included',
      'Heavy-duty flaps for large and extra-large breeds',
      'Sliding glass panel inserts — no permanent modification',
      'Lockable panels for when you need full control',
    ],
    image: smartDoorSrc,
    imageAlt: 'Large dog door installation for a family home',
    flip: true,
  },
  {
    overline: 'Cat Owners',
    title: 'Cat Door Installation',
    body: 'Give your indoor-outdoor cat the freedom they want without a permanently open gap. We install discreet cat flaps and microchip-controlled doors that only open for your pet.',
    bullets: [
      'Microchip-activated: reads your cat\'s existing chip',
      'Keeps strays, raccoons, and other animals out',
      'Interior door options to control room access',
      'Discreet, low-profile designs that blend with trim',
    ],
    image: catEnteringSrc,
    imageAlt: 'Cat entering through a microchip-controlled pet door',
  },
  {
    overline: 'Smart Home',
    title: 'Smart Access Systems',
    body: 'Upgrade to app-controlled pet access. Get notifications when your pet comes and goes, set curfew schedules, and lock the door remotely — all from your phone.',
    bullets: [
      'Mobile app with open/close history and alerts',
      'Curfew mode: auto-lock at a set time each night',
      'Remote lock/unlock from anywhere',
      'Compatible with most leading smart door brands',
    ],
    image: smartDoorSrc,
    imageAlt: 'Smart pet door with app control and microchip scanning',
    flip: true,
  },
  {
    overline: 'Cats & Small Dogs',
    title: 'Vertical Habitats',
    body: 'Custom-engineered wall-mounted shelving, catwalks, and climbing systems designed to maximize your pet\'s vertical territory — without looking like an eyesore.',
    bullets: [
      'Architect-designed for modern interiors',
      'Load-rated hardware anchored to studs',
      'Custom stain and finish options',
      'Can include integrated pet door connections',
    ],
    image: verticalHabitatSrc,
    imageAlt: 'Custom vertical cat habitat with wall-mounted shelving',
  },
];

const WHY_ITEMS = [
  { stat: '500+', label: 'Installs Completed' },
  { stat: '4.9★', label: 'Average Rating' },
  { stat: '1-Day', label: 'Typical Install Time' },
  { stat: '100%', label: 'Satisfaction Guarantee' },
];

const ServicesPage: React.FC = () => {
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
            label="Professional Installation · Satisfaction Guaranteed"
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
            Modern Home Modifications for Modern Pets
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={400}
            sx={{ mb: 5, maxWidth: 600, mx: 'auto' }}
          >
            From a single cat flap to a full smart-access system, Digsy handles every detail —
            measurement, installation, finishing, and cleanup.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/#contact"
              endIcon={<ArrowForwardIcon />}
            >
              Get a Free Estimate
            </Button>
            <Button variant="outlined" color="secondary" size="large" href="#service-list">
              Browse Services
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* ── Stats bar ── */}
      <Box sx={{ backgroundColor: 'secondary.main', py: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            {WHY_ITEMS.map(({ stat, label }) => (
              <Grid size={{ xs: 6, md: 3 }} key={label} sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary.light" fontWeight={800}>
                  {stat}
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.70)' }}>
                  {label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Service panels ── */}
      <Box id="service-list">
        {PANELS.map(({ overline, title, body, bullets, image, imageAlt, flip, startingPrice }, i) => (
          <Box
            key={title}
            sx={{
              py: { xs: 8, md: 0 },
              backgroundColor: i % 2 === 0 ? 'background.default' : 'background.paper',
            }}
          >
            <Grid
              container
              sx={{ minHeight: { md: 480 } }}
              direction={{ xs: 'column', md: flip ? 'row-reverse' : 'row' }}
            >
              {/* Image */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    height: { xs: 260, md: '100%' },
                    minHeight: { md: 480 },
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  role="img"
                  aria-label={imageAlt}
                />
              </Grid>

              {/* Content */}
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: { xs: 4, sm: 6, md: 8 },
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                    <Typography
                      variant="overline"
                      color="primary"
                      sx={{ letterSpacing: '0.15em', fontWeight: 600 }}
                    >
                      {overline}
                    </Typography>
                    {startingPrice && (
                      <Chip
                        label={`Starting from ${startingPrice}`}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(13,148,136,0.10)',
                          color: 'primary.dark',
                          fontWeight: 700,
                          border: '1px solid rgba(13,148,136,0.25)',
                          fontSize: '0.75rem',
                        }}
                      />
                    )}
                  </Box>
                  <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                    {title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                    {body}
                  </Typography>
                  <Stack spacing={1.25} sx={{ mb: 4 }}>
                    {bullets.map((b) => (
                      <Box key={b} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            mt: 0.25,
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
                          <CheckIcon sx={{ fontSize: 13 }} />
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          {b}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                  <Button
                    variant="contained"
                    color="primary"
                    href="/#contact"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Get a Free Estimate
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>

      {/* ── Pricing footnote ── */}
      <Box sx={{ backgroundColor: 'background.default', pb: 3, pt: 0 }}>
        <Container maxWidth="lg">
          <Typography variant="caption" color="text.disabled">
            * Starting from $299 applies to standard pet and dog door installation in most homes. Final price varies based on wall or door material, door size, and installation complexity. A free in-home estimate is provided before any work begins.
          </Typography>
        </Container>
      </Box>

      {/* ── Why Digsy ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'secondary.main' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="overline"
                sx={{ color: 'rgba(255,255,255,0.60)', letterSpacing: '0.15em', fontWeight: 600 }}
              >
                Why Digsy
              </Typography>
              <Typography variant="h2" color="white" sx={{ mt: 1, mb: 2 }}>
                We Do One Thing. We Do It Right.
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, mb: 4 }}>
                Digsy technicians are trained exclusively in pet home modifications. Not general
                handymen, not big-box contractors — specialists who know the difference between a
                Maine Coon flap and a Labrador panel.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/#contact"
                endIcon={<ArrowForwardIcon />}
              >
                Book Your Install
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={3}>
                {[
                  { title: 'Clean Finish Every Time', body: 'We cut once. Trim, caulk, and paint-ready edges on every install — no jagged cutouts, no gaps.' },
                  { title: 'Breed & Species Specific', body: 'Right door for your exact pet. We account for size, activity level, and coat type.' },
                  { title: 'Same-Day Availability', body: 'Most installations are completed in a single visit. We leave your home cleaner than we found it.' },
                  { title: 'Satisfaction Guarantee', body: 'If anything isn\'t right after your install, we come back and fix it. No questions asked.' },
                ].map(({ title, body }) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={title}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.10)',
                        height: '100%',
                      }}
                    >
                      <Typography variant="subtitle1" color="white" fontWeight={700} gutterBottom>
                        {title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
                        {body}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
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
            Ready to Upgrade Your Home?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 4 }}>
            Book a free, no-obligation estimate. One of our specialists will assess your home and
            recommend the right installation for your pet.
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
            Get My Free Estimate
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;
