var playlist = { artistName: 'songTitle'};


function updatePlaylist(playlist,artistName,songTitle) {
  var newSong = {[artistName]: 'songTitle'}
  playlist.unshift(newSong)
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist.artistName
  return playlist
}