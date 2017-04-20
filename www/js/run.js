angular.module('starter')

  .run(function($ionicPlatform,
                                        $cordovaSQLite,
                                        $cordovaAppVersion,
                                        $cordovaFileTransfer,
                                        $ionicLoading,
                                        $ionicPopup,
                                        $cordovaFileOpener2,
                                        $cordovaNetwork,
                                        $http,
                                        $timeout,
                                        $q,
                                        HttpService,
                                        $rootScope,
                                        SQLiteService) {

  // 初始化数据库放到deviceready前面，以便controller里去进行数据库的操作
  SQLiteService.init("tblSystems").then(function(res){
    // 走到这里就是初始化数据库成功了
  }, function(err){
    alert("err : "+err);
  });

  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required·
      StatusBar.styleDefault();
    }

    document.addEventListener("deviceready" , function () {

      checkUpdate();

    }, false);


    // Android升级
    function checkUpdate() {

      var type = $cordovaNetwork.getNetwork();
      //alert(type);

      //获取本地APP版本
      $cordovaAppVersion.getVersionNumber().then(function (version) {

        var apkurl = "http://123.56.135.196:4102/api/updating?name=FY4MonitorApp&version=v" + version;
        var apkpath;
        var fileSize;

        var promise = HttpService.getdata(apkurl,$http,$q);
        promise.then(function(data){

          if(data.latestVersion != "") {

            apkpath = data.path;
            fileSize = data.size;

            if (type === 'wifi') {
              $ionicPopup.confirm({
                title: '版本升级',
                template: '版本升级详细内容,你现在下载的是FY4集中监控APP!',
                cancelText: '取消',
                okText: '升级'
              }).then(function (res) {
                if (res) {
                  UpdateForAndroid(apkpath,fileSize);
                }
              });
            } else {
              $ionicPopup.confirm({
                title: '建议您在WIFI条件下进行升级，是否确认升级？',
                template: '版本升级详细内容,你现在下载的是FY4集中监控APP!',
                cancelText: '取消',
                okText: '升级'
              }).then(function (res) {
                if (res) {
                  UpdateForAndroid(apkpath,fileSize);
                }
              });
            }
          }
        })
      });

      // 无网络时
      $rootScope.$on('$cordovaNetwork:offline', function (event, networkState) {

        $ionicLoading.show({
          template: '网络异常，不能连接到服务器！'
        });

        $timeout(function () {
          $ionicLoading.hide()
        }, 2000);
      })
    }

    function UpdateForAndroid(url,filesize) {
      $ionicLoading.show({
        template: "请稍等..."
      });
      //var url = 'http://10.24.4.131:8081/android-debug.apk'; // 下载地址
      var targetPath = cordova.file.externalDataDirectory + "FY4APP.apk";
      var trustHosts = true;
      var options = {};

      $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
        .then(function (result) {
          $cordovaFileOpener2.open(targetPath, 'application/vnd.android.package-archive'
          ).then(function () {
              // 成功
              //alert("下载" + url + "成功。")
            }, function (err) {
              //alert("下载" + url + "异常。" + err)
              console.log(err);
            });
          $ionicLoading.hide();
        },

        function (err) {
          //alert("下载" + url + "异常。" + err)
          $ionicLoading.show({
            template: "下载失败"
          });
          $ionicLoading.hide();
        },

        function (progress) {
          $timeout(function () {
            var downloadProgress = (progress.loaded / filesize) * 100;
            $ionicLoading.show({
              //template: "已经下载：" + Math.floor(downloadProgress) + "%"
              template: "正在下载升级文件" +
              "<br/>文件大小 : " + formatFileSize(filesize) + ". " +
              "<br/>已下载 : " + Math.floor(downloadProgress) + "%"
            });
            if (downloadProgress > 99) {
              $ionicLoading.hide();
            }
          });
        });
    }

    function formatFileSize(fileSize) {
      var updateSize;
      var unit;

      if((fileSize / 1024)  < 1)
      {
        updateSize = fileSize;
        unit = "";
      }
      else if((fileSize / (1024 * 1024)) < 1)
      {
        updateSize = (fileSize / 1024);
        unit = "K";
      }
      else if((fileSize / (1024 * 1024 * 1024)) < 1)
      {
        updateSize = (fileSize / (1024 * 1024));
        unit = "M";
      }

      return updateSize.toFixed(2) + unit;
    }

  });
})