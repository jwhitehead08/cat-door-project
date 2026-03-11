'use client';

import React, { useState, useMemo } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  GALLERY_ITEMS,
  SERVICE_TYPE_LABELS,
  MATERIAL_LABELS,
  type ServiceType,
  type MaterialType,
  type PetType,
} from '../data/gallery';

const SERVICE_FILTERS: Array<{ value: ServiceType | 'all'; label: string }> = [
  { value: 'all', label: 'All Services' },
  { value: 'pet-door', label: 'Pet Door' },
  { value: 'dog-door', label: 'Dog Door' },
  { value: 'cat-door', label: 'Cat Door' },
  { value: 'smart-access', label: 'Smart Access' },
  { value: 'vertical-habitat', label: 'Vertical Habitat' },
];

const MATERIAL_FILTERS: Array<{ value: MaterialType | 'all'; label: string }> = [
  { value: 'all', label: 'All Materials' },
  { value: 'drywall', label: 'Drywall' },
  { value: 'brick', label: 'Brick' },
  { value: 'sliding-glass', label: 'Sliding Glass' },
  { value: 'wood-door', label: 'Wood Door' },
  { value: 'stucco', label: 'Stucco' },
];

const PET_FILTERS: Array<{ value: PetType | 'all'; label: string }> = [
  { value: 'all', label: 'All Pets' },
  { value: 'cat', label: 'Cats' },
  { value: 'dog', label: 'Dogs' },
  { value: 'both', label: 'Multi-Pet' },
];

const filterChipSx = (active: boolean) => ({
  cursor: 'pointer',
  fontWeight: active ? 700 : 500,
  backgroundColor: active ? 'primary.main' : 'background.paper',
  color: active ? 'white' : 'text.secondary',
  border: '1px solid',
  borderColor: active ? 'primary.main' : 'divider',
  '&:hover': {
    backgroundColor: active ? 'primary.dark' : 'action.hover',
  },
});

const GalleryPage: React.FC = () => {
  const [serviceFilter, setServiceFilter] = useState<ServiceType | 'all'>('all');
  const [materialFilter, setMaterialFilter] = useState<MaterialType | 'all'>('all');
  const [petFilter, setPetFilter] = useState<PetType | 'all'>('all');

  const filtered = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      if (serviceFilter !== 'all' && item.serviceType !== serviceFilter) return false;
      if (materialFilter !== 'all' && item.material !== materialFilter) return false;
      if (petFilter !== 'all' && item.petType !== petFilter) return false;
      return true;
    });
  }, [serviceFilter, materialFilter, petFilter]);

  const hasActiveFilter =
    serviceFilter !== 'all' || materialFilter !== 'all' || petFilter !== 'all';

  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(13,148,136,0.10) 0%, transparent 70%), #F8FAFC',
          borderBottom: '1px solid',
          borderColor: 'divider',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Chip
            label="Finished Installations · Real Homes"
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
            Our Work
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={400}
            sx={{ maxWidth: 560, mx: 'auto' }}
          >
            Browse finished installations across service types, wall materials, and pet types.
            Every project is completed in a single day and left cleaner than we found it.
          </Typography>
        </Container>
      </Box>

      {/* ── Filters ── */}
      <Box
        sx={{
          position: 'sticky',
          top: { xs: 56, md: 64 },
          zIndex: 10,
          backgroundColor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
          py: 2,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={1.5}>
            {/* Service filter */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography
                variant="caption"
                color="text.disabled"
                sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: 64 }}
              >
                Service
              </Typography>
              {SERVICE_FILTERS.map(({ value, label }) => (
                <Chip
                  key={value}
                  label={label}
                  size="small"
                  onClick={() => setServiceFilter(value as ServiceType | 'all')}
                  sx={filterChipSx(serviceFilter === value)}
                />
              ))}
            </Box>

            {/* Material filter */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography
                variant="caption"
                color="text.disabled"
                sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: 64 }}
              >
                Material
              </Typography>
              {MATERIAL_FILTERS.map(({ value, label }) => (
                <Chip
                  key={value}
                  label={label}
                  size="small"
                  onClick={() => setMaterialFilter(value as MaterialType | 'all')}
                  sx={filterChipSx(materialFilter === value)}
                />
              ))}
            </Box>

            {/* Pet filter */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography
                variant="caption"
                color="text.disabled"
                sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: 64 }}
              >
                Pet
              </Typography>
              {PET_FILTERS.map(({ value, label }) => (
                <Chip
                  key={value}
                  label={label}
                  size="small"
                  onClick={() => setPetFilter(value as PetType | 'all')}
                  sx={filterChipSx(petFilter === value)}
                />
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* ── Grid ── */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* Results count + clear */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="body2" color="text.secondary">
              {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
            </Typography>
            {hasActiveFilter && (
              <Button
                size="small"
                onClick={() => {
                  setServiceFilter('all');
                  setMaterialFilter('all');
                  setPetFilter('all');
                }}
                sx={{ color: 'text.secondary', textDecoration: 'underline', p: 0, minWidth: 0 }}
              >
                Clear filters
              </Button>
            )}
          </Box>

          {filtered.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 12 }}>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                No results match those filters.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => {
                  setServiceFilter('all');
                  setMaterialFilter('all');
                  setPetFilter('all');
                }}
              >
                Clear filters
              </Button>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {filtered.map((item) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'background.paper',
                      transition: 'box-shadow 0.2s, transform 0.2s',
                      '&:hover': {
                        boxShadow: 6,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{ height: 220, objectFit: 'cover' }}
                    />
                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1.5 }}>
                        <Chip
                          label={SERVICE_TYPE_LABELS[item.serviceType]}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(13,148,136,0.10)',
                            color: 'primary.dark',
                            fontWeight: 600,
                            border: '1px solid rgba(13,148,136,0.20)',
                            fontSize: '0.7rem',
                          }}
                        />
                        <Chip
                          label={MATERIAL_LABELS[item.material]}
                          size="small"
                          sx={{
                            backgroundColor: 'background.default',
                            color: 'text.secondary',
                            border: '1px solid',
                            borderColor: 'divider',
                            fontSize: '0.7rem',
                          }}
                        />
                      </Box>
                      <Typography variant="subtitle1" fontWeight={700} gutterBottom sx={{ lineHeight: 1.3 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, flexGrow: 1 }}>
                        {item.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 2 }}>
                        <LocationOnIcon sx={{ fontSize: 13, color: 'text.disabled' }} />
                        <Typography variant="caption" color="text.disabled">
                          {item.location}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
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
            Want Results Like These?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 4 }}>
            Book a free in-home estimate. A Digsy specialist will assess your home and give you a
            fixed quote — no surprises, completed in a single day.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/#contact"
            endIcon={<ArrowForwardIcon />}
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

export default GalleryPage;
