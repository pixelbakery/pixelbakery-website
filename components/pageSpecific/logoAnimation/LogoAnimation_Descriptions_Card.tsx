import PropTypes from 'prop-types'
LogoAnimation_Descriptions_Card.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
}
function LogoAnimation_Descriptions_Card({ header, desc }) {
  return (
    <div className=''>
      <h3 className='pr-8 text-2xl pb-1 font-semibold text-blue text-opacity-75 mb-6'>{header}</h3>
      <p className='text-wine-400 text-lg max-w-xs pr-3'>{desc}</p>
    </div>
  )
}
export default LogoAnimation_Descriptions_Card
