export const LOAD_TRACKS = 'LOAD_TRACKS';
export const CHANGE_TRACK = 'CHANGE_TRACK';
export const TRACKS_LOADED = 'TRACKS_LOADED';
export const GET_PLAYTOKEN = 'GET_PLAYTOKEN';


export function getPlayToken(newState) {
  return function (dispatch) {
    let variable = fetch("http://8tracks.com/sets/new.json?api_version=3&api_key=f8b2d50b399995fff7eb2b38bebaeda4ea559b8b");
       variable.then((response) => response.json())
       .then((responseData) => {
         dispatch(setPlayToken(responseData.play_token));
         dispatch(loadTracks());
         console.log(responseData);
       });
    };
}

export function setPlayToken(play_token) {
  return {
    type: GET_PLAYTOKEN,
    playToken: play_token
    };
}



export function changeTrack() {
  return function (dispatch, getState) {
    let variable = fetch("http://8tracks.com/sets/"+getState().tracks.playToken+"/next.json?mix_id="+getState().playlists.selectedPlaylist.id+"&api_version=3&api_key=f8b2d50b399995fff7eb2b38bebaeda4ea559b8b");
       variable.then((response) => response.json())
       .then((responseData) => {
         dispatch(loadTracks());
         console.log(responseData);
       });
    };
}

export function loadTracks() {
  return function (dispatch, getState) {
    let variable = fetch("http://8tracks.com/sets/"+getState().tracks.playToken+"/play.json?mix_id="+getState().playlists.selectedPlaylist.id+"&api_version=3&api_key=f8b2d50b399995fff7eb2b38bebaeda4ea559b8b");
       variable.then((response) => response.json())
       .then((responseData) => {
         dispatch(tracksLoaded(responseData.set))
         console.log(responseData.set);
       });
    };
}

export function tracksLoaded(data) {
  return {
    type: TRACKS_LOADED,
    loading: false,
    selectedTrack : {
      "url": data.track.track_file_stream_url
      }
    };
}
