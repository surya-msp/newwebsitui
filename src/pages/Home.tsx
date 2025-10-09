import { Box, Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { CalendarMonth, LocationOn, Groups, TrendingUp, EmojiEvents, Business } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import eventData from '../mock/event.json';

export default function Home() {
  const event = eventData;

  const features = [
    {
      icon: <Groups sx={{ fontSize: 56 }} />,
      title: 'உலகளாவிய நெட்வொர்க்கிங்',
      description: '12+ நாடுகளிலிருந்து 500+ வணிக தலைவர்கள்',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#667eea',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 56 }} />,
      title: 'வணிக வளர்ச்சி',
      description: 'புதிய கூட்டாண்மை மற்றும் முதலீட்டு வாய்ப்புகள்',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f093fb',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 56 }} />,
      title: '3 நாள் நிகழ்வு',
      description: 'தீவிர பட்டறைகள் மற்றும் கலந்துரையாடல்கள்',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe',
    },
    {
      icon: <Business sx={{ fontSize: 56 }} />,
      title: 'பிரீமியம் இடம்',
      description: 'Wyndham Garden i-City, மலேசியா',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      color: '#43e97b',
    },
  ];

  const stats = [
    { number: '500+', label: 'பங்கேற்பாளர்கள்', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { number: '12+', label: 'நாடுகள்', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { number: '50+', label: 'பேச்சாளர்கள்', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { number: '3', label: 'நாட்கள்', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
  ];

  return (
    <Box sx={{ bgcolor: '#fafbfc', minHeight: '100vh' }}>
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
            opacity: 0.1,
            background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 8 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Typography variant="overline" sx={{ color: '#fbbf24', fontWeight: 700, letterSpacing: '4px', fontSize: '1rem', mb: 3, display: 'block' }}>
                  வரவேற்கிறோம்
                </Typography>
              </motion.div>
              <Typography variant="h1" sx={{ fontWeight: 900, color: '#fff', fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, mb: 3, textShadow: '0 8px 32px rgba(0,0,0,0.3)', letterSpacing: '-0.02em' }}>
                {event?.title}
              </Typography>
              <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.95)', fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' }, mb: 6, fontWeight: 400, maxWidth: 900, mx: 'auto', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                {event?.subtitle}
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, mb: 6, flexWrap: 'wrap' }}>
                {[
                  { icon: CalendarMonth, label: 'தேதி', value: event?.dates },
                  { icon: LocationOn, label: 'இடம்', value: event?.venue.location },
                ].map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + idx * 0.1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ width: 64, height: 64, borderRadius: '20px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(20px)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.3)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                        <item.icon sx={{ color: '#fff', fontSize: '2rem' }} />
                      </Box>
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>
                          {item.label}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, fontSize: '1.125rem' }}>
                          {item.value}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 7, maxWidth: 750, mx: 'auto', fontSize: '1.25rem', lineHeight: 1.8 }}>
                {event?.description}
              </Typography>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
                  <Button component={Link} to="/contact" variant="contained" size="large" sx={{ bgcolor: '#fff', color: '#667eea', fontWeight: 700, px: 7, py: 2.5, fontSize: '1.125rem', borderRadius: '16px', textTransform: 'none', boxShadow: '0 12px 40px rgba(255,255,255,0.3)', '&:hover': { bgcolor: '#f8f9fa', transform: 'translateY(-4px)', boxShadow: '0 16px 50px rgba(255,255,255,0.4)' }, transition: 'all 0.3s ease' }}>
                    இப்போதே பதிவு செய்யுங்கள்
                  </Button>
                  <Button component={Link} to="/schedule" variant="outlined" size="large" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', fontWeight: 600, px: 7, py: 2.5, fontSize: '1.125rem', borderRadius: '16px', textTransform: 'none', borderWidth: 2, backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.1)', '&:hover': { borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0.2)', borderWidth: 2, transform: 'translateY(-4px)' }, transition: 'all 0.3s ease' }}>
                    அட்டவணையைப் பார்க்கவும்
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Grid container spacing={4} sx={{ mb: { xs: 10, md: 14 } }}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={index}>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card sx={{ textAlign: 'center', py: 6, borderRadius: 4, background: stat.gradient, boxShadow: '0 12px 48px rgba(0,0,0,0.15)', border: 'none', transition: 'all 0.4s ease', '&:hover': { transform: 'translateY(-12px) scale(1.05)', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' } }}>
                  <Typography variant="h2" sx={{ fontWeight: 900, color: '#fff', mb: 1, fontSize: { xs: '3rem', md: '3.5rem' }, textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.95)', fontWeight: 600, fontSize: '1.125rem' }}>
                    {stat.label}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2, textAlign: 'center', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            ஏன் கலந்து கொள்ள வேண்டும்?
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748b', textAlign: 'center', mb: 10, fontSize: '1.25rem' }}>
            உங்கள் வணிகத்தை அடுத்த நிலைக்கு கொண்டு செல்ல
          </Typography>
        </motion.div>

        <Grid container spacing={5}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}>
                <Card sx={{ height: 380, borderRadius: 5, overflow: 'hidden', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', display: 'flex', flexDirection: 'column', position: 'relative', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: feature.gradient }, '&:hover': { transform: 'translateY(-20px)', boxShadow: '0 24px 60px rgba(0,0,0,0.18)', '& .icon-box': { transform: 'scale(1.15) rotate(10deg)' } } }}>
                  <CardContent sx={{ textAlign: 'center', py: 6, px: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box className="icon-box" sx={{ width: 100, height: 100, borderRadius: '28px', background: feature.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', mb: 4, color: '#fff', boxShadow: `0 12px 32px ${feature.color}40`, transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#1e293b', mb: 2, fontSize: '1.25rem' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7 }}>
                      {feature.description}
                    </Typography>
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
