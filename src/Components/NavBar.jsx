import React from 'react';
import styled from 'styled-components';
import {makeStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const Header = styled.div`
  width: 100%;
  height: 50px;
  max-height: 100px;
  display: flex;
  box-shadow: 0px 1px 10px -3px grey;
`

const useStyles = makeStyles((theme) => ({
  logo: {
    marginLeft: "50px",
    display: "flex",
    alignItems: "center",
    color: "inherit",
    fontWeight: 800,
    fontSize: 18
  }
}))

const NavBar = () => {
  const classes = useStyles();
  return (
    <Header>
      <Link href="/" className={classes.logo} underline="none">Blog</Link>
    </Header>
  )
}

export default NavBar;