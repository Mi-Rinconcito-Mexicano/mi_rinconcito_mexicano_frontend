import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import Logo from "./Logo/Mi_Rinconcito_Mexicano.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 100,
    marginRight: "10px",
  },
  button: {
    padding: 0,
  },
}));

function MobileMenu(props) {
  return (
    <PopupState variant="popover" popupId="popup-menu">
      {(popupState) => (
        <React.Fragment>
          <MenuIcon {...bindTrigger(popupState)} />
          <Menu {...bindMenu(popupState)}>
            {props.menuItems.map((menuItem) => {
              const { menuTitle, pageUrl } = menuItem;
              return (
                <MenuItem
                  component={Link}
                  to={pageUrl}
                  onClick={popupState.close}
                >
                  {menuTitle}
                </MenuItem>
              );
            })}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

function DesktopMenu(props) {
  return (
    <>
        {props.menuItems.map((menuItem) => {
            const { menuTitle, pageUrl } = menuItem;
            return (
                <Button color="inherit" component={Link} to={pageUrl}>
                    {menuTitle}
                </Button>
            )
        })}
    </>
  );
}

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const menuItems = [
    { menuTitle: "Home", pageUrl: "/home" },
    { menuTitle: "Menu", pageUrl: "/menu" },
    { menuTitle: "Panaderia", pageUrl: "/panaderia" },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          className={classes.button}
          color="inherit"
          component={Link}
          to="/"
          disableRipple={true}
        >
          <img src={Logo} alt="logo" className={classes.logo} />
        </Button>

        <Typography variant="h6" className={classes.title}>
          Mi Rinconcito Mexicano Auténtica Comida Mexicana
        </Typography>

        {isMobile ? (
            <MobileMenu menuItems={menuItems}></MobileMenu>
        ) : (
            <DesktopMenu menuItems={menuItems} />
        )}
      </Toolbar>
    </AppBar>
  );
}
