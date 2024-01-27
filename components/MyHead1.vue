<template>
    <div
        class="d-flex pa-2 align-center">
        <v-avatar
            size="x-large">
            <my-image
                :content="content.image"
                v-bind="{}"/>
        </v-avatar>
        <div
            class="pl-2 w-100">
            <p class="font-weight-black">{{ content.title }}</p>
            <p class="text-caption">{{ content.subtitle }}</p>
        </div>
        <v-btn
            size="x-small"
            icon="mdi-apps"/>
    </div>
</template>
<script>
export default{
    props: ['config', 'content']
}
</script>