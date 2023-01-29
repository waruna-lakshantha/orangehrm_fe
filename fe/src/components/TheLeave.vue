<template>
<TheHeader />
<br>
<div class="container">
    <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Leave Management</h4>
    </div>
</div>
</template>

<script>
import TheHeader from './TheHeader.vue'
export default {
    name: 'TheLeave',
    components: {
        TheHeader
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
