<?php


namespace App\Services\Order;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderService
{

    public function store(Request $request, Order $order): Order
    {
        $order->fill($request->only($order->getFillable()));
        $order->save();
        $order->jobs()->sync($request->only('jobs')['jobs']);
        return $order;
    }
}
