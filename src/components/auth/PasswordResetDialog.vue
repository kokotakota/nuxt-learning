<template>
  <v-dialog v-model="_dialog" width="400">
    <template #activator="{ on, attrs }">
      <v-btn
        text
        color="primary"
        v-bind="attrs"
        v-on="on"
      >
        パスワードをお忘れの方
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        パスワードリセット
      </v-card-title>
      <v-card-subtitle>
        パスワード再設定用の認証コードを送信します。
      </v-card-subtitle>
      <v-card-text>
        <v-text-field
          type="email"
          label="メールアドレス"
          hide-details="auto"
          outlined
          validate-on-blur
          :rules="[$validationRules.requiredRule, $validationRules.emailRule]"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          @click="dialog = false"
        >
          送信
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
