export function CamelCaseToSentence(input) {
  const camelEdges = /([A-Z](?=[A-Z][a-z])|[^A-Z](?=[A-Z])|[a-zA-Z](?=[^a-zA-Z]))/g
  input = input.replace(camelEdges, '$1 ')
  input = input.charAt(0).toUpperCase() + input.slice(1)
  return input
}

export function RandomArrayItem(length) {
  return Math.floor(Math.random() * length)
}
