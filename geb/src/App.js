import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import FaqPage from './pages/FaqPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import { Route, Switch } from 'react-router-dom';




function App() {
 
  return (
    <main>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/Cart" component={CartPage} />
    <Route exact path="/FAQ" component={FaqPage} />
    <Route exact path="/Login" component={LoginPage} />
    <Route exact path="/Search" component={SearchPage} />
    </main>
  );
}

export default App;
