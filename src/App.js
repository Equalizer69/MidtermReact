
import react, { useState } from 'react';
import {AuthContext} from './Context/Context';
import {Switch, Route} from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import MainPage from './Pages/Main/MainPage';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={loggedIn}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Dashboard" component={Dashboard} />
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
