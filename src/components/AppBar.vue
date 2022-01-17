<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
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
        style="cursor:pointer"
        @click="$router.push('/')"
      >
        Title
      </v-toolbar-title>
      <v-spacer />
      <v-btn v-if="authenticated" depressed @click="onSignOut">
        ログアウト
      </v-btn>
      <v-btn v-else depressed @click="$router.push('/auth/sign-in1')">
        ログイン
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
  },
  computed: mapState({
    authenticated: state => state.user.authenticated
  }),
  methods: {
    async onSignOut () {
      await this.$store.dispatch('user/signOut')
      location.reload()
    }
  }
}
</script>
