angular.module('theme.signup-controller').factory('CredentialService', function($http, $location, sessionService) {

	return{
        login:function(data,scope){
            var $promise=$http.post('apis/auth',data);
            $promise.then(function(msg){
                var uid=msg.data.email;
                if(msg.data.success){
                    sessionService.set('uid',uid);
                    $location.path('/');
                }
                else  {
                    scope.msgtxt='incorrect information';
                    scope.showmsg = true;
                    $location.path('/login');
                }                  
            });
        },
        logout:function(){
            sessionService.destroy('uid');
            $location.path('/login');
        },
        islogged:function(){
            $http.post('apis/is_logged')
            .then(function(res){
            	
            });
            /*
            if(sessionService.get('user')) return true;
            else return false;
            */
        }
    };
});