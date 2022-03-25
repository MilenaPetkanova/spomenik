export default function({ store, app: { $axios }, redirect }) {
  $axios.onRequest((config) => {
    if (store.state.auth.accessToken) {
      config.headers.Authorization = 'Bearer ' + store.state.auth.accessToken;
    }

    return config;
  });
}