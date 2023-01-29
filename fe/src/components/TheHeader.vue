<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="" width="30" height="24">
    </a>
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
                <router-link to="/home">My Info</router-link>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
                <router-link to="/emp_data">Employee Data</router-link>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
                <router-link to="/leave">Leave</router-link>
            </a>
        </li>
        <li class="nav-item">
            <a v-on:click="logout" class="nav-link" href="#">Logout</a>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    name: "TheHeader",
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({name: 'TheLogin'});
        }
    }
}
</script>
