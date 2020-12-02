import axios from 'axios';

import config from 'config';

/** Yeni axios instance */
const instance = axios.create();
instance.defaults.baseURL = config.api.baseURL; // api baseURL
instance.defaults.params = {};
instance.defaults.params.apikey = config.api.apikey; // api için gerekli apikey ekleniyor.

export default instance;
