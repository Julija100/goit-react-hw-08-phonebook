import { lazy, Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../common/theme";
import { GlobalStyles } from "@mui/material";

import { globalStyle } from "../common/globalStyle";
import { PrivatRoute } from "./PrivatRoute";
import { PublicRoute } from "./PublicRoute";
import { getCurrentUser } from "../redux/auth/authOperations";
import { getIsChecksCurrentUser } from "../redux/auth/authSelectors";
import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = lazy(() =>
  import("../pages/HomePage" /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(() =>
  import("../pages/ContactsPage" /* webpackChunkName: "contacts-page" */)
);
const LoginPage = lazy(() =>
  import("../pages/LoginPage" /* webpackChunkName: "login-page" */)
);
const SignUpPage = lazy(() =>
  import("../pages/RegistrationPage" /* webpackChunkName: "signup-page" */)
);
const UserAccountPage = lazy(() =>
  import("../pages/UserAccauntPage" /* webpackChunkName: "user-account-page" */)
);

export default function App() {
  const dispatch = useDispatch();
  const isChecksCurrentUser = useSelector(getIsChecksCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          {isChecksCurrentUser ? (
            <Loader />
          ) : (
            <>
              <Header />
              <main>
                <Switch>
                  <PublicRoute path="/" redirectTo="/contacts" restricted exact>
                    <HomePage />
                  </PublicRoute>
                  <PrivatRoute path="/contacts" exact>
                    <ContactsPage />
                  </PrivatRoute>
                  <PublicRoute
                    path="/login"
                    redirectTo="/contacts"
                    restricted
                    exact
                  >
                    <LoginPage />
                  </PublicRoute>
                  <PublicRoute path="/register" restricted exact>
                    <SignUpPage />
                  </PublicRoute>
                  <PrivatRoute path="/user-account" exact>
                    <UserAccountPage />
                  </PrivatRoute>
                  <Route>
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </main>
              <Footer />
            </>
          )}
        </Suspense>
      </ThemeProvider>
    </>
  );
}



