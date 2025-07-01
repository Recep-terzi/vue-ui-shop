<script setup lang="ts">
import { useShopStore } from '@/stores/shop';
import { ref } from 'vue';


const username = ref<string>()
const password = ref<string>()
const userStore = useShopStore()
const handleSubmit = (e: any) => {
    e.preventDefault()
    if (userStore.admin.username === 'recep' && userStore.admin.password === '1234') {
        userStore.setAdmin()
        console.log(userStore.adminIsLogin)
    }
    else {
        console.log('Hatalı')
    }
}
</script>

<template>
    <div class=" relative overflow-hidden w-full h-full">
        <img src="../../assets/images/home-bg.png" alt="bg-image" class=" w-full h-screen -z-10" />
        <div
            class="absolute left-0 right-0 bottom-0 top-0 m-auto h-[300px] w-[400px] bg-[#ffffff] rounded-lg flex flex-col gap-10 p-5">
            <p class="font-bold text-center text-[28px]">Admin Login</p>
            <form action="" class="flex flex-col gap-5" @submit="handleSubmit">
                <input type="text" placeholder="Username" class="border-[1px] rounded-md h-10 px-3"
                    v-model="username" />
                <input type="password" placeholder="Password" class="border-[1px] rounded-md h-10 px-3"
                    v-model="password">
                <button
                    class="bg-[#E58411] w-full h-10 text-white rounded-md cursor-pointer hover:scale-105 transition-all"
                    type="submit">Login</button>
            </form>
        </div>
    </div>
</template>
