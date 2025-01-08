interface Subservice {
  desc: string
  service: string
  icon: any
}
interface Props {
  subservice: Subservice
}

function Services_Subservices_Box({ subservice }: Props) {
  return (
    <article className='w-full px-4 py-6 border-4 rounded-lg  border-blue'>
      <div className='flex flex-row justify-center px-6 text-center md:flex-col'>
        <span className='pb-2 text-6xl text-left'>{subservice.icon}</span>
      </div>
      <div className='px-4'>
        <h3 className='text-3xl font-semibold text-peach'>{subservice.service}</h3>
        <p className='opacity-90 text-wine'>{subservice.desc}</p>
      </div>
    </article>
  )
}
export default Services_Subservices_Box
