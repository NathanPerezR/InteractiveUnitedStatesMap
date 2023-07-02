import { React, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import StateFlagDialog from './StateFlagDialog';
import allStates from '../data/allstates.json';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

function UnitedStates() {
  // states for use in StateFlagDialog.jsx
  const [openDialog, setOpenDialog] = useState(false);
  const [stateToOpen, setStateToOpen] = useState(false);

  // returns index, if does not exist then -1
  const returnStateIndex = (id) => {
    let index = -1;

    // findIndex could work here, but is not supported in IE 11
    for (let i = 0; i < 51; i += 1) {
      if (allStates[i].val === id) {
        index = i;
        break;
      }
    }
    return index;
  };

  // selects the state
  const handleStateClick = (id) => {
    const stateIndex = returnStateIndex(id);
    if (stateIndex !== -1) {
      setOpenDialog(true);
      setStateToOpen(stateIndex);
    }
  };

  // return the fill
  const returnFill = (id) => {
    const stateIndex = returnStateIndex(id);
    if (stateIndex !== -1 && allStates[stateIndex].hasData === true) {
      return true;
    }
    return false;
  };

  // returns the full united states map
  return (
    <div>
      {openDialog && <StateFlagDialog open stateLocation={stateToOpen} setOpen={setOpenDialog} />}
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  stroke="#FFF"
                  geography={geo}
                  style={{
                    default: { outline: 'none', fill: returnFill(geo.id) ? '#5A5A5A' : '#DDD' },
                    hover: { outline: 'none', fill: returnFill(geo.id) ? '#90EE90' : '#DDD' },
                    pressed: { outline: 'none', fill: returnFill(geo.id) ? '#5A5A5A' : '#DDD' },
                  }}
                  onClick={
                    () => allStates[returnStateIndex(geo.id)].hasData && handleStateClick(geo.id)
                  }
                />
              ))}
            </>
          )}
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default UnitedStates;
