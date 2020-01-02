import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { addPlayer } from '../../Actions/actions';

const mapStateToProps = state => {
     return {
          players: state.players,
     };
};

const mapDispatchtoProps = dispatch => {
     return{
          addPlayer: player => dispatch(addPlayer(player)),
     }
};

export default connect(mapStateToProps, mapDispatchtoProps)(PlayerForm);