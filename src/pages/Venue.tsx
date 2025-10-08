import { Box, Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { LocationOn, Hotel, Restaurant, Wifi, FitnessCenter, Pool, LocalParking, BusinessCenter, CheckCircle } from '@mui/icons-material';
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
      icon: <Hotel sx={{ fontSize: 50 }} />,
      title: event?.venue?.name,
      description: 'மலேசியாவின் மையத்தில் அமைந்துள்ள பிரீமியம் ஹோட்டல்',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      icon: <LocationOn sx={{ fontSize: 50 }} />,
      title: event?.venue?.location,
      description: 'கோலாலம்பூர் நகர மையத்திலிருந்து எளிதில் அணுகக்கூடியது',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      icon: <BusinessCenter sx={{ fontSize: 50 }} />,
      title: '1000+ இருக்கைகள்',
      description: 'விரிவான மாநாட்டு அரங்குகள் மற்றும் கூட்ட அறைகள்',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      icon: <Restaurant sx={{ fontSize: 50 }} />,
      title: '5 உணவக வசதிகள்',
      description: 'பல்வேறு வகையான சர்வதேச உணவு வகைகள்',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f8f9fa' }}>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
          py: 10,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
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
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2,
              }}
            >
              நிகழ்வு இடம்
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                textAlign: 'center',
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              உலகத் தரம் வாய்ந்த வசதிகளுடன் கூடிய பிரீமியம் இடம்
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4} sx={{ mb: 10 }}>
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
                    height: '100%',
                    minHeight: 280,
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s ease',
                    border: '1px solid rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-15px) scale(1.02)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                      '& .icon-box': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', py: 5, px: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box
                      className="icon-box"
                      sx={{
                        width: 90,
                        height: 90,
                        borderRadius: '20px',
                        background: highlight.gradient,
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
                      {highlight.icon}
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
                      {highlight.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
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
                  borderRadius: 4,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: '#1a237e',
                      mb: 3,
                    }}
                  >
                    வசதிகள்
                  </Typography>
                  <List>
                    {venueFeatures.map((feature, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, #ff6f00 0%, #ffa040 100%)',
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
                              fontWeight: 500,
                              color: '#666',
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
                  borderRadius: 4,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: '#1a237e',
                      mb: 3,
                    }}
                  >
                    முகவரி
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      <LocationOn sx={{ color: '#ff6f00', mr: 2, mt: 0.5 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: '#333', mb: 0.5 }}>
                          {event?.venue?.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
                          {event?.venue?.address}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#1a237e',
                      mb: 2,
                      mt: 4,
                    }}
                  >
                    எப்படி வருவது
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      lineHeight: 1.7,
                      mb: 2,
                    }}
                  >
                    <strong>விமான நிலையத்திலிருந்து:</strong> கோலாலம்பூர் சர்வதேச விமான நிலையத்திலிருந்து 30 நிமிடங்கள் (25 கிமீ)
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      lineHeight: 1.7,
                    }}
                  >
                    <strong>நகர மையத்திலிருந்து:</strong> KL Sentral இலிருந்து 15 நிமிடங்கள் (8 கிமீ)
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
