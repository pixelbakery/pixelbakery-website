import dayjs from 'dayjs'
type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  return <time dateTime={dateString}>{dayjs(dateString).format('MMMM D, YYYY')}</time>
}

export default DateFormatter
