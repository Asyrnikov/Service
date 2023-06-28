<?php


namespace App\Services\Order;

use App\Models\Order;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class OrderService
{
    public function getOrders(): Collection
    {
        return Order::all();
    }
    public function store(Request $request, Order $order): Order
    {
        $order->fill($request->only($order->getFillable()));
        $order->save();
        $order->jobs()->sync(array_map(function ($job) {
            return $job['id'];
        }, $request->only('jobs')['jobs']));
        return $order;
    }

    public function getOrdersByUserId(int $userId) {
        return Order::where('user_id', $userId)->get();
    }

    public function getOrdersByChecked(int $checked) {
        return Order::where('checked', $checked)->get();
    }

    public function getOrdersByPaid(int $paid) {
        return Order::where('paid', $paid)->get();
    }

    public function getOrdersByCompleted(int $completed) {
        return Order::where('completed', $completed)->get();
    }
}
