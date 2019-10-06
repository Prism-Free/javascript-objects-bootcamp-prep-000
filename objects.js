var playlist = { artistName: 'songTitle'};


function updatePlaylist(playlist,artistName,songTitle) {
 // var newSong = {[artistName]: 'songTitle'}
  playlist.artistName = 'songTitle'
 // playlist[newSong]
  return playlist
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist.artistName
  return playlist
}