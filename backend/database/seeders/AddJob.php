<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddJob extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('jobs')->insert([
            [
                'type_id' => 1,
                'name'    => 'Installation job',
                'count' => '100$'
            ],
            [
                'type_id' => 2,
                'name'    => 'Repair job',
                'count' => '100$'
            ],
            [
                'type_id' => 1,
                'name'    => 'Installation job2',
                'count' => '200$'
            ],
        ]);
    }
}
