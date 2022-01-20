<template>
  <v-container>
    <v-row>
      <v-col
        :cols="xs"
        :sm="sm"
        :md="md"
        :lg="lg"
        :xl="xl"
        class="d-flex justify-center"
      >
        <!-- サイズはstyleで指定する -->
        <LineChart style="width: 300px;" />
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
      xl: '3'
    }
  }
}
</script>
