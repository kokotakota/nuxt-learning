<template>
  <v-switch
    v-model="reloadSwitch"
    @change="onChangeSwitch"
  />
</template>

<script>
export default {
  data: () => {
    return {
      timer: null,
      reloadSwitch: false
    }
  },
  created () {
    this.reloadSwitch = sessionStorage.getItem('autoReload') === 'true'
    if (this.reloadSwitch) {
      this.setReloadTimer()
    }
  },
  methods: {
    setReloadTimer () {
      // eslint-disable-next-line
      this.timer = setTimeout('location.reload()', 5000)
    },
    onChangeSwitch () {
      sessionStorage.setItem('autoReload', this.reloadSwitch)

      if (this.reloadSwitch) {
        location.reload()
      } else {
        clearTimeout(this.timer)
      }
    }
  }
}
</script>
