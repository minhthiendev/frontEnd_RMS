import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuAppBar from "../components/AppBar";
import CustomizedTables from "../components/documents";
import Search from "../components/search";
import SimpleList from "../components/menu";
import ActiveLastBreadcrumb from "../components/Breadrumb";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  pr_2: {
    padding: theme.spacing(0,2),
  },
 
  
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={2} >
        <SimpleList></SimpleList>
      </Grid>

      <Grid item xs={12} md={10}>
        <Grid item xs={12} md={12}>
          <MenuAppBar></MenuAppBar>
        </Grid>
        <Grid item xs={12} md={12} className={classes.pr_2}>
          <Grid item xs={12} md={12}>
            <ActiveLastBreadcrumb></ActiveLastBreadcrumb>
            <CustomizedTables></CustomizedTables>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
