import React from "react";
import { makeStyles, Box, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapPostItems: {
    display: "flex",
    paddingLeft: 20,
    height: 200,
    "&:hover": {
      boxShadow: "0px 1px 10px -3px grey",
      cursor: "pointer"
    }
  },
  wrapPostContent: {
    flex: 0.7,
    display: "flex",
    flexDirection: "column",
    padding: 15,
  },
  postTitle: {
    fontSize: 30,
    fontWeight: 600,
    marginBottom: 10
  },
  postContent: {
    fontSize: 14,
  },
  postThumbnail: {
    flex: 0.3,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: 125,
    height: 180,
  },
  thumbnail: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

const PostItem = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapPostItems}>
      <Box className={classes.wrapPostContent}>
        <Typography className={classes.postTitle}>
          <Link>Title</Link>
        </Typography>
        <Typography className={classes.postContent}>
          asdnfasndkfasldknfaksjdnfkjansdkjfbasjdbfashbdlfabsdbafsjdflkajsndkfjaskldjbf
        </Typography>
      </Box>
      <Box className={classes.postThumbnail}>
        <img
          className={classes.thumbnail}
          src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80"
          alt="unsplash"
        />
      </Box>
    </Box>
  );
};

export default PostItem;
