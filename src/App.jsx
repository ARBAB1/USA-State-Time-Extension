import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography } from '@mui/material'; // For layout and heading
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
  const [searchQuery, setSearchQuery] = useState(''); // For storing the search query
  const [filteredStates, setFilteredStates] = useState([]); // For filtered states

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
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Update the filtered list when the search query changes
  useEffect(() => {
    const filtered = stateTime.filter(
      (item) =>
        item.stateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        moment(item.Time).format('YYYY-MM-DD h:mm:ss A').includes(searchQuery)
    );
    setFilteredStates(filtered);
  }, [searchQuery, stateTime]);

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
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default App;
