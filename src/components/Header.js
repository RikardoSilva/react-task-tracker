import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onAdd} text={showAdd ? 'Close' : 'Add'} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

//To inline css, double curly braces (style={{}})
//style={headingStyle}
// const headingStyle = {
//     color: 'blue',
//     backgroundColor: 'yellow'
// }

export default Header
