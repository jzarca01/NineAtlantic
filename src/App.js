// @flow
import React, { Component } from 'react';
import { Grid, Navbar, Col, Row } from 'react-bootstrap';
import PlaylistContainer from './Components/Playlists/PlaylistContainer';
import PlayerContainer from './Components/Player/PlayerContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Nine Atlantic</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
          <Grid>
            <Row>
              <Col md={8} xs={12} style={{display: 'flex', justifyContent: 'center', marginBottom: '10vh'}}>
                <PlayerContainer />
              </Col>
              <Col md={4} xs={12}>
                <PlaylistContainer />
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
