interface ISong{
    title: string,
    title_kana: string,
    artist: string,
    artist_kana: string,
    tags: string[]
}

class SongDataList{
    song_orgin :ISong[];
    song_filterd : ISong[];

    _filter_word : string;
    get filter_word() : string {
        return this._filter_word;
    }
    set filter_word(word: string) {
        this._filter_word = word;
        this.SortAndFilter();
    }

    _sort_mode : "title" | "artist" | "";
    get sort_mode() : "title" | "artist" | "" {
        return this._sort_mode;
    }
    set sort_mode(mode : "title" | "artist" | "") {
        this._sort_mode = mode;
        this.SortAndFilter();
    }

    _sort_desc: Boolean;
    get sort_desc() : Boolean{
        return this._sort_desc
    }
    set sort_desc(desc : Boolean){
        this._sort_desc = desc;
        this.SortAndFilter();
    }


    constructor(data: ISong[]){
        this.song_orgin = data;
        this.song_filterd = data;
        this._filter_word = "";
        this._sort_mode = "title";
        this._sort_desc = false;
        this.SortAndFilter();
    }

    SortArtist(desc: Boolean = false){
        this._sort_mode = "artist";
        this._sort_desc = desc;
        this.SortAndFilter();
    }

    SortTitle(desc: Boolean = false){
        this._sort_mode = "title";
        this._sort_desc = desc;
        this.SortAndFilter();
    }

    Sort(){
        let sort_func : (a : any, b: any) => number;
        
        switch(this._sort_mode){
            case "title":
                if(this._sort_desc == true){
                    sort_func = (a,b)=>DescSort(a.title_kana, b.title_kana);
                } else {
                    sort_func = (a,b)=>AscSort(a.title_kana, b.title_kana);
                }
                break;
            case "artist":
                if(this._sort_desc == true){
                    sort_func = (a,b)=>DescSort(a.artist_kana, b.artist_kana);
                } else {
                    sort_func = (a,b)=>AscSort(a.artist_kana, b.artist_kana);
                }
                break;
            default:
                return;
        }

        if(sort_func != null){
            this.song_filterd = this.song_filterd.sort(sort_func);
        }
    }

    Filter(){
        if(this.filter_word.length < 1) return;

        this.song_filterd = this.song_filterd.filter(x => {
            return  x.title.toLowerCase().indexOf(this._filter_word.toLowerCase()) !== -1 ||
                    x.artist.toLowerCase().indexOf(this._filter_word.toLowerCase()) !== -1
        });
    }

    SortAndFilter(){
        this.song_filterd = this.song_orgin;
        this.Filter();
        this.Sort();
    }
}

function DescSort(a: any,b: any) : number{
    return a > b ? -1 : 1
}

function AscSort(a: any,b: any) : number{
    return a > b ? 1 : -1
}

export {
    SongDataList
}

export type{
    ISong
}