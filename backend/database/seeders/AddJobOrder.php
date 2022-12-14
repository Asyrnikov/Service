<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddJobOrder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('job_order')->insert([
            [
                'order_id' => 1,
                'job_id' => 2
            ],
            [
              'order_id' => 2,
              'job_id' => 2
            ],
        ]);
    }
}
