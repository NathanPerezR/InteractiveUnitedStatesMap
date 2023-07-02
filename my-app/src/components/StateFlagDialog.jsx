import { React, useState, useEffect } from 'react';
import {} from '../App.css';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
} from '@mui/material';
import allStates from '../data/allstates.json';

// dialog will make an API call to wikipedia, then display info
function StateFlagDialog({ open, stateLocation, setOpen }) {
  const [isOpen, setIsOpen] = useState('');
  const [stateData, setData] = useState([]);

  const handleClose = () => {
    setIsOpen(false);
    setOpen(false);
  };

  useEffect(() => {
    setIsOpen(open);
    // ake reqeust
    const request = new XMLHttpRequest();
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${allStates[stateLocation].flagWikiUrl}`;
    request.open('GET', url);
    request.send();
    request.onload = () => {
      // console.log(request);
      if (request.status === 200) {
        // console.log(JSON.parse(request.response));
        setData(JSON.parse(request.response));
      } else {
        // alert(`${request.status}/${request.statusText}`);
      }
    };
  }, [setOpen]);

  return (
    <div>
      <Dialog maxWidth="sm" fullWidth="true" open={isOpen} onClose={handleClose}>
        <DialogTitle>
          About the flag of&nbsp;
          {allStates[stateLocation].fullStateName}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item={12}>
              {stateData && stateData.originalimage && (
                <img className="stateFlagImg" src={stateData.originalimage.source} alt="placeholder" />
              )}
              <p>&nbsp;</p>
              <Grid item={12}>{stateData.extract}</Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button href={`https://en.wikipedia.org/wiki/${allStates[stateLocation].flagWikiUrl}`} target="_blank"> read more </Button>
          <Button onClick={handleClose}> Close </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default StateFlagDialog;
