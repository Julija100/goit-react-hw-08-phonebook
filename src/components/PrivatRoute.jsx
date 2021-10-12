import { useSelector } from "react-redux";
import { Redirect, Route } from 'react-router';
import { getIsLoggedIn } from "../redux/authorisation/authSelectors";

function PrivatRoute({ children, redirectTo = '/', routeProps }) {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to={redirectTo} />}
        </Route>
    );
}
export { PrivatRoute };