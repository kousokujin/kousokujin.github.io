//import {SongDataList} from "@/components/SongCompo/SongDataList"
import {SongDataList} from "./SongDataList"
import { reactive } from "vue";

interface Props {
    data: SongDataList
}
export const init = () =>{
    const props = defineProps<Props>();
    const song_data = reactive<SongDataList>(props.data);

    const TagClick = (tag: string)=>{
        song_data.filter_word = tag
    }

    return {props, song_data, TagClick}
}