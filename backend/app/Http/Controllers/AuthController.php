<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends BaseController
{
    public function userLogin (Request $request) {
        $request->validate([
            "email" => "required",
            "password" => "required",
        ]);

        if (Auth::attempt([
            "email" => $request->email,
            "password" => $request->password
        ])) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->plainTextToken;

            return $this->sendResponse([
                "user" => $user,
                "token" => $token,
            ], "login successfully");
        } else {
            return $this->sendError(message: "Invalid credentials");
        }
    }

    public function userRegistration (Request $request) {
        try {
            $request->validate([
                "email" => "required|email|unique:users,email",
                "password" => "required",
                "name" => "required"
            ]);
            User::create([
                "email" => $request->email,
                "password" => Hash::make($request->password),
                "name" => $request->name
            ]);

            return $this->sendResponse(message: "User created successfully");
        } catch (Exception $e) {
            return $this->sendError(["error" => $e->getMessage()]);
        };
    }

    public function userLogout (Request $request) {
        $user = Auth::user();
        $user->currentAccessToken()->delete();

        return $this->sendResponse([], "Logout successful");
    }
}
