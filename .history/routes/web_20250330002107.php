<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\DesignsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TailorsController;
use App\Http\Controllers\MessagesController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\MeasurementController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\RegisteredUserMeasurementController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::controller(MeasurementController::class)->group(function(){
        Route::get('/manaul-measurements', 'index')->name('measurement.index');
        Route::get('/ai-measurements', 'aiMeasurement')->name('measurement.aiMeasurement');
    });

    Route::controller(OrderController::class)->group(function(){
        Route::get('/my-order', 'index')->name('order.index');
        Route::get('/new-order', 'newOrder')->name('order.newOrder');
    });

    Route::controller(TailorsController::class)->group(function(){
        Route::get('/my-tailors', 'index')->name('tailors.index');
        Route::get('/follow-new-tailors', 'newTailors')->name('tailors.newTailors');
    });

    Route::controller(DesignsController::class)->group(function(){
        Route::get('/ai-designs', 'index')->name('design.index');
        Route::get('/manual-designs', 'manualDesign')->name('design.manualDesign');
    });

    Route::controller(MessagesController::class)->group(function(){
        Route::get('/my-tailors-chat', 'index')->name('messages.index');
    });
    Route::controller(SubscriptionController::class)->group(function(){
        Route::get('/subscription-plan', 'index')->name('subscription.index');
    });

    Route::get("/role-and-permission", function (){
        return Inertia::render("RoleAndPermission");
    });

    Route::get('/permissions', [PermissionController::class, 'index']);
    Route::post('/permissions', [PermissionController::class, 'store']);
    
    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
