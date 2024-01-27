<template>
    <div
        class="mx-2">
        <v-btn
            block
            class="mb-2 bg-black"
            rounded=""
            prepend-icon="mdi-whatsapp">
            +6289676171888
        </v-btn>
        <v-btn
            block
            class="mb-2 bg-black"
            rounded=""
            prepend-icon="mdi-instagram">
            @randiekas_
        </v-btn>
        <v-btn
            block
            class="mb-2 bg-black"
            rounded="">

            <template
                v-slot:prepend>
                <v-img
                    width="18"
                    height="18"
                    src="/icon/tiktok.svg"/>
            </template>
            @randiekas_
        </v-btn>
        
        <v-btn
            block
            class="mb-2 bg-black"
            rounded=""
            prepend-icon="mdi-facebook">
            randiekas
        </v-btn>
        
    </div>
</template>
<script>
export default{
    props: ['config', 'content']
}
</script>