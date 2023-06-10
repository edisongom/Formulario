import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function SocialButton(props) {
  let iconClassName;
  switch (props.icon) {
    case 'linkedin':
      iconClassName = 'fab fa-linkedin';
      break;
    case 'facebook':
      iconClassName = 'fab fa-facebook';
      break;
    case 'github':
      iconClassName = 'fab fa-github';
      break;
    default:
      iconClassName = '';
  }

  return (
    <Button className="btn btn-primary social-button">
      <i className={iconClassName}></i>
    </Button>
  );
}

export default SocialButton;