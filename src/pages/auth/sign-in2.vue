<template>
  <v-container>
    <v-card flat width="400px" class="mx-auto">
      <v-card-title>ログイン</v-card-title>
      <v-container px-4>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="email"
              type="email"
              label="メールアドレス"
              hide-details="auto"
              outlined
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
              outlined
              validate-on-blur
              :rules="[$validationRules.requiredRule, $validationRules.passwordRule]"
            />
          </v-col>
          <v-col cols="12">
            <v-btn
              block
              large
              color="primary"
            >
              ログイン
            </v-btn>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <PasswordResetDialog />
          </v-col>
        </v-row>
      </v-container>
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
