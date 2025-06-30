<script setup lang="ts">
import { ref } from 'vue';
import Container from './Container.vue';

const activeMenu = ref<any>(1)

const handleMenu = (id: any) => {
    activeMenu.value = id
}

</script>

<template>
    <div class="w-full bg-[#F7F7F7]">
        <Container>
            <div class="flex flex-col py-[50px] items-center justify-center ">
                <p class="text-[42px] font-bold mb-[32px]">Best Selling Product</p>
                <div
                    class="*:text-[18px] *:font-medium bg-[#EEEEEE] p-[6px] flex items-center justify-between w-[348px] h-[57px] *:text-[#1E1E1E] rounded-[20px] *:w-full *:h-full *:flex *:items-center *:justify-center *:rounded-[12px] *:cursor-pointer">
                    <p @click="handleMenu('1')" :class="[activeMenu == '1' ? 'bg-white' : '']">Chair</p>
                    <p @click="handleMenu('2')" :class="[activeMenu == '2' ? 'bg-white' : '']">Beds</p>
                    <p @click="handleMenu('3')" :class="[activeMenu == '3' ? 'bg-white' : '']">Sofa</p>
                    <p @click="handleMenu('4')" :class="[activeMenu == '4' ? 'bg-white' : '']">Lamp</p>
                </div>
            </div>
        </Container>
    </div>
</template>
