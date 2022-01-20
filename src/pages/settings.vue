<template>
  <v-container>
    <PageHeading>設定</PageHeading>
    <v-row>
      <v-col cols="12">
        <v-tabs v-model="currentTab" :centered="centered" :grow="grow" class="pt-6">
          <v-tab
            v-for="(tab, index) in tabs"
            :key="index"
          >
            {{ tab.label }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col>
        <v-tabs-items v-model="currentTab">
          <v-tab-item
            v-for="(tab, index) in tabs"
            :key="index"
          >
            <component :is="tab.componentName" />
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      grow: false, // trueで横いっぱいに広がる
      centered: false, // trueで中央揃え,
      currentTab: null,
      tabs: [
        { label: 'プロフィール', componentName: 'Profile' },
        { label: 'メール・パスワード', componentName: 'EmailPassword' },
        { label: '通知設定', componentName: 'Notification' }
      ]
    }
  }
}
</script>
