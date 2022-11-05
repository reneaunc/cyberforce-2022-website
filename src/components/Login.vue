<template>
    <div class="float-container">
        <div id="login" class="float-child">
            <h1>Login</h1>
            <input type="text" name="username" v-model="input.username" placeholder="Username" />
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
            <button type="button" v-on:click="login()">Login</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    /* #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    } */
    .float-container {
    border-radius: 25px;
    background: green;
    border: 3px solid green;
    padding: 20px;
    width: 70%;
    height: 600px;
}

.float-child {
    width: 50%;
    position: relative;
    border-radius: 25px;
    padding: 50px;
    text-align: center;
    margin-left: 20%;
    margin-right: auto;
    background: white;
    border: 2px solid black;
    width: 50%;
    height: 500px;
}
</style>