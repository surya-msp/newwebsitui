import { Box, Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Business, Public } from '@mui/icons-material';
import speakersData from '../mock/speakers.json';

export default function Speakers() {
  const speakers = speakersData;

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh' }}>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: '#fff',
                textAlign: 'center',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 2,
              }}
            >
              பிரதிநிதிகள் மற்றும் பேச்சாளர்கள்
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                textAlign: 'center',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 400,
              }}
            >
              உலகளாவிய தமிழர் வணிக தலைவர்கள்
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {speakers?.map((speaker: any, index: number) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={speaker.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card
                  sx={{
                    height: 420,
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid #f1f5f9',
                    transition: 'all 0.4s ease',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      '& .speaker-image': {
                        transform: 'scale(1.08)',
                      },
                      '& .speaker-overlay': {
                        opacity: 0.85,
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden', height: 280 }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={speaker.image}
                      alt={speaker.name}
                      className="speaker-image"
                      sx={{
                        transition: 'transform 0.5s ease',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      className="speaker-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.9) 100%)',
                        opacity: 0.75,
                        transition: 'opacity 0.3s ease',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: 16,
                        right: 16,
                        zIndex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          bgcolor: 'rgba(249, 115, 22, 0.9)',
                          backdropFilter: 'blur(8px)',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                        }}
                      >
                        <Public sx={{ fontSize: '0.875rem', color: '#fff' }} />
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '0.8125rem',
                          }}
                        >
                          {speaker.country}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#0f172a',
                        mb: 1,
                        fontSize: '1.125rem',
                      }}
                    >
                      {speaker.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748b',
                        fontWeight: 600,
                        mb: 1.5,
                        fontSize: '0.875rem',
                      }}
                    >
                      {speaker.role}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.75,
                        mt: 'auto',
                      }}
                    >
                      <Business sx={{ fontSize: '1rem', color: '#f97316' }} />
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#64748b',
                          fontSize: '0.8125rem',
                          lineHeight: 1.5,
                        }}
                      >
                        {speaker.company}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
