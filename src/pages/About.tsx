import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Business, Public, TrendingUp, Handshake } from '@mui/icons-material';
import eventData from '../mock/event.json';

export default function About() {
  const event = eventData;

  const values = [
    {
      icon: <Public sx={{ fontSize: 50 }} />,
      title: 'உலகளாவிய இணைப்பு',
      description: 'உலகம் முழுவதும் பரவியிருக்கும் தமிழர் வணிக சமூகத்தை ஒன்றிணைக்கிறோம்',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      icon: <Business sx={{ fontSize: 50 }} />,
      title: 'தொழில் வளர்ச்சி',
      description: 'புதிய வணிக வாய்ப்புகளை உருவாக்கி வளர்ச்சியை ஊக்குவிக்கிறோம்',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      icon: <Handshake sx={{ fontSize: 50 }} />,
      title: 'கூட்டாண்மை',
      description: 'நீண்டகால வணிக உறவுகள் மற்றும் கூட்டுத்தொழில் வாய்ப்புகள்',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 50 }} />,
      title: 'பொருளாதார வலிமை',
      description: 'தமிழர்களின் பொருளாதார சக்தியை உலகளவில் வெளிப்படுத்துதல்',
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
              மாநாட்டைப் பற்றி
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                textAlign: 'center',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              உலகம் முழுவதும் தமிழர் தொழில் முனைவோரை ஒன்றிணைக்கும் தளம்
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#1a237e',
              mb: 3,
              textAlign: 'center',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
            }}
          >
            எங்கள் நோக்கம்
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto',
              mb: 8,
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            {event?.about?.mission}
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 10 }}>
          {values.map((value, index) => (
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
                        background: value.gradient,
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
                      {value.icon}
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
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
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
          <Card
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
            }}
          >
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#1a237e',
                  mb: 3,
                  textAlign: 'center',
                }}
              >
                நமது பார்வை
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#666',
                  lineHeight: 1.8,
                  fontSize: '1.05rem',
                  textAlign: 'center',
                  maxWidth: 800,
                  mx: 'auto',
                }}
              >
                {event?.about?.vision}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}
