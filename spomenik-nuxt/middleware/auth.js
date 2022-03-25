export default function ({ store, redirect, route  }){
  if(route.path === '/authentication/login' || route.path === '/authentication/register') {
    return
  }
  if (!store.getters['authentication/isAuthenticated']) {
    return redirect(`/authentication/login`);
  }
}