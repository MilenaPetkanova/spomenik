# Spomenik

## Project brief

- **Working title:** Spomenik
- **Problems than it solves: ** Scattering our chilren's photoes and video though devices and social medias. Forgetting great stories we'll want to share with them in the future.
- **Purpose: ** Store and share memories
- **Target: ** Parents mostly 

## Tech stask

Back-end:
- nodejs 
- expressjs
- postgress sql
- typescript

Front-end: 
- vuejs
- nuxtjs
- vuex

Third-party:
- cloudinary

## Dependencies

Front-end:
- axios
- cookie-universal-nuxt
- vuex-persistedstate
- simple-vue-validator
- vue2-editor
- fortawesome
- toast

Back-end:
- sequelize
- bcrypt-nodejs
- jsonwebtoken

## Conventions

- Use BEM for class names
- Use tailwindcss for styles (as much as possible)

## Structure

Front-end:

spomenik-nuxt/
  - assets/
    - css/
  - components/
    - auth/
    - gallery/
    - letters/
    - shared/
  - constants/
    - enums.js
  - layouts/
    - auth.vue
    - default.vue
    - error.vue
  - middleware/
    - auth.js
    - redirect.js
  - pages/
    - auth/
    - errors/
    - gallery.vue
    - index.vue
    - letters.vue
  - plugins/
    - axios.js
    - image-lightbox.js
    - simple-vue-validator.js
    - vuex-persistedstate.js
  - services/
    - api.js
    - auth.js
    - gallery.js
    - letters.js
  - store/
    - auth.js
    - gallery.js
    - index.js
    - letters.js
    - modals.js

## Backlog

- [ ] ui/design
- [ ] ux/user-roles
- [ ] devops/deployment
- [ ] devops/ci-cd
- [ ] feature/images-set
- [ ] feature/user-roles
- [ ] feature/refresh-token
- [ ] feature/forgotten-password
- [ ] enhancement/constant-for-routes

## License
[MIT](https://choosealicense.com/licenses/mit/)