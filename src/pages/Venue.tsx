import { Box, Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { LocationOn, Hotel, Restaurant, Wifi, FitnessCenter, Pool, LocalParking, BusinessCenter } from '@mui/icons-material';
import eventData from '../mock/event.json';

export default function Venue() {
  const event = eventData;

  const venueFeatures = [
    { icon: <BusinessCenter />, text: 'நவீன மாநாட்டு வசதிகள்' },
    { icon: <Hotel />, text: 'உயர்தர தங்குமிடம்' },
    { icon: <Restaurant />, text: 'சர்வதேச உணவு விருப்பங்கள்' },
    { icon: <Wifi />, text: 'இலவச Wi-Fi' },
    { icon: <BusinessCenter />, text: 'வணிக மையம்' },
    { icon: <FitnessCenter />, text: 'உடற்பயிற்சி கூடம்' },
    { icon: <Pool />, text: 'நீச்சல் குளம்' },
    { icon: <LocalParking />, text: 'ஏராளமான பார்க்கிங்' },
  ];

  const highlights = [
    {
      icon: <Hotel sx={{ fontSize: 48 }} />,
      title: event?.venue?.name,
      description: 'மலேசியாவின் மையத்தில் அமைந்துள்ள பிரீமியம் ஹோட்டல்',
    },
    {
      icon: <LocationOn sx={{ fontSize: 48 }} />,
      title: event?.venue?.location,
      description: 'கோலாலம்பூர் நகர மையத்திலிருந்து எளிதில் அணுகக்கூடியது',
    },
    {
      icon: <BusinessCenter sx={{ fontSize: 48 }} />,
      title: '1000+ இருக்கைகள்',
      description: 'விரிவான மாநாட்டு அரங்குகள் மற்றும் கூட்ட அறைகள்',
    },
    {
      icon: <Restaurant sx={{ fontSize: 48 }} />,
      title: '5 உணவக வசதிகள்',
      description: 'பல்வேறு வகையான சர்வதேச உணவு வகைகள்',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh' }}>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          py: { xs: 8, md: 12 },
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: '#fff',
                textAlign: 'center',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 2,
              }}
            >
              நிகழ்வு இடம்
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                textAlign: 'center',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 400,
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              உலகத் தரம் வாய்ந்த வசதிகளுடன் கூடிய பிரீமியம் இடம்
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4} sx={{ mb: { xs: 8, md: 12 } }}>
          {highlights.map((highlight, index) => (
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
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.4s ease',
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
                      {highlight.icon}
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
                      {highlight.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748b',
                        fontSize: '0.9375rem',
                      }}
                    >
                      {highlight.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #f1f5f9',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: '#0f172a',
                      mb: 4,
                      fontSize: { xs: '1.75rem', md: '2rem' },
                    }}
                  >
                    வசதிகள்
                  </Typography>
                  <List>
                    {venueFeatures.map((feature, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 48 }}>
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: '10px',
                              bgcolor: '#f97316',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#fff',
                            }}
                          >
                            {feature.icon}
                          </Box>
                        </ListItemIcon>
                        <ListItemText
                          primary={feature.text}
                          primaryTypographyProps={{
                            sx: {
                              fontWeight: 600,
                              color: '#0f172a',
                              fontSize: '1rem',
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #f1f5f9',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: '#0f172a',
                      mb: 4,
                      fontSize: { xs: '1.75rem', md: '2rem' },
                    }}
                  >
                    முகவரி
                  </Typography>
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '10px',
                          bgcolor: '#f97316',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                          flexShrink: 0,
                        }}
                      >
                        <LocationOn sx={{ color: '#fff', fontSize: '1.25rem' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 0.5, fontSize: '1.125rem' }}>
                          {event?.venue?.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.9375rem' }}>
                          {event?.venue?.address}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      bgcolor: '#f8fafc',
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#0f172a',
                        mb: 2,
                        fontSize: '1.125rem',
                      }}
                    >
                      எப்படி வருவது
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748b',
                        mb: 2,
                        fontSize: '0.9375rem',
                      }}
                    >
                      <strong>விமான நிலையத்திலிருந்து:</strong> கோலாலம்பூர் சர்வதேச விமான நிலையத்திலிருந்து 30 நிமிடங்கள் (25 கிமீ)
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748b',
                        fontSize: '0.9375rem',
                      }}
                    >
                      <strong>நகர மையத்திலிருந்து:</strong> KL Sentral இலிருந்து 15 நிமிடங்கள் (8 கிமீ)
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
