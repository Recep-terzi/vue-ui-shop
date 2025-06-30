<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Container from './Container.vue';
</script>

<template>
    <Container>
        <div class="flex items-center w-full justify-between py-[40px] text-white ">
            <a href="/" class="font-bold text-[28px]">Pyson</a>
            <ul class="flex items-center gap-[65px] *:text-[18px] *:cursor-pointer">
                <li>Furniture</li>
                <li>Shop</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <div class="relative">
                <img src="../assets/icons/Bag.svg" alt="Bag Icon" class="size-[34px]" />
                <p
                    class="bg-[#E58411] text-white size-[20px] flex items-center justify-center rounded-full absolute right-[-5px] top-0 text-[12px]">
                    0</p>
            </div>
        </div>
    </Container>
</template>

<style scoped></style>
