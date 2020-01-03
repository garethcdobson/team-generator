import { connect } from 'react-redux';
import PlayerList from './PlayerList';
import { clearList, generateTeams, deletePlayer } from '../../Actions/actions';

const mapStateToProps = state => {
     return {
          players: state.players,
     }
};

const mapDispatchToProps = dispatch => {
     return {
          handleClear: () => dispatch(clearList()),
          handleGenerate: () => dispatch(generateTeams()),
          handleDeleteLast: () => dispatch(deletePlayer()),
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);