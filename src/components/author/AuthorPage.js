import React from 'react';
import { useParams } from 'react-router-dom';


const AuthorPage = () => {

     const slug = useParams().slug
     console.log(slug);

     return (
          <div>
               AuthorPage
          </div>
     );
};

export default AuthorPage;