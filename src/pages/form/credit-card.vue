<template>
  <v-container>
    <input
      v-model="number"
      style="border: 1px solid;"
      @input="number = formatCardNumber($event.target.value)"
    ></input>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      number: ''
    }
  },
  methods: {
    formatCardNumber (value) {
      if (!value) { return }

      // 空白削除と桁調整
      const trimmedValue = value.replace(/\s+/g, '')
      let number = this.numberLimit(trimmedValue)

      const arr = []
      while (number.length >= 4) {
        arr.push(number.slice(0, 4))
        number = number.slice(4)
      }
      if (number.length) { arr.push(number) }
      return arr.join(' ')
    },
    numberLimit (arg) {
      return arg.length > 16 ? arg.slice(0, -1) : arg
    }
  }
}
</script>
