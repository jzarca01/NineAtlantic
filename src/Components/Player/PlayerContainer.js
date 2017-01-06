import Player from './Player';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeTrack, loadTracks, getPlayToken } from '../../Actions/Player'

function mapStateToProps(state) {
  return { "track": state.tracks, "selectedPlaylist": state.playlists.selectedPlaylist }; // faire l'architecture du store
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeTrack, loadTracks, getPlayToken}, dispatch) // a changer
}


export default connect(mapStateToProps, mapDispatchToProps)(Player)
