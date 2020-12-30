<template>
    <div>
        <h2 >魏国首页</h2>
        <button @click="backCick()">点击返回上一个界面</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        backCick(){
            this.$router.go(-1);
        }

    },
    created(){
        
    },
    mounted(){
        // let name = JSON.parse(this.$router.params);
        var name = this.$route.query.name;
        console.log(name);
        alert(name);
    }
    
}
</script>

<style  scoped>

</style>