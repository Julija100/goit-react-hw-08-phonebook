import {
    AppBar, Container,
    Slide, Toolbar, useScrollTrigger
} from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import AuthNav from "../components/AuthNav";
import SiteNav from "../components/SiteNav";
import UserMenu from "../components/UserMenu";
import { getIsLoggedIn } from "../redux/auth/authSelectors";




function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction='down' in={!trigger}>{children}</Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function Header(props) {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
           <>
      <HideOnScroll {...props}>
        <AppBar>
          <Container>
            <Toolbar
              component="nav"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <SiteNav />
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
}