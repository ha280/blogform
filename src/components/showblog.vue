<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs" />
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase}}</h2></router-link>
            <article>{{ blog.content }}</article>
        </div>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';
export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    created() {
        this.$http.get('https://blog1-b0eb2.firebaseio.com/post.json').then(function(data){
            return data.json();
    }).then(function(data){
        var blogArray = [];
        for(let key in data){
            data[key].id = key
            blogArray.push(data[key]);
        }
        this.blogs = blogArray;
        console.log(this.blogs);
    });
    },
    mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>