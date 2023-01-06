<?php

use App\Models\Item;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/items', function() {
    $items = DB::table('dim_item')->get();

    return response()->json([
        'data' => $items
    ]);
});

Route::get('/customers', function() {
    $customers = DB::table('dim_customer')->get();

    return response()->json([
        'data' => $customers
    ]);
});

Route::get('/sales', function() {

    $cacheName = json_encode(request()->all());

    // if(Cache::has($cacheName)) {
    //     $response = Cache::get($cacheName);
    //     return response()->json($response);
    // }

    $dimFirstDate = DB::table('dim_date')
        ->when(request()->year, function($q) {
            return $q->where('year', '=', request()->year);
        })
        ->when(!request()->year, function($q) {
            return $q->where('year', '=', 2017);
        })
        ->when(request()->periode, function($q) {
            if(request()->periode == 'all') return $q;

            $periode = request()->periode;

            if($periode == 'S1') {
                return $q->where('quarter', 'Q1');
            }

            if($periode == 'S2') {
                return $q->where('quarter', 'Q3');
            }

            return $q->where('quarter', '=', $periode);
        })
        ->first();

    $dimLastDate = DB::table('dim_date')
        ->when(request()->to, function($q) {
            return $q->where('year', '=', request()->to);
        })
        ->when(!request()->to, function($q) {
            return $q->where('year', '=', 2022);
        })
        ->when(request()->periode, function($q) {
            if(request()->periode == 'all') return $q;

            $periode = request()->periode;

            if($periode == 'S1') {
                return $q->where('quarter', 'Q2');
            }

            if($periode == 'S2') {
                return $q->where('quarter', 'Q4');
            }

            return $q->where('quarter', '=', $periode);
        })
        ->orderBy('id', 'desc')
        ->first();

    $firstDate = $dimFirstDate->id;
    $lastDate = $dimLastDate->id;

    $year = request()->year;
    $to = request()->to;
    if($year == $to) {
        $data = DB::table('fact_sales')
            ->select([
                'dim_item.name as item',
                'dim_item.color as background_color',
                'dim_customer.name as customer',
                'dim_customer.background_color as background_color_customer',
                DB::raw('MONTH(fact_sales.invoice_date) as date'),
                DB::raw('SUM(fact_sales.qty) as qty'),
                DB::raw('SUM(fact_sales.total) as total')
            ])
            ->leftJoin('dim_item', 'dim_item.id', 'fact_sales.item_id')
            ->leftJoin('dim_customer', 'dim_customer.id', 'fact_sales.customer_id')
            ->when(request()->item_ids, function($q) {
                if(request()->item_ids == 'all') return $q;

                $itemIds = explode(",", request()->item_ids);
                return $q->whereIn('fact_sales.item_id', $itemIds);
            })
            ->when(request()->customer_ids, function($q) {
                if(request()->customer_ids == 'all') return $q;

                $customerIds = explode(",", request()->customer_ids);
                return $q->whereIn('fact_sales.customer_id', $customerIds);
            })
            ->where(function($q) use($firstDate, $lastDate) {
                return $q
                    ->where('fact_sales.date_id', '>=', $firstDate)
                    ->where('fact_sales.date_id', '<=', $lastDate);
            })
            ->when(request()->type != 'customer', function($q) {
                return $q->groupByRaw('fact_sales.item_id, MONTH(fact_sales.invoice_date)');
            })
            ->when(request()->type == 'customer', function($q) {
                return $q->groupByRaw('fact_sales.customer_id, MONTH(fact_sales.invoice_date)');
            })
            ->orderByRaw('MONTH(fact_sales.invoice_date) ASC')
            ->get();
    } else {
        $data = DB::table('fact_sales')
            ->select([
                'dim_item.name as item',
                'dim_item.color as background_color',
                'dim_customer.name as customer',
                'dim_customer.background_color as background_color_customer',
                DB::raw('YEAR(fact_sales.invoice_date) as date'),
                DB::raw('SUM(fact_sales.qty) as qty'),
                DB::raw('SUM(fact_sales.total) as total')
            ])
            ->leftJoin('dim_item', 'dim_item.id', 'fact_sales.item_id')
            ->leftJoin('dim_customer', 'dim_customer.id', 'fact_sales.customer_id')
            ->when(request()->item_ids, function($q) {
                if(request()->item_ids == 'all') return $q;

                $itemIds = explode(",", request()->item_ids);
                return $q->whereIn('fact_sales.item_id', $itemIds);
            })
            ->when(request()->customer_ids, function($q) {
                if(request()->customer_ids == 'all') return $q;

                $customerIds = explode(",", request()->customer_ids);
                return $q->whereIn('fact_sales.customer_id', $customerIds);
            })
            ->where(function($q) use($firstDate, $lastDate) {
                return $q
                    ->where('fact_sales.date_id', '>=', $firstDate)
                    ->where('fact_sales.date_id', '<=', $lastDate);
            })
            ->when(request()->type != 'customer', function($q) {
                return $q->groupByRaw('fact_sales.item_id, YEAR(fact_sales.invoice_date)');
            })
            ->when(request()->type == 'customer', function($q) {
                return $q->groupByRaw('fact_sales.customer_id, YEAR(fact_sales.invoice_date)');
            })
            ->orderByRaw('YEAR(fact_sales.invoice_date) ASC')
            ->get();
    }


    $labels = [];
    $datasets = [];

    switch(request()->type ?? 'sales') {
        case 'sales':
            $labels = collect($data)
                ->groupBy('date')
                ->transform(function($row, $key) {
                    return $key;
                })
                ->values();

            $datasets = collect($data)
                ->groupBy('item')
                ->transform(function($row, $key) {
                    return [
                        'label' => $key,
                        'backgroundColor' => $row[0] ? $row[0]->background_color : null,
                        'borderColor' => $row[0] ? $row[0]->background_color : null,
                        'data' => collect($row)->pluck('total')
                    ];
                })
                ->values()
                ->toArray();
            break;
        case 'qty':
            $labels = collect($data)
                ->groupBy('date')
                ->transform(function($row, $key) {
                    return $key;
                })
                ->values();

            $datasets = collect($data)
                ->groupBy('item')
                ->transform(function($row, $key) {
                    return [
                        'label' => $key,
                        'backgroundColor' => $row[0] ? $row[0]->background_color : null,
                        'borderColor' => $row[0] ? $row[0]->background_color : null,
                        'data' => collect($row)->pluck('qty')
                    ];
                })
                ->values()
                ->toArray();
            break;
        case 'customer':
            $labels = collect($data)
                ->groupBy('date')
                ->transform(function($row, $key) {
                    return $key;
                })
                ->values();

            $datasets = collect($data)
                ->groupBy('customer')
                ->transform(function($row, $key) use ($labels) {
                    $data = [];

                    foreach($labels as $label) {
                        $data[] = collect($row)
                            ->where('date', $label)
                            ->sum('total');
                    }
                    return [
                        'label' => $key,
                        'backgroundColor' => $row[0] ? $row[0]->background_color_customer : null,
                        'borderColor' => $row[0] ? $row[0]->background_color_customer : null,
                        'data' => $data
                    ];
                })
                ->values()
                ->toArray();
            break;

    }

    $month = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
    ];

    $response = [
        'labels' => collect($labels)
            ->transform(function($row) use ($month, $year, $to) {
                if(request()->periode && $year == $to) {
                    return $month[((int) $row) - 1]." ".request()->year;
                }
                return $row;
            }),
        'datasets' => $datasets
    ];

    Cache::put($cacheName, $response, now()->addMonth());
    return response()->json($response);
});
