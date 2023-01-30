<template>
<div class="container">
    <br><br><br><br><br>
    <div class="row align-items-center">
        <div class="col-sm">
            <header>
                <img alt="Vue logo" class="logo" src="../assets/logo.png" width="125" height="125" />

                <div class="wrapper">
                    <TheWelcome msg="Welcome to OrangeHRM" />
                </div>
            </header>
        </div>
        <div class="col-sm">
            <div>
                <div>
                    <h1>Login</h1> <br>
                    <input type="text" class="form-control" v-model="posts.user_name" placeholder="Enter Your Username"> <br>
                    <input type="password" class="form-control" v-model="posts.password" placeholder="Enter Your Password"> <br>
                    <button v-on:click="signIn" class="btn btn-success btn-block btn-flat">Login</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import TheWelcome from './TheWelcome.vue'
import axios from 'axios';
export default {
    name: "TheLogin",
    components: {
        TheWelcome,
    },
    data() {
        return {
            posts: {
                token: 'hrm_api',
                user_name: null,
                password: null
            }
        }
    },
    methods: {
        async signIn() {

            if ((typeof (this.posts.user_name) == 'undefined' || this.posts.user_name === null) ||
                (typeof (this.posts.password) == 'undefined' || this.posts.password === null)) {
                alert('Username & Password Required!');
                return;
            }

            let result = await axios.post('http://ohrmapi:8089/backend_dev.php/api/auth.json',  JSON.stringify(this.posts))
                .catch(function (error) {
                    //console.warn(JSON.stringify(error));
                    //console.warn(error['message']);
                    //alert(error['message']);s
                    alert('Invalid Username/Password or request faild!');
                });

            if (result.status == 200) {
                //console.warn(JSON.stringify(result.data));
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({
                    name: "TheHome"
                })
                //alert('Successfully Signed In ' + result.data[0]['first_name'] + ' ' + result.data[0]['last_name']);
            }

        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: "TheHome"
            })
        }
    }
}
</script>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
