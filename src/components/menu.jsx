import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Search } from '@material-ui/icons';
import Searchx from "./search";
import { Box } from '@material-ui/core';
const axios = require('axios').default;


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    textAlign: 'center',
    maxWidth: 260,
    backgroundColor: theme.palette.background.paper,
   position: "fixed",
     overflow: 'auto',
   height: '100vh',
    
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    //  padding: 0,
    //  textAlign: 'center',
  },
  listItem: {
    // textAlign: 'left',
  }
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();
  const [branches,setBranches] =React.useState([]);
  const [teams, setTeams] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  


  React. useEffect(async () => {
    let list_branch = await axios.get('/branches');
    setBranches(list_branch.data.data) ;
    let list_team = await axios.get('/teams');
    setTeams(list_team.data.data) 
    let list_category = await axios.get('/categories');
    setCategories(list_category.data.data)
    
  },[]);


  return (
    <Box  >
       <List className={classes.root} subheader={<li />} >
      <Searchx></Searchx>
      <ListItem key={'dgdg'} >
         <ListItemText primary="Tất cả hồ sơ" className={classes.listItem}/>
       </ListItem>
      <ListSubheader className={classes.listItem}>Chi nhánh</ListSubheader>
      {branches.map((branch) => (
         <ListItem key={branch._id} >
         <ListItemText primary={branch.branchName} className={classes.listItem}/>
       </ListItem>
      ))}
      <ListSubheader className={classes.listItem}>Phòng ban</ListSubheader>
      {teams.map((team) => (
         <ListItem key={team._id} >
         <ListItemText primary={team.teamName} className={classes.listItem}/>
       </ListItem>
      ))}
      <ListSubheader className={classes.listItem}>Loại tài liệu</ListSubheader>
      {categories.map((category) => (
         <ListItem key={category._id} >
         <ListItemText primary={category.title} className={classes.listItem}/>
       </ListItem>
      ))}
    </List>
    </Box>
   
  );
}