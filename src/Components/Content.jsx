import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapContent: {
    padding: "2em",
    backgroundColor: "white",
    display: "flex",
    height: "100%",
  },
  wrapPost: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
  posts: {
    fontWeight: "bold",
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapContent}>
      <Box className={classes.wrapPost}>
        <Typography variant="h5" className={classes.posts}>
          Posts
        </Typography>
      </Box>
    </Box>
  );
};

export default Content;
