<template>
    <v-app-bar :image="header_img">
      <v-container class="fill-height d-flex align-center">
        <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          size="32"
        >
          <v-img :src="icon" alt="kousokujin"></v-img>
        </v-avatar>
        <v-app-bar-title>高速人のページ</v-app-bar-title>
      </v-container>
      <template v-slot:extension>
        <v-container>
          <v-btn v-for="item in link_list" variant="text" :to="item.to">{{item.text}}</v-btn>
        </v-container>
      </template>
    </v-app-bar>
</template>

<script setup lang="ts">
    import icon from "@/assets/icon.jpg"
    import header_img from "@/assets/header.jpg"

    import { ref } from "vue";

    interface Ilink_list{
        to: string, 
        text: string
    }

    interface Props {
        link_list: Ilink_list[]
    }

    const props = defineProps<Props>();
    const link_list = ref<Ilink_list[]>(props.link_list)
</script>