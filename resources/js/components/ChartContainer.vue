<template>
    <div>
        <div class="border-b-4 border-slate-500/75 flex flex-col md:flex-row justify-between">
            <h3 class="md:w-3/4 text-2xl font-black text-slate-500/75 dark:text-slate-300/90">
                {{ title }}
            </h3>
            <div class="md:w-1/6 mb-5">
                <Multiselect
                    v-model="type"
                    :options="lists"
                    label="name"
                    track-by="id"
                    :allowEmpty="false"
                />
            </div>
        </div>
        <div v-if="loading" class="flex min-h-[20px] justify-center items-center">
            <Loader/>
        </div>
        <BarChart
            v-if="type.id === 'bar'"
            :chartId="chartId"
            :labels="labels"
            :datasets="datasets"
        />
        <LineChart
            v-if="type.id === 'line'"
            :chartId="chartId"
            :labels="labels"
            :datasets="datasets"
        />
        <PieChart
            v-if="type.id === 'pie'"
            :chartId="chartId"
            :labels="datasets.map(dataset => {
                return dataset.label
            })"
            :datasets="pieDatasets"
            :plugins="[piePlugins]"
        />
    </div>
</template>
<script>
import BarChart from './Bar.vue'
import LineChart from './Line.vue'
import PieChart from './Pie.vue'
import Loader from './Loader.vue'
import Multiselect from 'vue-multiselect'

export default {
    components: {
        BarChart,
        LineChart,
        Loader,
        Multiselect,
        PieChart
    },
    props: {
        chartId: {
            type: String,
            default: 'bar-chart'
        },
        labels: {
            type: Array,
            default: () => []
        },
        datasets: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: '-'
        }
    },
    computed: {
        pieDatasets() {
            const bgColors = this.datasets.map(d => d.backgroundColor)
            const data = this.datasets.map(d => {
                const sum = d.data.reduce((acc ,val) => acc + val)
                return sum
            })
            return [
                {
                    backgroundColor: bgColors,
                    data: data
                }
            ]
        }
    },
    data() {
        return {
            type: {
                id: 'bar',
                name: 'Bar'
            },
            lists: [
                {
                    id: 'bar',
                    name: 'Bar Chart'
                },
                {
                    id: 'line',
                    name: 'Line Chart'
                },
                {
                    id: 'pie',
                    name: 'Pie Chart'
                },
            ],
            piePlugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        console.log('s')
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value*100 / sum).toFixed(2)+"%";
                        return percentage;
                    },
                    color: '#000',
                }
            }
        }
    }
}
</script>
<style scoped>
.multiselect--active, .multiselect__content-wrapper {
  z-index: 1;
}
</style>
