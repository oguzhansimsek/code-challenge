import Development from './development';
import Production from './production';

const config = process.env.NODE_ENV === 'production' ? Production : Development;

export default config;
