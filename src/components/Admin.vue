<template>
    <div id="admin">
        <h1>Admin Area</h1>
        <p>
            This is an Admin only area
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {};
        }
    }
</script>

<style scoped>
    #admin {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>