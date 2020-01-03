import { connect } from 'react-redux';
import TeamList from './TeamList';
import { clearList } from '../../Actions/actions';

const mapStateToProps = state => {
     return {
          teamA: state.teamA,
          teamB: state.teamB,
     }
};

const mapDispatchToProps = dispatch => {
     return {
          handleReset: () => dispatch(clearList()),
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);