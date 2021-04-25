
import './App.css';
import React, {useState} from 'react';
import {Switch,Route} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import Conversation from './components/Conversation';
import Notes from './components/Notes';
import CommanGrid from './components/CommanGrid';

const App = () =>{
  const routes = (
    <Switch>
        <Route path = "/notes"  component = {Notes} />
        <Route path = "/conversation"  component = {Conversation} />
    </Switch>
  );
  
    return (
      <>
       <CssBaseline />
       <Container maxWidth = "lg">
          <CommanGrid>
            {routes}
          </CommanGrid>
       </Container>
      </>
    );
}

export default App;
