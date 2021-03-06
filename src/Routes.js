import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Router} from 'react-router-dom';
import { history } from './helpers';
import { alertActions } from './actions/';

// Route Layouts
import DefaultLayout from './layouts/DefaultLayout';

// Pages
import LandingPage from './pages/LandingPage';
import Authenticate from './pages/Authenticate';
import Discover from './pages/Discover';
import Create from './pages/Create';
import Profile from './pages/Profile';

import Alert from './components/alerts/alerts.jsx';

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
                {alert.message && <Alert alertType={alert.type}>{alert.message}</Alert>}
                <Router history={history}>
                   <Switch>
                     <DefaultLayout path="/profile" component={Profile}/>
                     <DefaultLayout path="/create" component={Create}/>
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
