var playlist = { artistName: 'songTitle'};


function updatePlaylist(playlist,artistName,songTitle) {
  var newSong = playlist.artistName = songTitle
 return playlist.unshift(newSong)
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist.artistName
  return playlist
}