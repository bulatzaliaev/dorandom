import React from "react";
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Navigation from "./components/Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));


function App() {
  const classes = useStyles();
  const [darkState, setDarkState] = React.useState(true);
  const palletType = darkState ? 'dark' : 'light';

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: palletType,
        },
      }),
    [palletType],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation darkState={darkState} setDarkState={setDarkState} />
      <Container fixed>
        <Paper className={classes.paper}>test</Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
