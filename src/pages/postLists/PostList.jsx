import React, { Fragment } from "react";
import {
  Container,
  Box,
  Divider,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { ViewHeadline, ViewModule } from "@material-ui/icons";
import PostItem from "./PostItem";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
  },
  postHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "57px 0 15px",
  },
  orderBtn: {
    '&:hover': {
      color: 'black',
      backgroundColor: 'transparent'
    }
  }
});

const PostList = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth="md" className={classes.container}>
        {/* <PostItem /> */}
        <Box className={classes.postHeader}>
          <h3>전체 글(?)</h3>
          <Box>
            <IconButton className={classes.orderBtn}>
              <ViewModule fontSize="small" />
            </IconButton>
            <IconButton className={classes.orderBtn}>
              <ViewHeadline />
            </IconButton>
          </Box>
        </Box>
        <Divider />
      </Container>
      <PostItem />
    </Fragment>
  );
};

export default PostList;
