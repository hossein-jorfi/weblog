import React from 'react';

// MUI
import { Typography, Link } from '@mui/material';

const Footer = () => {
     return (
          <footer>
               <Typography
                    component='p'
                    variant='h6'
                    bgcolor='#f7f7f7'
                    padding='10px'
                    textAlign='center'
                    mt={10}
               >
                    <Link
                         href="https://github.com/hossein-jorfi/"
                         underline='none'
                    >
                         Hossein Jorfi | پروژه GraphQl
                    </Link>
               </Typography>
          </footer>
     );
};

export default Footer;