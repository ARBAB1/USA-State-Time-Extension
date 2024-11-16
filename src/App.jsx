import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Sun Icon
import NightsStayIcon from '@mui/icons-material/NightsStay'; // Moon Icon
import { States } from './Constant';
import moment from 'moment';

function App() {
  const [stateTime, setStateTime] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStates, setFilteredStates] = useState([]);
  const [selectedState, setSelectedState] = useState(
    JSON.parse(localStorage.getItem('selectedState')) || null
  );

  // Initialize state with the initial times
  useEffect(() => {
    const initialStateTimes = States.map((item) => ({
      stateName: item.stateName,
      Time: moment(item.Time, 'YYYY-MM-DD HH:mm:ss').toDate(),
    }));
    setStateTime(initialStateTimes);
    setFilteredStates(initialStateTimes); // Initially, show all states
  }, []);

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setStateTime((prevTimes) =>
        prevTimes.map((item) => ({
          ...item,
          Time: moment(item.Time).add(1, 'second').toDate(),
        }))
      );

      // Update the selected state's time dynamically if it exists
      if (selectedState) {
        const updatedSelectedState = {
          ...selectedState,
          Time: moment(selectedState.Time).add(1, 'second').toDate(),
        };
        setSelectedState(updatedSelectedState);
        localStorage.setItem('selectedState', JSON.stringify(updatedSelectedState));
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedState]);

  // Update the filtered list when the search query changes
  useEffect(() => {
    const filtered = stateTime.filter(
      (item) =>
        item.stateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        moment(item.Time).format('YYYY-MM-DD h:mm:ss A').includes(searchQuery)
    );
    setFilteredStates(filtered);
  }, [searchQuery, stateTime]);

  // Save selected state to local storage and state
  const handleSelectState = (state) => {
    setSelectedState(state);
    localStorage.setItem('selectedState', JSON.stringify(state));
  };

  // Clear the selected state from local storage and state
  const handleClearSelection = () => {
    setSelectedState(null);
    localStorage.removeItem('selectedState');
  };

  // Determine if the time is daytime or nighttime
  const isDayTime = (time) => {
    const hour = moment(time).hour();
    return hour >= 6 && hour < 18; // Daytime between 6:00 AM and 6:00 PM
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
        maxWidth: '100%',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Time of USA
      </Typography>
      {selectedState && (
        <Box
          sx={{
            mb: 3,
            p: 2,
            border: '1px solid',
            borderRadius: 2,
            boxShadow: 2,
            textAlign: 'center',
            maxWidth: '600px',
            width: '100%',
          }}
        >
          <Typography variant="h6">Selected State</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="body1">
              {selectedState.stateName}:{' '}
              {moment(selectedState.Time).format('YYYY-MM-DD h:mm:ss A')}
            </Typography>
            <Avatar sx={{ ml: 2 }}>
              {isDayTime(selectedState.Time) ? (
                <WbSunnyIcon color="warning" /> // Sun icon for daytime
              ) : (
                <NightsStayIcon color="primary" /> // Moon icon for nighttime
              )}
            </Avatar>
          </Box>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClearSelection}
            sx={{ mt: 2 }}
          >
            Clear Selection
          </Button>
        </Box>
      )}
      <TextField
        fullWidth
        margin="normal"
        label="Search by state name or time"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ maxWidth: '600px', width: '100%' }}
      />
      <List
        sx={{
          width: '100%',
          maxWidth: 600,
          bgcolor: 'background.paper',
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        {filteredStates.map((item, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>
                {isDayTime(item.Time) ? (
                  <WbSunnyIcon color="warning" /> // Sun icon for daytime
                ) : (
                  <NightsStayIcon color="primary" /> // Moon icon for nighttime
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item?.stateName}
              secondary={moment(item?.Time).format('YYYY-MM-DD h:mm:ss A')}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSelectState(item)}
            >
              Select
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default App;
