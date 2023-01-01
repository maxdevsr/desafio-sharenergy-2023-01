import { Switch, Route} from "react-router-dom";
import Login from "../pages/login";
import CatsRamdom from "../pages/pageApiCat";
import DogsRamdom from "../pages/pageApiDog";
import UsersRamdom from "../pages/usersRandomPage";

function Routes() {

    return (
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/cats">
                <CatsRamdom/>    
            </Route>
            <Route exact path="/dogs">
                <DogsRamdom/>    
            </Route>
            <Route exact path="/users">
                <UsersRamdom/>    
            </Route>
        </Switch>
    )
}

export default Routes