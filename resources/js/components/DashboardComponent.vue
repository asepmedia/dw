<template>
    <div v-bind:class="{
        'dark': isDarkMode,
    }">
        <Chart v-if="isLogin" :isDarkMode="isDarkMode" @change-mode="onChangeMode"/>
        <div v-else class="flex bg-sky-100/75 min-h-screen w-screen justify-center items-center flex-col">
            <div class="bg-white rounded-2xl w-[350px] md:w-[400px] px-8 py-8 text-centser shadow-sm">
                <h3 class="text-2xl text-center font-bold text-sky-900">
                    Login Dashboard
                </h3>
                <div class="my-2"></div>
                <div class="text-center">
                    <span class="text-center text-slate-400 text-md">Masuk untuk melihat grafik dan laporan penjualan barang</span>
                </div>
                <div class="my-7"></div>
                <div>
                    <label for="" class="text-left font-semibolds text-slate-600">Username</label>
                    <div class="my-1"></div>
                    <input
                        :disabled="loading"
                        type="text"
                        class="border rounded-2xl px-6 w-full h-[45px]"
                        v-bind:class="{
                            'bg-slate-300/30': loading,
                            'cursor-wait': loading,
                            'bg-slate-100': !loading
                        }"
                        placeholder="Masukkan Username"
                        autocomplete="off"
                        value="asep@gmail.com"
                    />
                </div>
                <div class="my-4"></div>
                <div>
                    <label for="" class="text-left font-semibolds text-slate-600">Kata Sandi</label>
                    <div class="my-1"></div>
                    <input
                        :disabled="loading"
                        type="password"
                        class=" border rounded-2xl px-6 w-full h-[45px]"
                        v-bind:class="{
                            'bg-slate-300/30': loading,
                            'cursor-wait': loading,
                            'bg-slate-200/60': !loading
                        }"
                        placeholder="Masukkan Kata Sandi"
                        autocomplete="off"
                        value="xxxx"
                    />
                </div>
                <div class="my-4"></div>
                <button
                    :disabled="loading"
                    v-on:click="login"
                    class="rounded-2xl px-6 w-full h-[45px] items-center justify-center flex"
                    v-bind:class="{
                        'bg-slate-100': loading,
                        'cursor-wait': loading,
                        'bg-sky-900': !loading
                    }"
                >
                    <Loader v-if="loading"/>
                    <span v-if="!loading" class="text-xl font-bold text-slate-50">Masuk</span>
                </button>

            </div>
            <div class="text-center w-[350px] md:w-[400px] px-8 py-8">
                <div class="text-slate-400">
                    Dosen Mata Kuliah
                </div>
                <h3 class="font-bold text-slate-800">
                    SAWALI WAHYU, S.Kom, M.Kom., CEAA, CITAP, CGRCPA, CITGP
                </h3>
            </div>
        </div>
    </div>
</template>
<script>
import Chart from './Chart.vue'
import Loader from './Loader.vue'
export default {
    components: {
        Chart,
        Loader
    },
    data() {
        return {
            loginDashboard: false,
            darkMode: false,
            loading: false
        }
    },
    computed: {
        isLogin() {
            const isLogin = window.localStorage.getItem('logss')
            return isLogin || this.loginDashboard
        },
        isDarkMode() {
            return this.darkMode
        }
    },
    methods: {
        login() {
            this.loading = true
            setTimeout(() => {
                window.localStorage.setItem('logss', 'login')
                this.loginDashboard = true
            }, 1500)
        },
        onChangeMode() {
            this.darkMode = !this.darkMode
        }
    }
}
</script>
