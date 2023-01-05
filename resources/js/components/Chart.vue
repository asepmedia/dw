<template>
    <div class="bg-slate-50 min-h-screen w-screen">
        <div class="container px-5 py-5 md:px-10 md:py-10 mx-auto">
            <div class="flex flex-col gap-y-5">
                <div>
                    <h3 class="text-3xl font-black text-orange-500">Dashboard</h3>
                    <span class="text-slate-500">Menampilkan grafik data penjualan, penjualan oleh barang, penjualan oleh pelanggan</span>
                </div>
                <div class="bg-gray-100/75 border rounded-xl py-3 px-6 md:sticky top-0 backdrop-blur">
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-1/5 mb-3 md:mb-2">
                            <div class="px-1">
                                <label for="" class="text-slate-500 font-bold">Tahun Awal</label>
                                <multiselect
                                    v-model="model.year"
                                    :options="source.year"
                                    label="name"
                                    track-by="id"
                                    placeholder="Pilih Tahun"
                                    :allowEmpty="false"
                                />
                            </div>
                        </div>
                        <div class="w-full md:w-1/5 mb-3 md:mb-2">
                            <div class="px-1">
                                <label for="" class="text-slate-500 font-bold">Tahun Akhir</label>
                                <multiselect
                                    v-model="model.endYear"
                                    :options="source.year"
                                    label="name"
                                    track-by="id"
                                    placeholder="Pilih Tahun"
                                    :allowEmpty="false"
                                />
                            </div>
                        </div>
                        <div class="w-full md:w-1/5 mb-3 md:mb-2 mx:px-2">
                            <div class="px-1">
                                <label class="text-slate-500 font-bold">Periode</label>
                                <multiselect
                                    v-model="model.periode"
                                    :options="getPeriode"
                                    label="name"
                                    track-by="id"
                                    placeholder="Pilih Periode"
                                    :allowEmpty="false"
                                >
                                </multiselect>
                            </div>
                        </div>
                        <div class="w-full md:w-1/5 mb-3 md:mb-2 mx:px-2">
                            <div class="px-1">
                                <label class="text-slate-500 font-bold">Barang</label>
                                <multiselect
                                    v-model="model.item"
                                    :options="source.items"
                                    label="name"
                                    track-by="id"
                                    placeholder="Pilih Barang"
                                    multiple
                                >
                                </multiselect>
                            </div>
                        </div>
                        <div class="w-full md:w-1/5 mb-3 md:mb-2 mx:px-2">
                            <div class="px-1">
                                <label class="text-slate-500 font-bold">Pelanggan</label>
                                <multiselect
                                    v-model="model.customer"
                                    :options="source.customers"
                                    label="name"
                                    track-by="id"
                                    placeholder="Pilih Pelanggan"
                                    :allowEmpty="false"
                                >
                                </multiselect>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="text-2xl font-black text-slate-500/75 border-b-4 border-slate-500/75">Total Pendapatan Penjualan</h3>
                    <div v-if="loading.sales" class="flex min-h-[20px] justify-center items-center">
                        <Loader/>
                    </div>
                    <BarChart
                        ref="chart-penjualan"
                        chartId="chart-penjualan"
                        :labels="chartSales.labels"
                        :datasets="chartSales.datasets"
                    />
                </div>
                <div>
                    <h3 class="text-2xl font-black text-slate-500/75 border-b-4 border-slate-500/75">Total Penjualan Barang</h3>
                    <div v-if="loading.salesQty" class="flex min-h-[20px] justify-center items-center">
                        <Loader/>
                    </div>
                    <BarChart
                        ref="chart-penjualan-barang"
                        chartId="chart-penjualan-barang"
                        :labels="chartSalesQty.labels"
                        :datasets="chartSalesQty.datasets"
                    />
                </div>
                <div>
                    <h3 class="text-2xl font-black text-slate-500/75 border-b-4 border-slate-500/75">Total Penjualan oleh Pelanggan</h3>
                    <div v-if="loading.salesCustomer" class="flex min-h-[20px] justify-center items-center">
                        <Loader/>
                    </div>
                    <BarChart
                        ref="chart-penjualan-barang-customer"
                        chartId="chart-penjualan-barang-customer"
                        :labels="chartSalesCustomer.labels"
                        :datasets="chartSalesCustomer.datasets"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
import BarChart from './Bar.vue'
import LineChart from './Line.vue'
import Loader from './Loader.vue'

export default {
    components: {
        Multiselect,
        BarChart,
        LineChart,
        Loader
    },
    data() {
        return {
            source: {
                items: [],
                customers: [],
                year: [
                    {
                        id: '2017',
                        name: '2017'
                    },
                    {
                        id: '2018',
                        name: '2018'
                    },
                    {
                        id: '2019',
                        name: '2019'
                    },
                    {
                        id: '2020',
                        name: '2020'
                    },
                    {
                        id: '2021',
                        name: '2021'
                    },
                    {
                        id: '2022',
                        name: '2022'
                    }
                ],
                periode: [
                    {
                        id: 'all',
                        name: 'Semua',
                        all: true
                    },
                    {
                        id: 'Q1',
                        name: 'Q1',
                        all: false
                    },
                    {
                        id: 'Q2',
                        name: 'Q2',
                        all: false
                    },
                    {
                        id: 'Q3',
                        name: 'Q3',
                        all: false
                    },
                    {
                        id: 'Q4',
                        name: 'Q4',
                        all: false
                    },
                    {
                        id: 'S1',
                        name: 'Semester I',
                        all: false
                    },
                    {
                        id: 'S2',
                        name: 'Semester II',
                        all: false
                    }
                ]
            },
            model: {
                year: {
                    id: '2017',
                    name: '2017'
                },
                endYear: {
                    id: '2021',
                    name: '2021'
                },
                periode: {
                    id: 'all',
                    name: 'Semua'
                },
                item: [],
                customer: {
                    id: 'all',
                    name: 'Semua'
                }
            },
            chart: {
                sales: {
                    labels: [],
                    datasets: []
                },
                salesQty: {
                    labels: [],
                    datasets: []
                },
                salesCustomer: {
                    labels: [],
                    datasets: []
                }
            },
            loading: {
                sales: true,
                salesQty: true,
                salesCustomer: true
            },
            controller: {
                sales: null,
                salesQty: null,
                salesCustomer: null
            }
        }
    },
    computed: {
        chartSales() {
            return this.chart.sales
        },
        chartSalesQty() {
            return this.chart.salesQty
        },
        chartSalesCustomer() {
            return this.chart.salesCustomer
        },
        showAllPeriode() {
            const startYear = this.model.year.id
            const endYear = this.model.endYear.id
            return startYear == endYear
        },
        getPeriode() {
            if (!this.showAllPeriode) {
                return this.source.periode.filter(d => d.all)
            }

            return this.source.periode
        }
    },
    mounted() {
        this.fetchChart()
        this.fetchMasterData()
        // this.controller.sales = new AbortController();
        this.controller.salesQty = new AbortController();
        this.controller.salesCustomer = new AbortController();
    },
    methods: {
        getParams() {
            const startYear = this.model.year.id
            const endYear = this.model.endYear.id
            const periode = this.model.periode.id
            const item = this.model.item.map(item => item.id).join(',')
            const customer = this.model.customer.id || ''
            return `year=${startYear}&to=${endYear}&item_ids=${item}&customer_ids=${customer}&periode=${periode}`
        },
        async fetchSalesChart() {
            this.loading.sales = true
            const response = await axios.get(`/sales?${this.getParams()}`)
            const { data } = response
            const { labels, datasets } = data

            this.chart.sales.labels = labels
            this.chart.sales.datasets = datasets
            this.loading.sales = false
        },
        async fetchSalesQtyChart() {
            this.loading.salesQty = true
            const response = await axios.get(`/sales?type=qty&${this.getParams()}`)
            const { data } = response
            const { labels, datasets } = data

            this.chart.salesQty.labels = labels
            this.chart.salesQty.datasets = datasets
            this.loading.salesQty = false
        },
        async fetchSalesCustomerChart() {
            this.loading.salesCustomer = true
            const response = await axios.get(`/sales?type=customer&${this.getParams()}`)
            const { data } = response
            const { labels, datasets } = data

            this.chart.salesCustomer.labels = labels
            this.chart.salesCustomer.datasets = datasets
            this.loading.salesCustomer = false
        },
        fetchChart() {
            this.fetchSalesChart()
            this.fetchSalesQtyChart()
            this.fetchSalesCustomerChart()
        },
        async fetchItems() {
            const response = await axios.get(`/items`)
            const { data } = response.data
            this.source.items = [...data]
        },
        async fetchCustomers() {
            const response = await axios.get(`/customers`)
            const { data } = response.data
            this.source.customers = [{id:'all', name: 'Semua'},...data]
        },
        fetchMasterData() {
            this.fetchItems()
            this.fetchCustomers()
        }
    },
    watch: {
        'model.year': function (val) {
            this.fetchChart()
        },
        'model.endYear': function (val) {
            this.fetchChart()
        },
        'model.periode': function (val) {
            this.fetchChart()
        },
        'model.item': function (val) {
            this.fetchChart()
            this.fetchMasterData()
        },
        'model.customer': function (val) {
            this.fetchChart()
            this.fetchMasterData()
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
