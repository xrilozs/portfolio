// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  app: {
    head: {
      title: 'Fajar Ramadhan Hidayah | Full Stack Web Developer',
      meta: [
        { name: 'description', content: 'Fajar Ramadhan Hidayah | Full Stack Web Developer' },
        { property: 'og:title', content: 'Fajar Ramadhan Hidayah | Full Stack Web Developer' },
        { property: 'og:description', content: 'Fajar Ramadhan Hidayah | Full Stack Web Developer' },
        { property: 'og:url', content: 'https://xrilozs.vercel.app/' }
      
      ],
    },
  },
})