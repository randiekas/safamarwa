<template>
	<v-layout>
		<v-main
			style="max-width: 600px;"	
			class="w-100 mx-auto my-auto bg-white">
			<v-row
				dense="">

				<v-col
					v-for="item in blok"
					cols="12"
					md="12">
					<component 
						:is="`my-${item.type}`" 
						:content="item.content"
						:config="item.config||{}"/>
				</v-col>

			</v-row>
		</v-main>
			
	</v-layout>
</template>
<style>
body {
	background-color: #f4f4f4;
  	/* background: linear-gradient(to bottom right, #3498db, #2ecc71); */
}
</style>
<script>
export default{

	data: function(){

		return {

			blok: [
				{
					type: 'head2',
					config:{
						showArrows: false,
						item: {
							class: "",
						}
					},
					content: {
						title: "SAFA MARWA",
						subtitle: "IJIN UMRAH NO: U.391./2021",
						image: "https://scola-uploader.sgp1.digitaloceanspaces.com/upload/8ef04f0e77a359ec5820b198/WhatsApp%20Image%202024-01-24%20at%2013.39.10%20%281%29.jpeg",
					},
				},
				{
					type: 'slide',
					config:{
						showArrows: false,
						item: {
							class: "ml-4 rounded-lg w-75",
						}
					},
					content: [
						{
							src: 'https://scola-uploader.sgp1.digitaloceanspaces.com/upload/9de2b61081438a6b15f525fc/1.png'
						},
						{
							src: 'https://scola-uploader.sgp1.digitaloceanspaces.com/upload/a0e2a8768a11c8f40382f156/2.png'
						}
					],
				},
				{
					type: 'text',
					config:{
						class: 'mx-2 text-overline',
					},
					content: 'Paket Umrah',
				},
				{
					type: 'slide',
					config:{
						showArrows: false,
						item: {
							class: "ml-4 rounded-lg w-75",
						}
					},
					content: [
						{
							src: 'https://scola-uploader.sgp1.digitaloceanspaces.com/upload/0ac3d3a9ebb49103a4e39f8a/1-min%20%281%29.png'
						},
						{
							src: 'https://scola-uploader.sgp1.digitaloceanspaces.com/upload/8a0c978105b49b03cd4407d0/2-min%20%281%29.png'
						},
					],
				},
				{
					type: 'text',
					config:{
						class: 'mx-2 text-overline',
					},
					content: 'Hubungi Kami',
				},
				{
					type: 'button-social1',
					config:{
						class: 'mx-2 text-overline',
						facebook: 'RANDI EKA SETIAWAN',
						instagram: '@randiekas_',
						tiktok: '@randiekas_',
						shopee: 'randiekas',
						tokped: 'tokopedia',
					},
					content: 'Alamat',
				},
				{
					type: 'frame',
					config:{
						class: "w-100",
						height: "400" ,
						style: "border:0;" ,
						allowfullscreen: "" ,
						loading: "lazy" ,
						referrerpolicy: "no-referrer-when-downgrade",
					},
					content: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.9152619294455!2d106.73752418453549!3d-6.404917877047175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e93ba9e47957%3A0x5ca5285a205bc9e5!2sJl.%20Raya%20Muchtar%20No.100%2C%20Sawangan%20Baru%2C%20Kec.%20Sawangan%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016815!5e0!3m2!1sen!2sid!4v1706290245937!5m2!1sen!2sid',
				},
			]

		}
	},
}
</script>