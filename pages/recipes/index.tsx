import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Card_Rounded from '../../components/parts/Card_Rounded'
import Pill from '../../components/parts/Pill'
import Button_Outlined from '../../components/parts/Button_Outlined'
import Recipes_SmallPost from '../../components/Recipes/Recipes_SmallPost'
import PageHeader_VariableHeight from '../../components/PageHeader/PageHeader_VarH'

function Recipes() {
  return (
    <main>
      <PageHeader_VariableHeight
        header="Mom's Recipes"
        subheader='No word yet on her spaghetti, though'
      />

      <section id='blog'>
        <div id='blogFilter'>Filter</div>
        <div className='mx-auto max-w-6xl'>
          <div className='my-16 grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4 gap-4'>
            <Card_Rounded
              link={'/'}
              head={'An Introduction to our Technology Stack'}
              subhead={'Jordan Lambrecht – December 16th, 2021'}
              aspectW={'4'}
              aspectY={'3'}
              img={'/img/placeholder04.png'}
              imgAlt={''}
              tags={['editorial']}
              tagBgColor={'blue-light'}
              tagTextColor={'wine'}
            />
            <Card_Rounded
              link={'/'}
              head={'An Introduction to our Technology Stack'}
              subhead={'Jordan Lambrecht – December 16th, 2021'}
              aspectW={'4'}
              aspectY={'3'}
              img={'/img/placeholder08.png'}
              imgAlt={''}
              tags={['editorial']}
              tagBgColor={'blue-light'}
              tagTextColor={'wine'}
            />
            <Card_Rounded
              link={'/'}
              head={'An Introduction to our Technology Stack'}
              subhead={'Jordan Lambrecht – December 16th, 2021'}
              aspectW={'4'}
              aspectY={'3'}
              img={'/img/placeholder07.png'}
              imgAlt={''}
              tags={['editorial']}
              tagBgColor={'blue-light'}
              tagTextColor={'wine'}
            />
            <Card_Rounded
              link={'/'}
              head={'An Introduction to our Technology Stack'}
              subhead={'Jordan Lambrecht – December 16th, 2021'}
              aspectW={'4'}
              aspectY={'3'}
              img={'/img/placeholder03.png'}
              imgAlt={''}
              tags={['editorial']}
              tagBgColor={'blue-light'}
              tagTextColor={'wine'}
            />
          </div>
          <div className='mx-auto max-w-md md:max-w-lg lg:max-w-3xl'>
            <Recipes_SmallPost />
            <Recipes_SmallPost />
            <Recipes_SmallPost />
            <Recipes_SmallPost />
            <Recipes_SmallPost />
          </div>
        </div>
        <div className='my-14 mx-auto max-w-sm '>
          <Button_Outlined text={'load more'} link={'/'} color={'blue'} chevronDirection={'down'} />
        </div>
      </section>
    </main>
  )
}
export default Recipes
