import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '80vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  overflow: 'hidden',
}; //smart copping 

const modalContentStyle = {
  maxHeight: 'calc(80vh - 96px)', 
  overflowY: 'auto', 
}; //smart copping

const HistoryModal = ({ open, onClose, data }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          History
        </Typography>
        <Box sx={modalContentStyle}>
          <List>
            {data.map((item) => (
              <ListItem key={item.id} sx={{ borderBottom: '1px solid #eee' }}>
                <ListItemText
                  primary={`Distance: ${item.distance.toFixed(2)} km`}
                  secondary={`Destination: ${item.destination_address} | Source: ${item.source_address}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Modal>
  );
};

export default HistoryModal;