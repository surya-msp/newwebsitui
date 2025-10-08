import { Box, Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { CalendarMonth, LocationOn, Groups, TrendingUp, EmojiEvents, Business } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import eventData from '../mock/event.json';

export default function Home() {
  const event = eventData;

  const features = [
    {
      icon: <Groups sx={{ fontSize: 48 }} />,
      title: 'உலகளாவிய நெட்வொர்க்கிங்',
      description: '12+ நாடுகளிலிருந்து 500+ வணிக தலைவர்கள்',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 48 }} />,
      title: 'வணிக வளர்ச்சி',
      description: 'புதிய கூட்டாண்மை மற்றும் முதலீட்டு வாய்ப்புகள்',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 48 }} />,
      title: '3 நாள் நிகழ்வு',
      description: 'தீவிர பட்டறைகள் மற்றும் கலந்துரையாடல்கள்',
    },
    {
      icon: <Business sx={{ fontSize: 48 }} />,
      title: 'பிரீமியம் இடம்',
      description: 'Wyndham Garden i-City, மலேசியா',
    },
  ];

  const stats = [
    { number: '500+', label: 'பங்கேற்பாளர்கள்' },
    { number: '12+', label: 'நாடுகள்' },
    { number: '50+', label: 'பேச்சாளர்கள்' },
    { number: '3', label: 'நாட்கள்' },
  ];

  return (
    <Box sx={{ bgcolor: '#f8fafc' }}>
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
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

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: '#f97316',
                  fontWeight: 700,
                  letterSpacing: '3px',
                  fontSize: '0.875rem',
                  mb: 3,
                  display: 'block',
                }}
              >
                வரவேற்கிறோம்
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  color: '#fff',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  mb: 3,
                  textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                }}
              >
                {event?.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                  mb: 5,
                  fontWeight: 400,
                  maxWidth: 800,
                  mx: 'auto',
                }}
              >
                {event?.subtitle}
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, mb: 5, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '16px',
                      background: 'rgba(249, 115, 22, 0.15)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(249, 115, 22, 0.3)',
                    }}
                  >
                    <CalendarMonth sx={{ color: '#f97316', fontSize: '2rem' }} />
                  </Box>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', display: 'block', fontSize: '0.75rem' }}>
                      தேதி
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600, fontSize: '1rem' }}>
                      {event?.dates}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '16px',
                      background: 'rgba(249, 115, 22, 0.15)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(249, 115, 22, 0.3)',
                    }}
                  >
                    <LocationOn sx={{ color: '#f97316', fontSize: '2rem' }} />
                  </Box>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', display: 'block', fontSize: '0.75rem' }}>
                      இடம்
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600, fontSize: '1rem' }}>
                      {event?.venue.location}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.75)',
                  mb: 6,
                  maxWidth: 700,
                  mx: 'auto',
                  fontSize: '1.125rem',
                }}
              >
                {event?.description}
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#f97316',
                    color: '#fff',
                    fontWeight: 700,
                    px: 6,
                    py: 2,
                    fontSize: '1rem',
                    borderRadius: '12px',
                    textTransform: 'none',
                    boxShadow: '0 8px 24px rgba(249, 115, 22, 0.4)',
                    '&:hover': {
                      bgcolor: '#ea580c',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 32px rgba(249, 115, 22, 0.5)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  இப்போதே பதிவு செய்யுங்கள்
                </Button>
                <Button
                  component={Link}
                  to="/schedule"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: '#fff',
                    borderColor: 'rgba(255,255,255,0.3)',
                    fontWeight: 600,
                    px: 6,
                    py: 2,
                    fontSize: '1rem',
                    borderRadius: '12px',
                    textTransform: 'none',
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: '#fff',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderWidth: 2,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  அட்டவணையைப் பார்க்கவும்
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={3} sx={{ mb: { xs: 8, md: 12 } }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    height: '100%',
                    py: 5,
                    borderRadius: 3,
                    bgcolor: '#fff',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid #f1f5f9',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      color: '#f97316',
                      mb: 1,
                      fontSize: { xs: '2.5rem', md: '3rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#64748b', fontWeight: 600, fontSize: '1rem' }}>
                    {stat.label}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: '#0f172a',
              mb: 2,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.75rem' },
            }}
          >
            ஏன் கலந்து கொள்ள வேண்டும்?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748b',
              textAlign: 'center',
              mb: 8,
              fontSize: '1.125rem',
            }}
          >
            உங்கள் வணிகத்தை அடுத்த நிலைக்கு கொண்டு செல்ல
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: 320,
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid #f1f5f9',
                    transition: 'all 0.4s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                      '& .icon-box': {
                        transform: 'scale(1.1)',
                        bgcolor: '#f97316',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', py: 5, px: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box
                      className="icon-box"
                      sx={{
                        width: 88,
                        height: 88,
                        borderRadius: '20px',
                        bgcolor: '#0f172a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        mb: 3,
                        color: '#fff',
                        transition: 'all 0.4s ease',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#0f172a',
                        mb: 2,
                        fontSize: '1.125rem',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748b',
                        fontSize: '0.9375rem',
                      }}
                    >
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
