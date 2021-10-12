import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import {
  AppBar,
  Toolbar,
  Container,
  Slide,
  useScrollTrigger,
} from "@mui/material";

import SiteNav from "components/SiteNav";
import AuthNav from "components/AuthNav";
import UserMenu from "components/UserMenu";
import { getIsLoggedIn } from "redux/auth/authSelectors";
