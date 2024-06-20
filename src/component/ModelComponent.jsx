import * as React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Button } from "@mui/base";

export default function ModelComponent({
  open,
  editEmployeeName,
  handleClose,
  handleChange,
  handleSave
}) {




  return (
    <div>
      <Dialog onClose={handleClose} open={open} maxWidth="md">
        <DialogContent>
          <TextField
            value={editEmployeeName}
            onChange={handleChange}
            autoFocus
            fullWidth
          />
        </DialogContent>
        <DialogActions style={{ justifyContent: 'space-between' }}>
        <Button variant="contained" onClick={handleSave} style={{ backgroundColor: '#4CAF50', color: 'white' }}>Save</Button>
          <Button variant="contained" onClick={handleClose} style={{ backgroundColor: '#F9A825', color: 'white' }}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}
