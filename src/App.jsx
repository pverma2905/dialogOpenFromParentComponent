import React, { useState } from 'react';
import './App.css'
import Child from './Child';
import { Button } from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open Dialog
      </Button>

      <Child open={open} onClose={handleClose} />
    </>
  )
}

export default App
