<script setup lang="ts">
import AdminLogin from '@/components/admin/AdminLogin.vue';
import { useShopStore } from '@/stores/shop';
import { ref } from 'vue';
import ProductList from './ProductList.vue';
import AddProductPopup from './AddProductPopup.vue';

const userStore = useShopStore()
const selectMenu = ref('')
let addProductPopup = ref(false)


const handleProductPopup = () => {
    addProductPopup.value = true
}
const handleClosePopup = () => {
    addProductPopup.value = false
}
</script>

<template>
    <div className='flex h-screen'>
        <div className='h-full bg-[#E58411] w-[350px]'>
            <a href='' class="">
                <p class="text-[40px] font-bold p-10">Pyson</p>
            </a>
            <div
                className='flex flex-col gap-10 p-10 *:text-[18px] *:font-normal *:hover:text-white *:transition-all *:cursor-pointer'>
                <p @click="selectMenu = 'add-product'" :class="selectMenu === 'add-product' ? 'text-white' : ''">Add
                    Product</p>
            </div>
        </div>
        <div className='w-full '>
            <div v-if="selectMenu === 'add-product'">
                <ProductList :handle-product-popup="handleProductPopup" />
            </div>
        </div>
    </div>
    <div v-if="addProductPopup">
        <AddProductPopup :handle-close-popup="handleClosePopup" />
    </div>
</template>
