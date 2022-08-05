import useSWR from 'swr'

import fetcher from '@lib/fetcher'

const MediaUploader = () => {
  const { data } = useSWR<any>('/api/vimeo', fetcher)

  if (!data) {
    return null
  }
  // console.log(GetByIdVimeo(722982678))
  if (!data) {
    return null
  }
  console.log(data)
  return (
    <div className='mt-48'>
      <div></div>
      722982678
    </div>
  )
}

export default MediaUploader
