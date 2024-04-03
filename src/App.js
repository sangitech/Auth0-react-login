import Dashboard from './components/dashboard';
import Home from './components/homepage';
import Navbar from './components/navbar';
import ProdectedRoute from './components/prodectedRoute';
import { Auth0Provider } from '@auth0/auth0-react';
import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './App.css';
import useAuthListener from './components/auth/useAuthListener';
import background from './images/background.jpg'

function App() {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  console.log('test = ', domain);
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: process.env.REACT_APP_REDIRECT_URL
      }}
    >
      <Provider store={store}>
        <AppContent />
      </Provider>
    </Auth0Provider>
  );
}

function AppContent() {
  const auth = useAuthListener()
  const { isAuthenticated } = auth;
  let adminclass = '';
  if (isAuthenticated) {
    adminclass = 'admin';
  }

  const routeArray = [
    {
      path: "*",
      element: <Home />
    },
    {
      path: "/dashboard",
      element: <ProdectedRoute auth={auth}><Dashboard /></ProdectedRoute>
    }
  ]

  const routeElement = useRoutes(routeArray)
  return (
    <div style={{ backgroundImage: `url(${background})` }} className='section-style'>
      <div className={'container ' + adminclass}>
        <div className="card">
          <div className="content">
            {routeElement}
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
