<?php

use Actcmsvn\Base\Facades\AdminHelper;
use Actcmsvn\Base\Http\Middleware\DisableInDemoModeMiddleware;
use Actcmsvn\DataSynchronize\Http\Controllers\DataSynchronizeController;
use Actcmsvn\DataSynchronize\Http\Controllers\UploadController;
use Illuminate\Support\Facades\Route;

AdminHelper::registerRoutes(function () {
    Route::group(['permission' => 'tools.data-synchronize'], function () {
        Route::get('tools/data-synchronize', [DataSynchronizeController::class, 'index'])
            ->name('tools.data-synchronize');

        Route::prefix('data-synchronize')->name('data-synchronize.')->group(function () {
            Route::post('upload', [UploadController::class, '__invoke'])
                ->middleware(DisableInDemoModeMiddleware::class)
                ->name('upload');
        });
    });
});
