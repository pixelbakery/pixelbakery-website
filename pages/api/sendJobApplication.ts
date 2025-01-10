import { getTodaysDate } from '@lib'
import mail from '@sendgrid/mail'
const busboy = require('busboy')
import type { NextApiRequest, NextApiResponse } from 'next'
import type { SendMailBody, ParsedRequest } from '@/types/general'
import type { Readable } from 'stream'
const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
if (!apiKey) {
  throw new Error('SendGrid API key is not defined')
}

mail.setApiKey(apiKey)

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function sendJobApplication(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { fields, files }: ParsedRequest = await parseReq(req)

    // Validate and transform fields
    const sendMailBody: SendMailBody = {
      about_personal: fields.about_personal || '',
      about_professional: fields.about_professional || '',
      address_line_1: fields.address_line_1 || '',
      address_line_2: fields.address_line_2 || '',
      authorized: fields.authorized || '',
      band: fields.band || '',
      commitment: fields.commitment || '',
      education: fields.education || '',
      email: fields.email || '',
      first_name: fields.first_name || '',
      hear: fields.hear || '',
      hours: fields.hours || '',
      last_name: fields.last_name || '',
      middle_name: fields.middle_name || '',
      pay: fields.pay || '',
      phone_number: fields.phone_number || '',
      position: fields.position || '',
      pronoun: fields.pronoun || '',
      social: fields.social || '',
      website: fields.website || '',
      why: fields.why || '',
      zodiac: fields.zodiac || '',
    }

    const resume = files.resume
    const tenMegabytes = 10 * 1000 * 1000
    if (Buffer.byteLength(resume.data) > tenMegabytes) {
      throw new Error('Resume is too large')
    }
    if (resume.mimeType !== 'application/pdf') {
      throw new Error('Resume must be a pdf')
    }

    await sendMail(sendMailBody, files)

    return res.status(200).json({ done: true })
  } catch (e) {
    console.error('error', e)
    return res.status(500).json({ done: true })
  }
}

function parseReq(req: NextApiRequest): Promise<ParsedRequest> {
  return new Promise((resolve) => {
    const fields: ParsedRequest['fields'] = {}
    const files: ParsedRequest['files'] = {}
    const bb = busboy({ headers: req.headers })

    bb.on(
      'file',
      (
        name: string,
        file: Readable, // Changed from NodeJS.ReadableStream to Readable
        info: { filename: string; encoding: string; mimeType: string },
      ) => {
        const { filename, encoding, mimeType } = info
        let fileData: Buffer | null = null

        file
          .on('data', (data: Buffer) => {
            if (fileData === null) {
              fileData = data
            } else {
              fileData = Buffer.concat([fileData, data])
            }
          })
          .on('close', () => {
            files[name] = {
              filename,
              encoding,
              mimeType,
              data: fileData!,
            }
          })
      },
    )

    bb.on('field', (name: string, val: string) => {
      fields[name] = val
    })

    bb.on('close', () => {
      resolve({ files, fields })
    })

    req.pipe(bb)
  })
}

async function sendMail(body: SendMailBody, files: ParsedRequest['files']) {
  const resume = files.resume
  const attachmentName = `${body.first_name}_${body.last_name}_${getTodaysDate()}_resume`

  await mail.send({
    to: `careers@pixelbakery.com`,
    from: {
      email: 'careers@pixelbakery.com',
      name: 'Pixel Bakery Robot',
    },
    subject: `Job Application: ${body.first_name} ${body.last_name} – ${body.position}`,
    templateId: 'd-9c9d902a4d9f49da8d65e2176f582f23',
    dynamicTemplateData: {
      about_personal: `${body.about_personal}`,
      about_professional: `${body.about_professional}`,
      address_line_1: `${body.address_line_1}`,
      address_line_2: `${body.address_line_2}`,
      authorized: `${body.authorized}`,
      band: `${body.band}`,
      commitment: `${body.commitment}`,
      education: `${body.education}`,
      email: `${body.email}`,
      first_name: `${body.first_name}`,
      hear: `${body.hear}`,
      hours: `${body.hours}`,
      last_name: `${body.last_name}`,
      middle_name: `${body.middle_name}`,
      pay: `${body.pay}`,
      phone_number: `${body.phone_number}`,
      position: `${body.position}`,
      pronoun: `${body.pronoun}`,
      social: `${body.social}`,
      website: `${body.website}`,
      why: `${body.why}`,
      zodiac: `${body.zodiac}`,
    },
    attachments: [
      {
        content: `${resume.data.toString('base64')}`,
        filename: `${attachmentName}.pdf`,
        type: 'application/pdf',
        disposition: 'attachment',
      },
    ],
  })
}
