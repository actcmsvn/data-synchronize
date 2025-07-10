<?php

namespace Actcmsvn\DataSynchronize\Providers;

use Actcmsvn\Base\Facades\DashboardMenu;
use Actcmsvn\Base\Facades\PanelSectionManager as PanelSectionManagerFacade;
use Actcmsvn\Base\Supports\ServiceProvider;
use Actcmsvn\Base\Traits\LoadAndPublishDataTrait;
use Actcmsvn\DataSynchronize\Commands\ClearChunksCommand;
use Actcmsvn\DataSynchronize\Commands\ExportCommand;
use Actcmsvn\DataSynchronize\Commands\ExportControllerMakeCommand;
use Actcmsvn\DataSynchronize\Commands\ExporterMakeCommand;
use Actcmsvn\DataSynchronize\Commands\ImportCommand;
use Actcmsvn\DataSynchronize\Commands\ImportControllerMakeCommand;
use Actcmsvn\DataSynchronize\Commands\ImporterMakeCommand;
use Actcmsvn\DataSynchronize\Commands\TestLargeExportCommand;
use Actcmsvn\DataSynchronize\PanelSections\ExportPanelSection;
use Actcmsvn\DataSynchronize\PanelSections\ImportPanelSection;
use Illuminate\Console\Scheduling\Schedule;

class DataSynchronizeServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function boot(): void
    {
        $this
            ->setNamespace('packages/data-synchronize')
            ->loadAndPublishTranslations()
            ->loadRoutes()
            ->loadAndPublishConfigurations(['data-synchronize'])
            ->loadAndPublishViews()
            ->publishAssets()
            ->registerPanelSection()
            ->registerDashboardMenu();

        if ($this->app->runningInConsole()) {
            $this->commands([
                ImporterMakeCommand::class,
                ExporterMakeCommand::class,
                ImportControllerMakeCommand::class,
                ExportControllerMakeCommand::class,
                ClearChunksCommand::class,
                ExportCommand::class,
                ImportCommand::class,
                TestLargeExportCommand::class,
            ]);

            $this->app->afterResolving(Schedule::class, function (Schedule $schedule) {
                $schedule
                    ->command(ClearChunksCommand::class)
                    ->dailyAt('00:00');
            });
        }
    }

    protected function getPath(?string $path = null): string
    {
        return __DIR__ . '/../..' . ($path ? '/' . ltrim($path, '/') : '');
    }

    protected function registerPanelSection(): self
    {
        PanelSectionManagerFacade::group('data-synchronize')->beforeRendering(function () {
            PanelSectionManagerFacade::default()
                ->register(ExportPanelSection::class)
                ->register(ImportPanelSection::class);
        });

        return $this;
    }

    protected function registerDashboardMenu(): self
    {
        DashboardMenu::default()->beforeRetrieving(function () {
            DashboardMenu::make()
                ->registerItem([
                    'id' => 'cms-packages-data-synchronize',
                    'parent_id' => 'cms-core-tools',
                    'priority' => 9000,
                    'name' => 'packages/data-synchronize::data-synchronize.tools.export_import_data',
                    'icon' => 'ti ti-package-import',
                    'route' => 'tools.data-synchronize',
                ]);
        });

        return $this;
    }
}
