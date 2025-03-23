import Button from '@mui/material/Button';
import './App.css';
import TextInput from './components/TextInput';
import { useState } from 'react';
import Box from '@mui/material/Box';
import HistoryModal from './components/HistoryModal';
import Typography from '@mui/material/Typography';


const historyData = [
  {
    id: 1,
    source_address: "Rua Augusta, São Paulo",
    destination_address: "Avenida Paulista, São Paulo",
    distance: 0.34542537261202966,
  },
  {
    id: 2,
    source_address: "Rua Augusta, São Paulo",
    destination_address: "Avenida Paulista, São Paulo",
    distance: 0.34542537261202966,
  },
  {
    id: 3,
    source_address: "Rua Augusta, São Paulo",
    destination_address: "Avenida Paulista, São Paulo",
    distance: 0.34542537261202966,
  },
  {
    id: 4,
    source_address: "Rua Augusta, São Paulo",
    destination_address: "Avenida Paulista, São Paulo",
    distance: 0.09529483176947287,
  },
  {
    id: 5,
    source_address: "Rua Augusta, São Paulo",
    destination_address: "Avenida Paulista, São Paulo",
    distance: 0.09529483176947287,
  },
  {
    id: 6,
    source_address: "Rua Augusta, São Paulo",
    destination_address: "Avenida Paulista, São Paulo",
    distance: 0.8196367762769454,
  },
  {
    id: 7,
    source_address: "Rua Augusta, São Paulo",
    destination_address: "Avenida Paulista, São Paulo",
    distance: 0.8196367762769454,
  },
  {
    id: 8,
    source_address: "Rua Augusta, São Paulo",
    destination_address: "Avenida Paulista, São Paulo",
    distance: 0.8196367762769454,
  },
];


function App() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async () => {};

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
          marginTop: 5,
        }} //smart coping
      >
        <Typography
          variant="h4"
          component="h1"
          color="primary"
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bold',
            mb: 2,
          }} //smart copping
        >
          Search Distances
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
            flexDirection: 'row',
            gap: 2,
          }}
        >
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Send
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
