import { React, useState } from 'react';
import Icon from '@mui/material/Icon';
import '../App.css';
import {
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
  DialogContent,
} from '@mui/material';

function About() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Icon className="aboutButtonIcon" onClick={handleClickOpen} style={{ color: 'primary' }}>info</Icon>
      <Dialog maxWidth="sm" fullWidth="true" open={open} onClose={handleClose}>
        <DialogTitle>
          About this webpage
        </DialogTitle>
        <DialogContent>
          <p>
            This webpage was created by&nbsp;
            <a href="https://nathanperezr.github.io/" target="_blank" rel="noreferrer">Nathan Perez</a>
            . Currently, this website is just state flag info from the Wikipedia API, but there are
            plans to add a state guessing game, as well as some other features.  To watch the
            development of this app take a look at the github for more info.
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> Close </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default About;
