import { notification } from 'antd';

export const showSuccess = (message) => (e) => {
  notification.success({
    message: 'Success',
    description: message,
  });
};

export const showInfo = (message) => (e) => {
  notification.info({
    message: 'Info',
    description: message,
  });
};

export const showWarning = (message) => (e) => {
  notification.warning({
    message: 'Warning',
    description: message,
  });
};

export const showError = (message) => (e) => {
  notification.error({
    message: 'Error',
    description: message,
  });
};