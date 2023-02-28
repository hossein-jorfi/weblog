import React from 'react';

// mui
import BookIcon from '@mui/icons-material/Book';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

// Router
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <AppBar position="sticky">
               <Container maxWidth="lg">
                    <Toolbar style={{ padding: 0 }}>
                         <Typography variant="h5" component="h1" fontWeight="700" sx={{ flexGrow: 1 }}>
                              <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
                                   وبلاگ
                              </Link>
                         </Typography>
                         <Link to='/' style={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <BookIcon />
                         </Link>
                    </Toolbar>
               </Container>
          </AppBar>
     );
}

export default Header