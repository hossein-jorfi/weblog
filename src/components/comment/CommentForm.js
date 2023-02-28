import React, { useState } from 'react';

// MUI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Typography, TextField, Button } from '@mui/material';

const CommentForm = ({ slug }) => {

     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [text, setText] = useState('')

     return (
          <Grid container sx={{
               boxShadow: 'rgba(0, 0, 0 , .2) 0px 4px 12px',
               borderRadius: '4px',
               py: 1,
               mt: 5
          }}>
               <Grid xs={12} mx={2} my={1}>
                    <Typography component='p' variant='h6' fontWeight={700} color='primary'>
                         ارسال کامنت
                    </Typography>
               </Grid>
               <Grid xs={12} mx={2} my={1}>
                    <TextField
                         label='نام کاربری'
                         variant='outlined'
                         placeholder='نام کاربری'
                         sx={{ width: '100%' }}
                         value={name}
                         onChange={e => setName(e.target.value)}
                    />
               </Grid>
               <Grid xs={12} mx={2} my={1}>
                    <TextField
                         label='ایمیل'
                         variant='outlined'
                         placeholder='ایمیل'
                         sx={{ width: '100%' }}
                         value={email}
                         onChange={e => setEmail(e.target.value)}
                    />
               </Grid>
               <Grid xs={12} mx={2} my={1}>
                    <TextField
                         label='متن کامنت'
                         variant='outlined'
                         placeholder='متن کامنت'
                         sx={{ width: '100%' }}
                         value={text}
                         onChange={e => setText(e.target.value)}
                         multiline
                         minRows={5}
                    />
               </Grid>
               <Grid xs={12} mx={2} my={1}>
                    <Button variant='contained'>ارسال</Button>
               </Grid>
          </Grid>
     );
};

export default CommentForm;