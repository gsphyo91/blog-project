import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import PostList from "./PostList";

const useStyles = makeStyles((theme) => ({
  wrapContent: {
    padding: "2em",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  wrapPostTitle: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  postTitle: {
    fontWeight: "bold",
  },
  wrapPosts: {
    display: "flex",
    flexDirection: "row",
  },
  postList: {
    flex: 0.7,
    display: "flex",
    flexDirection: "column",
  },
  category: {
    flex: 0.3,
    marginLeft: 30
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapContent}>
      <Box className={classes.wrapPostTitle}>
        <Typography variant="h5" className={classes.postTitle}>
          Posts
        </Typography>
      </Box>
      <Box className={classes.wrapPosts}>
        <Box className={classes.postList}>
          <PostList />
        </Box>
        <Box className={classes.category}>category</Box>
      </Box>
    </Box>
  );
};

export default Content;
