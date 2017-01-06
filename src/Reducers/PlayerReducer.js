import { CHANGE_TRACK, LOAD_TRACKS, TRACKS_LOADED, GET_PLAYTOKEN } from '../Actions/Player';

let defaultState = {
    "playToken": "",
    "selectedTrack": {
      "url": "http://www.sample-videos.com/audio/mp3/india-national-anthem.mp3"
    },
    "tracksFeed": "",
    "tracks": [],
    "loading": true,
}

let newState;

export default function(state = defaultState, action) {
  switch ( action.type ) {
    case GET_PLAYTOKEN:
      console.log("coucou:   ----   ----- "+action.playToken);
      newState = { ...state, "playToken": action.playToken}
      return newState;
    case CHANGE_TRACK:
      newState = { ...state, "selectedTrack": action.selectedTrack}
      return newState;
    case LOAD_TRACKS:
      newState = { ...state, "loading": action.loading}
      return newState;
    case TRACKS_LOADED:
      newState = { ...state, "selectedTrack": action.selectedTrack, "loading": action.loading}
      return newState;
    default:
      return state;
  }
}
