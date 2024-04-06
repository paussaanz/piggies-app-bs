import React from 'react';
import { useTheme } from '../contexts/ThemeContext'; 


const ThemeToggler = () => {
    const { toggleTheme } = useTheme();

    return (
      <button onClick={toggleTheme}>Cambiar Tema</button>
    );
  };

export default ThemeToggler;

