import { connect } from 'react-redux';
import PlayerList from './PlayerList';
import { clearList } from '../../Actions/actions';

const mapStateToProps = state => {
     return {
          players: state.players,
     }
}

const mapDispatchToProps = dispatch => {
     return {
          handleClear: () => dispatch(clearList()),
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);