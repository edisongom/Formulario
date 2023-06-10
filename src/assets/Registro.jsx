import { Row, Col } from 'react-bootstrap';
import SocialButton from './SocialButton';
import Formulario from './Formulario';

function Registro() {
  return (
    <Row>
      <Col>
        <h1>Crea una cuenta</h1>
        <SocialButton icon="linkedin" />
        <SocialButton icon="facebook" />
        <SocialButton icon="github" />
        <p>o usa tu email para registrarte</p>
        <Formulario />
      </Col>
    </Row>
  );
}

export default Registro;