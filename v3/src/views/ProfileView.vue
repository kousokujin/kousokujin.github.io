<template>
    <v-row>
        <v-col cols="12" sm="4">
            <v-row>
                <v-spacer></v-spacer>
                <v-col>
                    <v-img :src="icon" width="300"></v-img>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-col>
        <v-col cols="12" sm="8">
            <v-container>
                <v-col>
                    <v-card>
                        <v-card-item>
                            <div class="text-subtitle-1"><v-icon :icon="mdiAccount"></v-icon>Name</div>
                            <div class="text-h3">高速人</div>
                            <div class="font-weight-thin">kousokujin</div>
                        </v-card-item>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <v-card-item>
                            <div class="text-subtitle-1"><v-icon :icon="mdiCake"></v-icon>BirthDay</div>
                            <div class="text-h5">August 3rd, 1995</div>
                        </v-card-item>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <v-card-item>
                            <div class="text-subtitle-1"><v-icon :icon="mdiHeart"></v-icon>好きなもの</div>
                            <div v-for="item in like_item" class="text-body-1">{{item}}</div>
                        </v-card-item>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <v-card-item>
                            <div class="text-subtitle-1"><v-icon :icon="mdiController"></v-icon>ゲームとか</div>
                            <div v-for="item in game_item" class="text-body-1">{{item}}</div>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-container>
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
    import icon from "@/assets/icon.jpg"
    import { mdiAccount, mdiHeart, mdiCake, mdiController } from '@mdi/js'

    const like_item = ["たまごサンド", "VTuber(主にホロライブ)", "IPv6"]
    const game_item = ["PSO2","Tower of Fantacy"]
</script>