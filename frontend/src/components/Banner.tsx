import React from 'react';
import { Box, Chip, Container, Typography } from '@mui/material';
import Image from 'next/image';
import catEntering from '../assets/cat_entering.webp';

const Banner: React.FC = () => {
  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        height: { xs: 280, sm: 380, md: 500 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Image */}
      <Image
        src={catEntering}
        alt="Cat entering through a pet door"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
      />

      {/* Dark gradient — fades in over the bottom third */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,15,0.80) 0%, rgba(10,10,15,0.40) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Text overlay — anchored to bottom third */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          pb: { xs: 3, md: 5 },
        }}
      >
        <Container maxWidth="lg">
          <Chip
            label="Home Mods for the Modern Pet"
            size="small"
            sx={{
              mb: 1.5,
              backgroundColor: 'rgba(13,148,136,0.20)',
              color: '#F59E0B',
              border: '1px solid rgba(245,158,11,0.40)',
              fontWeight: 600,
              backdropFilter: 'blur(4px)',
            }}
          />
          <Typography
            variant="h1"
            sx={{
              color: '#FFFFFF',
              textShadow: '0 2px 16px rgba(0,0,0,0.5)',
              fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
            }}
          >
            Built For Their Nature.
            {/* Happy Pets, */}
            {/* <br />
            By Design. */}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
