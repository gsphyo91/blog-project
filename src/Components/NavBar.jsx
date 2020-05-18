import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Box, Button } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  wrapHeader: {
    height: 70,
    minHeight: 50,
    boxShadow: "0px 1px 10px -3px grey",
    display: "flex",
    alignContent: "center",
    padding: "0 100px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    color: "inherit",
    fontWeight: 800,
    fontSize: 24,
  },
  writeBtn: {
    height: "50%",
    margin: "auto 0 auto auto"
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapHeader}>
      <Link href="/" className={classes.logo} underline="none">
        Blog
      </Link>
      <Button variant="outlined" size="medium" className={classes.writeBtn}>
        <CreateIcon />
        Write
      </Button>
    </Box>
  );
};

export default NavBar;
