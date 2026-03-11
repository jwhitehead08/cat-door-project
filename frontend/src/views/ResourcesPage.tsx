'use client';

import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NextLink from 'next/link';
import { ARTICLES } from '../data/articles';

const CATEGORY_COLORS: Record<string, string> = {
  'Buying Guide': 'rgba(13,148,136,0.10)',
  'Pet Owners': 'rgba(13,148,136,0.10)',
  'Texas Homeowners': 'rgba(80,0,0,0.08)',
  'Installation Guide': 'rgba(13,148,136,0.10)',
};

const ResourcesPage: React.FC = () => {
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
            label="Pet Door Guides · Installation Tips · Homeowner Resources"
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
            The Pet Home Resource Center
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={400}
            sx={{ maxWidth: 580, mx: 'auto' }}
          >
            Practical guides for pet owners making decisions about doors, installation, and smart
            home access — written by the people who do this every day.
          </Typography>
        </Container>
      </Box>

      {/* ── Article grid ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {ARTICLES.map((article) => (
              <Grid size={{ xs: 12, sm: 6, md: 6 }} key={article.slug}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    transition: 'box-shadow 0.2s',
                    '&:hover': { boxShadow: 4 },
                  }}
                >
                  <CardActionArea
                    component={NextLink}
                    href={`/resources/${article.slug}`}
                    sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                  >
                    <CardContent sx={{ p: 4, flexGrow: 1, width: '100%' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                        <Chip
                          label={article.category}
                          size="small"
                          sx={{
                            backgroundColor: CATEGORY_COLORS[article.category] ?? 'rgba(13,148,136,0.10)',
                            color: article.category === 'Texas Homeowners' ? '#500000' : 'primary.dark',
                            fontWeight: 600,
                            border: `1px solid ${article.category === 'Texas Homeowners' ? 'rgba(80,0,0,0.20)' : 'rgba(13,148,136,0.25)'}`,
                            fontSize: '0.72rem',
                          }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <AccessTimeIcon sx={{ fontSize: 13, color: 'text.disabled' }} />
                          <Typography variant="caption" color="text.disabled">
                            {article.readTime}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="h5" component="h2" sx={{ mb: 1.5, lineHeight: 1.35 }}>
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        {article.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ px: 4, pb: 3 }}>
                      <Typography
                        variant="body2"
                        color="primary"
                        sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.5 }}
                      >
                        Read article <ArrowForwardIcon sx={{ fontSize: 15 }} />
                      </Typography>
                    </Box>
                  </CardActionArea>
                </Card>
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
            Book a free in-home estimate. A Digsy specialist will assess your home and recommend
            the right installation for your pet — no obligation.
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

export default ResourcesPage;
