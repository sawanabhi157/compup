import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModelComponent from "./ModelComponent";
import { Button } from "@mui/material";

function TableComponent({ initialData }) {
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editEmployeeName, setEditEmployeeName] = useState("");
  const [data, setData] = useState(initialData);

  const handleOpen = (id, firstName) => {
    setEditId(id);
    setEditEmployeeName(firstName);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditId(null);
    setEditEmployeeName("");
  };
  const handleChange = (e) => {
    setEditEmployeeName(e.target.value);
  };

  const handleSave = () => {
    const updateData = data.data.current_planning_output.map((item) => {
      if (item.pub_id === editId) {
        console.log("working");
        return {
          ...item,
          employee: {
            ...item.employee,
            first_name: editEmployeeName,
          },
        };
      }
      return item;
    });
    const newData = data;
    newData.data.current_planning_output = updateData;
    setData({ ...newData });

    handleClose();
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>
                Employee Name
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Suggested CTC
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Reporting Manager
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Designation</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.data.current_planning_output.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  {`${item.employee.first_name} ${item.employee.last_name}`}
                </TableCell>
                <TableCell>{item.suggested_ctc}</TableCell>
                <TableCell>{item.reporting_manager}</TableCell>
                <TableCell>{item.employee_data.designation}</TableCell>
                <TableCell>
                <Button
                    style={{ backgroundColor: 'blue', color: 'white' }}
                    onClick={() =>
                      handleOpen(item.employee.pub_id, item.employee.first_name)
                    }
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModelComponent
        open={open}
        editId={editId}
        editEmployeeName={editEmployeeName}
        handleOpen={handleOpen}
        handleChange={handleChange}
        handleClose={handleClose}
        handleSave={handleSave}
      />
    </>
  );
}

export default TableComponent;
