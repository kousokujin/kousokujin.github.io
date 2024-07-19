<template>
    <v-row>
        <v-col v-for="item in song_data.song_filterd" cols="12" sm="4">
            <v-card>
                <v-card-title>{{item.title}}</v-card-title>
                <v-card-subtitle>{{item.artist}}</v-card-subtitle>
                <v-card-text>
                    <div class="d-flex ga-2">
                        <v-chip size="small" v-for="tag in item.tags">{{tag}}</v-chip>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
    import {SongDataList} from "@/components/SongCompo/SongDataList"
    import { reactive } from "vue";
    
    interface Props {
        data: SongDataList
    }

    const props = defineProps<Props>();
    const song_data = reactive<SongDataList>(props.data);
</script>