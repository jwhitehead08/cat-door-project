'use client';

import React from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckIcon from '@mui/icons-material/Check';
import NextLink from 'next/link';
import type { Article } from '../data/articles';

interface ArticlePageProps {
  article: Article;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  return (
    <Box>
      {/* ── Header ── */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(13,148,136,0.08) 0%, transparent 70%), #F8FAFC',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="md">
          <Button
            component={NextLink}
            href="/resources"
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 4, color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
          >
            All Resources
          </Button>
          <Chip
            label={article.category}
            size="small"
            sx={{
              mb: 2,
              backgroundColor: 'rgba(13,148,136,0.10)',
              color: 'primary.dark',
              fontWeight: 600,
              border: '1px solid rgba(13,148,136,0.25)',
              display: 'block',
              width: 'fit-content',
            }}
          />
          <Typography variant="h1" component="h1" sx={{ mb: 3, lineHeight: 1.2 }}>
            {article.title}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={400}
            sx={{ mb: 4, lineHeight: 1.6 }}
          >
            {article.description}
          </Typography>
          <Stack direction="row" spacing={3} sx={{ color: 'text.disabled' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <CalendarTodayIcon sx={{ fontSize: 14 }} />
              <Typography variant="caption">{article.publishDate}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <AccessTimeIcon sx={{ fontSize: 14 }} />
              <Typography variant="caption">{article.readTime}</Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* ── Article body ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="md">
          {article.sections.map((section, i) => (
            <Box key={i} sx={{ mb: 5 }}>
              {section.heading && (
                <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                  {section.heading}
                </Typography>
              )}
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
                {section.body}
              </Typography>
              {section.bullets && section.bullets.length > 0 && (
                <Stack spacing={1.25} sx={{ mt: 2.5 }}>
                  {section.bullets.map((bullet) => (
                    <Box key={bullet} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          mt: 0.35,
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
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        {bullet}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>
          ))}

          <Divider sx={{ my: 6 }} />

          {/* ── Article footer CTA ── */}
          <Box
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              backgroundColor: 'background.default',
              border: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { sm: 'center' },
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="h6" gutterBottom>
                Ready to book your installation?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get a free, no-obligation estimate from a Digsy specialist.
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/#contact"
              endIcon={<ArrowForwardIcon />}
              sx={{ flexShrink: 0 }}
            >
              Get a Free Estimate
            </Button>
          </Box>

          <Box sx={{ mt: 5 }}>
            <Button
              component={NextLink}
              href="/resources"
              startIcon={<ArrowBackIcon />}
              sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
            >
              Back to All Resources
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ArticlePage;
