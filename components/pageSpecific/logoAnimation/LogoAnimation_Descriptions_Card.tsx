import H3 from '@typography/H3'
import PropTypes from 'prop-types'
LogoAnimation_Descriptions_Card.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
}
function LogoAnimation_Descriptions_Card({ header, desc }) {
  return (
    <div className=''>
      <H3 color='blue'>{header}</H3>
      <p className='text-wine-400 text-lg max-w-xs pr-3'>{desc}</p>
    </div>
  )
}
export default LogoAnimation_Descriptions_Card
