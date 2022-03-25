export default function({ store, app: { $axios }, redirect }) {
  $axios.onRequest((config) => {
    if (store.state.authentication.accessToken) {
      config.headers.Authorization = 'Bearer ' + store.state.authentication.accessToken;
    }

    return config;
  });
}