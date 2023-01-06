<template>
    <div class="bg-white dark:bg-slate-900 min-h-screen w-screen">
        <div class="container px-5 py-5 md:px-10 md:py-10 mx-auto">
            <div class="flex flex-col gap-y-5">
                <div class="flex justify-between items-center">
                    <div>
                        <h3 class="text-3xl font-black text-sky-900 dark:text-white">Dashboard</h3>
                        <span class="text-slate-700 dark:text-slate-400">Menampilkan grafik data penjualan, penjualan oleh barang, penjualan oleh pelanggan</span>
                    </div>
                    <div class="cursor-pointer" v-on:click="toggleDarkMode">
                        <div v-if="!isDarkMode">
                            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M54.0001 47.9401C48.6758 48.3913 43.3394 47.2236 38.6901 44.5901C32.5091 41.1095 27.9615 35.3188 26.0454 28.4889C24.1294 21.6589 25.0014 14.3478 28.4701 8.16008C29.1317 6.99108 29.8769 5.87149 30.7001 4.81008C30.846 4.61735 30.9338 4.38701 30.9533 4.14611C30.9727 3.90521 30.9231 3.66374 30.8101 3.45008C30.6939 3.23543 30.5174 3.0595 30.3024 2.94399C30.0874 2.82849 29.8432 2.77846 29.6001 2.80008C24.7695 3.213 20.1175 4.82099 16.063 7.47923C12.0085 10.1375 8.6789 13.7625 6.37403 18.0278C4.06917 22.2931 2.86144 27.0647 2.85962 31.9129C2.8578 36.7611 4.06195 41.5336 6.36361 45.8007C8.66527 50.0677 11.9922 53.6952 16.0447 56.3565C20.0971 59.0178 24.748 60.6292 29.5782 61.0458C34.4085 61.4623 39.2666 60.6709 43.7148 58.7427C48.1631 56.8144 52.0619 53.8101 55.0601 50.0001C55.2095 49.8073 55.3003 49.5757 55.3216 49.3327C55.3429 49.0898 55.2938 48.8459 55.1801 48.6301C55.0687 48.4153 54.8988 48.2365 54.6899 48.1144C54.4811 47.9923 54.2419 47.9318 54.0001 47.9401Z" fill="#0ea5e9"/>
                                <path d="M59.19 15.29C59.1175 15.0701 58.9858 14.8745 58.8094 14.7245C58.633 14.5746 58.4187 14.4761 58.19 14.44L51 13.4L47.79 6.90001C47.6866 6.69134 47.5269 6.51571 47.3291 6.39293C47.1312 6.27014 46.9029 6.20508 46.67 6.20508C46.4371 6.20508 46.2089 6.27014 46.011 6.39293C45.8131 6.51571 45.6534 6.69134 45.55 6.90001L42.34 13.4L35.16 14.4C34.9313 14.4361 34.717 14.5346 34.5406 14.6845C34.3642 14.8345 34.2325 15.0301 34.16 15.25C34.0901 15.4737 34.083 15.7123 34.1395 15.9398C34.1959 16.1673 34.3137 16.3749 34.48 16.54L39.67 21.6L38.45 28.75C38.4177 28.9294 38.4253 29.1137 38.4723 29.2899C38.5193 29.466 38.6046 29.6296 38.722 29.769C38.8395 29.9084 38.9862 30.0202 39.1518 30.0964C39.3174 30.1727 39.4977 30.2114 39.68 30.21C39.8816 30.2089 40.0801 30.161 40.26 30.07L46.68 26.69L53.1 30.07C53.3077 30.1774 53.5411 30.225 53.7742 30.2073C54.0073 30.1897 54.2309 30.1075 54.42 29.97C54.6087 29.8338 54.755 29.6469 54.8417 29.431C54.9284 29.215 54.9521 28.9789 54.91 28.75L53.69 21.6L58.88 16.54C59.0393 16.3788 59.1522 16.1776 59.2068 15.9576C59.2613 15.7376 59.2555 15.507 59.19 15.29V15.29Z" fill="#0ea5e9"/>
                            </svg>
                        </div>
                        <div v-if="isDarkMode">
                            <svg fill="#fcd34d" width="32" height="32" version="1.1" id="Layer_1_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
                            <circle cx="8.5" cy="7.5" r="4.5"/>
                            <rect x="8" width="1" height="2"/>
                            <rect x="8" y="13" width="1" height="2"/>
                            <rect x="14" y="7" width="2" height="1"/>
                            <rect x="1" y="7" width="2" height="1"/>
                            <rect x="12.596" y="11.096" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.7175 12.8033)" width="1" height="2"/>
                            <rect x="3.404" y="1.904" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.9099 3.6109)" width="1" height="2"/>
                            <rect x="2.904" y="11.596" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.4099 6.3033)" width="2" height="1"/>
                            <rect x="12.096" y="2.404" transform="matrix(0.7071 -0.7071 0.7071 0.7071 1.7823 10.1107)" width="2" height="1"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="bg-sky-900 dark:bg-slate-900/90 border rounded-xl py-3 px-6 md:sticky top-0 backdrop-blur z-[9999]">
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-1/5 mb-3 md:mb-2">
                            <div class="px-1">
                                <label for="" class="text-sky-50 dark:text-sky-50 font-bold">Tahun Awal</label>
                                <multiselect
                                    v-model="model.year"
                                    :options="getYear"
                                    label="name"
                                    track-by="id"
                                    placeholder="Pilih Tahun"
                                    :allowEmpty="false"
                                />
                            </div>
                        </div>
                        <div class="w-full md:w-1/5 mb-3 md:mb-2">
                            <div class="px-1">
                                <label for="" class="text-sky-50 dark:text-sky-50 font-bold">Tahun Akhir</label>
                                <multiselect
                                    v-model="model.endYear"
                                    :options="getEndYear"
                                    label="name"
                                    track-by="id"
                                    placeholder="Pilih Tahun"
                                    :allowEmpty="false"
                                />
                            </div>
                        </div>
                        <div class="w-full md:w-1/5 mb-3 md:mb-2 mx:px-2">
                            <div class="px-1">
                                <label class="text-sky-50 dark:text-sky-50 font-bold">Periode</label>
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
                                <label class="text-sky-50 dark:text-sky-50 font-bold">Barang</label>
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
                                <label class="text-sky-50 dark:text-sky-50 font-bold">Pelanggan</label>
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
                    <ChartContainer
                        chartId="chart-penjualan"
                        title="Total Pendapatan Penjualan"
                        :loading="loading.sales"
                        :labels="chartSales.labels"
                        :datasets="chartSales.datasets"
                    />
                </div>
                <div class="my-1"></div>
                <div>
                    <ChartContainer
                        ref="chart-penjualan-barang"
                        title="Total Penjualan Barang"
                        chartId="chart-penjualan-barang"
                        :loading="loading.salesQty"
                        :labels="chartSalesQty.labels"
                        :datasets="chartSalesQty.datasets"
                    />
                </div>
                <div class="my-1"></div>
                <div>
                    <ChartContainer
                        ref="chart-penjualan-barang-customer"
                        title="Total Penjualan oleh Pelanggan"
                        chartId="chart-penjualan-barang-customer"
                        :loading="loading.salesCustomer"
                        :labels="chartSalesCustomer.labels"
                        :datasets="chartSalesCustomer.datasets"
                    />
                </div>
            </div>
        </div>
        <div class="bg-slate-500 dark:bg-slate-900 overflow-x-hidden">
            <div class="border-b"></div>
            <div class="text-center pt-5 text-slate-300 pb-5">
                <h3 class="font-bold">Dosen Mata Kuliah Data Warehouse</h3>
                <span>
                    SAWALI WAHYU, S.Kom, M.Kom., CEAA, CITAP, CGRCPA, CITGP
                </span>
                <div class="my-4"></div>
                <h3 class="font-bold">Anggota Kelompok</h3>
                <ul>
                    <li>Adi Putra Sukma Pratama (20200801266)</li>
                    <li>Asep Yayat (20200801305)</li>
                    <li>Dimas Dwi Yulianto (20200801315)</li>
                    <li>Syaiful Fajri (20200803108)</li>
                    <li>Yun Prasetyo (20200801267)</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
import BarChart from './Bar.vue'
import LineChart from './Line.vue'
import Loader from './Loader.vue'
import ChartContainer from './ChartContainer'

var debounce = require('debounce');

export default {
    props: {
        isDarkMode: {
            type: Boolean,
            default: true
        }
    },
    components: {
        Multiselect,
        BarChart,
        LineChart,
        Loader,
        ChartContainer
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
                    },
                    {
                        id: 'M1',
                        name: 'Januari',
                        all: false
                    },
                    {
                        id: 'M2',
                        name: 'Februari',
                        all: false
                    },
                    {
                        id: 'M3',
                        name: 'Maret',
                        all: false
                    },
                    {
                        id: 'M4',
                        name: 'April',
                        all: false
                    },
                    {
                        id: 'M5',
                        name: 'Mei',
                        all: false
                    },
                    {
                        id: 'M6',
                        name: 'Juni',
                        all: false
                    },
                    {
                        id: 'M7',
                        name: 'Juli',
                        all: false
                    },
                    {
                        id: 'M8',
                        name: 'Agustus',
                        all: false
                    },
                    {
                        id: 'M9',
                        name: 'September',
                        all: false
                    },
                    {
                        id: 'M10',
                        name: 'Oktober',
                        all: false
                    },
                    {
                        id: 'M11',
                        name: 'November',
                        all: false
                    },
                    {
                        id: 'M12',
                        name: 'Desember',
                        all: false
                    },
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
        },
        getYear() {
            return this.source.year.filter(year => parseInt(year.id) <= parseInt(this.model.endYear.id))
        },
        getEndYear() {
            return this.source.year
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
        toggleDarkMode() {
            this.$emit('change-mode')
        },
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
        },
        changePeriodeToDefault() {
            if (this.model.year.id !== this.model.endYear.id) {
                this.model.periode = {
                    id: 'all',
                    name: 'Semua'
                }
            }
        }
    },
    watch: {
        'model.year': debounce(function (val) {
            this.changePeriodeToDefault()
            this.fetchChart()
        }, 500),
        'model.endYear': debounce(function (val) {
            this.changePeriodeToDefault()
            this.fetchChart()
        }, 500),
        'model.periode': debounce(function (val) {
            if (this.model.year.id === this.model.endYear.id) {
                this.fetchChart()
            } else {
                this.changePeriodeToDefault()
            }
        }, 500),
        'model.item': debounce(function (val) {
            this.fetchChart()
            this.fetchMasterData()
        }, 500),
        'model.customer': debounce(function (val) {
            this.fetchChart()
            this.fetchMasterData()
        }, 500)
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
