import React from 'react';

// MUI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Container, Typography } from '@mui/material';

// Components
import Blog from '../blog/Blog';
import Authors from '../author/Authors';

const HomePage = () => {
     return (
          <>
               <Container maxWidth='lg'>
                    <Grid container spacing={2} padding={3}>
                         <Grid xs={12} md={3} mt={4}>
                              <Typography component='h3' variant='h5' mb={3} fontWeight={700}>نویسنده ها</Typography>
                              <Authors />
                         </Grid>
                         <Grid xs={12} md={9} mt={4}>
                              <Typography component='h3' variant='h5' mb={3} fontWeight={700}>مقالات</Typography>
                              <Blog />
                         </Grid>
                    </Grid>
               </Container>
          </>
     );
};

export default HomePage;