<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Order extends Model
{
    use HasFactory;

    protected $with = ['jobs', 'user'];

    protected  $fillable = [
        'registration_date',
        'user_id',
        'paid',
        'checked',
        'completed',
        'cost',
    ];

    /**
     * @return BelongsToMany
     */
    public function jobs(): BelongsToMany
    {
        return $this->belongsToMany(Job::class);
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
