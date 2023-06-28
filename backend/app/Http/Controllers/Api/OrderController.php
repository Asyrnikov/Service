<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Services\Order\OrderService;
use App\Services\Response\ResponseService;
use App\Services\Type\TypeService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class OrderController extends ApiController
{
    /**
     * OrderController constructor.
     */
    public function __construct(OrderService $service)
    {
        $this->service = $service;
    }
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return ResponseService::sendJsonResponse(
            true,
            [
                'items' => $this->service->getOrders()->toArray()
            ]
        );
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @param Order $order
     * @return JsonResponse
     */
    public function store(Request $request, Order $order): JsonResponse
    {
//        Log::channel('command')->info($request);
        $order = $this->service->store($request, $order);

        return ResponseService::sendJsonResponse(
            true,
            [
                'item' => $order->toArray()
            ]
        );
    }


    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Order $order
     * @return JsonResponse
     */
    public function update(Request $request, Order $order)
    {
//        Log::channel('command')->info($order);
        $order = $this->service->store($request, $order);

        return ResponseService::sendJsonResponse(
            true,
            [
                'item' => $order->toArray()
            ]
        );

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    /**
     *
     * @return JsonResponse
     */
    public function getOrdersByUserId(int $userId): JsonResponse
    {
        return ResponseService::sendJsonResponse(
            true,
            [
                'items' => $this->service->getOrdersByUserId($userId)->toArray()
            ]
        );
    }

    /**
     *
     * @return JsonResponse
     */
    public function getOrdersByChecked(int $checked): JsonResponse
    {
        return ResponseService::sendJsonResponse(
            true,
            [
                'items' => $this->service->getOrdersByChecked($checked)->toArray()
            ]
        );
    }

    /**
     *
     * @return JsonResponse
     */
    public function getOrdersByPaid(int $paid): JsonResponse
    {
        return ResponseService::sendJsonResponse(
            true,
            [
                'items' => $this->service->getOrdersByPaid($paid)->toArray()
            ]
        );
    }

    /**
     *
     * @return JsonResponse
     */
    public function getOrdersByCompleted(int $completed): JsonResponse
    {
        return ResponseService::sendJsonResponse(
            true,
            [
                'items' => $this->service->getOrdersByCompleted($completed)->toArray()
            ]
        );
    }
}


