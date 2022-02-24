<template>
  <v-container>
    <v-btn v-if="autoReloadStatus" @click="stopAutoReload">
      停止
    </v-btn>
    <v-btn v-else @click="startAutoReload">
      開始
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      autoReloadStatus: false, // 自動更新中かどうかのフラグ
      timer: null
    }
  },
  methods: {
    startAutoReload () {
      this.autoReloadStatus = true
      // 指定間隔で自動更新する
      this.timer = setInterval(
        this.getData, // ここに更新する処理を入れる
        60000 // 1分 = 60000ミリ秒
      )
    },
    stopAutoReload () {
      this.autoReloadStatus = false
      // 自動取得のタイマーを停止
      clearInterval(this.timer)
    },
    getData () {
      console.log('更新')
    }
  }
}
</script>
