import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}