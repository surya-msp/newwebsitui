import { Box, Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { LocationOn, Hotel, Restaurant, Wifi, FitnessCenter, Pool, LocalParking, BusinessCenter } from '@mui/icons-material';
import eventData from '../mock/event.json';

export default function Venue() {
  const venue = eventData.venue;

  const amenities = [
    { icon: <Wifi />, name: 'இலவச WiFi', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#667eea' },
    { icon: <Restaurant />, name: 'உணவகம்', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: '#f093fb' },
    { icon: <FitnessCenter />, name: 'உடற்பயிற்சி மையம்', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: '#4facfe' },
    { icon: <Pool />, name: 'நீச்சல் குளம்', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', color: '#43e97b' },
    { icon: <LocalParking />, name: 'வாகன நிறுத்தம்', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: '#fa709a' },
    { icon: <BusinessCenter />, name: 'வணிக மையம்', gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', color: '#30cfd0' },
  ];

  const highlights = [
    { title: 'உலகத் தரம்', description: '4-நட்சத்திர சொகுசு வசதிகள்', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#667eea' },
    { title: 'சிறந்த இடம்', description: 'i-City இல் அமைந்துள்ளது', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: '#f093fb' },
    { icon: <Hotel />, title: 'வசதியான தங்குமிடம்', description: 'நவீன அறைகள் மற்றும் அறைகள்', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: '#4facfe' },
  ];

  return (
    <Box sx={{ bgcolor: '#fafbfc', minHeight: '100vh' }}>
      <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, color: '#fff', textAlign: 'center', fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2, textShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>நிகழ்வு இடம்</Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.95)', textAlign: 'center', fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 400, maxWidth: 700, mx: 'auto', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>{venue.name}</Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Card sx={{ borderRadius: 5, overflow: 'hidden', boxShadow: '0 12px 48px rgba(102, 126, 234, 0.15)', border: 'none', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', mb: 8 }}>
            <CardContent sx={{ p: { xs: 6, md: 8 }, textAlign: 'center' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Box sx={{ width: 80, height: 80, borderRadius: '24px', background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
                  <LocationOn sx={{ fontSize: '2.5rem', color: '#fff' }} />
                </Box>
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#fff', mb: 3, fontSize: { xs: '2rem', md: '2.5rem' }, textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>{venue.name}</Typography>
              <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.95)', mb: 2, fontSize: '1.25rem' }}>{venue.address}</Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem' }}>{venue.location}</Typography>
            </CardContent>
          </Card>
        </motion.div>

        <Grid container spacing={5} sx={{ mb: { xs: 10, md: 14 } }}>
          {highlights.map((highlight, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card sx={{ height: 240, borderRadius: 5, overflow: 'hidden', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: 'none', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', display: 'flex', flexDirection: 'column', position: 'relative', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: highlight.gradient }, '&:hover': { transform: 'translateY(-12px)', boxShadow: `0 20px 48px ${highlight.color}30` } }}>
                  <CardContent sx={{ textAlign: 'center', py: 6, px: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#1e293b', mb: 2, fontSize: '1.5rem' }}>{highlight.title}</Typography>
                    <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1.125rem' }}>{highlight.description}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 6, textAlign: 'center', fontSize: { xs: '2rem', md: '2.5rem' } }}>வசதிகள்</Typography>
        </motion.div>

        <Grid container spacing={4}>
          {amenities.map((amenity, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.05 }}>
                <Card sx={{ textAlign: 'center', py: 4, borderRadius: 4, boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: 'none', transition: 'all 0.4s ease', '&:hover': { transform: 'translateY(-8px)', boxShadow: `0 16px 48px ${amenity.color}30`, '& .amenity-icon': { background: amenity.gradient, transform: 'scale(1.1) rotate(5deg)' } } }}>
                  <Box className="amenity-icon" sx={{ width: 64, height: 64, borderRadius: '20px', background: `${amenity.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', mb: 2, color: amenity.color, transition: 'all 0.4s ease', '& .MuiSvgIcon-root': { fontSize: '2rem' } }}>
                    {amenity.icon}
                  </Box>
                  <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.9375rem', px: 1 }}>{amenity.name}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
