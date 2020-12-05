import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Navigation({ darkState, setDarkState }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AllInclusiveIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Do Random
          </Typography>
          <Switch
            checked={darkState}
            onChange={() => setDarkState(!darkState)}
            name="checkedB"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}