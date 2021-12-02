import useLoadingModal from '../hooks/useLoadingModal'

export default function LoadingModal({ visible }: { visible?: boolean }) {
  useLoadingModal()
  return visible ? (
    <div className='fixed z-50 inset-0 bg-wine bg-opacity-80 flex items-center justify-center'>
      <div className='text-4xl font-black  uppercase modal-loading block '>
        <span className='text-peach px-2 modal-loading-span relative inline-block w-10 h-10'>
          L
        </span>
        <span className='text-yellow px-2 modal-loading-span relative inline-block'>O</span>
        <span className='text-blue px-2 modal-loading-span  relative inline-block'>A</span>
        <span className='text-pink-light px-2 modal-loading-span  relative inline-block'>D</span>
        <span className='text-blue-dark px-2 modal-loading-span  relative inline-block'>I</span>
        <span className='text-pink px-2 modal-loading-span  relative inline-block'>N</span>
        <span className='text-peach px-2 modal-loading-span  relative inline-block'>G</span>
        <span className='text-yellow px-2 modal-loading-span  relative inline-block'>.</span>
        <span className='text-blue px-2 modal-loading-span  relative inline-block'>.</span>
        <span className='text-pink-light px-2 modal-loading-span  relative inline-block'>.</span>
      </div>
    </div>
  ) : null
}
