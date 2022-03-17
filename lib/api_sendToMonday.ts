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

const MondayAuth = process.env.NEXT_PUBLIC_MONDAY_AUTH

// Job Application
export async function SendToMonday_JobApplication(data) {
  const query = `mutation ($applicant: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard_JobApplication}, item_name:$applicant, column_values:$columnVals) { id } }`
  const vars = {
    applicant: `${data.first_name} ${data.middle_name} ${data.last_name}`,
    columnVals: JSON.stringify({
      pronouns9: data.pronoun,
      text: data.position,
      status1: data.commitment,
      portfolio: data.website,
      link4: { url: data.social, text: data.social },
      phone: data.phone,
      text31: data.email,
      dropdown5: data.zodiac,
    }),
  }
  fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${MondayAuth}`,
    },
    body: JSON.stringify({
      query: query,
      variables: JSON.stringify(vars),
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(JSON.stringify(res, null, 2)))
}

//Job Shadow
export async function SendToMonday_JobShadow(data) {
  const query = `mutation ($name: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard_JobShadow}, item_name:$name, column_values:$columnVals) { id } }`
  const vars = {
    name: data.name,
    columnVals: JSON.stringify({
      text: data.school,
      email: { email: data.email, text: data.email },
      long_text: { text: data.message },
      checkbox: { checked: data.check.toString() },
      checkbox9: { checked: data.checkNoParents.toString() },
      checkbox2: { checked: data.check3People.toString() },
    }),
  }
  fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${MondayAuth}`,
    },
    body: JSON.stringify({
      query: query,
      variables: JSON.stringify(vars),
    }),
  }).then((res) => res.json())
}

//onboarding form
export async function SendToMonday_Onboarding(data) {
  const query = `mutation ($name: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard_Onboarding}, item_name:$name, column_values:$columnVals) { id } }`
  const vars = {
    name: data.name,
    columnVals: JSON.stringify({
      text: data.company,
      email: { email: data.email, text: data.email },
      text6: data.subject,
      long_text: { text: data.message },
      checkbox: { checked: data.check.toString() },
    }),
  }
  fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${MondayAuth}`,
    },
    body: JSON.stringify({
      query: query,
      variables: JSON.stringify(vars),
    }),
  }).then((res) => res.json())
}

//Croissants
export async function SendToMonday_Croissants(data) {
  data.tag = 'Croissants'
  const query = `mutation ($email: String!) { create_item (board_id:${MondayBoard_Croissants}, item_name:$email) { id } }`
  const vars = {
    email: data.email,
  }
  fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${MondayAuth}`,
    },
    body: JSON.stringify({
      query: query,
      variables: JSON.stringify(vars),
    }),
  }).then((res) => res.json())
}

//Contact Form
export async function SendToMonday_ContactForm(data) {
  const strippedPhone = data.phone.replace(/[^+\d]+/g, '')
  const query5 = `mutation ($subject: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard_Contact}, item_name:$subject, column_values:$columnVals) { id } }`
  const vars = {
    subject: data.subject,
    columnVals: JSON.stringify({
      text: data.name,
      text0: data.entity,
      //  date4: { date: getDate(), time: getTime() },
      long_text: { text: data.message },
      text6: data.name,
      phone: { phone: strippedPhone, countryShortName: 'US' },
      //  text6: { text: data.name },
      email: { email: data.email, text: data.email },
      checkbox: { checked: data.check.toString() },
    }),
  }
  fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${MondayAuth}`,
    },
    body: JSON.stringify({
      query: query5,
      variables: JSON.stringify(vars),
    }),
  }).then((res) => res.json())
}

//Logo Animation
export async function SendToMonday_LogoAnimation(data) {
  let logoPackage = data.package
  if (data.package == 'kitchenSink') {
    logoPackage = 'Kitchen Sink'
  }
  const query = `mutation ($name: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard_Logos}, item_name:$name, column_values:$columnVals) { id } }`
  const vars = {
    name: data.name,
    columnVals: JSON.stringify({
      status: logoPackage,
      text: data.phone,
      email: { email: data.email, text: data.email },
      text6: data.entity,
      long_text: { text: data.message },
      checkbox: { checked: data.check.toString() },
    }),
  }
  fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${MondayAuth}`,
    },
    body: JSON.stringify({
      query: query,
      variables: JSON.stringify(vars),
    }),
  }).then((res) => res.json())
}

//Tutorial Requests
export async function SendToMonday_Tutorials(data) {
  const strippedPhone = data.phone.replace(/[^+\d]+/g, '')
  const query5 = `mutation ($subject: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard_Tutorials}, item_name:$subject, column_values:$columnVals) { id } }`
  const vars = {
    subject: data.subject,
    columnVals: JSON.stringify({
      status: { label: 'Done' },
      //  date4: { date: getDate(), time: getTime() },
      long_text: { text: data.message },
      text6: data.name,
      phone: { phone: strippedPhone, countryShortName: 'US' },
      //  text6: { text: data.name },
      email: { email: data.email, text: data.email },
    }),
  }
  fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${MondayAuth}`,
    },
    body: JSON.stringify({
      query: query5,
      variables: JSON.stringify(vars),
    }),
  }).then((res) => res.json())
}
