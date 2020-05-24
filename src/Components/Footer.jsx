import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  wrapFooter: {
    width: "100%",
    minHeight: "100px",
    display: "flex",
    justifyContent: "center",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    margin: "auto 0 30px 0",
    color: "rgba(0, 0, 0, 0.5)",
  },
  write: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.6)",
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapFooter}>
      <Typography className={classes.footer}>
        Gyungsoo{' '}/
        <Link to="/newPost" className={classes.write}>글쓰기</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
