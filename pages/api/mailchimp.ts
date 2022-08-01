import mailchimp from '@mailchimp/mailchimp_marketing'
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
})

function getLastName(str) {
  var arr = str.split(' ')
  if (arr.length === 1) {
    return ''
  }
  return arr.slice(-1).join(' ')
}

function getFirstName(str) {
  var arr = str.split(' ')
  if (arr.length === 1) {
    return arr[0]
  }
  return arr.slice(0, -1).join(' ') // returns "Paul Steve"
}
export default async (req, res) => {
  const { email, name, company, tag } = req.body
  let fname, lname
  if (name) {
    fname = getFirstName(name)
    lname = getLastName(name)
  } else {
    fname = ''
    lname = ''
  }

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    await mailchimp.lists.setListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      email,
      {
        email_address: email,
        tags: [`${tag}`],
        status: 'subscribed',
        merge_fields: {
          FNAME: fname,
          LNAME: lname,
          COMPANY: company,
        },
      },
      {
        skipMergeValidation: true,
      },
    )

    return res.status(201).json({ error: '' })
  } catch (error) {}
}
