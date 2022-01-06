import Socials from './socials'

type PersonType = {
  active: boolean
  slug: string
  name: string
  title: string
  phone: string
  email: string
  socials: Socials
  details: {
    almaMater: string
    pronoun: string
    favoriteThing: string
    leastFavoriteString: string
    favoriteMovie: string
    hatedBird: string
    hobby: string
    joinedPB: string
    favoriteBook: string
    personalAesthetic: string
    signs: {
      sun: string
      rising: string
      moon: string
    }
  }
  photos: {
    blunderPhoto: string
    headshotSerious: string
    headshotSmiling: string
    headshotFun: string
  }
  content: string
}

export default PersonType
