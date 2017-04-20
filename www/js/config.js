angular.module('starter')
  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  console.log("###############################");

  $ionicConfigProvider.platform.android.tabs.position('bottom'); //导航栏置底
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.scrolling.jsScrolling(false);

  $stateProvider

    .state('tab', {
      url: '/tab',
      //abstract: true,
      templateUrl: 'partials/tabs.html',
      //controller: 'TabsCtrl'
    })

    .state('tab.building',{
      url:'/building',
      views:{
        'tab-building':{
          templateUrl:'partials/building.html',
          //controller:'TelemteringCtrl'
        }
      }
    })

    .state('tab.fastView',{
      url:'/fastView',
      views:{
        'tab-fastView':{
          templateUrl:'partials/fastview/fastview.html',
          controller:'FastViewCtrl'
        }
      }
    })

    .state('tab.fastView-detail',{
      url:'/fastView/:instname',
      views:{
        'tab-fastView':{
          templateUrl:'partials/fastview/fastview-detail.html',
          controller:'FastViewDetailCtrl'
        }
      }
    })

    .state('tab.subsystem',{
      url:'/subsystem',
      views:{
        'tab-subsystem':{
          templateUrl:'partials/subsystem/subsystem.html',
          controller:'SubSystemCtrl'
        }
      }
    })

    .state('tab.subsystem-custom',{
      url:'/subsystem/:state',
      views:{
        'tab-subsystem':{
          templateUrl:'partials/subsystem/subsystem-custom.html',
          controller:'SubSystemCustomCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/subsystem');

});
