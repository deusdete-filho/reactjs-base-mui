import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Table, AppBar, Toolbar, IconButton, Container,Footer  } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  root:{
    flexGrow: 1
  }
}

class App  extends Component {
  render(){
  const {classes} = this.props;
  return (
    <div className={classes.root}>
      <AppBar>
        <Container>
        <Toolbar position="static">
        <Table>
          <tr className="mui--appbar-height">
            <td className="mui--text-title">Brand.io</td>
            <td align="mui--text-right">
              <ul className="mui-list--inline mui--text-body2">
                <a href="#">About</a>
                <a href="#">Pricing</a>
                <a href="#">Login</a>
              </ul>
            </td>
          </tr>
        </Table>

        <IconButton>

        </IconButton>
        </Toolbar>
        </Container>
      </AppBar>
      <Container>
        
      <p>ffdfdffd</p>        <p>ffdfdffd</p>        <p>ffdfdffd</p>        <p>ffdfdffd</p>
      </Container>
     
      

    </div>
  );
}
}

export default withStyles(styles)(App);
