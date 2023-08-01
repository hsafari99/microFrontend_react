import React from 'react';
import Button from '@mui/material/Button';

export default ({ children }: {children: React.ReactNode} ) =>(
  <Button>
    { children }
  </Button>
);