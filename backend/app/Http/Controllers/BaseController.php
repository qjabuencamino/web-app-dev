<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;

class BaseController extends Controller
{

    public function sendError($data = [], $message = "") {
        $responseData = [
            "error" => true,
            "message" => $message,
            "data" => $data
        ];
        return response()->json($responseData, 400);
    }

    public function sendResponse($data = [], $message = "") {
        $responseData = [
            "error" => false,
            "message" => $message,
            "data" => $data
        ];
        return response()->json($responseData, 200);
    }
}
