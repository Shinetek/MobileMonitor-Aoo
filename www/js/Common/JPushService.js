/**
 * Created by qq on 2017/5/3.
 */
angular
    .module('starter.services')
    .factory('JPushService', JPushService)

JPushService.$inject = ['$http', '$window'];

function JPushService($http, $window) {

    var _init = function () {
        $window.plugins.jPushPlugin.init();
        $window.plugins.jPushPlugin.setDebugMode(true);
    }

    //ֹͣ��������
    var _stopPush = function () {
        $window.plugins.jPushPlugin.stopPush();
    }

    //������������
    var _resumePush = function () {
        $window.plugins.jPushPlugin.resumePush();
    }

    //���ñ�ǩ�ͱ���
    var _setTagsWithAlias = function (tags, alias) {
        $window.plugins.jPushPlugin.setTagsWithAlias(tags, alias);
    }

    //���ñ�ǩ
    var _setTags = function (tags) {
        $window.plugins.jPushPlugin.setTags(tags);
    }

    //���ñ���
    var _setAlias = function (alias) {
        $window.plugins.jPushPlugin.setAlias(alias);
    }

    var _recevieMessage = function(){
        window.plugins.jPushPlugin.openNotificationInAndroidCallback = function (data)
        {
            var obj = JSON.parse(data);
            alert(obj);
        };
    }


    //document.attachEvent('jpush.receiveMessage', function (event) {
    //    alert(event);
    //});

    return {
        init: _init,
        stopPush: _stopPush,
        resumePush: _resumePush,
        setTagsWithAlias: _setTagsWithAlias,
        setTags: _setTags,
        setAlias: _setAlias,
        receive: _recevieMessage
    };
}