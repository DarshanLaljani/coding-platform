import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { ChakraProvider } from '@chakra-ui/react'

function Title(props) {
  return (
    
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
    
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;