import { Box, Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Business, Public } from '@mui/icons-material';
import speakersData from '../mock/speakers.json';

export default function Speakers() {
  const speakers = speakersData;

  return (
    <Box sx={{ bgcolor: '#f8f9fa' }}>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
          py: 10,
        }}
      >
        <Container maxWidth="lg">
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
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2,
              }}
            >
              பிரதிநிதிகள் மற்றும் பேச்சாளர்கள்
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#FFF',
                textAlign: 'center',
                opacity: 0.9,
              }}
            >
              உலகளாவிய தமிழர் வணிக தலைவர்கள்
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
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
                    height: '100%',
                    minHeight: 380,
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(139, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-15px) scale(1.02)',
                      boxShadow: '0 12px 40px rgba(139, 0, 0, 0.25)',
                      '& .speaker-image': {
                        transform: 'scale(1.1)',
                      },
                      '& .speaker-overlay': {
                        opacity: 0.9,
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={speaker.image}
                      alt={speaker.name}
                      className="speaker-image"
                      sx={{
                        transition: 'transform 0.5s ease',
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
                        background: 'linear-gradient(180deg, transparent 0%, rgba(139, 0, 0, 0.8) 100%)',
                        opacity: 0.7,
                        transition: 'opacity 0.3s ease',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        right: 10,
                        zIndex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          mb: 0.5,
                        }}
                      >
                        <Public sx={{ fontSize: '0.9rem', color: '#ff6f00' }} />
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#ff6f00',
                            fontWeight: 600,
                          }}
                        >
                          {speaker.country}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 2.5 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1a237e',
                        mb: 1,
                        fontSize: '1.1rem',
                      }}
                    >
                      {speaker.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#555',
                        fontWeight: 600,
                        mb: 1,
                        fontSize: '0.9rem',
                      }}
                    >
                      {speaker.role}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        mt: 1.5,
                      }}
                    >
                      <Business sx={{ fontSize: '1rem', color: '#1a237e' }} />
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#666',
                          fontSize: '0.85rem',
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
