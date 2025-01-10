////////////
// ENV
////////////
const MondayBoard_JobApplication = process.env.NEXT_PUBLIC_MONDAY_BOARD_JOBAPPLICATION
const MondayBoard_JobShadow = process.env.NEXT_PUBLIC_MONDAY_BOARD_JOBSHADOW
const MondayBoard_Onboarding = process.env.NEXT_PUBLIC_MONDAY_BOARD_ONBOARDING
const MondayBoard_Croissants = process.env.NEXT_PUBLIC_MONDAY_BOARD_CROISSANT
const MondayBoard_Tutorials = process.env.NEXT_PUBLIC_MONDAY_BOARD_TUTORIALS
const MondayBoard_Logos = process.env.NEXT_PUBLIC_MONDAY_BOARD_LOGOS
const MondayBoard_Contact = process.env.NEXT_PUBLIC_MONDAY_BOARD_CONTACTFORM
const MondayBoard_Freelancers = process.env.NEXT_PUBLIC_MONDAY_BOARD_FREELANCERFORM
const MondayAuth = process.env.NEXT_PUBLIC_MONDAY_AUTH

////////////
// TYPES
////////////

type MondayColumnValues = Record<string, any>

interface MondayData {
  name?: string
  email?: string
  phone?: string
  [key: string]: any
}

////////////
// HELPERS
////////////

async function sendToMonday(boardId: string, itemName: string, columnValues: MondayColumnValues) {
  const query = `mutation ($itemName: String!, $columnValues: JSON!) {
    create_item(board_id: ${boardId}, item_name: $itemName, column_values: $columnValues) {
      id
    }
  }`

  const variables = {
    itemName,
    columnValues: JSON.stringify(columnValues),
  }

  try {
    const response = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${MondayAuth}`,
      },
      body: JSON.stringify({ query, variables }),
    })

    return await response.json()
  } catch (error) {
    console.error('Error sending data to Monday:', error)
    throw error
  }
}

////////////
// EXPORT FUNCTIONS
////////////

export async function SendToMonday_JobApplication(data: MondayData) {
  if (!MondayBoard_JobApplication) {
    throw new Error('MondayBoard_JobApplication ENV variable is not defined.')
  }
  const columnValues: MondayColumnValues = {
    pronouns9: data.pronoun,
    text: data.position,
    status1: data.commitment,
    portfolio: data.website,
    link4: { url: data.social, text: data.social },
    phone: data.phone,
    text31: data.email,
    dropdown5: data.zodiac,
    files: data.resume,
  }

  return sendToMonday(
    MondayBoard_JobApplication,
    `${data.first_name} ${data.middle_name} ${data.last_name}`,
    columnValues,
  )
}

export async function SendToMonday_JobShadow(data: MondayData) {
  if (!MondayBoard_JobShadow) {
    throw new Error('MondayBoard_JobShadow ENV variable is not defined.')
  }
  if (!data.name) {
    throw new Error('Name is required for SendToMonday_FreelancerForm')
  }

  const columnValues: MondayColumnValues = {
    text: data.school ?? '', // Provide a default value if undefined
    email: { email: data.email ?? '', text: data.email ?? '' }, // Handle undefined values
    long_text: { text: data.message ?? '' },
    checkbox9: { checked: data.noParents?.toString() || 'false' },
    checkbox2: { checked: data.threePeople?.toString() || 'false' },
  }

  if (!data.name) {
    throw new Error('Name is required for SendToMonday_JobShadow')
  }

  return sendToMonday(MondayBoard_JobShadow, data.name, columnValues)
}

export async function SendToMonday_Onboarding(data: MondayData) {
  if (!MondayBoard_Onboarding) {
    throw new Error('MondayBoard_Onboarding ENV variable is not defined.')
  }
  if (!data.name) {
    throw new Error('Name is required for SendToMonday_FreelancerForm')
  }

  const columnValues: MondayColumnValues = {
    text: data.company,
    text1: data.website,
    email: { email: data.email, text: data.email },
    text6: data.subject,
    long_text: { text: data.message },
    text7: data.referral,
  }

  return sendToMonday(MondayBoard_Onboarding, data.name, columnValues)
}

export async function SendToMonday_Croissants(data: MondayData) {
  if (!MondayBoard_Croissants) {
    throw new Error('MondayBoard_Croissants ENV variable is not defined.')
  }
  if (!data.email) {
    throw new Error('Email is required for SendToMonday_Croissants')
  }

  const columnValues: MondayColumnValues = { email: data.email }
  return sendToMonday(MondayBoard_Croissants, data.email, columnValues)
}

export async function SendToMonday_ContactForm(data: MondayData) {
  if (!MondayBoard_Contact) {
    throw new Error('MondayBoard_Contact ENV variable is not defined.')
  }
  if (!data.name) {
    throw new Error('Name is required for SendToMonday_ContactForm')
  }

  const strippedPhone = data.phone?.replace(/[^+\d]+/g, '') || ''
  const columnValues: MondayColumnValues = {
    text: data.name,
    text0: data.entity,
    long_text: { text: data.message },
    text6: data.name,
    phone: { phone: strippedPhone, countryShortName: 'US' },
    email: { email: data.email, text: data.email },
    status0: data.soliciting,
  }

  return sendToMonday(MondayBoard_Contact, data.subject, columnValues)
}

export async function SendToMonday_LogoAnimation(data: MondayData) {
  if (!MondayBoard_Logos) {
    throw new Error('MondayBoard_Logos ENV variable is not defined.')
  }
  if (!data.name) {
    throw new Error('Name is required for SendToMonday_LogoAnimation')
  }

  const columnValues: MondayColumnValues = {
    status: data.package === 'kitchenSink' ? 'Kitchen Sink' : data.package,
    text: data.phone,
    email: { email: data.email, text: data.email },
    text6: data.entity,
    long_text: { text: data.message },
    checkbox: { checked: data.check?.toString() || 'false' },
  }

  return sendToMonday(MondayBoard_Logos, data.name, columnValues)
}

export async function SendToMonday_Tutorials(data: MondayData) {
  if (!MondayBoard_Tutorials) {
    throw new Error('MondayBoard_Tutorials ENV variable is not defined.')
  }
  const strippedPhone = data.phone?.replace(/[^+\d]+/g, '') || ''
  const columnValues: MondayColumnValues = {
    status: { label: 'Done' },
    long_text: { text: data.message },
    text6: data.name,
    phone: { phone: strippedPhone, countryShortName: 'US' },
    email: { email: data.email, text: data.email },
  }

  return sendToMonday(MondayBoard_Tutorials, data.subject, columnValues)
}

export async function SendToMonday_FreelancerForm(data: MondayData) {
  if (!MondayBoard_Freelancers) {
    throw new Error('MondayBoard_Freelancers ENV variable is not defined.')
  }
  if (!data.name) {
    throw new Error('Name is required for SendToMonday_FreelancerForm')
  }

  const columnValues: MondayColumnValues = {
    text: data.title,
    email: { email: data.email, text: data.email },
    link: `${data.website} ${data.website}`,
    link6: { url: data.social, text: data.social },
  }

  return sendToMonday(MondayBoard_Freelancers, data.name, columnValues)
}
