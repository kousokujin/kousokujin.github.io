<template>
  <v-app id="inspire">
    <navbar :link_list="link_list"></navbar>
    <v-main>
      <v-container>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="12">
            <router-view/>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import navbar from "@/components/nav_bar.vue"
  const link_list = [
    {
      to: "/",
      text: "Profile"
    },
    {
      to: "/creation",
      text: "作ったもの"
    },
    {
      to: "/contact",
      text: "Contacts"
    },
    {
      to: "/song_list",
      text: "歌えるリスト"
    }
  ]
</script>