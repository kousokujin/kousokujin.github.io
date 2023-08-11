<template>
    <v-row>
        <v-col v-for="item in href_list" sm="4" cols="12">
            <v-card :prepend-icon="item.icon">
                <template v-slot:title>
                    {{item.title}}
                </template>
                <v-card-item>
                    <div class="text-body-1">{{item.description}}</div>
                </v-card-item>
                <v-card-actions v-if="item.href != ''">
                    <v-btn 
                        :href="item.href"
                        variant="elevated"
                        color="blue-darken-4"
                    >Go</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    <v-icon icon="siSImpleicons.path"></v-icon>
</template>
<script setup lang="ts">
    import { mdiTwitter, mdiGithub, mdiSteam, mdiStar } from '@mdi/js'
    import { siDiscord, siMisskey } from 'simple-icons';

    const href_list = [
        {
            title: "Twitter",
            icon: mdiTwitter,
            description: "高速人の日常を呟いてます",
            href: "https://twitter.com/highsokujin"
        },
        {
            title: "Discord",
            icon: siDiscord.path,
            description: "ID:highsokujin",
            href: ""
        },
        {
            title: "Misskey",
            icon: siMisskey.path,
            description: "たまにここにもいます",
            href: "https://misskey.io/@highsokujin"
        },
        {
            title: "Github",
            icon: mdiGithub,
            description: "作ったプログラムとか公開してます",
            href: "https://github.com/kousokujin"
        },
        {
            title: "Steam",
            icon: mdiSteam,
            description: "Steamでいろいろゲーム漁ってます",
            href: "https://steamcommunity.com/profiles/76561198092074874"
        },
        {
            title: "欲しい物リスト",
            icon: mdiStar,
            description: "ほしいって思ってるものリスト。送ってくれるとうれしいな",
            href: "https://www.amazon.jp/hz/wishlist/ls/26X6O8SUUEDE4?ref_=wl_share"
        }
    ]
</script>