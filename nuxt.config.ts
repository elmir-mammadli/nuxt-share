export default defineNuxtConfig({
  modules: [
  '~/module', 
  'nuxt-svgo'
],
  share: {
    baseURL: 'https://www.example.com'
  },
  svgo: {
    componentPrefix: 'Icon'
  },
})