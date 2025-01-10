export function CamelCaseToSentence(input: string): string {
  const camelEdges = /([A-Z](?=[A-Z][a-z])|[^A-Z](?=[A-Z])|[a-zA-Z](?=[^a-zA-Z]))/g
  input = input.replace(camelEdges, '$1 ')
  input = input.charAt(0).toUpperCase() + input.slice(1)
  return input
}

export function CapitalizeWord(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function msToTime(duration: number): string {
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  let showTime = ''

  if (hours > 1) {
    showTime += hours + ' hrs '
  } else if (hours === 1) {
    showTime += hours + 'hr '
  }

  if (minutes < 10) {
    showTime += '0' + minutes + ' min'
  } else {
    showTime += minutes + ' min'
  }

  return showTime
}

export function pluralize(count: number, itemName: string): string {
  const output = `${count} ${itemName}`
  return count === 1 ? output : `${output}s`
}

export function getTodaysDate(): string {
  const date = new Date()
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0') // January is 0!
  const yyyy = date.getFullYear()

  return `${mm}-${dd}-${yyyy}`
}

export function shuffleArray<T>(array: T[]): T[] {
  let i = array.length - 1
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export async function SendEmail_JobShadow(data: Record<string, any>): Promise<void> {
  await fetch('/api/sendJobShadowRequest', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

export async function SendEmail_Contact(data: Record<string, any>): Promise<any> {
  return await fetch('/api/sendContact', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

export async function SendEmail_Onboarding(data: Record<string, any>): Promise<void> {
  await fetch('/api/sendOnboarding', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

export async function SendEmail_OnboardingConfirmation(data: Record<string, any>): Promise<void> {
  await fetch('/api/sendOnboarding-confirmation', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

export async function SendEmail_Freelancers(data: Record<string, any>): Promise<void> {
  await fetch('/api/sendFreelancers', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

export async function SendEmail_FreelancersConfirmation(data: Record<string, any>): Promise<void> {
  await fetch('/api/sendFreelancers-confirmation', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

export async function SendEmail_Croissants(data: Record<string, any>): Promise<void> {
  await fetch('/api/sendCroissant', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json())
}
