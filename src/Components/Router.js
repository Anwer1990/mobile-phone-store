import React from 'react';
import { Switch,Route} from "react-router-dom";
import Accueil from './Accueil';
import Produits from './Produits';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/produits/:id" component={Produits} />
    </Switch>
)
export default Router;