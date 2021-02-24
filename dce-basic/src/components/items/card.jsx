import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function MediaCard({ appState }) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: "300px",
    },
    box: {
    
    }
  }));

  const classes = useStyles();

  const Content = appState.project.scenarios.map((item) => {
    return (
      <>
        <Grid item >
          <Paper className={classes.paper}>
            <Box m={1}>
              <Typography
                variant="h5"
                component="h2"
                style={{ fontSize: 18, fontWeight: "bold" }}
              >
                {item.title}
              </Typography>
              {item.body.map((body) => {
                return (
                  <>
                    <Box style={{ paddingBottom: "10px"}} className = {classes.box}>
                      {body}
                      <Divider variant="middle" />
                    </Box>
                  </>
                );
              })}
            </Box>
          </Paper>
        </Grid>
      </>
    );
  });
  return <>{Content}</>;
}

{
  /* <>
<Box m={2}>
  <Card className={classes.root}>
    <CardActionArea>
      <CardContent>
        <Box>
          <Typography gutterBottom variant="h6" component="h3">
            {item.title}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.body}
        </Typography>
      </CardContent>
    </CardActionArea>
    <Box justifyContent="flex-end">
      <CardActions>
        <Button color="primary">Meer informatie</Button>
        <Button color="primary">Vergelijk</Button>
      </CardActions>
    </Box>
  </Card>
</Box>
</> */
}
