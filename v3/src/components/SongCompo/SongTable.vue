<template>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">
                    曲名
                </th>
                <th class="text-left">
                    Artist
                </th>
                <th>
                    タグ
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in song_data.song_filterd">
                <td>{{ item.title }}</td>
                <td>{{ item.artist }}</td>
                <td>
                    <div class="d-flex ga-2">
                        <v-chip size="small" v-for="tag in item.tags" v-on:click="TagClick(tag)">{{tag}}</v-chip>
                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
<script setup lang="ts">
    import {SongDataList} from "@/components/SongCompo/SongDataList"
    import { reactive } from "vue";
    
    interface Props {
        data: SongDataList
    }

    const props = defineProps<Props>();
    const song_data = reactive<SongDataList>(props.data);

    function TagClick(tag: string){
        song_data.filter_word = tag
    }
</script>