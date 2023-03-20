export function CamelCaseToSentence(input) {
  const camelEdges = /([A-Z](?=[A-Z][a-z])|[^A-Z](?=[A-Z])|[a-zA-Z](?=[^a-zA-Z]))/g
  input = input.replace(camelEdges, '$1 ')
  input = input.charAt(0).toUpperCase() + input.slice(1)
  return input
}

export function CapitalizeWord(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function RandomArrayItem(length) {
  return Math.floor(Math.random() * length)
}
export function SpacesToDashes(str: string) {
  str = str.replace(/\s+/g, '-').toLowerCase()
  return str
}
export function msToTime(duration) {
  let minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  let showTime = ''

  // hours
  if (hours > 1) {
    showTime += hours + ' hrs '
  } else if (hours === 1) {
    showTime += hours + 'hr '
  }

  // minutes
  if (minutes < 10) {
    showTime += '0' + minutes + ' min'
  } else if (minutes > 10) {
    showTime += minutes + ' min'
  }

  return showTime
}

export function pluralize(count, itemName) {
  let output = count + ' ' + itemName
  if (count === 1) return output
  else return (output += 's')
}

export function checkIfFilesAreTooBig(maxSize, files?: [File]): boolean {
  let valid = true
  if (files) {
    files.map((file) => {
      const size = file.size / 1024 / 1024
      if (size > maxSize) {
        valid = false
      }
    })
  }
  return valid
}

export function getTodaysDate() {
  const date = new Date()
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = date.getFullYear()

  const today = mm + '-' + dd + '-' + yyyy
  return today
}

export function shuffleArray(array) {
  let i = array.length - 1
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export async function SendToMailchimp(data, tag) {
  data.tag = tag
  if (data.checked === true || data.newsletter === true) {
    await fetch('/api/mailchimp', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } else {
    return
  }
}

export async function SendEmail_JobShadow(data) {
  await fetch('/api/sendJobShadowRequest', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => {
    res.json()
    // console.log(res.json())
  })
}

export async function SendEmail_Contact(data) {
  await fetch('/api/sendContact', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

export async function SendEmail_Onboarding(data) {
  await fetch('/api/sendOnboarding', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => {
    res.json()
    // console.log(res.json())
  })
}

export async function SendEmail_Croissants(data) {
  await fetch('/api/sendCroissant', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => {
    res.json()
    // console.log(res.json())
  })
}

export function JsonStringify(data) {
  return JSON.parse(JSON.stringify(data))
}
