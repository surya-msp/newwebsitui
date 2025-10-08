import { Box, Container, Typography, Card, CardContent, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { AccessTime } from '@mui/icons-material';
import scheduleData from '../mock/schedule.json';

export default function Schedule() {
  const schedule = scheduleData;

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
              நிகழ்ச்சி அட்டவணை
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#FFF',
                textAlign: 'center',
                opacity: 0.9,
              }}
            >
              மூன்று நாட்கள் வணிக மற்றும் நெட்வொர்க்கிங்
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {schedule?.map((day: any, dayIndex: number) => (
          <motion.div
            key={dayIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
          >
            <Box sx={{ mb: 6 }}>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                  p: 3,
                  borderRadius: 2,
                  mb: 3,
                }}
              >
                <Chip
                  label={`நாள் ${day.day}`}
                  sx={{
                    bgcolor: '#ff6f00',
                    color: '#fff',
                    fontWeight: 700,
                    mb: 1,
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: '#ff6f00',
                    mb: 1,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  {day.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#FFF',
                    opacity: 0.9,
                  }}
                >
                  {day.date}
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {day.sessions?.map((session: any, sessionIndex: number) => (
                  <Grid item xs={12} key={sessionIndex}>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: sessionIndex * 0.05 }}
                    >
                      <Card
                        sx={{
                          borderRadius: 2,
                          boxShadow: '0 4px 20px rgba(139, 0, 0, 0.1)',
                          transition: 'all 0.3s ease',
                          borderLeft: '4px solid #ff6f00',
                          '&:hover': {
                            transform: 'translateX(10px)',
                            boxShadow: '0 6px 25px rgba(139, 0, 0, 0.15)',
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: '#FFF9E6',
                                px: 2,
                                py: 1,
                                borderRadius: 1,
                                minWidth: 150,
                              }}
                            >
                              <AccessTime sx={{ color: '#1a237e', mr: 1, fontSize: '1.2rem' }} />
                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 600,
                                  color: '#1a237e',
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
                                  color: '#1a237e',
                                  mb: 1,
                                  fontSize: { xs: '1rem', md: '1.25rem' },
                                }}
                              >
                                {session.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: '#555',
                                  lineHeight: 1.6,
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
