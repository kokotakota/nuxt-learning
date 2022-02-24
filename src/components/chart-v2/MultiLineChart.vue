<script>
import { Line } from 'vue-chartjs'
// eslint-disable-next-line no-unused-vars
import chartjsPluginColorschemes from 'chartjs-plugin-colorschemes'

// y軸メモリは日単位、データは時間単位
export default {
  extends: Line,
  data () {
    return {
      chartData: {
        labels: ['2022-02-01', '2022-02-02', '2022-02-03', '2022-02-04', '2022-02-05'],
        datasets: [
          {
            label: 'ページ1',
            data: [
              { x: '2022-02-01 12:00:00', y: 100 },
              { x: '2022-02-02 12:00:00', y: 120 },
              { x: '2022-02-05 12:00:00', y: 110 }
            ],
            tension: 0,
            fill: false
          },
          {
            label: 'ページ2',
            data: [
              { x: '2022-02-02 12:00:00', y: 60 },
              { x: '2022-02-04 12:00:00', y: 50 },
              { x: '2022-02-05 12:00:00', y: 70 }
            ],
            tension: 0,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'hour',
                parser: 'YYYY/M/D H時',
                displayFormats: {
                  hour: 'YYYY/M/D H時'
                },
                tooltipFormat: 'YYYY/M/D H時'
              },
              scaleLabel: {
                display: true,
                labelString: '日時'
              },
              ticks: {
                source: 'labels'
              }
            }
          ],
          yAxes: [
            {
              type: 'linear',
              scaleLabel: {
                display: true,
                labelString: 'PV数'
              },
              ticks: {
                suggestedMax: 150,
                min: 0,
                stepSize: 10
              }
            }
          ]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
