import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    
  },
  re:{
    position: "relative",
  },
  ab:{
    // position: "absolute",
    backgroundColor:'white',
  }
  ,
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    null
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [branch, setBranch] = React.useState("");
  const [team, setTeam] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const [status, setStatus] = React.useState("");

  const branchHandleChange = (event) => {
    setBranch(event.target.value);
  };
  const teamHandleChange = (event) => {
    setTeam(event.target.value);
  };
  const categoriesHandleChange = (event) => {
    setCategories(event.target.value);
  };
  const statusHandleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary className={classes.re}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <Button variant="text" color="secondary" startIcon={<SearchIcon />}>
              Search
            </Button>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.ab}>
          <Grid container alignItems="space-around" justifyContent="center">
            <TextField id="standard-basic" label="Search by name" />

           

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Choose Branch
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={branch}
                onChange={branchHandleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Choose Team
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={team}
                onChange={teamHandleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Choose categories
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categories}
                onChange={categoriesHandleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Choose Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                onChange={statusHandleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Start date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="End date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
            
            <Button variant="outlined" color="secondary" startIcon={<SearchIcon />} className={classes.root}>
              GO
            </Button>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
