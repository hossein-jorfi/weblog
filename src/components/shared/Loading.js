import React from 'react';

// MUI
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// Style
import style from './Loading.module.css'

const Loading = () => {
     return (
          <Container xs={12} sx={{
               display: 'flex',
               flexDirection:'column',
               justifyContent: 'space-around',
               alignItems: 'center',
               minHeight: '100vh',
          }}>
                    <Grid xs={12}>
                         <span className={style.loader}></span>
                    </Grid>
                    <Grid xs={12}></Grid>
                    <Grid xs={12}></Grid>
          </Container>
     );
};

export default Loading;