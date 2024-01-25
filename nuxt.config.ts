// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	
	devtools: {
		enabled: true
	},

	app:{

		head: {
		
			title: 'Safa Marwa Umrah Plus Thaif',
	
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: 'JALAN MUDAH MENUJU BAITULLAH DENGAN PELAYANAN TERBAIK' },
				{ name: 'format-detection', content: 'telephone=no' },
				{ name: 'keywords', content: 'safamarwa, safa marwa, umrah, umrah plus thaif' },
				{ name: 'twitter:title', content: 'Safa Marwa Umrah Plus Thaif' },
				{ name: 'twitter:description', content: 'JALAN MUDAH MENUJU BAITULLAH DENGAN PELAYANAN TERBAIK' },
				{ name: 'twitter:image', content: 'https://safamarwa.co.id/meta.jpeg' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'og:title', content: 'Safa Marwa Umrah Plus Thaif' },
				{ name: 'og:description', content: 'JALAN MUDAH MENUJU BAITULLAH DENGAN PELAYANAN TERBAIK' },
				{ name: 'og:image', content: 'https://safamarwa.co.id/meta.jpeg' },
				{ name: 'og:image:url', content: 'https://safamarwa.co.id/meta.jpeg' },
	
				
			],
	
		},

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
