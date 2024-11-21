<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/register', [AuthController::class, "userRegistration"]);
Route::post('/login', [AuthController::class, "userLogin"])->name("login");

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/logout', [AuthController::class, "userLogout"]);
});
