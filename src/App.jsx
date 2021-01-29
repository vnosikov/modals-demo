/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import ModalsManager, { ModalsManagerContext } from './components/ModalsManager';

function App() {
  const modalsController = React.createRef();

  const openModal = (Content, onConfirm, additionalData) => {
    modalsController.current.open(Content, onConfirm, additionalData);
  };

  return (
    <>
      <ModalsManager ref={modalsController} />
      <Container>
        <Header />
        <Router>
          <Switch>
            <Route
              path="/details"
              render={() => <Details openModal={openModal} />}
            />
            <Route
              path="/"
              render={() => <Home openModal={openModal} />}
            />
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
