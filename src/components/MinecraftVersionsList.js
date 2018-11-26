import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";
import formatDate from "date-fns/format";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const MinecraftVersionsList = ({ minecraftVersions = [] }) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Version</TableCell>
          <TableCell>Release Channel</TableCell>
          <TableCell>Release Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {minecraftVersions.map(row => {
          return (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.releaseChannel.toLowerCase()}</TableCell>
              <TableCell>
                <Tooltip
                  title={distanceInWordsToNow(row.releasedAt, {
                    addSuffix: true
                  })}
                >
                  {formatDate(row.releasedAt, "MMM D 'YY")}
                </Tooltip>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);

export default MinecraftVersionsList;
