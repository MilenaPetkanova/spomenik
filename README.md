# Spomenik

## Project brief

- Working title: Spomenik
- Solving the following problems: Scattering our chilren's photos and video though devices and social medias. Forgetting great stories we want to share with them in the future.
- Purpose: Store and share memories
- Target: Parents mostly 

## Tech stask

Back-end:
- nodejs 
- expressjs
- mysql
- typescript

Front-end: 
- vuejs
- nuxtjs
- vuex

Third-party:
- cloudinary

## Dependencies

Back-end:
- mysql2
- bcrypt-nodejs
- jsonwebtoken

Front-end:
- axios
- cookie-universal-nuxt
- vuex-persistedstate
- simple-vue-validator
- vue2-editor
- fortawesome
- toast

## Conventions

- Use BEM-ish for class names
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
- [ ] ux/post-view-and-share
- [ ] devops/deployment
- [ ] devops/ci-cd
- [ ] feature/images-set
- [ ] feature/user-roles
- [ ] feature/post-view-and-share
- [ ] feature/refresh-token
- [ ] feature/forgotten-password
- [ ] feature/passport-login-wuth-gmail
- [ ] enhancement/init-tests
- [ ] enhancement/separate-controllers-in-be
- [ ] enhancement/sequelize-everywhere-in-be
- [ ] enhancement/typescript-in-fe
- [ ] enhancement/constant-for-routes
- [ ] enhancement/loaders
- [ ] enhancement/alrts
- [ ] enhancement/dropdown-close-directive

## License
[MIT](https://choosealicense.com/licenses/mit/)
