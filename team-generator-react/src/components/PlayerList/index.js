import { connect } from 'react-redux';
import PlayerList from './PlayerList';
import { clearList, generateTeams } from '../../Actions/actions';

const mapStateToProps = state => {
     return {
          players: state.players,
     }
}

const mapDispatchToProps = dispatch => {
     return {
          handleClear: () => dispatch(clearList()),
          handleGenerate: () => dispatch(generateTeams()),
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);