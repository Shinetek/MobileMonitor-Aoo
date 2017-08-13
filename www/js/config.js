angular.module('starter')
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        var date = new Date();
        console.log(date.toISOString().substr(0, 19).replace("T", " ") + " ###############################");

        $ionicConfigProvider.platform.android.tabs.position('bottom'); //导航栏置底
        $ionicConfigProvider.platform.android.tabs.style('standard');
        //$ionicConfigProvider.scrolling.jsScrolling(true);

        $stateProvider

            .state('tab', {
                url: '/tab',
                templateUrl: 'partials/tabs.html',
            })

            .state('tab.building', {
                url: '/building',
                views: {
                    'tab-building': {
                        templateUrl: 'partials/building.html',
                        //controller:'TelemteringCtrl'
                    }
                }
            })

            .state("tab.lv1fastview", {
                url: "/lv1fastview",
                views: {
                    "tab-lv1fastview": {
                        templateUrl: "partials/lv1fastview/lv1fastview.html",
                        // controller: 'L1FastViewController'
                    }
                }
            })
            .state("tab.lv1fastview-bigimg", {
                url: "/lv1fastview/bigimg/:taskID",
                views: {
                    "tab-lv1fastview": {
                        templateUrl: "partials/lv1fastview/bigimgview.html",
                        // controller: 'L1FastViewController'
                    }
                }
            })
            .state("tab.lv1fastview-taskinfo", {
                url: "/lv1fastview/task/:listname/:task_id",
                views: {
                    "tab-lv1fastview": {
                        templateUrl: 'partials/apparatus/apparatus-task.html',
                        controller: "ApparatusTaskCtrl"
                    }
                }
            })

            // 故障信息
            .state('tab.faultview', {
                url: '/subsystem/faultview',
                views: {
                    'tab-subsystem': {
                        templateUrl: 'partials/faultview/faultview.html',
                        controller: 'FaultViewCtrl'
                    }
                }
            })

            //处理故障
            .state('tab.faultview-deal', {
                url: '/subsystem/faultview/:code/:id',
                views: {
                    'tab-subsystem': {
                        templateUrl: 'partials/faultview/faultdispose.html',
                        controller: 'FaultDisposeCtrl'
                    }
                }
            })

            .state('tab.subsystem', {
                url: '/subsystem',
                views: {
                    'tab-subsystem': {
                        templateUrl: 'partials/subsystem/subsystem.html',
                        controller: 'SubSystemCtrl'
                    }
                }
            })

            .state('tab.subsystem-custom', {
                url: '/subsystem/state/:state',
                views: {
                    'tab-subsystem': {
                        templateUrl: 'partials/subsystem/subsystem-custom.html',
                        controller: 'SubSystemCustomCtrl'
                    }
                }
            })

            //增加卫星报警
            .state('tab.subsystem-satewar', {
                url: '/subsystem/listfault/WXB',
                views: {
                    'tab-subsystem': {
                        templateUrl: 'partials/custom/satewar/satewar.html',
                        controller: 'SatewarCtrl'
                    }
                }
            })

            //卫星详情
            .state('tab.subsystem-satedetails', {
                url: '/subsystem/listfault/WXB/:id',
                views: {
                    'tab-subsystem': {
                        templateUrl: 'partials/custom/satewar/satedetails.html',
                        controller: 'SateDetailsCtrl'
                    }
                }
            })

            .state('tab.subsystem-observeimg', {
                url: '/subsystem/listfault/GSQ/giirs/:TaskNumber',
                views: {
                    'tab-subsystem': {
                        templateUrl: 'partials/custom/observe/observeimg.html',
                        controller: 'ObtxyimgCtrl'
                    }
                }
            })

            //区域观测
            .state('tab.subsystem-observe', {
                url: '/subsystem/listfault/GSQ',
                views: {
                    'tab-subsystem': {
                        templateUrl: 'partials/custom/observe/observe.html',
                        controller: 'ObserveCtrl'
                    }
                }
            })

            //添加卫星遥测
            .state('tab.telemetery', {
                url: '/telemetery',
                views: {
                    'tab-telemetery': {
                        templateUrl: 'partials/telemetery/telemetery.html',
                        controller: 'TelemeteryCtrl'
                    }
                }
            })

            //添加成像仪观测任务运行状态监测
            .state('tab.apparatus-list', {
                url: '/subsystem/apparatus/:listname',
                views: {
                    'tab-subsystem': {
                        templateUrl: 'partials/apparatus/apparatus-list.html',
                        controller: "ApparatusListCtrl"
                    }
                }
            })

            //增加仪器下当前任务详细报告
            .state("tab.apparatus-task", {
                url: "/subsystem/apparatus/:listname/:task_id",
                views: {
                    "tab-subsystem": {
                        templateUrl: 'partials/apparatus/apparatus-task.html',
                        controller: "ApparatusTaskCtrl"
                    }
                }
            })
            .state("tab.capability", {
                url: "/capability",
                views: {
                    "tab-capability": {
                        templateUrl: "partials/capability/capability.html"
                    }
                }
            })
            .state('tab.capability-nrs', {
                url: '/capability/NRS',
                views: {
                    'tab-capability': {
                        templateUrl: 'partials/capability/nrs-capability.html'
                    }
                }
            })
            .state('tab.capability-dts', {
                url: '/capability/DTSMRS/:sys',
                views: {
                    'tab-capability': {
                        templateUrl: 'partials/capability/dtsmrs-capability.html'
                    }
                }
            })

            .state('tab.capability-mcs', {
                url: '/capability/MCS',
                views: {
                    'tab-capability': {
                        templateUrl: 'partials/capability/mcs-capability.html'
                    }
                }
            })

            .state('tab.capability-cvs', {
                url: '/capability/CVS',
                views: {
                    'tab-capability': {
                        templateUrl: 'partials/capability/cvs-capability.html'
                    }
                }
            })

            //系统公告
            .state('tab.affiche', {
                url: '/affiche',
                views: {
                    'tab-affiche': {
                        templateUrl: 'partials/affiche/affiche.html',
                        controller: "AfficheCtrl"
                    }
                }
            })

            .state('tab.affiche-release', {
                url: '/affiche/release',
                views: {
                    'tab-affiche': {
                        templateUrl: 'partials/affiche/release.html',
                        controller: "ReleaseCtrl"
                    }
                }
            })

            .state('tab.affiche-histroty', {
                url: '/affiche/histroty',
                views: {
                    'tab-affiche': {
                        templateUrl: 'partials/affiche/histroty.html'
                        //controller: "AfficheCtrl"
                    }
                }
            })

            .state('tab.timeable', {
                url: '/timeable',
                views: {
                    'tab-timeable': {
                        templateUrl: 'partials/timeable/timeable.html',
                        controller:"TimeableCtrl"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/subsystem');

    });
