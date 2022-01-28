import Button_Filled from '../parts/Button_Filled'
import Pill from '../parts/Pill'

type Props = {
  tags: Array<string>
}
function Recipes_Post_Tags({ tags }: Props) {
  return (
    <div className='my-4 pt-12 max-w-3xl mx-auto'>
      <h3 className='text-blue font-semibold text-3xl mb-4'>Tags</h3>
      <div className='flex justify-start flex-wrap gap-2'>
        {tags.map((tag) => {
          return <Pill key={tag} text={tag} bgColor='pink-light' textColor='pink' size='sm' />
        })}
      </div>
      <div className='mt-12'>
        <Button_Filled
          text='we got more'
          link='/recipes'
          bgColor='blue'
          textColor='cream'
          chevronDirection='left'
        />
      </div>
    </div>
  )
}
export default Recipes_Post_Tags
