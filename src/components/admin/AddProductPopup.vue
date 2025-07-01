<script setup lang="ts">
import { ref } from 'vue';
import { mdiCamera } from "@mdi/js"
import { supabase } from '../../../lib/supabase';
const props = defineProps({
    handleClosePopup: Function
})

const selectedItem = ref(null)
const title = ref('')
const price = ref('')

const file = ref(null)
const imageUrl = ref('')

const handleImageChange = (newFile: any) => {
    file.value = newFile
    console.log(newFile)
}

const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!file.value) {
        console.log('Lütfen bir dosya seçin')
        return
    }

    try {
        const formData = new FormData()
        formData.append('file', file.value)
        formData.append('upload_preset', 'blog_file')

        const res = await fetch('https://api.cloudinary.com/v1_1/dw9atl77k/image/upload', {
            method: 'POST',
            body: formData,
        })

        if (!res.ok) throw new Error('Cloudinary upload failed')

        const data = await res.json()
        imageUrl.value = data.secure_url

        const { error, data: insertData } = await supabase.from('shop').insert([
            {
                title: title.value,
                price: price.value,
                image: imageUrl.value,
                category: selectedItem.value,
            },
        ])

        if (error) {
            console.error('Supabase insert error:', error)
        } else {
            console.log('Veri başarıyla eklendi:', insertData);
        }
    } catch (err) {
        console.error('Hata:', err)
    }
}

</script>

<template>
    <div class="bg-[#00000080] w-full h-full fixed left-0 right-0 bottom-0 top-0 m-auto z-40"
        @click="props.handleClosePopup">
    </div>
    <div
        class="z-50 bg-white absolute left-0 right-0 bottom-0 top-0 m-auto w-[400px] h-max p-10 flex flex-col gap-5 rounded-md shadow-2xl">
        <p class="text-[24px] font-bold">Add Product</p>
        <form @submit="handleSubmit" class="flex flex-col gap-2">
            <v-select v-model="selectedItem" label="Select" :items="['Chair', 'Beds', 'Sofa', 'Lamp']" />
            <input v-model="title" type="text" placeholder="title"
                class="h-12 bg-[#EBEBEB] px-4 border-b border-b-black" />
            <input v-model="price" type="text" placeholder="Price"
                class="h-12 bg-[#EBEBEB] px-4 border-b border-b-black" />
            <v-file-input v-model="file" label="File input" :prepend-icon="mdiCamera" variant="filled"
                @update:model-value="handleImageChange" />

            <button type="submit" class="bg-[#E58411] h-10 rounded-md text-white" @click="props.handleClosePopup">
                Add
            </button>
        </form>
    </div>
</template>
