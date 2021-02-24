import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Draggable from "react-draggable";
import DCE from "../items/DCE";
import OptionsBar from "../items/options";
import Questions from "../items/questions";
import dummyProject from "../items/dummyproject";
import Paper from "@material-ui/core/Paper";
import CloseIcon from "@material-ui/icons/Close";

function FloatObject() {
  const [appState, setAppState] = useState({
    project: dummyProject,
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: "1200px ",
    },
    buttons: {
      display: "flex",
      justifyContent: "flex-end",
      edge: "end",
    },
  }));

  let projectinfo = appState.project.details[0];

  const classes = useStyles();
  return (
    <>
      <Draggable>
        <div
          className={classes.root}
          // style={{
          //   width: "60vw",
          //   height: "60vh",
          //   backgroundColor: "white",
          //   zIndex: 99,
          //   position: "absolute",
          //   top: "10px",
          //   left: "10px",
          // }}
        >
          <Paper className={classes.paper}>
            {/* TOPNAV */}
            <Grid container>
              <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                  {projectinfo.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {projectinfo.info}
                </Typography>
              </Grid>
              <CloseIcon />
            </Grid>
            {/* DCE */}
            <Grid container>
              <DCE appState={appState} />
            </Grid>
            {/* BOTTOM BUTTONS */}
            <Grid container justify="flex-end">
              <Grid item>
                <Box className={classes.buttons}>
                  <Button variant="contained">Terug</Button>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: "8px" }}
                  >
                    Kies
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* <Box m={2}>
            
          </Box>
          <OptionsBar />

          <DCE appState={appState} />
          <Box m={2} display="flex" justifyContent="flex-end">
            
          </Box> */}
        </div>
      </Draggable>
    </>
  );
}

export default FloatObject;
