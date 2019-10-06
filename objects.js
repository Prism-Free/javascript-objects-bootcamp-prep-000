var playlist = { artistName: 'songTitle'};


function updatePlaylist(playlist,artistName,songTitle) {
  var newSong = playlist.artistName = songTitle
  playlist.unshift(newSong)
  return playlist
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist.artistName
  return playlist
}