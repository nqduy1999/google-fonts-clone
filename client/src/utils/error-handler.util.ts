import { log } from './logger.util';

import React from 'react';
import { API_ERRORS } from '@/constants/error/api-error-const';

export const useErrorHandler = () => {
  const onError = React.useCallback((error) => {
    if (error instanceof Error && error.message === '401') {
      console.log('error from client');
      return;
    }
    if (process.env.NODE_ENV !== 'production') {
      log(error);
    }
    if (error != null) {
      const { errMsg } = error;
      if (typeof errMsg === 'string' && error.message === '400') {
        // message.error(errMsg, { persist: true });
        return;
      }
    }
  }, []);
  return { onError };
};

export const useAsyncErrorHandler = () => {
  return React.useCallback(async (asyncFunc) => {
    try {
      return await asyncFunc();
    } catch (error) {
      if (error instanceof Error && error.message === '401') {
        return;
      }
      if (process.env.NODE_ENV !== 'production') {
        log(error);
      }
    }
  }, []);
};

export const parseServerError = (error) => {
  if (error?.errMsg?.error_message) {
    return {
      message: error?.errMsg?.error_message,
    };
  }
  if (typeof error?.errors?.message === 'string') {
    return { message: error?.errors?.message };
  }
  if (Array.isArray(error?.errors) && Array.isArray(error.errors[0])) {
    return {
      field: error.errors[0][0],
      message: API_ERRORS[error.errors[0][1]],
    };
  }
};
