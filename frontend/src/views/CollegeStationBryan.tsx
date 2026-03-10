'use client';

import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsIcon from '@mui/icons-material/Sports';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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

const CollegeStationBryan: React.FC = () => {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 720 }}>
            <Typography
              variant="overline"
              color="primary"
              sx={{ letterSpacing: '0.15em', fontWeight: 600 }}
            >
              Digsy · College Station & Bryan, TX
            </Typography>
            <Typography variant="h1" component="h1" sx={{ mt: 1, mb: 3 }}>
              Elevate Your Aggieland Home for Your Modern Pet
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight={400}
              sx={{ mb: 4, maxWidth: 600 }}
            >
              Digsy brings precision pet door and home modification installation to the Brazos Valley.
              Give your dog or cat the freedom they deserve — without sacrificing the look of your home.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" color="primary" size="large" href="/#contact">
                Book a Free Estimate
              </Button>
              <Button variant="outlined" color="secondary" size="large" href="#services">
                See Our Services
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Professional Pet Door Installations */}
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
                    <Typography variant="h6" gutterBottom>
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

      {/* Local neighborhoods */}
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
                      <Typography variant="subtitle2" fontWeight={600}>
                        {name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {note}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              {/* Game day callout */}
              <Card
                sx={{
                  background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
                  color: 'white',
                  p: 1,
                }}
              >
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

      {/* Why Digsy */}
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
              {
                label: 'Clean, Precise Work',
                body: 'We cut once. Installations are finished with trim, caulk, and paint-ready edges — no jagged cutouts or gaps.',
              },
              {
                label: 'Pet-Specific Knowledge',
                body: 'We know the difference between a Maine Coon flap and a Labrador panel. Our recommendations are based on your specific pet.',
              },
              {
                label: 'Local & Reliable',
                body: 'Based in the Brazos Valley. We show up on time and stand behind our work with a satisfaction guarantee.',
              },
            ].map(({ label, body }) => (
              <Grid size={{ xs: 12, md: 4 }} key={label}>
                <Typography variant="h6" color="primary" gutterBottom>
                  {label}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {body}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
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

export default CollegeStationBryan;
