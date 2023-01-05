<?php

namespace App\Console\Commands;

use App\Models\Invoice;
use App\Models\InvoiceDetail;
use App\Models\Item;
use Carbon\Carbon;
use Illuminate\Console\Command;

class DummyInvoiceCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:DummyInvoiceCommand';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $ranges = [2017, 2018, 2019, 2020, 2021];

        foreach($ranges as $year) {
            foreach(range(1, 12) as $month) {
                $start = Carbon::parse("$year-$month-01")->startOfMonth();
                $end = Carbon::parse("$year-$month-01")->endOfMonth();
                $days = $end->diffInDays($start);

                // harian
                foreach(range(1, $days) as $day) {
                    $day = str_pad($day, 2, "0", STR_PAD_LEFT);
                    $invoiceDate = Carbon::parse("$year-$month-$day 00:22")->format('Y-m-d H:i:s');
                    foreach(range(1,80) as $data) {
                        $urut = str_pad($data, 4, "0", STR_PAD_LEFT);
                        $invoiceCode = "F.$urut/IS/$day";

                        $total = 0;

                        $invoice = Invoice::create([
                            'customer_id'  => rand(1,8),
                            'invoice_code' => $invoiceCode,
                            'invoice_date' => $invoiceDate,
                            'total'        => $total,
                            'created_at'   => $invoiceDate
                        ]);

                        $invoiceDetails = [];

                        foreach(range(1, rand(3,5)) as $invoiceDetail) {
                            $qty = rand(5,100);

                            $item = Item::inRandomOrder()->first();
                            $subtotal = $qty * $item->price;
                            $invoiceDetails[] = [
                                'invoice_id' => $invoice->id,
                                'item_id' => $item->id,
                                'qty'     => $qty,
                                'total'   => $subtotal,
                                'created_at' => $invoiceDate
                            ];

                            $total += $subtotal;
                        }

                        InvoiceDetail::insert($invoiceDetails);
                        $invoice->total = $total;
                        $invoice->save();

                    }
                }
            }
        }
    }
}
