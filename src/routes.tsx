import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ListMusic from './pages/ListMusic';

const Routes = (): JSX.Element => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/listmusic" exact component={ListMusic} />
        </Switch>
    );
};

export default Routes;