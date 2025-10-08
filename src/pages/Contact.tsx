import { Box, Container, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import eventData from '../mock/event.json';

export default function Contact() {
  const event = eventData;
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log('Form submitted:', formData); };
  const contactInfo = [
    { icon: <Email sx={{ fontSize: 40 }} />, title: 'மின்னஞ்சல்', value: 'info@tamilarbusiness.org' },
    { icon: <Phone sx={{ fontSize: 40 }} />, title: 'தொலைபேசி', value: '+60 12 345 6789' },
    { icon: <LocationOn sx={{ fontSize: 40 }} />, title: 'இடம்', value: event?.venue?.location },
  ];

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh' }}>
      <Box sx={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, color: '#fff', textAlign: 'center', fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>எங்களை தொடர்பு கொள்ளுங்கள்</Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.85)', textAlign: 'center', fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 400, maxWidth: 700, mx: 'auto' }}>உங்கள் கேள்விகள் மற்றும் பதிவுக்கு எங்களை தொடர்பு கொள்ளுங்கள்</Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card sx={{ height: 200, borderRadius: 3, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9', transition: 'all 0.4s ease', display: 'flex', flexDirection: 'column', '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 32px rgba(0,0,0,0.12)', '& .icon-box': { transform: 'scale(1.1)' } } }}>
                  <CardContent sx={{ textAlign: 'center', py: 4, px: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box className="icon-box" sx={{ width: 72, height: 72, borderRadius: '18px', bgcolor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', mb: 2, color: '#fff', transition: 'all 0.4s ease' }}>{info.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1, fontSize: '1.125rem' }}>{info.title}</Typography>
                    <Typography variant="body1" sx={{ color: '#64748b', fontWeight: 500, fontSize: '0.9375rem' }}>{info.value}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9', overflow: 'hidden' }}>
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#0f172a', mb: 4, textAlign: 'center', fontSize: { xs: '1.75rem', md: '2rem' } }}>பதிவு படிவம்</Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}><TextField fullWidth label="பெயர்" name="name" value={formData.name} onChange={handleChange} required sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2, '&:hover fieldset': { borderColor: '#f97316' }, '&.Mui-focused fieldset': { borderColor: '#0f172a' } } }} /></Grid>
                  <Grid item xs={12} sm={6}><TextField fullWidth label="மின்னஞ்சல்" name="email" type="email" value={formData.email} onChange={handleChange} required sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2, '&:hover fieldset': { borderColor: '#f97316' }, '&.Mui-focused fieldset': { borderColor: '#0f172a' } } }} /></Grid>
                  <Grid item xs={12} sm={6}><TextField fullWidth label="தொலைபேசி" name="phone" value={formData.phone} onChange={handleChange} required sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2, '&:hover fieldset': { borderColor: '#f97316' }, '&.Mui-focused fieldset': { borderColor: '#0f172a' } } }} /></Grid>
                  <Grid item xs={12} sm={6}><TextField fullWidth label="நிறுவனம்" name="company" value={formData.company} onChange={handleChange} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2, '&:hover fieldset': { borderColor: '#f97316' }, '&.Mui-focused fieldset': { borderColor: '#0f172a' } } }} /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="செய்தி" name="message" multiline rows={4} value={formData.message} onChange={handleChange} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2, '&:hover fieldset': { borderColor: '#f97316' }, '&.Mui-focused fieldset': { borderColor: '#0f172a' } } }} /></Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" size="large" endIcon={<Send />} sx={{ bgcolor: '#f97316', color: '#fff', fontWeight: 700, px: 6, py: 2, fontSize: '1rem', borderRadius: '12px', textTransform: 'none', boxShadow: '0 8px 24px rgba(249, 115, 22, 0.4)', '&:hover': { bgcolor: '#ea580c', transform: 'translateY(-2px)', boxShadow: '0 12px 32px rgba(249, 115, 22, 0.5)' }, transition: 'all 0.3s ease' }}>அனுப்பவும்</Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}
