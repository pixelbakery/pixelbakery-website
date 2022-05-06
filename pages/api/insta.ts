import { PrismaClient } from '@prisma/client'


async function fetchToken(previousToken: string) {

  const params = new URLSearchParams({
    grant_type: "ig_refresh_token",
    access_token: previousToken,
  })

  const url = `https://graph.instagram.com/refresh_access_token?` + params

  const result = await fetch(url)
  const json = await result.json()

  return json
}

async function fetchImages(token: string) {
  const params = new URLSearchParams({
    fields: 'media_count,media_type,permalink,media_url,caption',
    limit: '14',
    access_token: process.env.INSTAGRAM_ACCESS_TOKEN
  })

  const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&access_token=${token}` + params

  const ins = await fetch(url)
  
  const json = await ins.json()
  
  console.log(json)
  return json
}

export default async function insta(req, res) {
  const prisma = new PrismaClient()

  let info = await prisma.info.findFirst()
  if (!info) {
    info = await prisma.info.create({
      data: {
        access_token: '',
        last_image_refresh: new Date(1970, 1, 1),
        last_token_refresh: new Date(1970, 1, 1)
      }
    })
  }

  const now = new Date()


  if (info.last_token_refresh.getDay() !== now.getDay()) {
    
    const t: any = await fetchToken(info.access_token as any)
    if (t.access_token) {
      info = await prisma.info.update({
        where: { id: info.id },
        data: { 
          last_token_refresh: new Date(),
          access_token: t.access_token,
        }
      })  
    }
    
  }

  let instaImages = []
  if (info.last_image_refresh.getDay() !== now.getDay()) {
    await prisma.instagramLink.deleteMany({ })
    let images = await fetchImages(info.access_token)
    
    let promises = images.data.map((img: any) => {
      
      return prisma.instagramLink.create({
        data: {
          instagram_id: img.id,
          media_type: img.media_type,
          permalink: img.permalink,
          media_url: img.media_url,
          caption: img.caption,
        }
      })
    })
    
    instaImages = await Promise.all(promises)
  } else {
    instaImages = await prisma.instagramLink.findMany({})
  }


  res.status(200).json({
    status: 'Ok',
    images: instaImages,
  })
}
