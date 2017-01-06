import { CHANGE_PLAYLIST, LOAD_PLAYLISTS, PLAYLISTS_LOADED } from '../Actions/Playlist';

let defaultState = {
    "selectedPlaylist": {
      "id": 4938096,
      "cover_urls": {
        "original": "http://www.w3schools.com/css/trolltunga.jpg"
      }
    },
    "playlistsFeed": 'http://8tracks.com/users/drpepp/liked_mixes.json?api_version=3&api_key=f8b2d50b399995fff7eb2b38bebaeda4ea559b8b',
    "playlists": [],
    "loading": true,
}

let newState;

export default function(state = defaultState, action) {
  switch ( action.type ) {
    case CHANGE_PLAYLIST:
      newState = { ...state, "selectedPlaylist": action.selectedPlaylist, "playlists": []}
      return newState;
    case LOAD_PLAYLISTS:
      newState = { ...state, "loading" : action.loading};
      return newState;
    case PLAYLISTS_LOADED:
      newState = { ...state, "selectedPlaylist": action.selectedPlaylist, "playlists": action.playlists, "loading": action.loading}
      return newState;
    default:
      return state;
  }
}
