<template>
    <!-- <v-carousel
        :show-arrows="false">

        <v-carousel-item
            v-for="item in content"
            v-bind="item"/>
            
    </v-carousel> -->
    <div
        class="d-flex overflow-auto pb-1">
        <my-image
            v-for="item in content"
            :content="item.src"
            :config="config.item"/>
    </div>
</template>
<script>
export default{
    props: ['config', 'content']
}
</script>