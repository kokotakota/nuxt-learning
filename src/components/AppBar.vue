<template>
  <div>
    <v-navigation-drawer app clipped v-model="drawer">
      <v-list subheader>
        <v-list-item
          v-for="item in navItems"
          :key="item.text"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title
        @click="$router.push('/')"
        style="cursor:pointer"
      >
        Title
      </v-toolbar-title>
      <v-spacer />
      <v-btn depressed>
        ログイン
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      navItems: [
        {
          text: 'ユーザー情報',
          icon: 'mdi-account',
          link: ''
        },
        {
          text: '記事一覧',
          icon: 'mdi-text-box-multiple-outline',
          link: ''
        }
      ]
    }
  }
}
</script>
