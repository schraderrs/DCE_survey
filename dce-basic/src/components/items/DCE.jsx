import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../items/card";
import Questions from "../items/questions";

const DCE = ({appState}) => {
  return (
    <Grid container spacing={2} >
      {/* <Grid item>
        <ul>
          <Questions appState = {appState} />
        </ul>
      </Grid> */}
      <Grid container spacing = {1} justify = 'flex-end'>
        <Card appState = {appState} />
      </Grid>
    </Grid>
  );
};

export default DCE;
