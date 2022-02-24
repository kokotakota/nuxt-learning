<template>
  <v-container>
    <v-row>
      <v-col
        v-for="component in components"
        :key="component.componentName"
        :cols="xs"
        :sm="sm"
        :md="md"
        :lg="lg"
        :xl="xl"
        class="d-flex justify-center"
      >
        <component :is="component.componentName" style="height: 300px; width: 100%;" />
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
      components: [
        { name: '折れ線グラフ', componentName: 'LineChart' },
        { name: '折れ線グラフ(複数)', componentName: 'MultiLineChart' }
      ]
    }
  }
}
</script>
