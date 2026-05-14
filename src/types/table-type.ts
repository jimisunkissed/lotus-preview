export type ChannelProps = {
  created_at: string
  id: number
  image_banner: string | null
  image_profile: string | null
  name: string
  slug: string
  updated_at: string
}

export type PictureProps = {
  age_rating: string | null
  cast: string[] | null
  channel_id: number | null
  country_of_origin: string[] | null
  created_at: string | null
  director: string
  genre: string | null
  id: number
  image_banner: string | null
  image_thumbnail: string
  imdb_id: string | null
  keywords: string[] | null
  original_language: string | null
  production_company: string[] | null
  release_date: string | null
  slug: string
  status: string | null
  synopsis: string | null
  title: string
  trailer_stream_id: string | null
  type: 'film' | 'series' | 'documentary'
  updated_at: string | null
  writer: string | null
}

export type PictureSeasonProps = {
  age_rating: string | null
  channel_id: number | null
  created_at: string | null
  end_date: string | null
  episode_count: number | null
  id: number
  image_banner: string | null
  image_thumbnail: string | null
  picture_id: number
  release_date: string | null
  runtime_minutes: number | null
  season_number: number
  status: string | null
  synopsis: string | null
  title: string | null
  trailer_stream_id: string | null
  updated_at: string | null
}

export type PictureStreamProps = {
  access_level: 'free' | 'premium' | 'subscription'
  age_rating: string | null
  asset_id: string | null
  asset_playback_id: string | null
  asset_provider: 'mux' | null
  audio_codec: string | null
  category: 'main_content' | 'trailer' | 'teaser' | 'behind_the_scenes' | 'interview' | 'deleted_scene' | 'recap' | 'preview'
  created_at: string | null
  currency: string | null
  episode_number: number | null
  id: string
  image_banner: string | null
  image_thumbnail: string | null
  language: string[] | null
  picture_id: number
  price_purchase: number | null
  price_rent: number | null
  quality: string[] | null
  release_date: string | null
  resolution: string | null
  runtime_minutes: number | null
  season_id: number | null
  status: string | null
  subtitle_languages: string[] | null
  synopsis: string | null
  title: string
  updated_at: string | null
  video_codec: string | null
}

export type PictureWatchProps = {
  picture: PictureProps | null
  seasons: PictureSeasonProps[] | null
  stream_main_content: PictureStreamProps | null
  stream_trailer_id: string | null
  stream_teaser_id: string | null
}

export type StreamAccessProps = {
  created_at: string
  id: string
  picture_id: number | null
  rent_expires_at: string | null
  rent_order_id: string | null
  rented_at: string | null
  stream_id: string | null
  updated_at: string | null
  user_id: string | null
  view_expires_at: string | null
  viewed_at: string | null
}

export type StreamOrderProps = {
  created_at: string | null
  id: string
  updated_at: string | null
  user_id: string
}

export type UserProps = {
  country: string | null
  created_at: string | null
  date_of_birth: string | null
  dial_code: string | null
  email: string
  first_name: string | null
  gender: string | null
  id: string
  last_name: string | null
  phone_number: string | null
  updated_at: string | null
}
