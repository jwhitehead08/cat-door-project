'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NextLink from 'next/link';

const TopBar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Box
      sx={{
        backgroundColor: '#1E293B',
        color: '#FFFFFF',
        py: 0.75,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Typography variant="caption" sx={{ fontWeight: 500, letterSpacing: '0.02em' }}>
            Digsy is expanding!
          </Typography>
          <Link
            component={NextLink}
            href="/franchise"
            sx={{
              color: '#0D9488',
              fontWeight: 700,
              fontSize: '0.75rem',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(13,148,136,0.5)',
              '&:hover': { borderBottomColor: '#0D9488' },
            }}
          >
            View Franchise Opportunities →
          </Link>
        </Box>
      </Container>
      <IconButton
        size="small"
        aria-label="dismiss announcement"
        onClick={() => setVisible(false)}
        sx={{
          position: 'absolute',
          right: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'rgba(255,255,255,0.6)',
          p: 0.5,
          '&:hover': { color: '#FFFFFF' },
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default TopBar;
