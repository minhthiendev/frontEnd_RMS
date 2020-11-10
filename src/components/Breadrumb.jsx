import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const useStyles = makeStyles((theme) => ({
    breadcrumb: {
      textAlign: "center", 
      padding:theme.spacing(6,4)
    },
  }));

  
export default function ActiveLastBreadcrumb() {


  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
      <Link color="inherit" href="/" onClick={handleClick}>
        Material-UI
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Core
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        Breadcrumb
      </Link>
    </Breadcrumbs>
  );
}