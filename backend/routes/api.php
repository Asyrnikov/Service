<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\TypeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('types', TypeController::class);
Route::resource('jobs', JobController::class);
Route::resource('orders', OrderController::class);
Route::get('orders/user/{userId}', [OrderController::class, 'getOrdersByUserId']);
Route::get('orders/checked/{checked}', [OrderController::class, 'getOrdersByChecked']);
Route::get('orders/paid/{paid}', [OrderController::class, 'getOrdersByPaid']);
Route::get('orders/completed/{completed}', [OrderController::class, 'getOrdersByCompleted']);

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::get('user-profile', [AuthController::class, 'userProfile']);
});
