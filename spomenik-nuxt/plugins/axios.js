export default function({ store, app: { $axios }, redirect }) {
  $axios.onRequest((config) => {
    if (store.state.auth.accessToken) {
      config.headers.Authorization = 'Bearer ' + store.state.auth.accessToken;
    }
    return config;
  });

  $axios.onError(error => {
    if (error.response.status === 500) {
      redirect('/errors/500')
    }
  })
}