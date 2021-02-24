import React from "react";
import Box from "@material-ui/core/Box";
import { Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const Questions = ({appState}) => {
  return appState.project.questions.map((question) => {
    return (
        <Grid item xs={12} style = {{maxWidth: '400px', paddingBottom: '10px'}} spacing={2}>
          {question}
          <Divider variant="middle" />
        </Grid>
    );
  });
};

export default Questions;
