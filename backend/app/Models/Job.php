<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Job extends Model
{
    use HasFactory;


    protected  $fillable = [
        'name',
        'type_id',
    ];


    /**
     * @return BelongsTo
     */
    public function types(): BelongsTo
    {
        return $this->belongsTo(Type::class, 'id', 'type_id');
    }


    /**
     * @return BelongsToMany
     */
    public function orders(): BelongsToMany
    {
        return $this->belongsToMany(Order::class);
    }
}
