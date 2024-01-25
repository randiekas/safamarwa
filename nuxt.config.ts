// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	
	devtools: {
		enabled: true
	},

	components: {
        global: true,
        dirs: ['~/components']
    },

	modules: [
		'vuetify-nuxt-module'
	],

	vuetify: {

		moduleOptions: {
			/* module specific options */
		},

		vuetifyOptions: {
			/* vuetify options */
		}

	}
})
