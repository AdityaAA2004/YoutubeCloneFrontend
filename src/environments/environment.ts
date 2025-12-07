import config from '../config/config.json';
export const local_environment = {
  ...config,
  production: false
};
