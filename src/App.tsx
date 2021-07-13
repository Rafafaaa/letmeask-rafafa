import { ThemeProvider, DefaultTheme } from 'styled-components';
import { usePersistedState } from './hooks/usePersistedState';

import GlobalStyles from './styles/global';

import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';

import { Toaster } from 'react-hot-toast';

import { SwitchTheme } from './components/SwitchTheme';

import { Routes } from './routes';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Toaster
        toastOptions={{
          style: {
            background: theme.colors.primary,
            color: theme.colors.color
          }
        }}
      />
      <SwitchTheme toggleTheme={toggleTheme} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
