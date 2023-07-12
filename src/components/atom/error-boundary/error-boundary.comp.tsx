import Alert from '@mui/material/Alert';
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { log } from '@/utils/logger.util';
import { ErrorBoundaryProps, ErrorBoundaryState } from './error-boundary.type';

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    if (process.env.NODE_ENV !== 'production') {
      log(error);
      log(errorInfo);
    }
  }

  render() {
    return (
      <>
        <Snackbar open={this.state.hasError}>
          <Alert severity="error" sx={{ width: '100%' }}>
            Something went wrong, please press F5 to refresh the page
          </Alert>
        </Snackbar>
        {this.props.children}
      </>
    );
  }
}
