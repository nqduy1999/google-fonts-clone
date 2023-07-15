import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { generalTheme } from './theme/general-theme';
import { QueryClientProvider } from './providers/query-client-provider';
import { ErrorBoundary } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={generalTheme}>
      <ErrorBoundary>
        <QueryClientProvider>
          <CssBaseline />
          <App />
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
