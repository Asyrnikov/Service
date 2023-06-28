<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AddRoleAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create(['name' => 'create-jobs']);
        Permission::create(['name' => 'edit-orders']);
        Permission::create(['name' => 'show-all-orders']);

        Permission::create(['name' => 'create-orders']);
        Permission::create(['name' => 'show-this-user-orders']);

        $adminRole = Role::create(['name' => 'admin']);
        $userRole = Role::create(['name' => 'user']);

        $adminRole->givePermissionTo([
            'create-jobs',
            'edit-orders',
            'show-all-orders',
        ]);

        $userRole->givePermissionTo([
            'create-orders',
            'show-this-user-orders',
        ]);
    }
}
