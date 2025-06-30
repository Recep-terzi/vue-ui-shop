<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Container from './Container.vue';
import ScrollReveal from 'scrollreveal'

const infoData = ref([
    {
        id: 1,
        title: 'Luxury facilities',
        description: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."
    },
    {
        id: 2,
        title: 'Affordable Price',
        description: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."
    },
    {
        id: 3,
        title: 'Many Choices',
        description: "We provide many unique work space choices so that you can choose the workspace to your liking."
    },
])

const box = ref(null)

onMounted(() => {
    ScrollReveal().reveal(box.value, {
        distance: '30px',
        origin: 'right',
        duration: 1000,
        delay: 100,
        easing: 'ease',
        reset: true
    })
})

</script>

<template>
    <Container>
        <div class="py-[120px] flex items-center gap-[130px] " v-if="infoData" ref="box">
            <p class="text-[42px] font-bold  ">Why <br /> Choosing Us</p>
            <div class="flex items-center gap-20 flex-1">
                <div class="flex flex-col gap-5" v-for="data in infoData" :key="data.id">
                    <p class="text-[24px] font-bold">{{ data.title }}</p>
                    <p class="text-[16px] font-regular">{{ data.description }}</p>
                    <div class="flex items-center gap-3 cursor-pointer">
                        <p class="text-[14px] text-[#E58411]">More Info </p>
                        <img src="../assets/icons/grommet-icons_form-next-link.svg" alt="Right Icon" />
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>
