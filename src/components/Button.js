import { memo } from 'react';
import PropTypes from 'prop-types';

function Button({ text, fontSize = 12, disabled = false, onClick }) {
  console.info(`${text} button was rendered`);
  return (
    <button
      style={{
        backgroundColor: disabled ? 'silver' : 'chocolate',
        color: 'white',
        padding: '10px 20px',
        border: 0,
        borderRadius: 10,
        fontSize,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

/* React.memo() 메소드는 부모 컴포넌트의 state 중에서 자신과 상관없는 state가 변경되면 다시 렌더링하지 않도록 해준다. */
const StaticButton = memo(Button);
export default StaticButton;
