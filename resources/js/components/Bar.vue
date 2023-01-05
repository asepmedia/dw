<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar, Line } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
      },
    labels: {
      type: Array,
      default: () => []
      },
    datasets: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
    },
  methods: {
    refresh() {
      this.chartData.labels = this.labels
      this.chartData.datasets = this.datasets

      if (this.labels.length <= 0) {
        this.chartData.labels = ['Kosong']
        this.chartData.datasets = [
            {
                label: 'Kosong',
                data: [0]
            }
        ]
      }
    }
  },
  mounted() {
    this.refresh()
  },
  watch: {
    'labels': function (val) {
      this.refresh()
      },
    'datasets': function (val) {
      this.refresh()
    }
  }
}
</script>
