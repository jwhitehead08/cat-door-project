'use client';

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import type { SvgIconProps } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import catDoorImageSrc from '../assets/cat_door_image.jpeg';
import verticalHabitatImageSrc from '../assets/vertical_habitat.webp';
import smartDoorImageSrc from '../assets/smart_door_dog.webp';

const catDoorImage: string = catDoorImageSrc.src;
const verticalHabitatImage: string = verticalHabitatImageSrc.src;
const smartDoorImage: string = smartDoorImageSrc.src;

interface Service {
  icon: React.ComponentType<SvgIconProps>;
  title: string;
  description: string;
  image?: string;
}

const SERVICES: Service[] = [
  {
    icon: AutoFixHighIcon,
    title: 'Pet Door Installation',
    description:
      "Professional architectural integration for all door types. We specialize in complex through-wall and in-glass installs that maintain your home's structural and thermal integrity.",
  },
  {
    icon: SecurityIcon,
    title: 'Smart Technology',
    description:
      'Turnkey setup of AI-powered access systems. We configure microchip scanning and mobile app synchronization to ensure seamless, secure entry for your cat.',
    image: smartDoorImage,
  },
  {
    icon: AccessTimeIcon,
    title: 'Vertical Habitats',
    description: "Custom-engineered shelving and tower systems designed to maximize your cat's vertical territory while complementing your home's modern aesthetic.",
    image: verticalHabitatImage,
  },
];

const Services: React.FC = () => {
  return (
    <Box
      id="services"
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
            What We Offer
          </Typography>
          <Typography variant="h2" sx={{ mt: 1 }}>
            Integrated Solutions for the Modern Pet
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 520, mx: 'auto' }}
          >
            A complete suite of smart features designed for modern pet owners
            who want peace of mind without compromising on style.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {SERVICES.map(({ icon: Icon, title, description, image }) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={title}>
              <Card
                sx={{
                  height: '100%',
                  p: 1,
                  backgroundColor: 'background.default',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(13,148,136,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <Icon color="primary" />
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {description}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  image={image ?? catDoorImage}
                  alt={title}
                  sx={{ height: 160, objectFit: 'cover' }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
