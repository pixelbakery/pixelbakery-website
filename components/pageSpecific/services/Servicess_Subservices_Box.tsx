function Services_Subservices_Box({ subservice }) {
  return (
    <article className='my-12 border-4 border-blue rounded-lg   w-full py-6 px-4'>
      <div className='text-center px-6 flex flex-row md:flex-col justify-center'>
        <span className=' text-6xl'>{subservice.icon}</span>
      </div>
      <div className='px-4'>
        <h3 className='text-peach text-3xl font-semibold'>{subservice.service}</h3>
        <p className='opacity-90 text-wine'>{subservice.desc}</p>
      </div>
    </article>
  )
}
export default Services_Subservices_Box
