<template>
	<v-layout>
		<div
			class="w-100">
			<div>
					
					<div
						v-for="item in blok">

						<component 
							:is="`my-${item.type}`" 
							:content="item.content"
							:config="item.config||{}"/>

					</div>

			</div>
		</div>
	</v-layout>
</template>
<script>
export default{

	data: function(){

		return {

			blok: [
				{
					"config": {},
					"content": "https://s3.ap-southeast-1.wasabisys.com/ofisial/asset/safamarwa/s260oxhwv0co9gnzz5mj-Ghigd-Roll%20x%20banner%20SMR%20DES%2023%20ok-min.jpg",
					"id": "xiz50pjooied53am4d0i",
					"no": 0,
					"type": "image"
				}
			]

		}
	},
}
</script>