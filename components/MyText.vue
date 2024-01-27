<template>
    <p
        v-bind="config">
        {{ content }}
    </p>
</template>
<script>
export default{
    props: ['config', 'content']
}
</script>