import { Box, Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { CalendarMonth, LocationOn, Groups, TrendingUp, EmojiEvents, Business } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import eventData from '../mock/event.json';

export default function Home() {
  const event = eventData;

  const features = [
    {
      icon: <Groups sx={{ fontSize: 50 }} />,
      title: 'உலகளாவிய நெட்வொர்க்கிங்',
      description: '12+ நாடுகளிலிருந்து 500+ வணிக தலைவர்கள்',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 50 }} />,
      title: 'வணிக வளர்ச்சி',
      description: 'புதிய கூட்டாண்மை மற்றும் முதலீட்டு வாய்ப்புகள்',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 50 }} />,
      title: '3 நாள் நிகழ்வு',
      description: 'தீவிர பட்டறைகள் மற்றும் கலந்துரையாடல்கள்',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      icon: <Business sx={{ fontSize: 50 }} />,
      title: 'பிரீமியம் இடம்',
      description: 'Wyndham Garden i-City, மலேசியா',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
  ];

  const stats = [
    { number: '500+', label: 'பங்கேற்பாளர்கள்' },
    { number: '12+', label: 'நாடுகள்' },
    { number: '50+', label: 'பேச்சாளர்கள்' },
    { number: '3', label: 'நாட்கள்' },
  ];

  return (
    <Box sx={{ bgcolor: '#f8f9fa' }}>
      <Box
        sx={{
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #01579b 100%)',
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
            background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  color: '#ff6f00',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  mb: 2,
                }}
              >
                வரவேற்கிறோம்
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  color: '#fff',
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                {event?.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                  mb: 4,
                  fontWeight: 500,
                }}
              >
                {event?.subtitle}
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 4, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CalendarMonth sx={{ color: '#ff6f00', fontSize: '2rem' }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block' }}>
                    தேதி
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                    {event?.dates}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn sx={{ color: '#ff6f00', fontSize: '2rem' }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block' }}>
                    இடம்
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                    {event?.venue.location}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                mb: 5,
                maxWidth: 700,
                mx: 'auto',
                textAlign: 'center',
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.8,
              }}
            >
              {event?.description}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(135deg, #ff6f00 0%, #ff8f00 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  boxShadow: '0 8px 30px rgba(255, 111, 0, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ff8f00 0%, #ff6f00 100%)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 40px rgba(255, 111, 0, 0.5)',
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
                  borderColor: 'rgba(255,255,255,0.5)',
                  fontWeight: 600,
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 2,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                அட்டவணையைப் பார்க்கவும்
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={2} sx={{ mb: 10 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    py: 4,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #1a237e 0%, #ff6f00 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', fontWeight: 600 }}>
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
              color: '#1a237e',
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
              color: '#666',
              textAlign: 'center',
              mb: 6,
              fontSize: '1.1rem',
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
                    height: '100%',
                    minHeight: 280,
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s ease',
                    border: '1px solid rgba(0,0,0,0.05)',
                    '&:hover': {
                      transform: 'translateY(-15px) scale(1.02)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                      '& .icon-box': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', py: 5, px: 3 }}>
                    <Box
                      className="icon-box"
                      sx={{
                        width: 90,
                        height: 90,
                        borderRadius: '20px',
                        background: feature.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        mb: 3,
                        color: '#fff',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                        transition: 'all 0.4s ease',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1a237e',
                        mb: 2,
                        fontSize: '1.2rem',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
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
