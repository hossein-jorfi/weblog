import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const clinet = new ApolloClient({
     uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clegjnd110sej01t3202uh15w/master',
     cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <ApolloProvider client={clinet}>
          <App />
     </ApolloProvider>
);