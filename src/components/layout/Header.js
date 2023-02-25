import React from 'react';

// mui
import BookIcon from '@mui/icons-material/Book';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
     return (
          <AppBar position="sticky">
               <Container maxWidth="lg">
                    <Toolbar>
                         <Typography variant="h5" component="h1" fontWeight="700" sx={{ flexGrow: 1 }}>
                              وبلاگ
                         </Typography>
                         <BookIcon />
                    </Toolbar>
               </Container>
          </AppBar>
     );
}

export default Header