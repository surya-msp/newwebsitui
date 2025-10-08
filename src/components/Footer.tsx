import { Box, Container, Typography, IconButton, Grid, Divider } from '@mui/material';
import { Email, Phone, Language, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #1a237e 0%, #0d1642 100%)',
        color: '#FFF',
        py: 8,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #ff6f00 0%, #ffa040 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.8rem',
                color: '#fff',
                mb: 2,
                boxShadow: '0 4px 15px rgba(255, 111, 0, 0.3)',
              }}
            >
              த
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>
              ITBC 2025
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8, lineHeight: 1.7 }}>
              உலகம் முழுவதும் உள்ள தமிழ் தொழில் முனைவோரை ஒன்றிணைக்கும் உலகளாவிய மாநாடு.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5, color: '#ff6f00' }}>
              தொடர்பு
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
              <Box
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: '8px',
                  background: 'rgba(255, 111, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Email sx={{ fontSize: '1.1rem', color: '#ff6f00' }} />
              </Box>
              <Typography variant="body2">info@tamilarbusiness.org</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
              <Box
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: '8px',
                  background: 'rgba(255, 111, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Phone sx={{ fontSize: '1.1rem', color: '#ff6f00' }} />
              </Box>
              <Typography variant="body2">+60 12 345 6789</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: '8px',
                  background: 'rgba(255, 111, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Language sx={{ fontSize: '1.1rem', color: '#ff6f00' }} />
              </Box>
              <Typography variant="body2">www.tamilarbusiness.org</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5, color: '#ff6f00' }}>
              எங்களைப் பின்தொடரவும்
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    width: 45,
                    height: 45,
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#FFF',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #ff6f00 0%, #ffa040 100%)',
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px rgba(255, 111, 0, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Icon sx={{ fontSize: '1.3rem' }} />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © 2025 இணையத் தமிழர் வணிக மாநாடு. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
