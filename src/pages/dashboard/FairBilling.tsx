import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'react-bootstrap';
import moment from 'moment';

type Props = {};

const columns = [
  { field: 'id', headerName: 'ID', minWidth: 100, flex: 1 },
  { field: 'name', headerName: 'Name', minWidth: 330, flex: 1 },
  { field: 'totalcoursetime', headerName: 'Total Course Time', minWidth: 150, flex: 1 }
];
const rowsdata = [
  { id: 1, name: 'ALICE99', totalcoursetime: '00:03:33' },
  { id: 2, name: 'CHARLEE', totalcoursetime: '00:01:22' }
];

interface OutputData {
  name: string;
  session: number;
  time: number;
}

const data: [string, string, string][] = [
  ["14:02:03", "ALICE99", "START"],
  ["14:02:05", "CHARLEE", "END"],
  ["14:02:34", "ALICE99", "END"],
  ["14:02:58", "ALICE99", "START"],
  ["14:03:02", "CHARLEE", "START"],
  ["14:03:33", "ALICE99", "START"],
  ["14:03:35", "ALICE99", "END"],
  ["14:03:37", "CHARLEE", "END"],
  ["14:04:05", "ALICE99", "END"],
  ["14:04:23", "ALICE99", "END"],
  ["14:04:41", "CHARLEE", "START"]
];

var gridvisible = true;
const outputdata: OutputData[] = [];
const referanceArray: OutputData[] = [];
const FairBilling = (props: Props) => {

  return (
    <div>
      <Button style={{ color: "blue" }} onClick={handleClick}>Generate Fair Billing Report</Button>

      <div style={{ visibility: gridvisible ? "visible" : "hidden" }}>
        <DataGrid
          columns={columns}
          rows={rowsdata}
        />
      </div>

    </div>

  );

};

const handleClick = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => {
  console.log("testing");
  gridvisible = true;

  for (let i = 0; i <= data.length; i++) {
    FairBilling(data[0][0], data[0][1], data[0][2]);
  }

  // Testing
  // function FairBilling(timeref: string, nameref: string, statusref: string) {
  //   {
  //     arrayOutData.push({
  //       name: nameref,
  //       session: statusref,
  //       time: timeref
  //     });
  //   }

  // Testing

  function FairBilling(time: string, name: string, status: string) {
    if (outputdata.length > 0) {
      for (let i = 0; i < outputdata.length; i++) {
        if (name !== outputdata[i].name) {
          outputdata.push({
            name: name,
            session: 0,
            time: 0
          });
        }
      }
    } else {
      outputdata.push({
        name: name,
        session: 0,
        time: 0
      });
    }

    for (let i = 0; i < outputdata.length; i++) {
      if (outputdata[i].name === name) {
        outputdata[i].session++;

        const a = time.split(":");
        const startsSeconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];

        const b = outputdata[i].time.toString().split(":");
        const endSeconds = +b[0] * 60 * 60 + +b[1] * 60 + +b[2];

        const startTime = moment(outputdata[i].toString(), "h:mm:ss");
        const endTime = moment(time, "h:mm:ss");

        if (startTime.isBefore(endTime)) {
          outputdata[i].session++;
          outputdata[i].time += startsSeconds - endSeconds;
          console.log("Correct.Start Time is below End Time");
        }
      }

      if (!time && !outputdata[i] && outputdata[i].name !== name) {
        referanceArray.push({
          name: name,
          session: 0,
          time: 0
        });
      } else {
        for (let i = 0; i < referanceArray.length; i++) {
          if (
            referanceArray[i].session.toString() !== "START" &&
            referanceArray[i].name === outputdata[i].name
          ) {
            const a = time.split(":");
            const startsSeconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];

            const b = outputdata[i].time.toString().split(":");
            const endSeconds = +b[0] * 60 * 60 + +b[1] * 60 + +b[2];

            outputdata[i].time += startsSeconds - endSeconds;
          } else if (
            referanceArray[i].session.toString() !== "END" &&
            referanceArray[i].name === outputdata[i].name
          ) {
            const a = time.split(":");
            const startsSeconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];

            const b = outputdata[i].time.toString().split(":");
            const endSeconds = +b[0] * 60 * 60 + +b[1] * 60 + +b[2];

            outputdata[i].time += startsSeconds - endSeconds;
          }
        }
      }
    }
  }

};


export default FairBilling;