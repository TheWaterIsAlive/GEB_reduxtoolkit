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
/* import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import FaqPage from './pages/FaqPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';

// class App extends React.Component {
//   render() {return (
//     <div className="App" id='app'>
//    <BrowserRouter>
//     <Switch>
//     <Route exact path="/" component={HomePage} />
//     <Route exact path="/Cart" component={CartPage} />
//     <Route exact path="/FAQ" component={FaqPage} />
//     <Route exact path="/Login" component={LoginPage} />
//     <Route exact path="/Search" component={SearchPage} />
//   </Switch>
//   </BrowserRouter>
//     </div>
//   );
// }
// }
const app = () =>{
return(<div></div>)

};


ReactDOM.render(<app />, document.getElementById('app'));

*/