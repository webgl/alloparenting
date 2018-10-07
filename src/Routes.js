import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Router} from 'react-router-dom';
import { history } from './helpers';
import { alertActions } from './actions/';

import Alerts from './components/Alerts/Alerts';

// Route Layouts
import DefaultLayout from './layouts/DefaultLayout';

// Pages
import LandingPage from './pages/LandingPage';
import Authenticate from './pages/Authenticate';
import Discover from './pages/Discover';

// nothing works
class AppMain extends Component {

    constructor(props) {
      super(props);
      const { dispatch } = this.props;
      history.listen((location, action) => {
          dispatch(alertActions.clear());
      });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="Main">
                {alert.message && <Alerts alertType={alert.type}>{alert.message}</Alerts>}
                <Router history={history}>
                   <Switch>
                     <DefaultLayout path="/discover" component={Discover}/>
                     <DefaultLayout path="/authenticate" component={Authenticate}/>
                     <DefaultLayout path="/" component={LandingPage}/>
                 </Switch>
                </Router>
            </div>
        );
    }

}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const App = connect(mapStateToProps)(AppMain);

export default App;
