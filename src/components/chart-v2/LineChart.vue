<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      chartData: {
        labels: ['2021年4月', '2021年5月', '2021年6月'],
        datasets: [
          {
            label: '予算',
            data: [8000, 22000, 12000],
            tension: 0.3, // 折れ線の角度（0に近いほど鋭角）
            fill: false // グラフの塗りつぶし
          }
        ]
      },
      options: {
        // 凡例ラベル
        legend: {
          // 非表示にする場合
          // display: false,
          // ラベルのクリックイベントをOFFにする場合
          onClick: () => false
        },
        scales: {
          yAxes: [
            {
              // メモリ設定
              ticks: {
                stepSize: 2000,
                // メモリ範囲を固定する場合
                // max: 25000,
                // min: 0,
                // メモリ範囲を半固定する場合（範囲を超えるデータがあれば自動でその値まで範囲を拡張）
                suggestedMin: 20000,
                suggestedMax: 0
              }
            }
          ]
        },
        // グラフホバー時に表示されるツールチップ
        tooltips: {
          callbacks: {
            label: (tooltipItems, data) => {
              // data.datasetsから凡例ラベルを取得
              const label = data.datasets[tooltipItems.datasetIndex].label

              // tooltipItemsからはツールチップで通常表示される内容（値など）が取得できる
              const value = Number(tooltipItems.value)
              return `${label}: ${value.toLocaleString()}万円`
            }
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
