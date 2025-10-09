import { AppBar, Toolbar, Container, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useScrollTrigger } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const navItems = [
    { name: 'முகப்பு', path: '/' },
    { name: 'பற்றி', path: '/about' },
    { name: 'அட்டவணை', path: '/schedule' },
    { name: 'பேச்சாளர்கள்', path: '/speakers' },
    { name: 'இடம்', path: '/venue' },
    { name: 'தொடர்பு', path: '/contact' },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          background: trigger ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '1.5rem',
                      color: '#fff',
                      boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
                    }}
                  >
                    த
                  </Box>
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Box sx={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
                      ITBC 2025
                    </Box>
                    <Box sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                      International Tamilar Business
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{
                      color: location.pathname === item.path ? '#fbbf24' : '#fff',
                      fontWeight: location.pathname === item.path ? 700 : 500,
                      px: 2,
                      py: 1,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: location.pathname === item.path ? '70%' : '0%',
                        height: '3px',
                        backgroundColor: '#fbbf24',
                        borderRadius: '2px',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: '#fde68a',
                        '&::after': {
                          width: '70%',
                        },
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </Box>

            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: 'none' }, ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                sx={{
                  py: 2,
                  backgroundColor: location.pathname === item.path ? 'rgba(251, 191, 36, 0.2)' : 'transparent',
                  borderLeft: location.pathname === item.path ? '4px solid #fbbf24' : '4px solid transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(251, 191, 36, 0.15)',
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  sx={{
                    '& .MuiTypography-root': {
                      color: '#fff',
                      fontWeight: location.pathname === item.path ? 700 : 500,
                      fontSize: '1.1rem',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
