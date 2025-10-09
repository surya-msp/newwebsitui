import { Box, Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Business, Public } from '@mui/icons-material';
import speakersData from '../mock/speakers.json';

export default function Speakers() {
  const speakers = speakersData.speakers;

  const gradients = [
    { gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#667eea' },
    { gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: '#f093fb' },
    { gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: '#4facfe' },
    { gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', color: '#43e97b' },
  ];

  return (
    <Box sx={{ bgcolor: '#fafbfc', minHeight: '100vh' }}>
      <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, color: '#fff', textAlign: 'center', fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2, textShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>முக்கிய பேச்சாளர்கள்</Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.95)', textAlign: 'center', fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 400, maxWidth: 700, mx: 'auto', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>தொழில் முனைவோர் மற்றும் தலைவர்களிடமிருந்து கற்றுக்கொள்ளுங்கள்</Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Grid container spacing={5}>
          {speakers.map((speaker, index) => {
            const style = gradients[index % gradients.length];
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <Card sx={{ height: 480, borderRadius: 5, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: 'none', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', display: 'flex', flexDirection: 'column', position: 'relative', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: style.gradient, zIndex: 2 }, '&:hover': { transform: 'translateY(-16px)', boxShadow: `0 24px 60px ${style.color}30`, '& .speaker-image': { transform: 'scale(1.1)' } } }}>
                    <Box sx={{ position: 'relative', height: 240, overflow: 'hidden', background: style.gradient }}>
                      <CardMedia component="img" image={speaker.image} alt={speaker.name} className="speaker-image" sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }} />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 4, display: 'flex', flexDirection: 'column', bgcolor: '#fff' }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: '#1e293b', mb: 1, fontSize: '1.25rem' }}>{speaker.name}</Typography>
                      <Typography variant="body2" sx={{ color: style.color, fontWeight: 700, mb: 2, fontSize: '0.9375rem' }}>{speaker.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#64748b', mb: 3, flexGrow: 1, fontSize: '0.9375rem', lineHeight: 1.7 }}>{speaker.bio}</Typography>
                      <Box sx={{ display: 'flex', gap: 1.5 }}>
                        {speaker.company && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, px: 2, py: 1, borderRadius: 2, bgcolor: `${style.color}15` }}>
                            <Business sx={{ fontSize: '1rem', color: style.color }} />
                            <Typography variant="caption" sx={{ color: style.color, fontWeight: 600, fontSize: '0.8125rem' }}>{speaker.company}</Typography>
                          </Box>
                        )}
                        {speaker.country && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, px: 2, py: 1, borderRadius: 2, bgcolor: `${style.color}15` }}>
                            <Public sx={{ fontSize: '1rem', color: style.color }} />
                            <Typography variant="caption" sx={{ color: style.color, fontWeight: 600, fontSize: '0.8125rem' }}>{speaker.country}</Typography>
                          </Box>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
