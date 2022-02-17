import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home, Browse, Singin, Signup } from './pages';

import * as ROUTES from './constants/routes';

const App = () => {
  return (
    <Router>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.SING_IN}>
        <Singin />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
};

export default App;
