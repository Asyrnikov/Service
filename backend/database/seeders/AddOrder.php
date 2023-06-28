<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddOrder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('orders')->insert([
            [
                'registration_date' => '2021-02-13 14:33:21',
                'paid' => true,
                'checked' => false,
                'completed' => false,
                'cost' => 300,
                'user_id' => 1,
            ],
            [
                'registration_date' => '2020-01-13 11:24:01',
                'paid' => true,
                'checked' => true,
                'completed' => true,
                'cost' => 200,
                'user_id' => 1,
            ],
        ]);
    }
}
