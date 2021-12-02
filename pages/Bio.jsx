import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import team from '../data/team'
import TeamBio from '../components/pg-about/about-bios'

function Team() {
  const [id, setId] = useState()
  // const [id, setId] = useState(useParams().id)
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [color_text, setTextColor] = useState('')
  const [social_instagram, setInstagram] = useState('')
  const [social_linkedin, setLinkedin] = useState('')
  const [social_spotify, setSpotify] = useState('')
  const [image_headshot, setHeadshot] = useState('')
  const [image_blunder, setBlunder] = useState('')
  const [details_college, setCollege] = useState('')
  const [details_pronoun, setPronoun] = useState('')
  const [details_mostFavorite, setMostFavorite] = useState('')
  const [details_leastFavorite, setLeastFavorite] = useState('')
  const [details_signs_rising, setSignRising] = useState('')
  const [details_signs_sun, setSignSun] = useState('')
  const [details_signs_moon, setSignMoon] = useState('')
  const [details_hireDate, setHireDate] = useState('')
  const [details_book, setBook] = useState('')
  const [details_aesthetic, setAesthetic] = useState('')
  const [bio, setBio] = useState('')

  useEffect(() => {
    for (var i = 0; i < team.length; i++) {
      var obj = team[i]
      if (obj.url == id) {
        setName(obj.name)
        setTitle(obj.title)
        setEmail(obj.email)
        setPhone(obj.phone)
        setTextColor(obj.color_text)
        setInstagram(obj.social_instagram)
        setLinkedin(obj.social_linkedin)
        setSpotify(obj.social_spotify)
        setHeadshot(obj.image_headshot)
        setBlunder(obj.image_blunder)
        setCollege(obj.details_college)
        setPronoun(obj.details_pronoun)
        setMostFavorite(obj.details_mostFavorite)
        setLeastFavorite(obj.details_leastFavorite)
        setSignRising(obj.details_signs_rising)
        setSignSun(obj.details_signs_sun)
        setSignMoon(obj.details_signs_moon)
        setHireDate(obj.details_hireDate)
        setBook(obj.details_book)
        setAesthetic(obj.details_aesthetic)
        setBio(obj.bio)
      }
    }
  })

  return (
    <main className='content'>
      <TeamBio
        id={id}
        name={name}
        title={title}
        phone={phone}
        email={email}
        color_text={color_text}
        social_instagram={social_instagram}
        social_linkedin={social_linkedin}
        social_spotify={social_spotify}
        image_headshot={image_headshot}
        image_blunder={image_blunder}
        details_college={details_college}
        details_pronoun={details_pronoun}
        details_mostFavorite={details_mostFavorite}
        details_leastFavorite={details_leastFavorite}
        details_signs_rising={details_signs_rising}
        details_signs_sun={details_signs_sun}
        details_signs_moon={details_signs_moon}
        details_hireDate={details_hireDate}
        details_book={details_book}
        details_aesthetic={details_aesthetic}
        bio={bio}
      />
    </main>
  )
}

export default Team
