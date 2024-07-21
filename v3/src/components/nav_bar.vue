<template>
    <v-app-bar :image="header_img">
      <v-container class="fill-height d-flex align-center">
        <v-app-bar-nav-icon v-on:click="drawer = ! drawer" v-show="ismobile"></v-app-bar-nav-icon>
        <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          size="32"
        >
          <v-img :src="icon" alt="kousokujin"></v-img>
        </v-avatar>
        <v-app-bar-title>高速人のページ</v-app-bar-title>
      </v-container>
      <template v-slot:extension v-if="! ismobile">
        <v-container>
          <v-btn v-for="item in link_list" variant="text" :to="item.to">{{item.text}}</v-btn>
        </v-container>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary v-show="ismobile">
          <v-list nav dense>
            <v-list-item v-for="item in link_list" :to="item.to">
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
    import icon from "@/assets/icon.jpg"
    import header_img from "@/assets/header.jpg"
    import { useDisplay } from "vuetify";

    import { computed, ref } from "vue";

    interface Ilink_list{
        to: string, 
        text: string
    }

    interface Props {
        link_list: Ilink_list[]
    }

    const {xs, sm} = useDisplay();

    const props = defineProps<Props>();
    const link_list = ref<Ilink_list[]>(props.link_list)
    const drawer = ref<boolean>(true)
    const ismobile = computed(()=>{
      return (
        xs.value == true ||
        sm.value == true
      );
    })
</script>