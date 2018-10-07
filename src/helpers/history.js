import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import { alertActions } from '../actions'
import { ADMIN } from '../constants';

export const history = createBrowserHistory();

export function changePage(route_) {
   history.push(route_);
}


// If you want admin functionality

// function checkingAdminUser(props) {
//    const { authentication, dispatch} = props;
//    if (authentication.user && authentication.user.role !== ADMIN) {
//       changePage('/')
//       dispatch(alertActions.error('Not an Admin'));
//    }
// }
//
// function mapStateToProps(state) {
//     const { authentication } = state;
//     return {
//        authentication
//     };
// }
//
// export const checkAdmin = () => connect(mapStateToProps)(checkingAdminUser);
