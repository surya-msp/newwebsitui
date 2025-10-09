import { Box, Container, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import eventData from '../mock/event.json';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const event = eventData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: 'மின்னஞ்சல்',
      value: event.contact.email,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#667eea',
    },
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: 'தொலைபேசி',
      value: event.contact.phone,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f093fb',
    },
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: 'வலைதளம்',
      value: event.contact.website,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#fafbfc', minHeight: '100vh' }}>
      <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, color: '#fff', textAlign: 'center', fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2, textShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>எங்களைத் தொடர்பு கொள்ளுங்கள்</Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.95)', textAlign: 'center', fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 400, maxWidth: 700, mx: 'auto', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>உங்கள் கேள்விகளுக்கு நாங்கள் உதவ தயாராக இருக்கிறோம்</Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Grid container spacing={5} sx={{ mb: { xs: 10, md: 14 } }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card sx={{ height: 240, borderRadius: 5, overflow: 'hidden', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: 'none', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', display: 'flex', flexDirection: 'column', position: 'relative', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: info.gradient }, '&:hover': { transform: 'translateY(-12px)', boxShadow: `0 20px 48px ${info.color}30`, '& .info-icon': { transform: 'scale(1.1) rotate(5deg)', background: info.gradient } } }}>
                  <CardContent sx={{ textAlign: 'center', py: 6, px: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box className="info-icon" sx={{ width: 80, height: 80, borderRadius: '24px', background: `${info.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', mb: 3, color: info.color, transition: 'all 0.4s ease' }}>
                      {info.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#1e293b', mb: 2, fontSize: '1.25rem' }}>{info.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', fontSize: '1rem', fontWeight: 600 }}>{info.value}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Card sx={{ borderRadius: 5, overflow: 'hidden', boxShadow: '0 12px 48px rgba(0,0,0,0.08)', border: 'none', background: '#fff' }}>
            <CardContent sx={{ p: { xs: 6, md: 8 } }}>
              <Typography variant="h3" sx={{ fontWeight: 800, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2, textAlign: 'center', fontSize: { xs: '2rem', md: '2.5rem' } }}>செய்தி அனுப்பவும்</Typography>
              <Typography variant="body1" sx={{ color: '#64748b', textAlign: 'center', mb: 6, fontSize: '1.125rem' }}>உங்கள் விசாரணைகளை எங்களுக்கு அனுப்புங்கள்</Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="பெயர்" variant="outlined" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, '&:hover fieldset': { borderColor: '#667eea' }, '&.Mui-focused fieldset': { borderColor: '#667eea', borderWidth: 2 } }, '& .MuiInputLabel-root.Mui-focused': { color: '#667eea' } }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="மின்னஞ்சல்" type="email" variant="outlined" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, '&:hover fieldset': { borderColor: '#667eea' }, '&.Mui-focused fieldset': { borderColor: '#667eea', borderWidth: 2 } }, '& .MuiInputLabel-root.Mui-focused': { color: '#667eea' } }} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="செய்தி" multiline rows={6} variant="outlined" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, '&:hover fieldset': { borderColor: '#667eea' }, '&.Mui-focused fieldset': { borderColor: '#667eea', borderWidth: 2 } }, '& .MuiInputLabel-root.Mui-focused': { color: '#667eea' } }} />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Button type="submit" variant="contained" size="large" endIcon={<Send />} sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', fontWeight: 700, px: 8, py: 2.5, fontSize: '1.125rem', borderRadius: 3, textTransform: 'none', boxShadow: '0 12px 32px rgba(102, 126, 234, 0.4)', '&:hover': { background: 'linear-gradient(135deg, #5558e3 0%, #6a3f96 100%)', transform: 'translateY(-4px)', boxShadow: '0 16px 40px rgba(102, 126, 234, 0.5)' }, transition: 'all 0.3s ease' }}>
                      அனுப்பு
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}
