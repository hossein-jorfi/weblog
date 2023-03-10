import React from 'react';

// MUI
import { Card, CardHeader, CardMedia, Avatar, CardContent, Typography, CardActions, Button, Divider } from '@mui/material';

// Router
import { Link } from 'react-router-dom';

const CardEl = ({ slug, title, author, coverPhoto: { url } }) => {

     const shorter = text => {
          const splitedText = text.split(' ')
          let result
          if (splitedText.length > 3) {
               result = `
                    ${splitedText[0]}
                    ${splitedText[1]}
                    ${splitedText[2]}
                    ${splitedText[3]}
                    ...
                    `
          } else {
               result = text
          }
          return result
     }

     return (
          <Card
               sx={{
                    borderRadius: 4,
                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px'
               }}
          >
               {author && (
                    <Link to={`/authors/${author.slug}`} style={{ textDecoration: 'none' }}>
                         <CardHeader
                              avatar={
                                   <Avatar
                                        sx={{ bgcolor: 'red[500]', marginLeft: '1rem' }}
                                        aria-label="recipe"
                                   >
                                        <img src={author.avatar.url} alt="#" width='100%' />
                                   </Avatar>
                              }
                              title={
                                   <Typography component='p' variant='p' color='text.secondary' fontWeight='500'>
                                        {author.name}
                                   </Typography>
                              }
                         >
                         </CardHeader>
                    </Link>
               )}
               <Link to={`/blogs/${slug}`} style={{ textDecoration: 'none' }}>
                    <CardMedia
                         component="img"
                         height="194"
                         image={url}
                         alt="cover"
                    >
                    </CardMedia>
               </Link>
               <CardContent>
                    <Typography component='h3' variant="p" fontWeight='600' >
                         {shorter(title)}
                         {/* {(title)} */}
                    </Typography>
               </CardContent>
               <Divider variant='middle' />
               <Link to={`/blogs/${slug}`} style={{ textDecoration: 'none' }}>
                    <CardActions>
                         <Button variant="outlined" sx={{ width: '100%', borderRadius: 4 }} >???????? ??????????</Button>
                    </CardActions>
               </Link>
          </Card>
     );
};

export default CardEl;