<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddUser extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userAdmin = User::create([
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin123'),
            'lastname' => 'Syrnikov',
            'firstname' => 'Anton',
            'phone_number' => '+3752421421'
        ]);
        $userAdmin->assignRole('admin');

        $user = User::create([
            'email' => 'user@gmail.com',
            'password' => bcrypt('user123'),
            'lastname' => 'Syrnikov',
            'firstname' => 'Alexander',
            'phone_number' => '+4324324'
        ]);
        $user->assignRole('user');

//        DB::table('users')->insert([
//            [
//                'email' => 'admin@gmail.com',
//                'password' => 'admin123',
//                'lastname' => 'Syrnikov',
//                'firstname' => 'Anton',
//                'phone_number' => '+3752421421'
//            ],
//        ]);
    }
}
