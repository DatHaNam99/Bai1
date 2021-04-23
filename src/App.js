import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NewFood from './component/NewFood';
import Home from './component/home';



function App() {
  return (
    <>
      <Router>
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/newfood" component={NewFood} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;