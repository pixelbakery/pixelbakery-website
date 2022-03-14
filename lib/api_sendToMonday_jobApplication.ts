////////////
// MONDAY
////////////
const MondayBoard = process.env.NEXT_PUBLIC_API_MONDAY_BOARD_RSVP
const MondayAuth = process.env.NEXT_PUBLIC_API_MONDAY_AUTH

export async function SendToMonday(data) {
  const query = `mutation ($applicant: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard}, item_name:$applicant, column_values:$columnVals) { id } }`
  const vars = {
    applicant: `${data.first_name} ${data.middle_name} ${data.last_name}`,
    columnVals: JSON.stringify({
      pronouns9: data.pronoun,
      text: data.position,
      status1: data.commitment,
      portfolio: data.website,
      link4: data.social,
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
}
