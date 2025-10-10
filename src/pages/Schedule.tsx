import { Box, Container, Typography, Card, CardContent, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { AccessTime } from '@mui/icons-material';
import scheduleData from '../mock/schedule.json';

export default function Schedule() {
  const schedule = scheduleData;

  const gradients = [
    { gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#667eea' },
    { gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: '#f093fb' },
    { gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: '#4facfe' },
  ];

  return (
    <Box sx={{ bgcolor: '#fafbfc', minHeight: '100vh' }}>
      <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, color: '#fff', textAlign: 'center', fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2, textShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>மாநாட்டு அட்டவணை</Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.95)', textAlign: 'center', fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 400, maxWidth: 700, mx: 'auto', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>3 நாள் நிகழ்ச்சித் திட்டம்</Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        {schedule.map((day, dayIndex) => {
          const dayStyle = gradients[dayIndex % gradients.length];
          return (
            <Box key={dayIndex} sx={{ mb: 8 }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Box sx={{ display: 'inline-block', mb: 5, px: 5, py: 2.5, borderRadius: 4, background: dayStyle.gradient, boxShadow: `0 12px 32px ${dayStyle.color}40` }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#fff', fontSize: { xs: '1.5rem', md: '2rem' }, textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                    {day.date} - {day.title}
                  </Typography>
                </Box>
              </motion.div>

              <Grid container spacing={4}>
                {day.sessions.map((session, sessionIndex) => (
                  <Grid size={{ xs: 12 }} key={sessionIndex}>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: sessionIndex * 0.1 }}>
                      <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: 'none', transition: 'all 0.4s ease', position: 'relative', '&::before': { content: '""', position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: dayStyle.gradient }, '&:hover': { transform: 'translateX(12px)', boxShadow: `0 12px 48px ${dayStyle.color}30` } }}>
                        <CardContent sx={{ p: 5, pl: 6 }}>
                          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 3, md: 4 }, alignItems: { md: 'flex-start' } }}>
                            <Box sx={{ minWidth: { md: 140 } }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.5, borderRadius: 3, background: `${dayStyle.color}15` }}>
                                <AccessTime sx={{ color: dayStyle.color, fontSize: '1.25rem' }} />
                                <Typography variant="h6" sx={{ fontWeight: 800, color: dayStyle.color, fontSize: '1.125rem' }}>{session.time}</Typography>
                              </Box>
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                                <Chip label={session.type} sx={{ bgcolor: `${dayStyle.color}20`, color: dayStyle.color, fontWeight: 700, fontSize: '0.875rem', height: 32, borderRadius: 2 }} />
                                {session.track && <Chip label={session.track} sx={{ bgcolor: '#f1f5f9', color: '#64748b', fontWeight: 600, fontSize: '0.875rem', height: 32, borderRadius: 2 }} />}
                              </Box>
                              <Typography variant="h5" sx={{ fontWeight: 800, color: '#1e293b', mb: 2, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>{session.title}</Typography>
                              {session.speaker && <Typography variant="body1" sx={{ color: '#64748b', mb: 2, fontSize: '1rem', fontWeight: 600 }}>பேச்சாளர்: {session.speaker}</Typography>}
                              {session.description && <Typography variant="body2" sx={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.8 }}>{session.description}</Typography>}
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}
