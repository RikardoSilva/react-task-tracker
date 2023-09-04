import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>

      {location.pathname === '/' &&
        <Button color={showAdd ? 'red' : '#007FFF'} onClick={onAdd} text={showAdd ? 'Close' : 'Add'} />}
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
