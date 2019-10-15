import { connect } from 'react-redux';
import Register from '../components/Register';

const mapStateToProps = state => state;

const RegisterContainer = connect(
  mapStateToProps,
)(Register);

export default RegisterContainer;
