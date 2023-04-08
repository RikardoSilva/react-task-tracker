import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <div>
            <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: '#007FFF'
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
