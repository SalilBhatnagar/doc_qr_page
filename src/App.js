import "./App.css";
import "./Assets/css/style.css";
import "./Assets/css/animation.css";
import Home from "./Container/Home";
import BlankPage from "./Component/BlankPage";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderPage from "./Component/Header/HeaderPage";
import For_balancepdf from "./Component/for_balancepdf_page"
function App(props) {
  return (
    <div className="App">
       {/* <Home /> */}
        <Router>
          <Route
            path="/"
            exact
            strict
            component={Home}
            history={props.history}
          />
            <Route
            path="/BlankPage"
            exact
            strict
            component={BlankPage}
            history={props.history}
          />
           <Route
            path="/HeaderPage"
            exact
            strict
            component={HeaderPage}
            history={props.history}
          />
          <Route
            path="/for_balancepdf"
            exact
            strict
            component={For_balancepdf}
            history={props.history}
          />
        
      </Router>
    </div>
    
  );
}

export default App;
