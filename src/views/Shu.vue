<template>
    <div>
        <h2 >蜀国首页</h2>
        <button @click="backClick()">点击返回上个界面</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        backClick(){
            this.$router.go(-1);
        }
    },
    created(){
        
    },
    mounted(){
        var name = this.$route.params.name;
        console.log(name);
    }
    
}
</script>

<style  scoped>

</style>