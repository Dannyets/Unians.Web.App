import devConfiguration from './configuration.dev';
import prodConfiguration from './configuration.prod';

const isDevEnvironment = process.env.NODE_ENV !== 'production'

const configuration = isDevEnvironment ? devConfiguration : prodConfiguration;

export default configuration;
