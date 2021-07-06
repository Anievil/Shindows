import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Start from './pages/FirstLoading/FirstLoading'
import Login from './pages/Autorization/Autorization'
import WorkPlace from './pages/WorkPlace/WorkPlace'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Start} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/workplace' component={WorkPlace} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
