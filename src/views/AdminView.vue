<script setup lang="ts">
import AdminDashboard from '@/components/admin/AdminDashboard.vue';
import AdminLogin from '@/components/admin/AdminLogin.vue';
import { useShopStore } from '@/stores/shop';

const userStore = useShopStore()
console.log(userStore.adminIsLogin)


</script>

<template>
    <div v-if="userStore.adminIsLogin">
        <AdminDashboard />
    </div>
    <div v-else>
        <AdminLogin />
    </div>
</template>
