<template>
    <div>
        <h2 >吴国首页</h2>
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
        
    }
    
}
</script>

<style  scoped>

</style>