<template>
    <v-row>
        <v-col v-for="item in creations_list" sm="4" cols="12">
            <v-card :prepend-icon="item.icon">
                <template v-slot:title>
                    {{item.title}}
                </template>
                <v-card-item>
                    <div class="text-body-1">{{item.description}}</div>
                </v-card-item>
                <v-card-actions>
                    <v-btn v-for="action in item.actions" 
                        color="indigo" 
                        border
                        :icon="action.icon"
                        :href="action.link"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
    import { mdiGithub, mdiLink, mdiMicrosoftWindows, mdiWeb} from '@mdi/js'
    const creations_list = [
        {
            title: "幻塔ガチャシミュレーター",
            icon: mdiWeb,
            description: "Tower Of Fantacyの武器ガチャやボリションガチャを引いた気分になれます。",
            actions: [
                {icon: mdiGithub, link: "https://github.com/kousokujin/TowerOfFantasy-Gacha-Simulator"},
                {icon: mdiLink, link: "https://tofsim.kousokujin.com/"}
            ]
        },
        {
            title: "fedivership",
            icon: mdiMicrosoftWindows,
            description: "MastodonとかmisskeyとかのSNSをいい感じに見れるようなブラウザです。",
            actions: [
                {icon: mdiGithub, link: "https://github.com/kousokujin/fedivership"},
            ]
        },
        {
            title: "Janshi Separate",
            icon: mdiMicrosoftWindows,
            description: "麻雀でいい感じに卓分けを行うアプリです。",
            actions: [
                {icon: mdiGithub, link: "https://github.com/kousokujin/janshi_Separate"},
            ]
        },
        {
            title: "Golen Raito Ruler",
            icon: mdiMicrosoftWindows,
            description: "画面上で黄金比の定規を表示します。",
            actions: [
                {icon: mdiGithub, link: "https://github.com/kousokujin/golen_raito_ruler"},
            ]
        },
        {
            title: "horloge",
            icon: mdiMicrosoftWindows,
            description: "時計アプリ",
            actions: [
                {icon: mdiGithub, link: "https://github.com/kousokujin/horloge"},
            ]
        },

    ]
</script>