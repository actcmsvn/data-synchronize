<?php

namespace ACTCMS\DataSynchronize\Providers;

use ACTCMS\Base\Facades\DashboardMenu;
use ACTCMS\Base\Facades\PanelSectionManager as PanelSectionManagerFacade;
use ACTCMS\Base\Supports\ServiceProvider;
use ACTCMS\Base\Traits\LoadAndPublishDataTrait;
use ACTCMS\DataSynchronize\Commands\ClearChunksCommand;
use ACTCMS\DataSynchronize\Commands\ExportCommand;
use ACTCMS\DataSynchronize\Commands\ExportControllerMakeCommand;
use ACTCMS\DataSynchronize\Commands\ExporterMakeCommand;
use ACTCMS\DataSynchronize\Commands\ImportCommand;
use ACTCMS\DataSynchronize\Commands\ImportControllerMakeCommand;
use ACTCMS\DataSynchronize\Commands\ImporterMakeCommand;
use ACTCMS\DataSynchronize\PanelSections\ExportPanelSection;
use ACTCMS\DataSynchronize\PanelSections\ImportPanelSection;
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
