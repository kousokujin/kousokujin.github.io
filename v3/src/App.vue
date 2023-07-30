<template>
  <v-app id="inspire">
    <navbar :link_list="link_list"></navbar>
    <v-main>
      <v-container>
        <router-view/>
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
    }
  ]
</script>