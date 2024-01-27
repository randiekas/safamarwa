<template>
    <iframe 
        v-bind="config"
        :src="content"/>
</template>
<script>
export default{
    props: ['config', 'content']
}
</script>