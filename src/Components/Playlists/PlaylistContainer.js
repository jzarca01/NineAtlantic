import PlayList from './Playlist';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changePlaylist, loadPlaylists} from '../../Actions/Playlist'

function mapStateToProps(state) {
  return state.playlists; // faire l'architecture du store
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changePlaylist, loadPlaylists}, dispatch) // a changer
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayList)
