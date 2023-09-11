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
const MondayBoard_InstagramMerchCampaign = process.env.NEXT_PUBLIC_MONDAY_BOARD_INSTAMERCHCAMPAIGN
const MondayBoard_Freelancers = process.env.NEXT_PUBLIC_MONDAY_BOARD_FREELANCERFORM
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
  }).then((res) => res.json())
  // .then((res) => console.log(JSON.stringify(res, null, 2)))
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
      checkbox: { checked: data.newsletter.toString() },
      checkbox9: { checked: data.noParents.toString() },
      checkbox2: { checked: data.threePeople.toString() },
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
      text1: data.website,
      email: { email: data.email, text: data.email },
      text6: data.subject,
      long_text: { text: data.message },
      text7: data.referral,
      // checkbox: { checked: data.check.toString() },
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
  let strippedPhone = ''
  if (data.phone != undefined) strippedPhone = data.phone.replace(/[^+\d]+/g, '')
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
      status0: data.soliciting,
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

// 2022 Instagram Merch Campaign

export async function SendToMonday_InstagramMerchCampaign(data) {
  const query5 = `mutation ($name: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard_InstagramMerchCampaign}, item_name:$name, column_values:$columnVals) { id } }`
  const vars = {
    name: data.name,
    columnVals: JSON.stringify({
      text: data.address,
      dropdown5: data.size,
      people0: data.instagram,
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
      query: query5,
      variables: JSON.stringify(vars),
    }),
  }).then((res) => res.json())
}

// Freelancer Form
export async function SendToMonday_FreelancerForm(data) {
  const query = `mutation ($applicant: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard_Freelancers}, item_name:$applicant, column_values:$columnVals) { id } }`
  let skills = ''
  if (data.skills) {
    skills = data.skills.map((c) => c.value).join(', ')
  }
  const vars = {
    applicant: data.name,
    columnVals: JSON.stringify({
      text: data.title,
      dropdown: `${skills}`,
      email: { email: data.email, text: data.email },
      link: `${data.website} ${data.website}`,
      link6: { url: data.social, text: data.social },
    }),
  }
  fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${MondayAuth}`,
      'API-Version': '2023-10',
    },
    body: JSON.stringify({
      query: query,
      variables: JSON.stringify(vars),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      let id = res.data.create_item.id

      let str = JSON.stringify(data, (k, v) => (v === '' || v === undefined ? '–' : v))
      const d = JSON.parse(str)

      let message = ''
      message += `<b><em>${d.title}</em></b><br>––––––––<br><br>`
      message += `<h3>Details:</h3><br>`
      message += `<b>Pronouns:</b> ${d.pronoun}<br>`
      message += `<b>Hourly Rate:</b> ${d.rate}<br>`
      message += `<b>Address:</b> ${d.address}<br>`
      message += `<b>Phone:</b> ${d.phone}<br>`
      message += `<b>Years of Prof Experience:</b> ${d.experience}<br>`
      message += `<b>Most Hated Bird:</b> ${d.bird}<br>`
      message += `<b>Newsletter Signup:</b> ${d.newsletter.toString()}<br>`
      message += `<b>How Did You Hear About Us:</b> ${d.referral}<br>`
      message += `<br>`
      message += `<h3>About:</h3><br>${d.about}<br><br><br>`

      message += `<h3>Links:</h3><br>`
      message += `<b>Social Link:</b> <a href='${d.social}'>${d.social}</a><br>`
      message += `<b>Portfolio Link:</b> <a href='${d.website}'>${d.website}</a><br>`
      message += `<b>Email:</b> <a href='mailto:${d.email}'>${d.email}</a><br><br><br>`
      message += `<h3>Skills:</h3><br>`
      message += `<em>${skills}</em>`
      const cleanedText = message.replace(/"/g, '\\"')

      let updateQuery = `mutation {create_update (item_id: ${id}, body: "${cleanedText}") { id }}`
      // console.log(cleanedText)
      fetch('https://api.monday.com/v2', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${MondayAuth}`,
          'API-Version': '2023-10',
        },
        body: JSON.stringify({
          query: updateQuery,
        }),
      }).then((res) => res.json())
      // .then((res) => console.log(JSON.stringify(res, null, 2)))
    })
}
// <br>Address: ${data.address}<br>Phone: ${data.phone}<br>Years of Professional Experience: ${data.experience}<br>Social Link: ${data.social}<br>Most Hated Bird: ${data.bird}<br>Newsletter: ${data.newsletter}<br>How Did You Hear About Us: ${data.referral}<br><br>Tell Us About Yourself:<br>${data.about}
export function SendToMonday_FreelancerForm_GetSkills() {
  const query = `query { boards (ids: ${process.env.NEXT_PUBLIC_MONDAY_BOARD_FREELANCERFORM}) {columns(ids:"dropdown"){settings_str}}}`
  try {
    return fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.NEXT_PUBLIC_MONDAY_AUTH,
        'API-Version': '2023-10',
      },
      body: JSON.stringify({
        query: query,
      }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        // console.log(responseData)
        return responseData
      })
  } catch (error) {
    console.log(error)
  }
  // .then((res) => console.log(JSON.stringify(res, null, 2)))
}
