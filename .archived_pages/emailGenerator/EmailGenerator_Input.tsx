import React, { useState, createRef } from 'react'

const EmailGenerator_Input = (props) => {
  const { setUser } = props

  const [userData, setUserData] = useState({
    name: '',
    jobTitle: '',
    phone: '',
  })

  const ref = createRef()
  const handleChangeField = (field) => (event) => {
    const value = event?.target?.value || ''
    setUserData((prev) => ({ ...prev, [field]: value }))
  }
  setUser(userData)

  return (
    <div>
      {/* <div className={classes.header}>Infos</div> */}

      <div className='grid grid-cols-1 lg:grid-cols-1 gap-y-4 lg:gap-x-4'>
        <input
          name='Name'
          type={'text'}
          placeholder={'Full Name'}
          value={userData.name}
          onChange={handleChangeField('name')}
          className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
        />
        <input
          name='JobTitle'
          type={'text'}
          placeholder={'Job Title'}
          value={userData.jobTitle}
          onChange={handleChangeField('jobTitle')}
          className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
        />

        <input
          name='Phone'
          type={'text'}
          placeholder={'Phone Number (optional)'}
          value={userData.phone}
          onChange={handleChangeField('phone')}
          className='w-full border-0 rounded-md text-lg text-wine px-6 focus:ring-2 focus:border-blue-dark  focus:ring-blue-dark'
        />
      </div>
    </div>
  )
}

// EmailGenerator_Input.propTypes = {
//   setUser: PropTypes.isRequired,
// }

export default EmailGenerator_Input
