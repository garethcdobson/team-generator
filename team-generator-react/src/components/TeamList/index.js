import { connect } from 'react-redux';
import TeamList from './TeamList';

const mapStateToProps = state => {
     return {
          teamA: state.teamA,
          teamB: state.teamB,
     }
};

const mapDispatchToProps = dispatch => {
     return {
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);