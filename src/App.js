import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NewFood from './component/NewFood';
import Home from './component/home';
import DeleteFood from './component/DeleteFood';
import EditFood from './component/EditFood';



function App() {
  return (
    <>
      <Router>
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/newfood" component={NewFood} />
            <Route path="/deletefood" component={DeleteFood} />
            <Route path="/editfood/:id" component={EditFood} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;