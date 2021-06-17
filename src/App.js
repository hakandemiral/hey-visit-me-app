import React from 'react';
import { ThemeProvider } from 'styled-components';
import Paper from './Components/Paper';
import useTheme from './Hooks/useTheme';
import RootWrapper from './Components/RootWrapper';
import theming from './Theming/creator.theme';
import Button from './Components/Generic/Inputs/Button';
import TextInput from './Components/Generic/Inputs/TextInput';
import DropdownInput from './Components/Generic/Inputs/DropdownInput';
import Navbar from './Components/Generic/Navigations/Navbar';

function App() {
  const [isDark, setIsDark] = useTheme('isDark');

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeProvider theme={theming(isDark)}>
      <RootWrapper>
        <button onClick={handleTheme}>Switch Theme</button>
        {
          isDark.toString()
        }
        <Paper />
        <br />
        <Button text="Selam Test!" primary size="short" icon="Bell" />
        <TextInput icon="Bell" placeholder="Name" label="Fullname" />
        <DropdownInput options={['Facebook', 'Instagram', 'Dribble']} label="Select social" placeholder="Select Social Share" icon="Bell" />
        <Paper />
        <Navbar active="overview" />
      </RootWrapper>
    </ThemeProvider>
  );
}

export default App;
