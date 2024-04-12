import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Button from './Button';


const ThemeToggler = () => {
  const { toggleTheme } = useTheme();

  return (
      <Button
        extraClassName="p-3 icon-moon"
        onClick={toggleTheme}>
      </Button>
  );
};

export default ThemeToggler;



