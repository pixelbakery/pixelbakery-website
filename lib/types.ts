export type Song = {
  songUrl: string
  artist: string
  title: string
}

export type NowPlayingSong = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

export type Playlist = {
  album: string
  albumImageUrl: string
  albumCoverImage: string
  name: string
  artist: string
  isPlaying: boolean
  total: number
  tracks: any
  external_urls: string
  followers: any
  albumLength: string
  spotify: string
  description: string
  tracksSelected: any
  songUrl: string
  title: string
  id: string
}

export type TopTracks = {
  tracks: Song[]
}
