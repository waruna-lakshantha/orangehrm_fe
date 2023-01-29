<template>
<TheHeader />
<br>
<div class="container">
    <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Name: {{ empname }}</h4>
        <hr>
        <p class="mb-0">Address: {{ empaddress }}</p>
    </div>
</div>
</template>

<script>
import TheHeader from './TheHeader.vue'
export default {
    name: "TheHome",
    components: {
        TheHeader
    },
    data() {        
        return {
            empname: (JSON.parse(localStorage.getItem('user-info')))[0]['first_name'] + ' ' + (JSON.parse(localStorage.getItem('user-info')))[0]['last_name'],
            empaddress: (JSON.parse(localStorage.getItem('user-info')))[0]['address'] 
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: "TheLogin"
            })
        }
    }
}
</script>
