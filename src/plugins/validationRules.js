const validationRules = {
  requiredRule: v => !!v || '必須入力です。',
  emailRule: v => /.+@.+\..+/.test(v) || '正しいメールアドレスを入力してください。',
  passwordRule: v => /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/.test(v) || '半角英数字と記号のみを入力してください。'
}

export default (context, inject) => {
  inject('validationRules', validationRules)
}
