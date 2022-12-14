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
              'lastname' => 'Syrnikov',
              'firstname' => 'Alexander',
              'patronymic' => 'Sergeevich',
              'phone_number' => '+375(29)321-32-33'
            ],
            [
                'registration_date' => '2020-01-13 11:24:01',
                'lastname' => 'Syrnikov',
                'firstname' => 'Anton',
                'patronymic' => 'Sergeevich',
                'phone_number' => '+375(29)451-22-41'
            ],
        ]);
    }
}
