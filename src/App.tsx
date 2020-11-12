import React from 'react';
import Navbar from 'components/Navbar';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from 'views/Home';
import { AppContextProvider } from 'context';

const client = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <Navbar />
        <main>
          <Home />
        </main>
      </AppContextProvider>
    </ApolloProvider>
  );
}

export default App;
