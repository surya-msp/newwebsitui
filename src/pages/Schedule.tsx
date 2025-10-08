import { Box, Container, Typography, Card, CardContent, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { AccessTime } from '@mui/icons-material';
import scheduleData from '../mock/schedule.json';

export default function Schedule() {
  const schedule = scheduleData;

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
              நிகழ்ச்சி அட்டவணை
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
              மூன்று நாட்கள் வணிக மற்றும் நெட்வொர்க்கிங்
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {schedule?.map((day: any, dayIndex: number) => (
          <motion.div
            key={dayIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
          >
            <Box sx={{ mb: 8 }}>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  p: 4,
                  borderRadius: 3,
                  mb: 4,
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
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Chip
                    label={`நாள் ${day.day}`}
                    sx={{
                      bgcolor: '#f97316',
                      color: '#fff',
                      fontWeight: 700,
                      mb: 2,
                      fontSize: '0.875rem',
                      height: 32,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: '#fff',
                      mb: 1,
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                    }}
                  >
                    {day.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '1.125rem',
                      fontWeight: 400,
                    }}
                  >
                    {day.date}
                  </Typography>
                </Box>
              </Box>

              <Grid container spacing={3}>
                {day.sessions?.map((session: any, sessionIndex: number) => (
                  <Grid item xs={12} key={sessionIndex}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: sessionIndex * 0.05 }}
                    >
                      <Card
                        sx={{
                          borderRadius: 3,
                          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                          border: '1px solid #f1f5f9',
                          transition: 'all 0.3s ease',
                          borderLeft: '4px solid #f97316',
                          '&:hover': {
                            transform: 'translateX(8px)',
                            boxShadow: '0 8px 28px rgba(0,0,0,0.12)',
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 3,
                              flexWrap: { xs: 'wrap', md: 'nowrap' },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: '#fff7ed',
                                px: 2.5,
                                py: 1.5,
                                borderRadius: 2,
                                minWidth: 160,
                                border: '1px solid #fed7aa',
                              }}
                            >
                              <AccessTime sx={{ color: '#f97316', mr: 1.5, fontSize: '1.25rem' }} />
                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 700,
                                  color: '#0f172a',
                                  fontSize: '1rem',
                                }}
                              >
                                {session.time}
                              </Typography>
                            </Box>

                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 700,
                                  color: '#0f172a',
                                  mb: 1,
                                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                                }}
                              >
                                {session.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: '#64748b',
                                  fontSize: '0.9375rem',
                                }}
                              >
                                {session.description}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
}
