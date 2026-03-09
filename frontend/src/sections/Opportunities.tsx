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
import StoreIcon from '@mui/icons-material/Store';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface OpportunityItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FRANCHISE_HIGHLIGHTS: OpportunityItem[] = [
  {
    icon: <TrendingUpIcon />,
    title: 'Proven Model',
    description: 'Launch with a fully documented playbook — from lead generation to post-install care.',
  },
  {
    icon: <HandshakeIcon />,
    title: 'Dedicated Support',
    description: 'Ongoing training, marketing assets, and a dedicated franchise success manager from day one.',
  },
  {
    icon: <StoreIcon />,
    title: 'Exclusive Territory',
    description: 'Operate in a protected geographic area with no internal competition from other franchisees.',
  },
];

const CAREER_ROLES: OpportunityItem[] = [
  {
    icon: <EngineeringIcon />,
    title: 'Installation Specialist',
    description: 'Join our field team delivering precision pet-door and habitat installations across the city.',
  },
  {
    icon: <SupportAgentIcon />,
    title: 'Customer Success',
    description: 'Be the first point of contact for our clients — guiding them from booking to long-term satisfaction.',
  },
  {
    icon: <WorkOutlineIcon />,
    title: 'See All Openings',
    description: 'We are always looking for driven people. Browse current openings and find your fit.',
  },
];

const Opportunities: React.FC = () => {
  return (
    <Box id="opportunities" component="section" sx={{ py: { xs: 8, md: 14 } }}>
      <Container maxWidth="lg">

        {/* Franchise */}
        <Grid container spacing={6} alignItems="flex-start" sx={{ mb: { xs: 10, md: 14 } }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="overline"
              color="primary"
              sx={{ letterSpacing: '0.15em', fontWeight: 600 }}
            >
              Franchise Opportunities
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              Own Your Market
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              The pet-home integration industry is growing fast. Become a Digsy
              franchisee and bring precision installation and architectural habitat
              systems to your city — backed by our brand, training, and supply chain.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<StoreIcon />}
              href="mailto:franchise@Digsy.com"
            >
              Enquire About a Franchise
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={3}>
              {FRANCHISE_HIGHLIGHTS.map(({ icon, title, description }) => (
                <Grid size={{ xs: 12, sm: 4 }} key={title}>
                  <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          backgroundColor: 'rgba(13,148,136,0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'primary.main',
                          mb: 2,
                        }}
                      >
                        {icon}
                      </Box>
                      <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem' }}>
                        {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ borderTop: '1px solid', borderColor: 'divider', mb: { xs: 10, md: 14 } }} />

        {/* Careers */}
        <Grid container spacing={6} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="overline"
              color="secondary"
              sx={{ letterSpacing: '0.15em', fontWeight: 600 }}
            >
              Careers
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              Build Something Real
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              We are a small, ambitious team solving a real problem for modern pet
              owners. If you care about quality craft, great customer experiences,
              and working somewhere that actually values your contribution — we want
              to hear from you.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                startIcon={<WorkOutlineIcon />}
                href="mailto:careers@Digsy.com"
              >
                View Open Roles
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="mailto:careers@Digsy.com"
              >
                Send a CV
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={3}>
              {CAREER_ROLES.map(({ icon, title, description }) => (
                <Grid size={{ xs: 12, sm: 4 }} key={title}>
                  <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          backgroundColor: 'rgba(30,41,59,0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'secondary.main',
                          mb: 2,
                        }}
                      >
                        {icon}
                      </Box>
                      <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem' }}>
                        {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default Opportunities;
