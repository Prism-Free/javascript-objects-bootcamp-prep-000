var playlist = { artistName: 'songTitle'};


function updatePlaylist(playlist,artistName,songTitle) {
  var newSong = {[artistName]: 'songTitle'}
  return playlist
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist.artistName
  return playlist
}