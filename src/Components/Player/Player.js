import React,  { Component, PropTypes } from 'react';
import { Row, Image, Col, Button } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';


export default class Player extends Component {

  static propTypes = {
    selectedPlaylist: PropTypes.object.isRequired,
    tracks : PropTypes.shape({
      "selectedTrack": PropTypes.object.isRequired,
      "tracksFeed": PropTypes.string.isRequired,
      "tracks": PropTypes.array.isRequired,
      "loading": PropTypes.bool.isRequired,
      "image": PropTypes.string.isRequired,
    }),
    "loadTracks": PropTypes.func.isRequired,
    "changeTrack": PropTypes.func.isRequired,

  }

  componentWillMount() {
    this.props.getPlayToken(this.props);
  }

  shouldComponentUpgrade() {
    return true;
  }

  _changeTrack() {
    return this.props.changeTrack(this.props);
  }

  render() {
    return (
      <Col>
        <Row>
          <Image style={{height: '300px', maxWidth: '300px'}} circle src={this.props.selectedPlaylist.cover_urls.original} />
        </Row>
        <ReactAudioPlayer src={this.props.track.selectedTrack.url} autoplay="true" onEnded={() => this._changeTrack()}/>
        <Row>
            <Button style={{float: 'right'}} onClick={() => this._changeTrack()}>Next</Button>
        </Row>
      </Col>
    );
  }
}
