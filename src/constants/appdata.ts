export const rowsdata = [
    { id: 1, name: 'ALICE99', totalcoursetime: '00:03:33' },
    { id: 2, name: 'CHARLEE', totalcoursetime: '00:01:22' }
  ];
  

  export const billing_data = [
    { time: "14:02:03", name: "ALICE99", session: "START" },
    { time: "14:02:05", name: "CHARLEE", session: "END" },
    { time: "14:02:34", name: "ALICE99", session: "END" },
    { time: "14:02:58", name: "ALICE99", session: "START" },
    { time: "14:03:02", name: "CHARLEE", session: "START" },
    { time: "14:03:33", name: "ALICE99", session: "START" },
    { time: "14:03:33", name: "ALICE99", session: "START" },
    { time: "14:03:33", name: "ALICE99", session: "START" },
    { time: "14:03:33", name: "ALICE99", session: "START" },
    { time: "14:03:35", name: "ALICE99", session: "END" },
    { time: "14:03:37", name: "CHARLEE", session: "END" },
    { time: "14:04:05", name: "ALICE99", session: "END" },
    { time: "14:04:23", name: "ALICE99", session: "END" },
    { time: "14:04:41", name: "CHARLEE", session: "START" }
  ];

  export const grid_columns = [
    { field: 'id', headerName: 'ID', minWidth: 100, flex: 1 },
    { field: 'name', headerName: 'Name', minWidth: 330, flex: 1 },
    { field: 'totalcoursetime', headerName: 'Total Course Time', minWidth: 150, flex: 1 }
  ];