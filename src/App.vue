<template>
    <div>
        <header-blogs></header-blogs>
        <router-view></router-view>
    </div>
</template>

<script>
// Imports
import showBlogs from './components/showblog.vue';
import Appheader from './components/header.vue';
import listBlogs from './components/listBlog.vue';
export default {
    components: {
        'show-blogs': showBlogs,
        'list-blogs': listBlogs,
        'header-blogs': Appheader
},
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>