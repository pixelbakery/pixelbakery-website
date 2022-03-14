export function CamelCaseToSentence(input) {
  const camelEdges = /([A-Z](?=[A-Z][a-z])|[^A-Z](?=[A-Z])|[a-zA-Z](?=[^a-zA-Z]))/g
  input = input.replace(camelEdges, '$1 ')
  input = input.charAt(0).toUpperCase() + input.slice(1)
  return input
}

export function RandomArrayItem(length) {
  return Math.floor(Math.random() * length)
}

export function msToTime(duration) {
  let milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
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

// async function redirects() {
const redirects = [
  {
    source: '/original/',
    destination: '/redirected/',
    permanent: true,
  },
]

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
