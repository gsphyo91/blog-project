import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Box, IconButton } from "@material-ui/core";
import { Menu, Create } from "@material-ui/icons";
import { useLocation } from "react-router-dom";

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
  wrapHeaderNewPost: {
    margin: 0,
    height: 70,
    minHeight: 50,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    padding: "0 30px",
  },
  menuBtn: {
    "&:hover": {
      backgroundColor: "transparent",
      color: "black",
    },
  },
  logo: {
    display: "flex",
    alignItems: "center",
    color: "inherit",
    fontWeight: 800,
    fontSize: 30,
  },
  wrapCreateBtn: {
    display: 'flex',
    alignContent: 'center'
  },
  createBtn: {
    "&:hover": {
      backgroundColor: "transparent",
      color: "black",
    },
  },
});

const NavBar = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Box
      className={
        pathname === "/" ? classes.wrapHeader : classes.wrapHeaderNewPost
      }
    >
      {pathname === "/" && (
        <IconButton className={classes.menuBtn} disableRipple>
          <Menu fontSize="large" />
        </IconButton>
      )}
      <Link href="/" className={classes.logo} underline="none">
        Blog
      </Link>
      {pathname === "/" && (
        <Link href="/newPost" className={classes.wrapCreateBtn}>
          <IconButton className={classes.createBtn} disableRipple>
            <Create />
          </IconButton>
        </Link>
      )}
    </Box>
  );
};

export default NavBar;
