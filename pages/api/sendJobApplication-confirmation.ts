import type { NextApiRequest, NextApiResponse } from 'next'
import mail from '@sendgrid/mail'
import { getTodaysDate } from '@lib/helpers'
import busboy from 'busboy'

export const config = {
  api: {
    bodyParser: false,
  },
}

const sendgridApiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
if (!sendgridApiKey) {
  throw new Error('SendGrid API key is not set')
}
mail.setApiKey(sendgridApiKey)

// -- Interfaces --

interface ParsedFile {
  filename: string
  encoding: string
  mimeType: string
  data: Buffer
}

interface ParsedRequest {
  fields: Record<string, string>
  files: Record<string, ParsedFile>
}

interface SendJobApplicationBody {
  first_name: string
  last_name: string
  middle_name?: string
  position: string
  address_line_1: string
  address_line_2?: string
  about_personal: string
  about_professional: string
  authorized: string
  band?: string
  commitment: string
  education: string
  email: string
  hear: string
  hours?: string
  pay?: string
  phone_number: string
  pronoun?: string
  social?: string
  website?: string
  why?: string
  zodiac?: string
}

function mapFieldsToBody(fields: Record<string, string>): SendJobApplicationBody {
  return {
    first_name: fields.first_name,
    last_name: fields.last_name,
    middle_name: fields.middle_name,
    position: fields.position,
    address_line_1: fields.address_line_1,
    address_line_2: fields.address_line_2,
    about_personal: fields.about_personal,
    about_professional: fields.about_professional,
    authorized: fields.authorized,
    band: fields.band,
    commitment: fields.commitment,
    education: fields.education,
    email: fields.email,
    hear: fields.hear,
    hours: fields.hours,
    pay: fields.pay,
    phone_number: fields.phone_number,
    pronoun: fields.pronoun,
    social: fields.social,
    website: fields.website,
    why: fields.why,
    zodiac: fields.zodiac,
  }
}
// -- Main Handler --

export default async function sendJobApplication(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { fields, files } = await parseReq(req)

    // Simple validation checks
    const resume = files.resume
    const tenMegabytes = 10 * 1000 * 1000
    if (Buffer.byteLength(resume.data) > tenMegabytes) {
      throw new Error('Resume is too large')
    }
    if (resume.mimeType !== 'application/pdf') {
      throw new Error('Resume must be a pdf')
    }
    const typedFields = mapFieldsToBody(fields)

    await sendMail(typedFields, files)
    return res.status(200).json({ done: true })
  } catch (error) {
    console.error('error', error)
    return res.status(500).json({ done: true })
  }
}

// -- Parse the Incoming Request --

function parseReq(req: NextApiRequest): Promise<ParsedRequest> {
  return new Promise((resolve) => {
    const fields: Record<string, string> = {}
    const files: Record<string, ParsedFile> = {}

    const bb = busboy({ headers: req.headers })
    bb.on('file', (name: string, file: NodeJS.ReadableStream, info: any) => {
      const { filename, encoding, mimeType } = info
      let fileData: Buffer | null = null

      file
        .on('data', (data: Buffer) => {
          fileData = fileData === null ? data : Buffer.concat([fileData, data])
        })
        .on('close', () => {
          files[name] = {
            filename,
            encoding,
            mimeType,
            data: fileData as Buffer,
          }
        })
    })

    bb.on('field', (name: string, val: string) => {
      fields[name] = val
    })

    bb.on('close', () => {
      resolve({ files, fields })
    })

    req.pipe(bb)
  })
}

// -- Send the Email --

async function sendMail(body: SendJobApplicationBody, files: Record<string, ParsedFile>) {
  const resume = files.resume
  const attachmentName = `${body.first_name}_${body.last_name}_${getTodaysDate()}_resume`

  await mail.send({
    to: body.email,
    from: {
      email: 'careers@pixelbakery.com',
      name: 'Pixel Bakery Robot',
    },
    subject: `Job Application: ${body.first_name} ${body.last_name} – ${body.position}`,
    templateId: 'd-d5c8482409ad476eb1c58b546f399f98',
    dynamicTemplateData: {
      about_personal: body.about_personal,
      about_professional: body.about_professional,
      address_line_1: body.address_line_1,
      address_line_2: body.address_line_2,
      authorized: body.authorized,
      band: body.band,
      commitment: body.commitment,
      education: body.education,
      email: body.email,
      first_name: body.first_name,
      hear: body.hear,
      hours: body.hours,
      last_name: body.last_name,
      middle_name: body.middle_name,
      pay: body.pay,
      phone_number: body.phone_number,
      position: body.position,
      pronoun: body.pronoun,
      social: body.social,
      website: body.website,
      why: body.why,
      zodiac: body.zodiac,
    },
    attachments: [
      {
        content: resume.data.toString('base64'),
        filename: `${attachmentName}.pdf`,
        type: 'application/pdf',
        disposition: 'attachment',
      },
    ],
  })
}
