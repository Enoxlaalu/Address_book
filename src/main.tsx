import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Loader
    from 'src/components/Loader';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';

import 'src/global.less';
import {
    applyMiddleware,
    createStore
} from 'redux';
import thunk
    from 'redux-thunk';
import rootReducer
    from 'src/redux/reducer';

const store = createStore(rootReducer,
    applyMiddleware(thunk)
);

const Home = React.lazy(() => import('src/pages/containers/HomePageContainer'));
const Settings = React.lazy(() => import('src/pages/containers/SettingsPageContainer'));

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <React.Suspense fallback={<Loader />}>
                    <Switch>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </React.Suspense>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App/>, document.getElementById('app'));
