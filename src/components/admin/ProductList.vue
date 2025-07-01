<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { supabase } from '../../../lib/supabase';
import { mdiRefresh } from '@mdi/js';

defineProps({
    handleProductPopup: Function
})
const shopData = ref()
const getUserNotes = async () => {
    const { data, error } = await supabase
        .from('shop')
        .select('*')

    if (error) {
        console.error('Get notes failed:', error.message);
        return [];
    }
    shopData.value = data;

    return data;
};

function formatDate(dateString: any) {
    const d = new Date(dateString)
    return d.toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    })
}


onMounted(() => { getUserNotes() })

const refreshData = () => {
    shopData.value = null
    getUserNotes()
}
</script>

<template>
    <div class="p-10">
        <div class="w-full flex items-center justify-between ">
            <div class="flex items-center gap-2">
                <p class="font-bold text-[24px]">Product List</p>
                <v-icon :icon="mdiRefresh" @click="refreshData" />
            </div>

            <button class="bg-[#E58411] px-4 py-3 rounded-md text-white cursor-pointer" @click="handleProductPopup">Add
                Product</button>
        </div>
        <div v-if="shopData" class="flex items-center justify-center m-auto w-full">
            <v-data-table :items="shopData"></v-data-table>
        </div>
        <div v-else>
            <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        </div>
    </div>
</template>
