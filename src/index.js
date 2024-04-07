import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = process.env.REACT_APP_AUDIENCE;
ReactDOM.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          audience: audience,
        }}
        redirectUri={window.location.origin}
        useRefreshTokens
        cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>,
    document.getElementById('root')
);
