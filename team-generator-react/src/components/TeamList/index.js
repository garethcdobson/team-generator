import { connect } from 'react-redux';
import TeamList from './TeamList';
import { clearList, generateTeams } from '../../Actions/actions';

const mapStateToProps = state => {
     return {
          teamA: state.teamA,
          teamB: state.teamB,
     }
};

const mapDispatchToProps = dispatch => {
     return {
          handleReset: () => dispatch(clearList()),
          handleShuffle: () => dispatch(generateTeams()),
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);