import React,  { Component, PropTypes } from 'react';
import { Media, Image } from 'react-bootstrap';

class PlayListItem extends Component {

  static propTypes = {
    image : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
  }

  render() {
    return (
        <Media>
          <Media.Left align="top">
            <Image style={{width: '64px', height: '64px'}} circle src={this.props.image} />
          </Media.Left>
          <Media.Body>
            <Media.Heading>{this.props.name}</Media.Heading>
          </Media.Body>
        </Media>
    );
  }
}

export default class PlayList extends Component {

  static propTypes = {
    selectedPlaylist: PropTypes.object.isRequired,
    playlistsFeed : PropTypes.string.isRequired,
    playlists: PropTypes.array.isRequired,
    loadPlaylists: PropTypes.func.isRequired,
    changePlaylist: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentWillMount() {
    this.props.loadPlaylists(this.props);
  }

  shouldComponentUpgrade() {
    return true;
  }

  _changePlaylist() {
      this.props.changePlaylist(this.props);
    }

  render() {
    return (
      <div>
        {this.props.playlists.map(createPlaylistItem)}
      </div>
    )
  }
}

function createPlaylistItem(el, i) {
  return (
    <PlayListItem key={i} name={el.name} image={el.cover_urls.sq72} />
  );
}
