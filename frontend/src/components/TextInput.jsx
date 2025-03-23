import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextInput = ({ label, placeholder, value, onChange }) => {
  return (
    <Box sx={{ width: '100%', marginBottom: 2}}>
      <TextField
        fullWidth
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default TextInput;