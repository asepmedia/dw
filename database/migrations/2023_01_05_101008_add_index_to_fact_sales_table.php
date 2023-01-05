<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIndexToFactSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fact_sales', function (Blueprint $table) {
            //
            $table->index('customer_id', 'fc_customer_id');
            $table->index('item_id', 'fc_item_id');
            $table->index('date_id', 'fc_date_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('fact_sales', function (Blueprint $table) {
            //
            $table->dropIndex('fc_customer_id');
            $table->dropIndex('fc_item_id');
            $table->dropIndex('fc_date_id');
        });
    }
}
