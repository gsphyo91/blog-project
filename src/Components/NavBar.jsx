import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Box, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  wrapHeader: {
    margin: 0,
    height: 70,
    minHeight: 50,
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    padding: "0 30px",
  },
  menuBtn: {
    "&:hover": {
      backgroundColor: "transparent",
      color: 'black'
    }
  },
  logo: {
    display: "flex",
    alignItems: "center",
    color: "inherit",
    fontWeight: 800,
    fontSize: 30,
  },
  searchBtn: {
    "&:hover": {
      backgroundColor: "transparent",
      color: 'black'
    },
  }
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapHeader}>
      <IconButton className={classes.menuBtn} disableRipple>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Link href="/" className={classes.logo} underline="none">
        Blog
      </Link>
      <IconButton size="medium" className={classes.searchBtn} disableRipple>
        <SearchIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
};

export default NavBar;
