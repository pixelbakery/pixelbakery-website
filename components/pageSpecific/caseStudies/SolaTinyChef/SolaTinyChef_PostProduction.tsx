function SolaTinyChef_PostProduction() {
  return (
    <section className='relative my-4 bg-white pt-12 pb-8'>
      <div className='mx-auto md:max-w-6xl h-full '>
        <div className='pt-8 absolute top-0 left-0 w-full'>
          <h2 className=' text-center lg:text-left mt-0  mx-auto text-6xl max-w-sm '>
            Post-Production
          </h2>
        </div>

        <div className='relative top-0'>
          <video muted autoPlay loop preload='true' className='scale-110 '>
            <source
              type='video/mp4; codecs="hvc1"'
              src='/img/case-studies/sola-tiny-chef/SOLA_TinyChef_WalkOff-1.mov'
            />
            <source
              type='video/webm'
              src='/img/case-studies/sola-tiny-chef/SOLA_TinyChef_WalkOff_VP9.webm'
            />
          </video>
        </div>
      </div>
      <div className='mx-auto md:max-w-6xl h-full'>
        <p className='px-6  mx-auto py-4  mb-4 text-wine text-md max-w-sm text-opacity-75'>
          Energistically reconceptualize accurate methods of empowerment and efficient platforms.
          Credibly envisioneer scalable solutions before team building action items. Rapidiously
          predominate magnetic convergence whereas efficient content. Intrinsicly streamline
          interactive products via cross functional processes. Continually target excellent
          opportunities after customer directed.
        </p>
        <div className='w-full mx-auto my-12'>
          <video autoPlay playsInline muted loop className='mx-auto  w-full max-w-3xl'>
            <source
              src={'/img/case-studies/sola-tiny-chef/pixel-bakery_sola-tiny-chef-animation.mp4'}
            />
          </video>
        </div>
      </div>
    </section>
  )
}
export default SolaTinyChef_PostProduction
