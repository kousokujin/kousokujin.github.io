<template>
    <v-row>
        <v-col>
            <div class="d-flex align-left flex-column pa-6">
                <v-text-field label="検索" v-model="song_data.filter_word" clearable></v-text-field>
            </div>
        </v-col>
    </v-row>

    <song_table v-if="! ismobile" :data="song_data"></song_table>
    <song_list v-if="ismobile" :data="song_data"></song_list>
</template>
<script setup lang="ts">
    import { ref, reactive, computed } from "vue";
    import { useDisplay } from "vuetify";

    import {songs} from "@/components/SongCompo/KSJSongs"
    import {SongDataList} from "@/components/SongCompo/SongDataList"
    import song_table from "@/components/SongCompo/SongTable.vue"
    import song_list from "@/components/SongCompo/SongCard.vue"

    const {xs, sm} = useDisplay();

    const song_data = reactive(new SongDataList(songs))

    const ismobile = computed(()=>{
      return (
        xs.value == true ||
        sm.value == true
      );
    })
</script>