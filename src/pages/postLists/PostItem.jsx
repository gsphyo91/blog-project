import React from "react";
import {
  makeStyles,
  Typography,
  Link,
  Divider,
  Container,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  postItemList: {
    display: "flex",
    flexDirection: "column",
  },
  postItem: {
    display: "flex",
    maxWidth: "100%",
    textDecoration: "none",
    color: "inherit",
    minHeight: "148px",
    margin: "15px 0",
    "&:hover": {
      textDecoration: "none",
      cursor: "pointer",
      boxShadow: "0 10px 20px -12.125px rgba(0,0,0,0.5)",
    },
    borderRadius: '10px'
  },
  wrapItem: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "15px 30px",
  },
  itemTitle: {
    width: "100%",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    wordBreak: "break-all",
    textOverflow: "ellipsis",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  itemContent: {
    width: "100%",
    display: "-webkit-box",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    wordBreak: "break-all",
    textOverflow: "ellipsis",
  },
  wrapThumb: {},
  thumbnail: {
    maxWidth: "148px",
    margin: "0 10px 0 auto",
  },
});

const PostItem = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.postItemList}>
      <Link href="/" className={classes.postItem}>
        <Box className={classes.wrapItem}>
          <Typography variant="h5" className={classes.itemTitle}>
            TitleTitleTitleTitleTitleTitleTitleTitleTitleTTiccccccccccccsdcasdcasdcasdstleTitleTitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitle
          </Typography>
          <Typography className={classes.itemContent}>
            ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
          </Typography>
        </Box>
        <img
          className={classes.thumbnail}
          src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80"
          alt="unsplash"
        />
      </Link>
      <Divider />
      <Link href="/" className={classes.postItem}>
        <Box className={classes.wrapItem}>
          <Typography variant="h5" className={classes.itemTitle}>
            TitleTitleTitleTitleTitleTitleTitleTitleTitleTTiccccccccccccsdcasdcasdcasdstleTitleTitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitle
          </Typography>
          <Typography className={classes.itemContent}>
            ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
          </Typography>
        </Box>
        <img
          className={classes.thumbnail}
          src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80"
          alt="unsplash"
        />
      </Link>
      <Divider />
      <Link href="/" className={classes.postItem}>
        <Box className={classes.wrapItem}>
          <Typography variant="h5" className={classes.itemTitle}>
            TitleTitleTitleTitleTitleTitleTitleTitleTitleTTiccccccccccccsdcasdcasdcasdstleTitleTitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitle
          </Typography>
          <Typography className={classes.itemContent}>
            ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
          </Typography>
        </Box>
        <img
          className={classes.thumbnail}
          src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80"
          alt="unsplash"
        />
      </Link>
      <Divider />
      <Link href="/" className={classes.postItem}>
        <Box className={classes.wrapItem}>
          <Typography variant="h5" className={classes.itemTitle}>
            TitleTitleTitleTitleTitleTitleTitleTitleTitleTTiccccccccccccsdcasdcasdcasdstleTitleTitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitle
          </Typography>
          <Typography className={classes.itemContent}>
            ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
          </Typography>
        </Box>
        <img
          className={classes.thumbnail}
          src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80"
          alt="unsplash"
        />
      </Link>
      <Divider />
      <Link href="/" className={classes.postItem}>
        <Box className={classes.wrapItem}>
          <Typography variant="h5" className={classes.itemTitle}>
            TitleTitleTitleTitleTitleTitleTitleTitleTitleTTiccccccccccccsdcasdcasdcasdstleTitleTitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitleTitleitleitleitleitleitleitle
          </Typography>
          <Typography className={classes.itemContent}>
            ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
          </Typography>
        </Box>
        <img
          className={classes.thumbnail}
          src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80"
          alt="unsplash"
        />
      </Link>
      <Divider />
    </Container>
  );
};

export default PostItem;
