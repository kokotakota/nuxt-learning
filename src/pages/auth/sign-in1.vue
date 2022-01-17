<template>
  <v-container>
    <v-card width="400px" class="mx-auto">
      <v-card-title>ログイン</v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-text-field
              v-model="email"
              type="email"
              label="メールアドレス"
              hide-details="auto"
              validate-on-blur
              :rules="[$validationRules.requiredRule, $validationRules.emailRule]"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              type="password"
              label="パスワード"
              hide-details="auto"
              validate-on-blur
              :rules="[$validationRules.requiredRule, $validationRules.passwordRule]"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <PasswordResetDialog />
        <v-btn
          color="primary"
          @click="onSignIn"
        >
          ログイン
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async onSignIn () {
      await this.$store.dispatch('user/signIn', {
        id: this.email,
        password: this.password
      })
      this.$router.push('/')
    }
  }
}
</script>
