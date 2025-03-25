import Button from '@mui/material/Button';
import './App.css';
import TextInput from './components/TextInput';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import HistoryModal from './components/HistoryModal';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import axios from 'axios';


function App() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [distance, setDistance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleOpenModal = async () => {
    try {
      const response = await axios.get('http://localhost:8000/distances');
      setHistoryData(response.data);
      setModalOpen(true);
    } catch (error) {
      console.error("Error calling API", error);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (!source || !destination) {
      setDistance(null);
    }
  }, [source, destination]);

  const handleSubmit = async () => {
    if (!source || !destination) {
      alert('Please fill all the fields!');
      return;
    }

    setIsLoading(true);
    setDistance(null);

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

      const response = await axios.post(`${API_URL}/distances`, 
      {
        "source": source,
        "destination": destination
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      setDistance(response.data.distance_km)
      
    } catch (error) {
      console.error("Error calling API:", error);
      setDistance(null);
      alert(`Error to calculate distance: ${error.response?.data?.detail || error.message}`);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="App">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
          gap: 2,
          maxWidth: 800,
          margin: 'auto',
          marginTop: 25,
        }} //smart coping
      >
        <Typography
          variant="h4"
          component="h1"
          color="primary"
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bold',
            mb: 5,
          }} //smart copping
        >
          Calculate Distances
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            width: '100%',
          }}
        >
          <TextInput
            label="Source"
            placeholder="Enter the source"
            value={source}
            onChange={handleSourceChange}
          />
          <TextInput
            label="Destination"
            placeholder="Enter the destination"
            value={destination}
            onChange={handleDestinationChange}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            gap: 2,
            width: '100%',
            minHeight: 25
          }}
        >
          {isLoading ? (
            <CircularProgress color="primary" /> //smart copping
          ) : distance !== null ? (
            <Typography variant="h6" color="success.main">
              Distance: {Number(distance).toFixed(2)} km
            </Typography>
          ) : null}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
          }}
        >
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Calculate Distance
          </Button>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            History
          </Button>
        </Box>
        <HistoryModal
          open={modalOpen}
          onClose={handleCloseModal}
          data={historyData}
        />
      </Box>
    </div>
  );
}

export default App;
