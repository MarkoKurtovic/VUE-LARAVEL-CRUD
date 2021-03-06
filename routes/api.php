<?php

use Illuminate\Http\Request;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('api')->group(function () {
    //show todos
    Route::get('/todos', 'App\Http\Controllers\TodoController@index');
    //show details of todo
    Route::get('/todo/edit/{id}', 'App\Http\Controllers\TodoController@edit');
    //update todo
    Route::post('/todo/update/{id}', 'App\Http\Controllers\TodoController@update');
    //create todo
    Route::post('/todo/create', 'App\Http\Controllers\TodoController@create');
    //update todo
    Route::get('/todo/delete/{id}', 'App\Http\Controllers\TodoController@destroy');
});