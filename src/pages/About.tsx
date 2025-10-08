import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Business, Public, TrendingUp, Handshake } from '@mui/icons-material';
import eventData from '../mock/event.json';

export default function About() {
  const event = eventData;

  const values = [
    {
      icon: <Public sx={{ fontSize: 48 }} />,
      title: 'உலகளாவிய இணைப்பு',
      description: 'உலகம் முழுவதும் பரவியிருக்கும் தமிழர் வணிக சமூகத்தை ஒன்றிணைக்கிறோம்',
    },
    {
      icon: <Business sx={{ fontSize: 48 }} />,
      title: 'தொழில் வளர்ச்சி',
      description: 'புதிய வணிக வாய்ப்புகளை உருவாக்கி வளர்ச்சியை ஊக்குவிக்கிறோம்',
    },
    {
      icon: <Handshake sx={{ fontSize: 48 }} />,
      title: 'கூட்டாண்மை',
      description: 'நீண்டகால வணிக உறவுகள் மற்றும் கூட்டுத்தொழில் வாய்ப்புகள்',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 48 }} />,
      title: 'பொருளாதார வலிமை',
      description: 'தமிழர்களின் பொருளாதார சக்தியை உலகளவில் வெளிப்படுத்துதல்',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh' }}>
      <Box sx={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, color: '#fff', textAlign: 'center', fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>மாநாட்டைப் பற்றி</Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.85)', textAlign: 'center', fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 400, maxWidth: 700, mx: 'auto' }}>உலகம் முழுவதும் தமிழர் தொழில் முனைவோரை ஒன்றிணைக்கும் தளம்</Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: '#0f172a', mb: 3, textAlign: 'center', fontSize: { xs: '1.75rem', md: '2.5rem' } }}>எங்கள் நோக்கம்</Typography>
          <Typography variant="body1" sx={{ color: '#64748b', textAlign: 'center', maxWidth: 800, mx: 'auto', mb: 8, fontSize: '1.125rem' }}>{event?.mission}</Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: { xs: 8, md: 12 } }}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card sx={{ height: 320, borderRadius: 3, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9', transition: 'all 0.4s ease', display: 'flex', flexDirection: 'column', '&:hover': { transform: 'translateY(-12px)', boxShadow: '0 20px 40px rgba(0,0,0,0.12)', '& .icon-box': { transform: 'scale(1.1)', bgcolor: '#f97316' } } }}>
                  <CardContent sx={{ textAlign: 'center', py: 5, px: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box className="icon-box" sx={{ width: 88, height: 88, borderRadius: '20px', bgcolor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', mb: 3, color: '#fff', transition: 'all 0.4s ease' }}>{value.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 2, fontSize: '1.125rem' }}>{value.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.9375rem' }}>{value.description}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Card sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9', bgcolor: '#fff' }}>
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#0f172a', mb: 3, textAlign: 'center', fontSize: { xs: '1.75rem', md: '2rem' } }}>நமது பார்வை</Typography>
              <Typography variant="body1" sx={{ color: '#64748b', textAlign: 'center', maxWidth: 800, mx: 'auto', fontSize: '1.0625rem' }}>{event?.description}</Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}
