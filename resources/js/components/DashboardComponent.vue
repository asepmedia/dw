<template>
    <div>
        <Chart v-if="isLogin"/>
        <div v-else class="flex bg-slate-50 min-h-screen w-screen justify-center items-center">
            <div class="bg-white rounded-xl border w-[350px] px-6 py-4 text-center">
                <h3 class="text-3xl text-center font-bold text-slate-900">
                    Login Dashboard
                </h3>
                <div class="my-2"></div>
                <span class="text-center text-slate-500">Masuk untuk melihat grafik penjualan barang</span>
                <div class="my-7"></div>
                <div>
                    <input
                        type="text"
                        class="bg-slate-200 rounded-xl px-6 w-full h-[40px]"
                        placeholder="Masukkan Username"
                        autocomplete="off"
                        value="asep@gmail.com"
                    />
                </div>
                <div class="my-3"></div>
                <div>
                    <input
                        type="password"
                        class="bg-slate-200 rounded-xl px-6 w-full h-[40px]"
                        placeholder="Masukkan Kata Sandi"
                        autocomplete="off"
                        value="xxxx"
                    />
                </div>
                <div class="my-4"></div>
                <button
                    v-on:click="login"
                    class="bg-orange-500 rounded-xl px-6 w-full h-[40px]"
                >
                    <span class="text-xl font-bold text-slate-50">Masuk</span>
                </button>
                <div class="my-4 border-b"></div>
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
export default {
    components: {
        Chart
    },
    data() {
        return {
            loginDashboard: false,
        }
    },
    computed: {
        isLogin() {
            const isLogin = window.localStorage.getItem('loginss')
            return isLogin || this.loginDashboard
        }
    },
    methods: {
        login() {
            window.localStorage.setItem('loginss', '232')
            this.loginDashboard = true
        }
    }
}
</script>
