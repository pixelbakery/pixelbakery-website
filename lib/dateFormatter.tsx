import dayjs from 'dayjs'

type Props = {
  dateString: string | Date
}

const dateFormatter = ({ dateString }: Props) => {
  const formattedDate = dayjs(dateString).format('MMMM D, YYYY')
  return <time dateTime={dayjs(dateString).toISOString()}>{formattedDate}</time>
}

export default dateFormatter
