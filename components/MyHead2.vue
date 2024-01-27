<template>
    <div
        class="text-center">
        <div
            class="pa-2 text-right bg-black pb-16">
            <v-btn
                size="x-small"
                icon="mdi-apps"/>
        </div>
        <div
            class="mb-2 mt-n16">
            <my-image
                :content="content.image"
                v-bind="{
                    class: 'w-25 rounded-xl justify-center align-center mx-auto'
                }"/>
            <div
                class="pl-2 w-100">
                <!-- <p class="font-weight-black">{{ content.title }}</p> -->
                <p class="text-caption">{{ content.subtitle }}</p>
            </div>

        </div>
        
    </div>
</template>
<script>
export default{
    props: ['config', 'content']
}
</script>