<template>
    <slot></slot>
</template>
<script>
export default {
    props: {
        id: String,
    },
    mounted(){
        console.log(this.id)
    },
}
</script>
<style>
.hidden-text {
     overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>