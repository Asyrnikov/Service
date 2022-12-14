<?php


namespace App\Services\Response;


use Illuminate\Http\JsonResponse;

class ResponseService
{

    /**
     * @param $status
     * @param array $data
     * @param int $code
     * @param $errors
     * @return JsonResponse
     */
    public static function sendJsonResponse($status, array $data = [], int $code = 200, $errors = []): JsonResponse
    {
        return response()->json([
            'status' => $status,
            'data' => $data,
            'errors' => $errors,
        ], $code);
    }
}
