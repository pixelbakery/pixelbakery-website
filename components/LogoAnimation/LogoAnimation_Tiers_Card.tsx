import React from 'react'

type Props = {
  tier: {
    title: string
    cost: string
    concepts: string
    revisions: string
    transitionIn: string
    transitionOut: string
    passiveAnimation: string
    instagramPack: string
    alternativeColors: string
    white: string
    mogrt: string
    lowerThirds: string
    animatedTransitions: string
  }
}
function LogoAnimation_Tiers_Card({ tier }: Props) {
  return (
    <div className='stext-center border-2 rounded-xl border-pink bg-white px-3 py-6 transition transform duration-500 hover:scale-99'>
      <div className='mb-4'>
        <h3 className='text-center text-2xl font-semibold mb-4 text-pink'>{tier.title}</h3>
        <div className='text-center text-4xl text-blue-dark font-extrabold'>${tier.cost}</div>
      </div>
      <div>
        <ul className='unstyled text-wine text-lg w-fit mx-auto'>
          <li className='my-6 text-left border-top border-bottom border-wine-300'>
            {tier.concepts}
          </li>
          <li className='my-6 text-left border-top border-bottom border-wine-300'>
            {tier.revisions}
          </li>
          <li className='my-6 text-left border-top border-bottom border-wine-300'>
            {tier.transitionIn}
          </li>
          <li className='my-6 text-left border-top border-bottom border-wine-300'>
            {tier.transitionOut}
          </li>
          <li className='my-6 text-left border-top border-bottom border-wine-300'>{tier.white}</li>

          <li className='my-6 text-left border-top border-bottom border-wine-300'>
            {tier.passiveAnimation}
          </li>
          <li className='my-6 text-left border-top border-bottom border-wine-300'>
            {tier.instagramPack}
          </li>
          <li className='my-6 text-left border-top border-bottom border-wine-300'>
            {tier.alternativeColors}
          </li>
          <li className='my-6 text-left border-top border-bottom border-wine-300'>{tier.mogrt}</li>
          <li className='my-6 text-left border-top border-bottom border-wine-300'>
            {tier.lowerThirds}
          </li>
          <li className='my-6 text-left border-top border-bottom border-wine-300'>
            {tier.animatedTransitions}
          </li>
        </ul>
      </div>
    </div>
  )
}
export default LogoAnimation_Tiers_Card
