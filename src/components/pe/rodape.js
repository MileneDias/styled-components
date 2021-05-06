import React from 'react';
import Box from '@material-ui/core/Box';

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '100rem', height: '5rem' },
  };

export default function Rodape(props){
    return (
        <div>
            <Box display="flex" justifyContent="center">
            <Box borderRadius={16} {...defaultProps} >{props.rodape}</Box>            </Box>
        </div>
    )
}