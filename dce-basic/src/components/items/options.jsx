import React from "react";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";
import Grid from '@material-ui/core/Grid';

const OptionsBar = () => {
  return (
    <Grid container alignItems="center">
      Verschillen
      <Switch
        //   checked={state.checkedB}
        //   onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Divider orientation="vertical" variant='middle' flexItem />
      Kleine versie
      <Switch
        //   checked={state.checkedB}
        //   onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Divider orientation="vertical" variant='middle' flexItem />
      Transparant
      <Switch
        //   checked={state.checkedB}
        //   onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </Grid>
  );
};

export default OptionsBar;
