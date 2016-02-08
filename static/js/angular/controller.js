var globalControllers = angular.module('appimagen.controllers', []);


globalControllers.directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction)
                        }
                    });
                }
            };
    }])

globalControllers.controller('LisImagesControllerCliente', 
	function ($scope, $http) {
		var actualizaFuncionCliente = function() 
		{
		    $scope.data = {success: false};
		    $http({method: 'GET', url:'/app-xv-angular-cliente/'}).
		    success(function(data) {
		        $scope.albumobjects = data;
		    })
		};
		setInterval(function() {
            $scope.$apply(actualizaFuncionCliente);
        }, 30000);
		actualizaFuncionCliente();   
});

globalControllers.controller('LisImagesControllerChaperonP', 
	function ($scope, $http) {
		var actualizaFuncionChaperonp = function() 
		{
		    $scope.data = {success: false};
		    $http({method: 'GET', url:'/app-xv-angular-chaperon-p/'}).
		    success(function(data) {
		    	console.log(data);
		        $scope.chaperonpbjects = data;
		    })
		};
		setInterval(function() {
            $scope.$apply(actualizaFuncionChaperonp);
        }, 30000);
		actualizaFuncionChaperonp();   
});


globalControllers.controller('LisImagesControllerChaperonE', 
	function ($scope, $http) {
		var actualizaFuncionChaperone = function() 
		{
		    $scope.data = {success: false};
		    $http({method: 'GET', url:'/app-xv-angular-chaperon-e/'}).
		    success(function(data) {
		        $scope.chaperonebjects = data;
		    })
		};
		setInterval(function() {
            $scope.$apply(actualizaFuncionChaperone);
        }, 30000);
		actualizaFuncionChaperone();   
});

globalControllers.controller('ExampleController', 
	function ($scope, $http) {

		$scope.ShowIdActividad = function(id){
        $scope.formData = {idActividad: id};
	        $http.post('/show_horario_all_actividad/', {id:id})
	                .success(function(data) {
	                    $scope.ListaHorariosAdd = data;
	                })
	                .error(function(data) {
	                    console.log('Error interno en el servidor:');
	                }); 
	    };
});



globalControllers.filter('time', function($filter)
{
 return function(input)
 {
  if(input == null){ return ""; } 

  	//console.log(input);
  	var vhour = input.split(':');
  	var hours = vhour[0];
	var minutes = vhour[1];

	var ampm = hours >= 12 ? 'PM' : 'AM';
  	hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    //minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm; 
  	return strTime.toUpperCase();

 };
});



// // ---------------------------------Controlador para HORARIO---------------------------------------
// globalControllers.controller('ControllerHorario', ['$scope','$route','$location','PostService',
//     function($scope,$route, $location,PostService){
//         //$scope.proyectos = ServiceHorario.query();
//         var failureCb = function (status) {
//         	console.log(status);
//     	}


// 	    $scope.ShowIdActividad = function (id) {
// 	    $scope.formData = {idActividad: id};
//         PostService.get(id).then(function (data) {
//         	//console.log(data);
//         	$scope.ListaHorariosAdd = data
//         }, failureCb);
//     	};


//         $scope.fnaddhorario = function () {
//         	var vdata = $scope.formData;
//         	if (vdata != null)
// 	        {
// 	        	var vhora = $scope.formData.hora;
// 	            var vdescripcion = $scope.formData.descripcion;
// 	            var vactividad = $scope.formData.idActividad;
// 	            var idH = $scope.formData.id;

// 	            if(vhora != null && vdescripcion !=null )
// 	            {
// 	            	if (idH != null) {
// 	            		console.log("tengo id");
// 	            		PostService.save($scope.formData).then(function (data) {
// 				        	$scope.ListaHorariosAdd = data;//cargamos el json a el formulario
// 				        	$scope.formData.hora = "";
// 				        	$scope.formData.descripcion = "";
// 				        }, failureCb);

// 	            	}else{
// 		            	PostService.save($scope.formData).then(function (data) {
// 				        	$scope.ListaHorariosAdd = data;//cargamos el json a el formulario
// 				        	$scope.formData.hora = "";
// 				        	$scope.formData.descripcion = "";
// 				        }, failureCb);

// 	            	}	

	            	
// 	            }	
//         	}
//         }


// 	    $scope.DeleteHorario = function (id) {
//         PostService.delete(id).then(function (data) {
//         	$scope.ListaHorariosAdd = data;//cargamos el json a el formulario
//         }, failureCb);
//     	};

	    

// 	    $scope.EditHorario = function (id) {
//         PostService.update(id).then(function (data) {
//         	$scope.formData = data;//cargamos el json a el formulario
//         }, failureCb);
//     	};

//     	$scope.CancelHorario = function () {
//     		$scope.formData.hora = "";
//        		$scope.formData.descripcion = "";
//        		$scope.formData.id = "";
//     	};


//     }]);
// // ---------------------------------Controlador para HORARIO---------------------------------------




// ---------------------------------Controlador para TIPS---------------------------------------
globalControllers.controller('ControllerTips', ['$scope','$route','$location','PostServiceTips',
    function($scope,$route, $location,PostServiceTips){
        var failureCb = function (status) {
        	console.log(status);
    	}


	    $scope.ShowIdActividadT = function (id) {
	    $scope.formData = {idActividad: id};
        PostServiceTips.get(id).then(function (data) {
        	$scope.ListaTipsAdd = data
        }, failureCb);
    	};


    	$scope.fnaddTips = function () {
        	var vdata = $scope.formData;
        	if (vdata != null)
	        {
	        	var vdescripcion = $scope.formData.descripcion;
	            var vactividad = $scope.formData.idActividad;
	            var idH = $scope.formData.id;

	            if(vdescripcion != null)
	            {
	            	if (idH != null) {
	            		PostServiceTips.save($scope.formData).then(function (data) {
				        	$scope.ListaTipsAdd = data;//cargamos el json a el formulario
				        	$scope.formData.id = "";
				        	$scope.formData.descripcion = "";

				        }, failureCb);

	            	}else{
		            	PostServiceTips.save($scope.formData).then(function (data) {
				        	$scope.ListaTipsAdd = data;//cargamos el json a el formulario
				        	$scope.formData.descripcion = "";
				        }, failureCb);

	            	}	
	            }	
        	}
        }

        $scope.DeleteTips = function(id){
			PostServiceTips.delete(id).then(function (data) {
				$scope.ListaTipsAdd = data;//cargamos el json a el formulario
			}, failureCb);
		};

		$scope.EditTips = function (id) {
        PostServiceTips.update(id).then(function (data) {
        	$scope.formData = data;//cargamos el json a el formulario
        }, failureCb);
    	};

    	$scope.CancelTips = function () {
       		$scope.formData.descripcion = "";
       		$scope.formData.id = "";
    	};


    }]);
// ---------------------------------Controlador para TIPS---------------------------------------



// ---------------------------------Controlador para AVISOS---------------------------------------
globalControllers.controller('ControllerAvisos', ['$scope','$route','$location','PostServiceAvisos',
    function($scope,$route, $location,PostServiceAvisos){
        var failureCb = function (status) {
        	console.log(status);
    	}


	    $scope.ShowIdAvisos = function (id) {
	    $scope.formData = {idActividad: id};
        PostServiceAvisos.get(id).then(function (data) {
        	$scope.ListaAvisos = data
        }, failureCb);
    	};


    	$scope.fnaddAvisos = function () {
        	var vdata = $scope.formData;
        	if (vdata != null)
	        {
	        	var vdescripcion = $scope.formData.descripcion;
	            var vactividad = $scope.formData.idActividad;
	            var idH = $scope.formData.id;

	            if(vdescripcion != null)
	            {
	            	if (idH != null) {
	            		PostServiceAvisos.save($scope.formData).then(function (data) {
				        	$scope.ListaAvisos = data;//cargamos el json a el formulario
				        	$scope.formData.id = "";
				        	$scope.formData.descripcion = "";

				        }, failureCb);

	            	}else{
		            	PostServiceAvisos.save($scope.formData).then(function (data) {
				        	$scope.ListaAvisos = data;//cargamos el json a el formulario
				        	$scope.formData.descripcion = "";
				        }, failureCb);

	            	}	
	            }	
        	}
        }

        $scope.EditAvisos = function (id) {
        PostServiceAvisos.update(id).then(function (data) {
        	$scope.formData = data;//cargamos el json a el formulario
        }, failureCb);
    	};


    	$scope.DeleteAvisos = function(id){
			PostServiceAvisos.delete(id).then(function (data) {
				$scope.ListaAvisos = data;//cargamos el json a el formulario
			}, failureCb);
		};



        $scope.CancelAvisos = function () {
       		$scope.formData.descripcion = "";
       		$scope.formData.id = "";
    	};

}]);    	
// ---------------------------------Controlador para AVISOS---------------------------------------    

// ---------------------------------Controlador para Ventana Modal---------------------------------------
globalControllers.controller('ModalController', 
function ($scope,$modal,$http){

  	$scope.List = function (id) {
        FuntionChaperon(id);
    };

    $scope.ListInt = function (id) {
        FuntionChaperonInt(id);
    };


    var FuntionChaperon = function(id) 
    {
        $scope.data = {success: false};
        $http({method: 'GET', 
                   url:'/api_show_chapeyear_ext/'+id,
            }).
        success(function(data) {
            $scope.ListaChaperonyear = data;
        })
    };

    var FuntionChaperonInt = function(id) 
    {
        $scope.data = {success: false};
        $http({method: 'GET', 
                   url:'/api_show_chapeyear_int/'+id,
            }).
        success(function(data) {
            $scope.ListaChaperonyearint = data;
        })
    };


  $scope.showModalChaperonExt = function (id) {
    $scope.radio=1;
    var modalInstance = $modal.open({
      templateUrl:  '/templates/ShowModalFormChaperon.html',
      controller: 'SaveCancelControllerChaperonExt',
        resolve:{
          formData : function(){
            return id;//paso de variables 
          }  
        }
    });
    //-----------------retorna el valor al template ----------------
    modalInstance.result.then(function(selectedItem) {
		//inicio
          bootbox.dialog('<h4>Se ha enviado exitosamente la invitación al correo del chaperón..!</h4>'
            , [{
            "label": "Cerrar!",
            "class": "btn-primary",
            "callback": function () {
            }
          },]);
        //fin

      $scope.ListaChaperonyear = selectedItem;
    });
    //-----------------retorna el valor al template ----------------
  };


  $scope.showModalChaperonInt = function (id) {
    var modalInstance = $modal.open({
      templateUrl:  '/templates/ShowModalFormChaperon.html',
      controller: 'SaveCancelControllerChaperonInt',
        resolve:{
          formData : function(){
            return id;//paso de variables 
          }  
        }
    });
    //-----------------retorna el valor al template ----------------
    modalInstance.result.then(function(selectedItem) {
		//inicio
          bootbox.dialog('<h4>Se ha enviado exitosamente la invitación al correo del chaperón..!</h4>'
            , [{
            "label": "Cerrar!",
            "class": "btn-primary",
            "callback": function () {
            }
          },]);
        //fin

      $scope.ListaChaperonyearint = selectedItem;
    });
    //-----------------retorna el valor al template ----------------
  };   


});
// ---------------------------------Controlador para Ventana Modal---------------------------------------


// ---------------------------------Controlador para Ventana Modal cooreo de activacion chaperon---------------------------------------
globalControllers.controller('SaveCancelControllerChaperonExt', 
function ($scope,$http,$modalInstance,formData,savechapeyearext){
  var failureCb = function (status) {
          console.log(status);
      }

  
  $scope.save = function () {

    var programa = $scope.formData.programa;
    var salida = $scope.formData.salida;
    var radio = $scope.formData.radio;
    console.log(radio);

    $scope.ListaChaperonyear={};

    if(programa != "" && salida != "")
      {
        savechapeyearext.Funsavechapeyearext(programa,salida,formData,radio).then(function (data) {
          $scope.ListaChaperonyear = data;
          // ------------------ envia el dato del servidor a la funcion modalInstance -----------------
          $modalInstance.close(data); 
        }, failureCb);
      }
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };


});


globalControllers.controller('SaveCancelControllerChaperonInt', 
function ($scope,$http,$modalInstance,formData,savechapeyearint){
  var failureCb = function (status) {
          console.log(status);
      }

  
  $scope.save = function () {

    var programa = $scope.formData.programa;
    var salida = $scope.formData.salida;
    var radio = $scope.formData.radio;
    console.log(radio);

    $scope.ListaChaperonyearint={};

    if(programa != "" && salida != "")
      {
        savechapeyearint.Funsavechapeyearint(programa,salida,formData,radio).then(function (data) {
          $scope.ListaChaperonyearint = data;
          // ------------------ envia el dato del servidor a la funcion modalInstance -----------------
          $modalInstance.close(data); 
        }, failureCb);
      }
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };


});
// ---------------------------------Controlador para Ventana Modal cooreo de activacion chaperon---------------------------------------




