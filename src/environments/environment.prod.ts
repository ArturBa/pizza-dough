import env from './environment';
import { Environment } from './environment';

const prod: Environment = {
  ...env,
  production: false,
};
export default prod;
