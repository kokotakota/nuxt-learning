<template>
  <v-container>
    <v-row>
      <v-col
        v-for="link in links"
        :key="link.to"
        :cols="xs"
        :sm="sm"
        :md="md"
        :lg="lg"
        :xl="xl"
        class="d-flex justify-center"
      >
        <NuxtLink :to="link.to">
          {{ link.name }}
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      xs: '12',
      sm: '6',
      md: '4',
      lg: '4',
      xl: '3',
      links: [
        { name: 'ログイン画面1', to: '/auth/sign-in1' },
        { name: 'ログイン画面2', to: '/auth/sign-in2' },
        { name: 'グラフ画面（Chart.js v2系）', to: '/chart-v2' },
        { name: '設定画面', to: '/settings' },
        { name: '自動データ更新', to: '/auto-reload/refetch' },
        { name: '自動画面更新', to: '/auto-reload/reload' },
        { name: 'クレジットカード入力フォーム', to: '/form/credit-card' }
      ]
    }
  }
}
</script>
