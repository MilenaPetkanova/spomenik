export default function ({ store, redirect, route  }){
  if(route.path === '/auth/login' || route.path === '/auth/register') {
    return
  }
  if (!store.getters['auth/isAuthenticated']) {
    return redirect(`/auth/login`);
  }
}