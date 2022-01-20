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
        responsive: true, // サイズ変更可能にするか
        maintainAspectRatio: false, // サイズ変更時に元の縦横の比率を維持するか
        // 凡例ラベル
        legend: {
          // 非表示にする場合
          display: false
          // ラベルのクリックイベントをdisabledにする場合
          // onClick: () => false
        },
        scales: {
          xAxes: [
            {
              // 軸ラベル
              scaleLabel: {
                display: true,
                labelString: '月'
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: '売上'
              },
              // メモリ設定
              ticks: {
                // メモリ範囲の下限を0に固定する場合
                min: 0
              }
            }
          ]
        },
        // グラフホバー時に表示されるツールチップ
        tooltips: {
          callbacks: {
            label: (tooltipItems, data) => {
              // tooltipItemsからツールチップで通常表示される内容（値など）が取得できる
              const value = Number(tooltipItems.value)
              return value.toLocaleString()
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
