<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Container from './Container.vue';
import ScrollReveal from 'scrollreveal'
import LeftImage from '@/assets/images/left-image.png'
import RightImage from '@/assets/images/right-image.png'

const box = ref(null)
const box2 = ref(null)

onMounted(() => {
    ScrollReveal().reveal(box.value, {
        distance: '130px',
        origin: 'right',
        duration: 1000,
        delay: 200,
        easing: 'ease',
        reset: true
    })
})
onMounted(() => {
    ScrollReveal().reveal(box2.value, {
        distance: '130px',
        origin: 'left',
        duration: 1000,
        delay: 200,
        easing: 'ease',
        reset: true
    })
})

const sectionData = ref([
    {
        id: 1,
        detail: 'experiences',
        title: 'We Provide You The Best Experience',
        description: 'You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials',
        image: LeftImage
    }, {
        id: 2,
        detail: 'Materials',
        title: 'Very serious materials for making furniture',
        description: 'Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price',
        image: RightImage
    }
])


</script>

<template>
    <div class="py-[240px] flex flex-col " style="overflow-x: hidden;">
        <div class="flex flex-col " v-for="data in sectionData" :key="data.id">
            <div v-if="data.id == 1" class="flex justify-start items-center gap-[80px] pr-[141px] mb-[240px]" ref="box">
                <img :src="data.image" alt="Data Image" v-if="data.id == 1"
                    class="flex items-end justify-end text-end right-0 ">
                <div class="flex flex-col gap-5">
                    <p class="font-bold text-[18px] text-[#E58411] uppercase tracking-wide">{{ data.detail }}</p>
                    <p class="text-[42px] font-bold">{{ data.title }}</p>
                    <p class="font-regular text-[18px]">{{ data.description }}</p>
                    <div class="flex items-center gap-[13px]">
                        <p class="text-[14px] font-medium text-[#E58411] ">More Info</p>
                        <img src='../assets/icons/grommet-icons_form-next-link.svg' alt="Right Icon">
                    </div>
                </div>
            </div>
            <div v-if="data.id == 2" class="flex justify-end items-center gap-[80px] pl-[80px]" ref="box2">

                <div class="flex flex-col gap-5">
                    <p class="font-bold text-[18px] text-[#E58411] uppercase tracking-wide">{{ data.detail }}</p>
                    <p class="text-[42px] font-bold">{{ data.title }}</p>
                    <p class="font-regular text-[18px]">{{ data.description }}</p>
                    <div class="flex items-center gap-[13px]">
                        <p class="text-[14px] font-medium text-[#E58411] ">More Info</p>
                        <img src='../assets/icons/grommet-icons_form-next-link.svg' alt="Right Icon">
                    </div>
                </div>
                <img :src="data.image" alt="Data Image" v-if="data.id == 2"
                    class="flex items-end justify-end text-end right-0 ">
            </div>
        </div>
    </div>
</template>
