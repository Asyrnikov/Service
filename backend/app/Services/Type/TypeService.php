<?php


namespace App\Services\Type;


use App\Models\Type;

class TypeService
{

    public function getTypes()
    {
        return Type::all();
    }
}
