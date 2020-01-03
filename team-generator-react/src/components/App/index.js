import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => {
     return {
          submitted: state.submitted,
     }
};

export default connect(mapStateToProps, null)(App);