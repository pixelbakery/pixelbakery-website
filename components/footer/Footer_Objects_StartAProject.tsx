import { Button_Filled } from '@parts'
const Footer_Objects_StartAProject = () => {
  return (
    <div className='justify-center hidden w-full my-3 lg:flex'>
      <Button_Filled
        center={true}
        text={'Start A Project'}
        link={'/onboarding'}
        bgColor={'blue-dark'}
        textColor={'cream'}
        chevronDirection='right'
      />
    </div>
  )
}

export default Footer_Objects_StartAProject
