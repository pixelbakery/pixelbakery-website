import dynamic from 'next/dynamic'

const InlineWidget = dynamic(() => import('react-calendly').then((module) => module.InlineWidget), {
  ssr: false,
  loading: () => (
    <div className={'relative h-100 w-full bg-wine-100 py-96 flex flex-col justify-center'}>
      <p className='text-center text-wine font-extrabold text-4xl self-center'>Loading...</p>
    </div>
  ),
})
interface Styles {}
interface Props extends Styles {
  url: string
  styles: { height: string; width: string; overflow: string }
}
const Onboarding_Book_Calendly = ({ url, styles }: Props) => {
  return (
    <div>
      <InlineWidget url={url} styles={styles} />
    </div>
  )
}
export default Onboarding_Book_Calendly
