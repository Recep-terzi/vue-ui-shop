<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import ProductSection from '@/components/ProductSection.vue';
import WhyChoosingUs from '@/components/WhyChoosingUs.vue';

import { onMounted, ref } from 'vue'
import ScrollReveal from 'scrollreveal'
import LeftRightSection from '@/components/LeftRightSection.vue';

const box = ref(null)

onMounted(() => {
    ScrollReveal().reveal(box.value, {
        distance: '40px',
        origin: 'bottom',
        duration: 1000,
        delay: 100,
        easing: 'ease-in-out',
        reset: true
    })
})

</script>

<template>
    <section class="relative ">
        <img src="../assets/images/home-bg.png" alt="bg-image" class=" w-full h-full -z-10" />

        <div class="absolute top-0 left-0 w-full h-full flex flex-col gap-6 items-center justify-center ">
            <Navbar />

            <div class="flex flex-col gap-6 items-center justify-center mt-[86px]">
                <p class="text-white text-[80px] font-bold text-center leading-tight">
                    Make your interior more <br /> minimalistic & modern
                </p>
                <p class="text-white text-[24px] font-light text-center leading-snug">
                    Turn your room with panto into a lot more minimalist<br /> and modern with ease and speed
                </p>
            </div>

            <div class="relative w-[344px] h-[56px] m-auto mt-[45px] " ref="box">
                <input type="text" placeholder="Search furniture"
                    class="border-[1px] border-[#ffffff99] px-[20px] rounded-[30px] w-full h-full placeholder:text-white bg-[#ffffff26] focus:outline-none focus:border-[#ffffff99] focus:shadow-2xl text-white" />
                <div
                    class="size-[40px] flex items-center justify-center rounded-full absolute right-2 top-0 bottom-0 bg-[#E58411] m-auto cursor-pointer">
                    <img src="../assets/icons/akar-icons_search.svg" alt="Search Icon" class="size-[18px]" />
                </div>
            </div>
        </div>
    </section>

    <WhyChoosingUs />
    <ProductSection />
    <LeftRightSection />
</template>
