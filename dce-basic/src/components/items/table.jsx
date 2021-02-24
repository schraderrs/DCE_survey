import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];

const DataTable = ({ appState }) => {
  const [rows, setRows] = useState([]);

  function CreateData(currentSituation, scenarioA, scenarioB) {
    return { currentSituation, scenarioA, scenarioB };
  }

  function Rows() {
    let questions = appState.project.questions;
    let noChange = appState.project.scenarios[0].body;
    let scenarioA = appState.project.scenarios[1].body;
    let scenarioB = appState.project.scenarios[2].body;
    let i;
    let buffer = [];

    for (i = 0; i < questions.length; i++) {
      let row = CreateData(noChange[i], scenarioA[i], scenarioB[i]);
      buffer.push(row);
    }
    setRows(buffer)
  }

  Rows();

  console.log(rows);

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Stellingen</TableCell>
            <TableCell align="right">Geen verandering</TableCell>
            <TableCell align="right">Scenario A</TableCell>
            <TableCell align="right">Scenario B</TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
