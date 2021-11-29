import React from 'react'
import { RosterBio } from '../../data/roster'

export default function TeamBio({
  id,
  name,
  title,
  email,
  phone,
  color_text,
  social_instagram,
  social_linkedin,
  social_spotify,
  image_headshot,
  image_blunder,
  details_college,
  details_pronoun,
  details_mostfavorite,
  details_leastfavorite,
  details_signs_rising,
  details_signs_sun,
  details_signs_moon,
  details_hiredate,
  details_book,
  details_aesthetic,
  bio,
}: RosterBio) {
  return (
    <>
      <section className=' lander mx-auto flex flex-col justify-center mb-4' id={id}>
        <div className='self-center max-w-6xl grid grid-cols-2 gap-16'>
          <div className=''>
            <div className='px-12'>
              <img src={image_headshot} />
            </div>
          </div>
          <div className='max-w-lg'>
            <h1>{name}</h1>
            <p className='my-3 text-lg text-wine font-semibold italic opacity-80'>{title}</p>
            <div className='flex justify-between text-peach italic mb-8'>
              <a href={'mailto:' + email} target='_blank'>
                {email}
              </a>
              <a href={'tel:' + phone} target='_blank'>
                {phone}
              </a>
            </div>
            <p className='mb-4 text-wine text-lg'>{bio}</p>
            <div className='flex justify-start'>
              <a href={social_instagram}>Instagram</a>
            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto my-8 max-w-6xl'>
        <div className='grid grid-cols-4 '>
          <div className=''>
            <h2 className={'mb-3 text-4xl ' + color_text}>Alma Mater</h2>
            <p className=''>{details_college}</p>
          </div>
          <div className=''>
            <h2 className={'mb-3 text-4xl ' + color_text}>Pronouns</h2>
            <p className='lead'>{details_pronoun}</p>
          </div>

          <div className=''>
            <h2 className={'mb-3 text-4xl ' + color_text}>Favorite Thing</h2>
            <p className='lead'>{details_mostfavorite}</p>
          </div>
          <div className=''>
            <h2 className={'mb-3 text-4xl ' + color_text}>Least Favorite Thing</h2>
            <p className='lead'>{details_leastfavorite}</p>
          </div>
          <div className=''>
            <h2 className={'mb-3 text-4xl ' + color_text}>Signs</h2>
            <ul>
              <li>Sun: {details_signs_sun}</li>
              <li>Rising: {details_signs_rising}</li>
              <li>Moon: {details_signs_moon}</li>
            </ul>
          </div>
          <div className=''>
            <h2 className={'mb-3 text-4xl ' + color_text}>Joined PB</h2>
            <p className='lead'>{details_hiredate}</p>
          </div>
          <div className=''>
            <h2 className={'mb-3 text-4xl ' + color_text}>Favorite Book</h2>
            <p className='lead'>{details_book}</p>
          </div>
          <div className=''>
            <h2 className={'mb-3 text-4xl ' + color_text}>Personal Aesthetic</h2>
            <p className='lead'>{details_aesthetic}</p>
          </div>
        </div>
      </section>
    </>
  )
}

// title
// email
// phone
// social_instagram
// social_facebook
// social_linkedin
// social_spotify
// image_headshot
// image_blunder
// details_college
// details_pronoun
// details_mostfavorite
// details_leastfavorite
// details_signs_sun
// details_signs_rising
// details_signs_moon
// details_hiredate
// details_book
// details_aesthetic
// bio
