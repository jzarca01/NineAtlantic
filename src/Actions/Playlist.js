export const CHANGE_PLAYLIST = 'CHANGE_PLAYLIST';
export const LOAD_PLAYLISTS = 'LOAD_PLAYLISTS';
export const PLAYLISTS_LOADED = 'PLAYLISTS_LOADED';

export function changePlaylist(newState) {
  return {
    type: CHANGE_PLAYLIST,
    selectedPlaylist: newState.selectedPlaylist,
    playlists: newState.playlists,
    loading: true
  }
}

export function loadPlaylists(newState) {
  return function (dispatch) {
    let variable = fetch(newState.playlistsFeed);
       variable.then((response) => response.json())
       .then((responseData) => {
         dispatch(playlistsLoaded(responseData.mix_set.mixes))
         console.log(responseData.mix_set.mixes);
       });
    };
}

export function playlistsLoaded(items) {
  return {
    type: PLAYLISTS_LOADED,
    selectedPlaylist: items[0],
    loading: false,
    playlists: items
  }
}
