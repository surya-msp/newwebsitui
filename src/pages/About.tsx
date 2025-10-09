import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Business, Public, TrendingUp, Handshake } from '@mui/icons-material';
import eventData from '../mock/event.json';

export default function About() {
  const event = eventData;

  const values = [
    {
      icon: <Public sx={{ fontSize: 56 }} />,
      title: 'உலகளாவிய இணைப்பு',
      description: 'உலகம் முழுவதும் பரவியிருக்கும் தமிழர் வணிக சமூகத்தை ஒன்றிணைக்கிறோம்',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#667eea',
    },
    {
      icon: <Business sx={{ fontSize: 56 }} />,
      title: 'தொழில் வளர்ச்சி',
      description: 'புதிய வணிக வாய்ப்புகளை உருவாக்கி வளர்ச்சியை ஊக்குவிக்கிறோம்',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f093fb',
    },
    {
      icon: <Handshake sx={{ fontSize: 56 }} />,
      title: 'கூட்டாண்மை',
      description: 'நீண்டகால வணிக உறவுகள் மற்றும் கூட்டுத்தொழில் வாய்ப்புகள்',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 56 }} />,
      title: 'பொருளாதார வலிமை',
      description: 'தமிழர்களின் பொருளாதார சக்தியை உலகளவில் வெளிப்படுத்துதல்',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      color: '#43e97b',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#fafbfc', minHeight: '100vh' }}>
      <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, color: '#fff', textAlign: 'center', fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2, textShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>மாநாட்டைப் பற்றி</Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.95)', textAlign: 'center', fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 400, maxWidth: 700, mx: 'auto', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>உலகம் முழுவதும் தமிழர் தொழில் முனைவோரை ஒன்றிணைக்கும் தளம்</Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 3, textAlign: 'center', fontSize: { xs: '2rem', md: '2.5rem' } }}>எங்கள் நோக்கம்</Typography>
          <Typography variant="body1" sx={{ color: '#64748b', textAlign: 'center', maxWidth: 800, mx: 'auto', mb: 10, fontSize: '1.25rem', lineHeight: 1.8 }}>{event?.about?.mission || event?.mission}</Typography>
        </motion.div>

        <Grid container spacing={5} sx={{ mb: { xs: 10, md: 14 } }}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card sx={{ height: 380, borderRadius: 5, overflow: 'hidden', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', display: 'flex', flexDirection: 'column', position: 'relative', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: value.gradient }, '&:hover': { transform: 'translateY(-20px)', boxShadow: '0 24px 60px rgba(0,0,0,0.18)', '& .icon-box': { transform: 'scale(1.15) rotate(10deg)' } } }}>
                  <CardContent sx={{ textAlign: 'center', py: 6, px: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box className="icon-box" sx={{ width: 100, height: 100, borderRadius: '28px', background: value.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', mb: 4, color: '#fff', boxShadow: `0 12px 32px ${value.color}40`, transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>{value.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#1e293b', mb: 2, fontSize: '1.25rem' }}>{value.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7 }}>{value.description}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Card sx={{ borderRadius: 5, overflow: 'hidden', boxShadow: '0 12px 48px rgba(102, 126, 234, 0.15)', border: 'none', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', position: 'relative' }}>
            <CardContent sx={{ p: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#fff', mb: 3, textAlign: 'center', fontSize: { xs: '1.75rem', md: '2rem' }, textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>நமது பார்வை</Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.95)', textAlign: 'center', maxWidth: 800, mx: 'auto', fontSize: '1.125rem', lineHeight: 1.8 }}>{event?.about?.vision || event?.description}</Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}
