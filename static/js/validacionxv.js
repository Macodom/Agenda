//script de boostrap de template

    /*====Select Box====*/
    $(function () {
        $(".chzn-select").chosen();
        $(".chzn-select-deselect").chosen({
        allow_single_deselect: true
        });
    });

    /*====TAGS INPUT====*/
    $(function () {
        $('#tags_1').tagsInput({
            width: 'auto'
        });
        $('#tags_2').tagsInput({
            width: 'auto',
            onChange: function (elem, elem_tags) {
                var languages = ['php', 'ruby', 'javascript'];
                $('.tag', elem_tags).each(function () {
                    if ($(this).text().search(new RegExp('\\b(' + languages.join('|') + ')\\b')) >= 0) $(this).css('background-color', 'yellow');
                });
            }
        });
    });
    /*====Select Box====*/
    $(function () {
        $(".chzn-select").chosen();
        $(".chzn-select-deselect").chosen({
            allow_single_deselect: true
        });
    });
    /*====Color Picker====*/
    $(function () {
        $('.colorpicker').colorpicker({
            format: 'hex'
        });
        $('.pick-color').colorpicker();
    });
    /*====DATE Time Picker====*/
    $(function () {
        $('#datetimepicker1').datetimepicker({
            language: 'pt-BR'
        });
    });
    $(function () {
        $('#datetimepicker11').datetimepicker({
            language: 'pt-BR'
        });
    });
    $(function () {
        $('#datetimepicker3').datetimepicker({
            pickDate: false
        });
    });
    $(function () {
        $('#datetimepicker4').datetimepicker({
            pickTime: false
        });
    });
    $(function () {
        $('#datetimepicker44').datetimepicker({
            pickTime: false
        });
    });
    $(function () {
        $('#datetimepicker444').datetimepicker({
            pickTime: false
        });
    });
    
    $(function () {
        $('#datetimepicker8').datetimepicker({
            pickTime: false
        });
    });
    /*DATE RANGE PICKER*/
    $(function () {
        $('#reportrange').daterangepicker({
            ranges: {
                'Today': ['today', 'today'],
                'Yesterday': ['yesterday', 'yesterday'],
                'Last 7 Days': [Date.today().add({
                    days: -6
                }), 'today'],
                'Last 30 Days': [Date.today().add({
                    days: -29
                }), 'today'],
                'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                'Last Month': [Date.today().moveToFirstDayOfMonth().add({
                    months: -1
                }), Date.today().moveToFirstDayOfMonth().add({
                    days: -1
                })]
            },
            opens: 'left',
            format: 'dd/MM/yyyy',
            separator: ' to ',
            startDate: Date.today().add({
                days: -29
            }),
            endDate: Date.today(),
            minDate: '01/01/2012',
            maxDate: '12/31/2013',
            locale: {
                applyLabel: 'Submit',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom Range',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
            },
            showWeekNumbers: true,
            buttonClasses: ['btn-danger']
        },
        function (start, end) {
            $('#reportrange span').html(start.toString('MMMM d, yyyy') + ' - ' + end.toString('MMMM d, yyyy'));
        });
        //Set the initial state of the picker label
        $('#reportrange span').html(Date.today().add({
            days: -29
        }).toString('MMMM d, yyyy') + ' - ' + Date.today().toString('MMMM d, yyyy'));
    });
    $(function () {
        $('#reservation').daterangepicker();
    });

/*===============================================
TBALE THEMES
==================================================*/
$(function() {
        $(".paper-table").tablecloth({
          theme: "paper",
          striped: true,
          sortable: true,
          condensed: false
        });
      });
$(function() {
      $('.data-grid').dataTable({ "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>"
          });
      });     
/**=========================
LEFT NAV ICON ANIMATION 
==============================**/
$(function () {
    $(".left-primary-nav a").hover(function () {
        $(this).stop().animate({
            fontSize: "30px"
        }, 200);
    }, function () {
        $(this).stop().animate({
            fontSize: "24px"
        }, 100);
    });
});

$(function(){
    $("a.switcher").bind("click", function(e){
        e.preventDefault();
        var theid = $(this).attr("id");
        var theproducts = $("ul#products");
        var classNames = $(this).attr('class').split(' ');
        var gridthumb = "images/grid-default-thumb.png";
        var listthumb = "images/list-default-thumb.png";
        if($(this).hasClass("active")) {
            // if currently clicked button has the active class
            // then we do nothing!
            return false;
        } else {
            // otherwise we are clicking on the inactive button
            // and in the process of switching views!
            if(theid == "gridview") {
                $(this).addClass("active");
                $("#listview").removeClass("active");
                // remove the list class and change to grid
                theproducts.removeClass("list");
                theproducts.addClass("grid");
                // update all thumbnails to larger size
                $("img.thumb").attr("src",gridthumb);
            }
            else if(theid == "listview") {
                $(this).addClass("active");
                $("#gridview").removeClass("active");
                // remove the grid view and change to list
                theproducts.removeClass("grid")
                theproducts.addClass("list");
                // update all thumbnails to smaller size
                $("img.thumb").attr("src",listthumb);
            } 
        }
    });
});


//fin del script del boostrap del template


//scrip para que funcione el ajax en django

$(document).ajaxSend(function(event, xhr, settings) {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    function sameOrigin(url) {
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }
    function safeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
    }
}); 

//fin del script para que funcione el ajax en django

$(function(){
    $("#chaperonFormN").validate({
        rules: {
            first_name: "required",
            last_name: "required",
            apmat: "required",
            email: {
                required: true,
                email: true
            },
            sexo:"required",
            fecha_nacimiento: {
                required: true
            },
            telefono: {
                required: true,
            },
            celular: {
                required: true,
            },
            pais:"required",
            estado:"required",
            localidad:"required",
            direccion:"required",
            codigo_postal:"required",
            nacionalidad:"required",
            talla:"required",
            numpasaporte: {
                required: true,
            },
            vencimiento: {
                required: true
            },

            ingles:"required",
            otroidio:"required",
            filvideo:"required",
            programa:"required",
            salida:"required",
            tipo_chaperon:"required",
            

        },
        messages: {
            first_name: "Por favor, escribe el nombre",
            last_name: "Por favor, escribe los apellidos",
            sexo:"Por favor, seleccione el sexo",
            id_tipo_usuario:"Por favor, seleccione el tipo de usuario",
            pais:"Por favor, seleccione el pais",

        }
    });

})

//validacion de formulario del personal

$(function () {
                // validate signup form on keyup and submit
                $("#signupForm").validate({
                    rules: {
                        first_name: "required",
                        last_name: "required",
                        sexo:"required",
                        id_tipo_usuario:"required",
                        localidad:"required",

                        asesor:"required",



                        pais:"required",
                        estado:"required",
                        direccion:"required",
                        codigo_postal:"required",

                        agencia:"required",
                        puesto:"required",
                        username: {
                            required: true,
                            minlength: 5,
                            maxlength: 30,
                        },
                        fecha_nacimiento: {
                            required: true
                        },
                        // telefono: {
                        //     required: true,
                        //     maxlength: 10,
                        //     minlength: 10
                        // },
                        password: {
                            required: true,
                            minlength: 5
                        },
                        confirm_password: {
                            required: true,
                            minlength: 5,
                            equalTo: "#password"
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        topic: {
                            required: "#newsletter:checked",
                            minlength: 1
                        },
                        agree: "required",
                        padre: "required",
                        nombre: "required",
                        fecha_ultimo_cambio:"required",
                        id_lugar:"required",
                        id_agencia:"required",
                        id_depatamento:"required",
                        director:"required",
                        tel:"required",

                        
                        id_precio:"required",
                        id_precio2:"required",
                        tipo_comunicacion:"required",
                        comentario:"required",
                        status:"required",
                        fecha_seguimiento:"required",
                        folio:"required",
                        pago:"required",

                        llevallega:"required",
                        //dv1:"required",
                        personal1:"required",
                        chaperon1:"required",
                        otro1:"required",
                        recibeentraga:"required",
                        //dv2:"required",
                        personal2:"required",
                        chaperon2:"required",
                        otro2:"required",
                        reserva:"required",

                        user:"required",
                        nuevo:"required",

                        programa:"required",
                        salida:"required",
                        vigencia:"required",
                        ninos:"required",
                        ninas:"required",

                        claveprecio:"required",
                        precio_promo:"required",
                        tipo_cambio:"required",
                        fecha_inicial:"required",
                        fecha_final:"required",
                        names:"required",
                        apes:"required",
                        datos:"required",

                    },
                    messages: {
                        first_name: "Por favor, escribe el nombre",
                        last_name: "Por favor, escribe los apellidos",
                        sexo:"Por favor, seleccione el sexo",
                        id_tipo_usuario:"Por favor, seleccione el tipo de usuario",
                        pais:"Por favor, seleccione el pais",
                        estado:"Por favor, seleccione el estado",
                        direccion:"Por favor, ingrese la direccion",
                        codigo_postal:"Por favor, ingrese el codigo postal",
                        localidad:"Por favor, seleccione la localidad",
                        agencia:"Por favor, seleccione la agencia",
                        puesto:"Por favor, seleccione el puesto",
                        fecha_nacimiento:"Por favor, ingrese su la fecha de nacimineto",
                        

                        id_precio:"Por favor, seleccione el programa",
                        id_precio2:"Por favor, seleccione el precio",
                        tipo_comunicacion:"Por favor, seleccione el tipo de comuicación",
                        comentario:"Por favor, escriba el comentario",
                        status:"Seleccione una opción",
                        fecha_seguimiento:"Ingrese la nueva fecha de seguimiento",
                        folio:"Ingrese el folio de pago",
                        pago:"Ingrese la cantidad a pagar",
                        
                        llevallega:"Campo requerido",
                        //dv1:"Ingrese datos del vuelo",
                        personal1:"Campo requerido",
                        chaperon1:"Campo requerido",
                        otro1:"Escriba el nombre completo",
                        recibeentraga:"Campo requerido",
                        //dv2:"Ingrese datos del vuelo",
                        personal2:"Campo requerido",
                        chaperon2:"Campo requerido",
                        otro2:"Escriba el nombre completo",

                        reserva:"Escriba el numero de reserva",

                        user:"Escriba el nombre del usuario",
                        nuevo:"Escriba la nueva contraseña",

                        programa:"Seleccione el programa",
                        salida:"Seleccione la salida",
                        vigencia:"Ingrese la fecha de salida",
                        ninos:"Ingrese la cantidad de niños para este paquete",
                        ninas:"Ingrese la cantidad de niñas para este paquete",


                        telefono:{
                            required: "Ingrese el numero de Telefono",
                            maxlength: "Maximo 10 dígitos",
                            minlength: "Minimo 10 dígitos"
                        },
                        username: {
                            required: "Por favor, escribe el nombre de usuario(Nesesario para entrar al sistema)",
                            minlength: "Your username must consist of at least 5 characters"
                        },
                        password: {
                            required: "Por favor, ingrese la contraseña",
                            minlength: "LA contraseña debe tener al menos 5 caracteres"
                        },
                        confirm_password: {
                            required: "Por favor, ingrese la contraseña",
                            minlength: "La contraseña debe tener al menos 5 caracteres",
                            equalTo: "Por favor, introduzca la misma contraseña que el anterior"
                        },
                        email: "Por favor, introduzca una dirección e-mail válida",
                        agree: "Por favor, acepte nuestra política de privacidad",
                        
                        padre: "Este campo es requerido",
                        nombre: "Ingrese el nombre",
                        fecha_ultimo_cambio: "Ingrese la fecha",
                        id_lugar: "Ingrese el lugar",
                        id_agencia: "Ingrese la agencia",
                        id_depatamento: "Ingrese el departamento",
                        director:"Ingrese el nombre del director",
                        tel:"Ingrese el el telefono",


                        claveprecio:"Seleccione la clave del precio",
                        precio_promo:"Ingrese el precio",
                        tipo_cambio:"Seleccione la moneda",
                        fecha_inicial:"Ingrese la fecha inicial",
                        fecha_final:"Ingrese la fecha final",
                        names:"Ingrese el nombre",
                        apes:"Ingrese los apellidos",
                        datos:"Campo requerido",

                        asesor:"Campo requerido",





                    }
                });
                
///////////////// convertir a mayuscula   
 
                $('#firstname').blur(function(){
                    this.value = this.value.toUpperCase();
                });
                $('#lastname').blur(function(){
                    this.value = this.value.toUpperCase();
                });
                $('#apmat').blur(function(){
                    this.value = this.value.toUpperCase();
                });
                $('#direccion').blur(function(){
                    this.value = this.value.toUpperCase();
                });
                 $('#id_descripcion').blur(function(){
                    this.value = this.value.toUpperCase();
                });
                 $('#nombre_papa').blur(function(){
                    this.value = this.value.toUpperCase();
                });
                 $('#apellidos_p').blur(function(){
                    this.value = this.value.toUpperCase();
                });
                 $('#nombre_mama').blur(function(){
                    this.value = this.value.toUpperCase();
                });
                 $('#apellidos_m').blur(function(){
                    this.value = this.value.toUpperCase();
                 });
                $('#id_dv1').blur(function(){
                    this.value = this.value.toUpperCase();
                 });
                $('#id_dv2').blur(function(){
                    this.value = this.value.toUpperCase();
                 });
                 $('#nombre').blur(function(){
                    this.value = this.value.toUpperCase();
                 });
                 $('#director').blur(function(){
                    this.value = this.value.toUpperCase();
                 });

                 ////////// para otros 
                 
                 $('#first_name').blur(function(){
                    this.value = this.value.toUpperCase();
                 });
                 $('#last_name').blur(function(){
                    this.value = this.value.toUpperCase();
                 });
                 $('#apmat').blur(function(){
                    this.value = this.value.toUpperCase();
                 });

                 $('#oidio').blur(function(){
                    this.value = this.value.toUpperCase();
                 });
                 $('#otroidio').blur(function(){
                    this.value = this.value.toUpperCase();
                 });

                 $('#filvi').blur(function(){
                    this.value = this.value.toUpperCase();
                 });
                 $('#filvideo').blur(function(){
                    this.value = this.value.toUpperCase();
                 });

                 $('#numpasaportep').blur(function(){
                    this.value = this.value.toUpperCase();
                 }); 

                 $('#numpasaporte').blur(function(){
                    this.value = this.value.toUpperCase();
                 });  

                  


                 
                
/////////////////  fin de convertir a mayuscula 
                
                 
                // propose username by combining first- and lastname
                
                //code to hide topic selection, disable for demo
                var newsletter = $("#newsletter");
                // newsletter topics are optional, hide at first
                var inital = newsletter.is(":checked");
                var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("disable-topic");
                var topicInputs = topics.find("input").attr("disabled", !inital);
                // show when newsletter is checked
                newsletter.click(function () {
                    topics[this.checked ? "removeClass" : "addClass"]("disable-topic");
                    topicInputs.attr("disabled", !this.checked);
                });
            });

            $(function () {
                var container = $('div.error-container ');
                // validate the form when it is submitted
                var validator = $("#form2").validate({
                    errorContainer: container,
                    errorLabelContainer: $("ol", container),
                    wrapper: 'li',
                    meta: "validate"
                });
                $(".cancel").click(function () {
                    validator.resetForm();
                });
            });

//fin de validacion de formulaio del personal

//validacion de formulario del witget de cliente
            $(function () {
                /*==JQUERY STEPY==*/
                $('#stepy').stepy({
                    backLabel: 'Regresar',
                    nextLabel: 'Siguiente',
                    block: true,
                    description: true,
                    legend: false,
                    titleClick: true,
                    titleTarget: '#stepy_tabby'
                });
                $('#stepy1').stepy({
                    backLabel: 'Regresar',
                    nextLabel: 'Siguiente',
                    block: true,
                    description: true,
                    legend: false,
                    titleClick: true,
                    titleTarget: '#stepy_tabby1'
                });
                $('#stepy_form').stepy({
                    backLabel: 'Regresar',
                    nextLabel: 'Siguiente',
                    errorImage: true,
                    block: true,
                    description: true,
                    legend: false,
                    titleClick: true,
                    titleTarget: '#top_tabby',
                    validate: true
                });
                $('#stepy_form').validate({
                    errorPlacement: function (error, element) {
                        $('#stepy_form div.stepy-error').append(error);
                    },
                    rules: {                        
                        localidad:"required",

                        first_name:"required",
                        last_name:"required",
                        apmat:"required",
                        username: {
                            required: true,
                            minlength: 5,
                            maxlength: 30,
                        },
                        
                        // telefono: {
                        //     maxlength: 10,
                        //     minlength: 10,
                        //     digits: true
                        // },
                        codigo_postal: {
                            maxlength: 10,
                            minlength: 5,
                            //digits: true
                        },
                        celular: {
                            maxlength: 10,
                            minlength: 10,
                            digits: true
                        },
                        password: {
                            required: true,
                            minlength: 5
                        },
                        confirm_password: {
                            required: true,
                            minlength: 5,
                            equalTo: "#password"
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        topic: {
                            required: "#newsletter:checked",
                            minlength: 1
                        },
                        


                        telefono_p: {
                            
                            maxlength: 10,
                            minlength: 10,
                        },
                        email_p: {
                            email: true
                        },

                        
                        telefono_m: {
                            maxlength: 10,
                            minlength: 10,
                        },
                        email_m: {
                            email: true
                        },
                        pais:"required",
                        estado:"required",

                    },
                    messages: {
                        first_name: "Por favor, escribe el nombre",
                        last_name: "Por favor, escribe los apellidos",
                        id_tipo_usuario:"Por favor, seleccione el tipo de usuario",
                        localidad:"Por favor, seleccione la localidad",
                        escuela:"Por favor, seleccione la escuela",
                        nacionalidad:"Por favor, seleccione el puesto",
                        fecha_nacimiento:"Por favor, ingrese su la fecha de nacimineto",
                        telefono:{
                            required: "Ingrese el numero de Telefono",
                            maxlength: "Maximo 10 dígitos",
                            minlength: "Minimo 10 dígitos",
                            digits: "Por favor use sólamente dígitos.",
                        },
                        codigo_postal:{
                            required: "Ingrese el código postal",
                            maxlength: "Maximo 7 dígitos",
                            minlength: "Minimo 5 dígitos",
                            //digits: "Por favor use sólamente dígitos.",
                        },
                        celular:{
                            required: "Ingrese el numero de celular",
                            maxlength: "Maximo 10 dígitos",
                            minlength: "Minimo 10 dígitos",
                            digits: "Por favor use sólamente dígitos.",
                        },
                        username: {
                            required: "Por favor, escribe el nombre de usuario(Nesesario para entrar al sistema)",
                            minlength: "Your username must consist of at least 5 characters"
                        },
                        password: {
                            required: "Por favor, ingrese la contraseña",
                            minlength: "LA contraseña debe tener al menos 5 caracteres"
                        },
                        confirm_password: {
                            required: "Por favor, ingrese la contraseña",
                            minlength: "La contraseña debe tener al menos 5 caracteres",
                            equalTo: "Por favor, introduzca la misma contraseña que el anterior"
                        },
                        email: "Por favor, introduzca una dirección e-mail válida",
                        agree: "Por favor, acepte nuestra política de privacidad",

                        nombre: "Ingrese el nombre",
                        talla: "Por favor, ingrese su talla",
                        personalidad: "Por favor, seleccione su personalidad",
                        sabe_nadar: "Por favor, seleccione si sabe nadar",
                        viaja_con: "Por favor, seleccione ¿con quien viaja?",
                        fuente: "Por favor, seleccione ¿Como se etero de nuestros programas?",
                        fiesta: "Por favor, seleccione ¿Si asiste a fiesta?",


                        pais:"Seleccion el pais por favor",
                        estado:"Seleccion el Estado por favor",
                        discapacidad_fm:"Campo requerido",
                        desorden_pns:"Campo requerido",
                        restriccion_aliment:"Campo requerido",
                        padecimiento_aler:"Campo requerido",
                        restriccion_acde:"Campo requerido",
                        medicamento_dv:"Campo requerido",
                        cirugia_accidente:"Campo requerido",



                        nombre_papa:"Campo requerido",
                        apellidos_p:"Campo requerido",
                        telefono_p: {
                            required: "Ingrese el numero de Telefono",
                            maxlength: "Maximo 10 dígitos",
                            minlength: "Minimo 10 dígitos",
                            digits: "Por favor use sólamente dígitos."
                        },
                        email_p: {
                            required: "Campo requerido",
                            email: "Por favor, introduzca una dirección e-mail válida"
                        },

                        nombre_mama:"Campo requerido",
                        apellidos_m:"Campo requerido",
                        telefono_m: {
                            required: "Ingrese el numero de Telefono",
                            maxlength: "Maximo 10 dígitos",
                            minlength: "Minimo 10 dígitos",
                            digits: "Por favor use sólamente dígitos."
                        },
                        email_m: {
                            required: "Campo requerido",
                            email: "Por favor, introduzca una dirección e-mail válida"
                        },


                        
                    }
                });
            });
               

// fin de validacion de formulario de wiget de cliente

//estados municipios con ajax
$(document).ready(function() {
$('#pais').change(function(event){ //id del select
        $.post("/buscar_estados/", {id_pais:$('#pais').val()}, //nombre de la vista  + id del select
            function(data){
           
            var options = '<option value="">--Selecciona el estado--</option>';
            for (var i = 0; i < data.length; i++)
            {
                options += '<option value="'+data[i]["pk"]+'">' +data[i]["fields"]["nombre"] +'</option>'
            }
            $('#estado').html(options); //nombre del slect donde se va a mostrar
            $("#estado option:first").attr('selected', 'selected');
        }, "json");
    });
});

$(document).ready(function() {
$('#estado').change(function(event){ //id del select
        $.post("/buscar_municipios/", {id_estado:$('#estado').val()}, //nombre de la vista  + id del select
            function(data){
           
            var options = '<option value="">--Selecciona el municipio--</option>';
            for (var i = 0; i < data.length; i++)
            {
                options += '<option value="'+data[i]["pk"]+'">' +data[i]["fields"]["nombre"] +'</option>'
            }
            $('#id_municipios').html(options); //nombre del slect donde se va a mostrar
            $("#id_municipios option:first").attr('selected', 'selected');
        }, "json");
    });
});
//fin de estados municipios con ajax

//busqueda de precios con ajax
$(document).ready(function() {
$('#id_precio').change(function(event){ //id del select
        $.post("/buscar_precios/", {id_precio:$('#id_precio').val()}, //nombre de la vista  + id del select
            function(data){
           
            var options = '<option value="">Selecciona Precio</option>';
            for (var i = 0; i < data.length; i++)
            {
                options += '<option value="'+data[i]["pk"]+'">' +data[i]["fields"]["claveprecio"]+ " - " +data[i]["fields"]["precio_promo"] +'</option>'
            }
            $('#id_precio2').html(options); //nombre del slect donde se va a mostrar
            $("#id_precio2 option:first").attr('selected', 'selected');
        }, "json");
    });
});
//fin de busqueda de precios con ajax

 //busqueda de correo electronico con ajax
 $(document).ready(function() {
      $("#email").keyup(function(event){
        if (($("#email").val().length) > 4){
            $.post( 
                "/emailajax/",
                {e:$('#email').val()}, 
                function(data2) {
                    var correo = $('#email').val();
                    var filter = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
                    if(filter.test(correo)){
                    var options =data2[0];
                      if (options == 0){
                        var aviso ="Este Correo Está Disponible";
                        $('#results2').html(aviso);
                        $('#btnguardar').show()

                      }
                      if (options == 1){
                        var aviso ="Este Correo No Está Disponible";
                        $('#results2').html(aviso);
                        $('#btnguardar').hide()
                      }

                  }else{
                    var aviso =" ";
                        $('#results2').html(aviso);

                  }
                } 
            );      
        }  
      });
});
//fin busqueda de correo electronico con ajax
//busqueda de nombre de usuario con ajax
  $(document).ready(function() {
      $("#username").keyup(function(event){
        if (($("#username").val().length) > 4){
            $.post( 
                "/demo_user_search/",
                {q:$('#username').val()}, 
                function(data) {
                    var options =data[0];
                    if (options == 0){
                        var aviso ="Este Nombre de Usuario Está Disponible";
                        $('#results').html(aviso);
                        $('#btnguardar').show()

                      }
                      if (options == 1){
                        var aviso ="Este Nombre de Usuario No Está Disponible";
                        $('#results').html(aviso);
                        $('#btnguardar').hide()
                      }
                } 
            );      
        }  
      });
   });
 //fin de busqueda de nombre de usuario con ajax

//imagen de fondo spinner
 $( document ).ajaxStart( function() {
        $( '#spinner' ).show();
    }).ajaxStop( function() {
        $( '#spinner' ).hide();
    });
//fin de imagen de fondo spinner

//unidad de negocio con generador de clave para el asesor

$(document).ready(function() {
$('#unidadnegocio').hide();
$('#id_tipo_usuario').change(function(event){
    var v = $("#id_tipo_usuario").val();
    if (v==3)
    {

        $('#unidadnegocio').show(); 
                   
    }
    else
        {
            $('#unidadnegocio').hide();
            $('#divclave').hide();
        }
    });
});

$(document).ready(function() {
$('#unidadnegocio').hide();
$('#tipo_u').change(function(event){
    var v = $("#tipo_u").val();
    console.log(v);

    $('#unidadnegocio').hide();
    $('#divclave').hide();
    v.forEach(function(valor, indice){
        if (valor==3)
            {
                $('#unidadnegocio').show(); 
                $('#divclave').show();
            }
    });

    });
});

//otra validacion para asesor-----------------editar personal
$(document).ready(function() {
$('#unidadnegocio').hide();
    var v = $("#tipo_u").val();
    if (v==3)
    {

        $('#unidadnegocio').show(); 
                   
    }
    else
        {
            $('#unidadnegocio').hide();
            $('#divclave').hide();
        }
});


$(document).ready(function() {
$('#divclave').hide();

    var v = $("#unidadnego").val();
    var tipo_u = $("#tipo_u").val();
    if (tipo_u==3 && v!=null){
        //alert("ok");
                    var firstname1 = $("#firstname").val().charAt(0);
                    var firstname2 = $("#firstname").val().charAt(1);
                    var firstname3 = $("#firstname").val().charAt(2);

                    var lastname = ($("#lastname").val()).charAt(0);

                var nuevo= (v + "-"+ firstname1+ firstname2 +firstname3 +lastname).toUpperCase();
                $("#clave").val(nuevo);
                $('#divclave').show(); 
    }
    else
                {
                    //alert("no");
                    $('#divclave').hide();
                }
});


//otra validacion para asesor-----------------editar personal

$(document).ready(function() {
$('#datosfiscales').hide();
var v = $("#solifactura").val();
    if (v=="Si")
    {

        $('#datosfiscales').show(); 
                   
    }
    else
        {
            $('#datosfiscales').hide();
        }
$('#solifactura').change(function(event){
    var v = $("#solifactura").val();
    if (v=="Si")
    {

        $('#datosfiscales').show(); 
                   
    }
    else
        {
            $('#datosfiscales').hide();
        }
    });
});



$(document).ready(function() {
$('#unidadnego').change(function(event){
    var v = $("#unidadnego").val();
    if (v!=0){

                    $('#divclave').show(); 
                    var firstname1 = $("#firstname").val().charAt(0);
                    var firstname2 = $("#firstname").val().charAt(1);
                    var firstname3 = $("#firstname").val().charAt(2);

                    var lastname = ($("#lastname").val()).charAt(0);

                var nuevo= (v + "-"+ firstname1+ firstname2 +firstname3 +lastname).toUpperCase();
                $("#clave").val(nuevo);
    }
    else
                {
                    $('#divclave').hide();
                }
    });
});
//fin de unidad de negocio con generador de clave para el asesor
//validacion de los campo que solo acepte numeros o letras
$(function(){
                //Para escribir solo letras
                $('#firstname').validCampo(' abcdefghijklmnñopqrstuvwxyzáéiou');
                $('#lastname').validCampo(' abcdefghijklmnñopqrstuvwxyzáéiou');

                //Para escribir solo numeros    
                $('#telefono').validCampo('0123456789');
                $('#celular').validCampo('0123456789');

                $('#comision').validCampo('0123456789');
                $('#cve_banco').validCampo('0123456789');
                
                //$('#codigo_postal').validCampo('0123456789');


                
                $('#ninos').validCampo('0123456789');
                $('#ninas').validCampo('0123456789'); 
                $('#otro_tel').validCampo('0123456789');
                $('#folio').validCampo('0123456789');
                //$('#pago').validCampo('0123456789');

});

$(function () {
                $(".chzn-select").chosen();
                $(".chzn-select-deselect").chosen({
                allow_single_deselect: true
                });
});
//validacion de los campo que solo acepte numeros o letras //nececita el archivo validanumeroletras.js

//validacion de custodia para que no se repita los nombres

/* 
$(document).ready(function(){
    $('#personal2').change(function(event){ //id del select
    
            var v1 = $("#personal1").val();
            var v2 = $("#personal2").val();

            if(v1==v2){
               alert("Los nombre no pueden ser iguales");
               $("#boton").hide();
            }else{
                $("#boton").show();
            }

            });
});

$(document).ready(function(){
    $('#personal1').change(function(event){ //id del select
    
            var v1 = $("#personal1").val();
            var v2 = $("#personal2").val();

            if(v1==v2){
               alert("Los nombre no pueden ser iguales");
               $("#boton").hide();
            }else{
                $("#boton").show();
            }

            });
});


$(document).ready(function(){
    $('#chaperon2').change(function(event){ //id del select
    
            var v1 = $("#chaperon1").val();
            var v2 = $("#chaperon2").val();

            if(v1==v2){
               alert("Los nombre no pueden ser iguales");
               $("#boton").hide();
            }else{
                $("#boton").show();
            }

            });
});

$(document).ready(function(){
    $('#chaperon1').change(function(event){ //id del select
    
            var v1 = $("#chaperon1").val();
            var v2 = $("#chaperon2").val();

            if(v1==v2){
               alert("Los nombre no pueden ser iguales");
               $("#boton").hide();
            }else{
                $("#boton").show();
            }

            });
});

 */

$(document).ready(function(){
    $('#dv1').hide();
    $('#llevallega').change(function(event){ //id del select
    
            var v1 = $("#llevallega").val();

            if(v1=='Papa/Auto' || v1=='Mama/Auto' || v1=='Padres/Auto' || v1=='Familiar/Auto' || v1=='Otros/Auto' || v1=='Vuelo/Custodia'){
               $("#dv1").show();
            }else{
                $("#dv1").hide();
            }

            });
});

$(document).ready(function(){
    $('#dv2').hide();
    $('#recibeentraga').change(function(event){ //id del select
    
            var v2 = $("#recibeentraga").val();

            if(v2=='Papa/Auto' || v2=='Mama/Auto' || v2=='Padres/Auto' || v2=='Familiar/Auto' || v2=='Otros/Auto' || v2=='Vuelo/Custodia'){
               $("#dv2").show();
            }else{
                $("#dv2").hide();
            }

            });
});



//fin de validacion de custodia para que no se repita los nombres

//scrip para mostrar o ocultar div en los formularios

$(document).ready(function(){
 
    $(".slidingDiv").hide();

    $('.show_hide').click(function(){

        if($("#show_hide").is(':checked')) {  
            $(".slidingDiv").show(); 
            $(".slidingDiv2").hide();
        } else {  
            $(".slidingDiv").hide();
            $(".slidingDiv2").show(); 
        }  
    });
});

$(document).ready(function(){
 
    $("#divp1").show();
    $("#divc1").hide();
    $("#divo1").hide();

    $('#p1').click(function(){

        $("#divp1").show();
        $("#divc1").hide();
        $("#divo1").hide();
    });
    $('#c1').click(function(){

        $("#divp1").hide();
        $("#divc1").show();
        $("#divo1").hide();
    });
    $('#o1').click(function(){

        $("#divp1").hide();
        $("#divc1").hide();
        $("#divo1").show();
    });
});

$(document).ready(function(){
 
    $("#divp2").show();
    $("#divc2").hide();
    $("#divo2").hide();

    $('#p2').click(function(){

        $("#divp2").show();
        $("#divc2").hide();
        $("#divo2").hide();
    });
    $('#c2').click(function(){

        $("#divp2").hide();
        $("#divc2").show();
        $("#divo2").hide();
    });
    $('#o2').click(function(){

        $("#divp2").hide();
        $("#divc2").hide();
        $("#divo2").show();
    });
});

$(document).ready(function(){
        if ($("#p1").is(":checked")) {
            $("#divp1").show();
            $("#divc1").hide();
            $("#divo1").hide();
        }
        if ($("#c1").is(":checked")) {
            $("#divp1").hide();
            $("#divc1").show();
            $("#divo1").hide();
        }
        if ($("#o1").is(":checked")) {
            $("#divp1").hide();
            $("#divc1").hide();
            $("#divo1").show();
        }
        if ($("#p2").is(":checked")) {
            $("#divp2").show();
            $("#divc2").hide();
            $("#divo2").hide();
        }
        if ($("#c2").is(":checked")) {
            $("#divp2").hide();
            $("#divc2").show();
            $("#divo2").hide();
        }
        if ($("#o2").is(":checked")) {
            $("#divp2").hide();
            $("#divc2").hide();
            $("#divo2").show();
        }

    });

 $(document).ready(function () {
        $('#content').hide();
        $('#m1').hide();
        $('#m2').hide();
       
        $('#id_status_0').click(function () {
          $('#content').show();
          $('#m1').show();
          $('#m2').hide();
         });
        $('#id_status_1').click(function () {
          $('#content').show();
           $('#m2').show();
            $('#m1').hide();
         });

        $('#id_status_2').click(function () {
          $('#content').hide();
          $('#m1').hide();
          $('#m2').hide();
         });
        $('#id_status_3').click(function () {
          $('#content').hide();
          $('#m1').hide();
          $('#m2').hide();
         });
        $('#id_status_4').click(function () {
          $('#content').hide();
          $('#m1').hide();
          $('#m2').hide();
         });
        $('#id_status_5').click(function () {
          $('#content').hide();
          $('#m1').hide();
          $('#m2').hide();
         });

        });

//fin del scrip para mostrar o ocultar div en los formularios

$(document).ready(function(){
 
    $("#divnino").hide();
    $("#divnina").hide();

    $('#nino').click(function(){

        $("#divnino").slideToggle();
    });
    $('#nina').click(function(){

        $("#divnina").slideToggle();
    });
});

$(document).ready(function(){
 
    $("#divpersonal").show();
    $("#divchaperon").hide();

    

    $('#id_status1').click(function(){
        if($("#id_status1").is(':checked')){ 

            $("#divpersonal").show();
            $("#divchaperon").hide();

        }else{
            $("#divpersonal").hide();
            $("#divchaperon").show();
        }

         
    });
});

$(document).ready(function(){
 $("#username").focus(function () {
    var email = $("#email").val();
    var firstname1 = $("#firstname").val().charAt(0);
    var firstname2 = $("#firstname").val().charAt(1);
    var firstname3 = $("#lastname").val()
    var firstname3 = firstname3.split(' ');
    //console.log(firstname3[0]);
    var number = 10 + Math.floor(Math.random() * 6);
    var vnuevo= (firstname1+ firstname2 +firstname3[0]+number).toLowerCase();
    $("#username").val(vnuevo);            
});

 $("#direccionp").focus(function () {
                    var paiss = $("#pais").find('option:selected');
                    var paisv = $(paiss).text();


                    var estados = $("#estado").find('option:selected');
                    var estadosv = $(estados).text();

                    var muni = $("#id_municipios").find('option:selected');
                    var muniv = $(muni).text();

                    var direccion = $("#direccion").val();

                    var direccionpapa = paisv +", "+ estadosv +", "+ muniv +", "+ direccion;
                    $("#direccionp").val(direccionpapa);
                    
                });
});

$(document).ready(function(){
$('#stepy_form-next-0').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

$('#stepy_form-next-1').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

$('#stepy_form-next-2').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

});


$(document).ready(function(){
$("#nameap").show();
$("#dats").hide();
$("#emaildiv").hide();
        
        $("input[name=opcion]").change(function () { 
            var a = $('input:radio[name=opcion]:checked').val()   
            if(a==1){
               $("#nameap").show();
               $("#dats").hide();
               $("#emaildiv").hide();
            }
            if(a==2){
               $("#dats").show();
               $("#nameap").hide();
               $("#emaildiv").hide();
            }
            if(a==3){
               $("#emaildiv").show();
               $("#nameap").hide();
               $("#dats").hide();
            }
            });
 
});

$(document).ready(function(){

    $('#id_cliente').change(function(event) {
    if ($(this).val().length > 4) {
    alert("Solo se pueden seleccionar 4 clientes a la vez");
    $(this).val(ultimo_valido);
    }else{
    ultimo_valido = $(this).val();
    }
    });

    $('#id_cliente2').change(function(event) {
    if ($(this).val().length > 2) {
    alert("Solo se pueden seleccionar 2 clientes a la vez");
    $(this).val(ultimo_valido);
    }else{
    ultimo_valido = $(this).val();
    }
    });

});    

//validacion de consultas de clientes especifico
$(function () {
                // validate signup form on keyup and submit
                $('#anio1').validCampo('0123456789'); 
                $("#forcliente1").validate({
                    rules: {
                        //programa: "required",
                        anio: "required",

                        asesor: "required",
                        programa: "required",
                        estatus: "required",
                        

                    },
                    messages: {
                        //programa: "Seleccione el Programa",
                        anio: "Por favor, escribe el Año",

                        asesor: "Por favor, seleccione un Asesor ó seleccione la opción Todos, para consulta general",
                        programa: "Por favor, seleccione un Programa ó seleccione la opción Todos, para consulta general", 
                        estatus: "Por favor, seleccione un Estatus ó seleccione la opción Todos, para consulta general", 
                    }
                });
            });
$(function () {
                // validate signup form on keyup and submit
                $('#anio2').validCampo('0123456789'); 
                $("#forcliente2").validate({
                    rules: {
                        programa: "required",
                        anio: "required",
                        cvsalida:"required",
                        estatus:"required",

                    },
                    messages: {
                        programa: "Seleccione el Programa",
                        anio: "Por favor, escribe el Año",
                        cvsalida:"Por favor, seleccione la Clave de la Salida",
                        estatus:"Por favor, seleccione el Estatus del cliente",
  
                    }
                });
            });
$(function () {
                // validate signup form on keyup and submit
                $('#anio3').validCampo('0123456789'); 
                $("#forcliente3").validate({
                    rules: {
                        programa: "required",
                        anio: "required",
                        cvsalida:"required",

                    },
                    messages: {
                        programa: "Seleccione el Programa",
                        anio: "Por favor, escribe el Año",
                        cvsalida:"Por favor, seleccione la Clave de la Salida",
        
                    }
                });
            });
$(document).ready(function(){
 
    $('#verforcliente').click(function(){

        $("#formulariocliente").slideToggle();
    });

});
// fin de validacion de consultas de clientes especifico

// valida reporte base de datos asesor
$(function () {
                // validate signup form on keyup and submit
                $("#reporteasesor").validate({
                    rules: {
                        cvease: "required",
                    },
                    messages: {
                        cvease: "Seleccione Al Asesor",
                    }
                });
            });
// frin fr valoda reporte base de datos asesor

//buscar paquetes segun el año
$(document).ready(function() {
$('#anio').change(function(event){ //id del select
        $.post("/buscar_paquetes/", {anio:$('#anio').val()}, //nombre de la url  + id del select
            function(data){
           
            var options = '<option value="">--Selecciona el paquete--</option>';
            for (var i = 0; i < data.length; i++)
            {
                options += '<option value="'+data[i]["pk"]+'">' + data[i]["fields"]["programa"] +" - "+ data[i]["fields"]["salida"] +'</option>'
            }
            $('#paquete').html(options); //nombre del slect donde se va a mostrar
            $("#paquete option:first").attr('selected', 'selected');
        }, "json");
    });
}); 

$(document).ready(function() {
$('#paquete').change(function(event){ //id del select
        var vpaquete =$('#paquete').val();
        var options = '<a href="'+vpaquete+'"> <button class="btn btn-round-min btn btn-info" data-original-title="Consultar Precios"> <span><i class="icon-search"></i></span> </button> </a>';
        $('#url').html(options); //nombre del slect donde se va a mostrar
    });
});

 

$(function () {
                // validate signup form on keyup and submit
                $('#telefono').validCampo('0123456789'); 
                $("#fescuela").validate({
                    rules: {
                        nombre: "required",
                        // telefono: {
                        //     required: true,
                        //     maxlength: 10,
                        //     minlength: 10
                        // },
                        telefonoc: {
                            maxlength: 10,
                            minlength: 10
                        },

                        telefonop: {
                            maxlength: 10,
                            minlength: 10
                        },

                        pais:"required",
                        estado:"required",
                        localidad:"required",
                        direccion:"required",

                        codigo_postal:"required",
                        email:{
                            email: true
                        },
                        emailcont:{
                            email: true
                        },
                        emailpro:{
                            email: true
                        },
                        asesor:"required",

                    },
                    messages: {
                        nombre:"Por favor, Ingrese el Nombre de la Escuela",
                        telefono:{
                            required: "Ingrese el numero de Telefono",
                            maxlength: "Maximo 10 dígitos",
                            minlength: "Minimo 10 dígitos"
                        },
                         telefonoc:{
                            maxlength: "Maximo 10 dígitos",
                            minlength: "Minimo 10 dígitos"
                        },
                         telefonop:{
                            maxlength: "Maximo 10 dígitos",
                            minlength: "Minimo 10 dígitos"
                        },
                        email:{
                            email: "Ingrese un email correcto",
                        },
                        emailcont:{
                            email: "Ingrese un email correcto",
                        },
                        emailpro:{
                            email: "Ingrese un email correcto",
                        },
                        pais:"Por favor, seleccione el Pais",
                        estado:"Por favor, seleccione el estado",
                        localidad:"Por favor, seleccione la Ciudad",
                        direccion:"Por favor, ingrese la direccion",
                        codigo_postal:"Por favor, ingrese el codigo postal",
                        asesor:"Por favor, Ingresa el Usuario",
        
                    }
                });
            });

//prorroga
$(function () {
                // validate signup form on keyup and submit 
                $("#prorroga").validate({
                    rules: {
                        //programa: "required",
                        fecha: "required",
                        por: "required",
                        

                    },
                    messages: {
                        //programa: "Seleccione el Programa",
                        fecha: "Por favor, Seleccione la Fecha",
                        por: "Por favor, Seleccione el porcentaje",    
                    }
                });
            });


//buscar sucursal
$(document).ready(function() {
$('#agencia').change(function(event){ //id del select
        $.post("/buscar_sucursal/", {id_agencia:$('#agencia').val()}, //nombre de la vista  + id del select
            function(data){
           
            var options = '<option value="">--Selecciona la sucursal--</option>';
            for (var i = 0; i < data.length; i++)
            {
                options += '<option value="'+data[i]["pk"]+'">' +data[i]["fields"]["agencia_ase"] + " - " +data[i]["fields"]["estado"] + " - " +data[i]["fields"]["localidad"] + " - " +data[i]["fields"]["direccion"] +'</option>'
            }
            $('#sucursal_ase').html(options); //nombre del slect donde se va a mostrar
            $("#sucursal_ase option:first").attr('selected', 'selected');
        }, "json");
    });
});

//buscar clave sucursal
$(document).ready(function() {
$('#cvesucursal').change(function(event){ //id del select
        var cve = $("#cvesucursal").val();
        
                    $('#divclave').show(); 
                    var firstname1 = $("#nombre").val().charAt(0);
                    var firstname2 = $("#nombre").val().charAt(1);
                    var firstname3 = $("#nombre").val().charAt(2);

                    var lastname = ($("#ap_pat").val()).charAt(0);

                var vnuevo= (cve + "-"+ firstname1+ firstname2 +firstname3 +lastname).toUpperCase();

         $("#clave").val(vnuevo);
    });
});

//buscar asesor
$(document).ready(function() {
$('#sucursal_ase').change(function(event){ //id del select
        $.post("/buscar_asesor_a/", {id_sucursal:$('#sucursal_ase').val()}, //nombre de la vista  + id del select
            function(data){
           
            var options = '<option value="">--Selecciona el Asesor</option>';
            for (var i = 0; i < data.length; i++)
            {
                options += '<option value="'+data[i]["pk"]+'">' +data[i]["fields"]["nombre"] + " - " +data[i]["fields"]["ap_pat"] + " - " +data[i]["fields"]["clave"] +'</option>'
            }
            $('#asesor_agencia').html(options); //nombre del slect donde se va a mostrar
            $("#asesor_agencia option:first").attr('selected', 'selected');
        }, "json");
    });
});


$(function () {
                // validate signup form on keyup and submit
                $("#fagencia").validate({
                    rules: {
                        pais:"required",
                        estado:"required",
                        localidad:"required",
                        direccion:"required",

                        comision:{
                            required: true,
                            maxlength: 3,
                            minlength: 2,
                        },
                       
                        nombre: "required",

                        // telefono: {
                        //     required: true,
                        //     maxlength: 10,
                        //     minlength: 10
                        // },
                
                        email: {
                            required: true,
                            email: true
                        },

                    },
                    messages: {
                        pais:"Por favor, seleccione el pais",
                        estado:"Por favor, seleccione el estado",
                        localidad:"Por favor, seleccione la localidad",
                        direccion:"Por favor, ingrese la direccion",

                        comision:{
                            required: "Por favor, escriba la comisón",
                            maxlength: "Maximo 3 dígitos",
                            minlength: "Minimo 2 dígitos",
                        },

                        

                        cve_banco:{
                            maxlength: "Maximo 18 dígitos",
                            minlength: "Minimo 18 dígitos",
                        },

                        nombre: "Por favor, escriba el nombre de la agencia",
                       
                        telefono:{
                            required: "Ingrese el numero de Telefono",
                            maxlength: "Maximo 10 dígitos",
                            minlength: "Minimo 10 dígitos"
                        },
                        
                        email: "Por favor, introduzca una dirección e-mail válida",   
                    }
                });
});


$(function () {
                // validate signup form on keyup and submit
                $("#fsucursal").validate({
                    rules: {
                        agencia_ase:"required",
                        pais:"required",
                        estado:"required",
                        localidad:"required",
                        direccion:"required",

                       
                        clave: "required",

                        // telefono: {
                        //     required: true,
                        //     maxlength: 10,
                        //     minlength: 10
                        // },
                
                        email: {
                            required: true,
                            email: true
                        },

                    },
                    messages: {
                        agencia_ase:"Por favor, seleccione la agencia",
                        pais:"Por favor, seleccione el pais",
                        estado:"Por favor, seleccione el estado",
                        localidad:"Por favor, seleccione la localidad",
                        direccion:"Por favor, ingrese la direccion",

                    
                        clave: "Por favor, escriba La clave de esta sucursal",
                       
                        telefono:{
                            required: "Ingrese el numero de Telefono",
                            maxlength: "Maximo 10 dígitos",
                            minlength: "Minimo 10 dígitos"
                        },
                        
                        email: "Por favor, introduzca una dirección e-mail válida",   
                    }
                });
});

$(function () {
                // validate signup form on keyup and submit
                $("#fasesorage").validate({
                    rules: {
                        agencia_ase:"required",
                        sucursal_ase:"required",

                        nombre:"required",
                        ap_pat:"required",
                        ap_mat:"required",

                       
                        cvesucursal: "required",
                        clave: "required",
                
                        email: {
                            required: true,
                            email: true
                        },
                       
                        cve_banco:{
                            maxlength: 18,
                            minlength: 18,
                        },

                    },
                    messages: {
                        agencia_ase:"Por favor, seleccione la agencia",
                        sucursal_ase:"Por favor, seleccione la sucursal",
                        nombre:"Por favor, escriba el nombre del asesor",
                        ap_pat:"Por favor, escriba el apellido paterno",
                        ap_mat:"Por favor, escriba el apellido materno",

                    
                        cvesucursal: "Por favor, seleccione una clave de la sucursal",
                        clave: "Por favor, seleccione una clave",
                       
                        telefono:{
                            required: "Ingrese el numero de Telefono",
                            maxlength: "Maximo 10 dígitos",
                            minlength: "Minimo 10 dígitos"
                        },
                        
                        email: "Por favor, introduzca una dirección e-mail válida", 
                       

                        cve_banco:{
                            maxlength: "Maximo 18 dígitos",
                            minlength: "Minimo 18 dígitos",
                        },  
                    }
                });
});

$(function () {
                // validate signup form on keyup and submit
                $("#cargarcuartos").validate({
                    rules: {
                        cuarto:"required",
                        id_cliente:"required",
                        id_cliente2:"required",
                       
                    },
                    messages: {
                        cuarto:"Por favor, seleccione un cuarto",
                        id_cliente:"Por favor, seleccione los clientes",  
                        id_cliente2:"Por favor, seleccione los clientes",    
                    }
                });
});


$(function () {
                // validate signup form on keyup and submit
                $("#validacionchaperon").validate({
                    rules: {
                        nombre: "required",
                        apellidos: "required",
                        email: {
                            required: true,
                            email: true
                        },
                        sexo:"required",
                        fecha_nacimiento: {
                            required: true
                        },
                        // telefono: {
                        //     required: true,
                        //     maxlength: 10,
                        //     minlength: 10
                        // },
                        celular: {
                            required: true,
                            maxlength: 10,
                            minlength: 10
                        },

                        
                        numpasaporte: {
                            required: true,
                        },
                        vencimiento: {
                            required: true
                        },
                        ingles:"required",
                        otroidio:"required",
                        filvideo:"required",
                        talla:"required",
                        nacionalidad:"required",

                        pais:"required",
                        estado:"required",
                        localidad:"required",
                        direccion:"required",
                        codigo_postal:"required",

                        agencia:"required",
                        puesto:"required",
                        programa:"required",

                    },
                    messages: {
                        nombre: "Por favor, escribe el nombre",
                        apellidos: "Por favor, escribe los apellidos",
                        email: "Por favor, introduzca una dirección e-mail válida",
                        sexo:"Por favor, seleccione el sexo",
                        fecha_nacimiento:"Por favor, ingrese su la fecha de nacimineto",
                        telefono:{
                            required: "Ingrese el numero de Telefono",
                            maxlength: "Maximo 10 dígitos",
                            minlength: "Minimo 10 dígitos"
                        },
                        celular:{
                            required: "Ingrese el numero de Celular",
                            maxlength: "Maximo 10 dígitos",
                            minlength: "Minimo 10 dígitos"
                        },
                        numpasaporte:{
                            required: "Ingrese el Pasaporte",
                        },
                        vencimiento:"Por favor, ingrese su la fecha de vencimiento",

                        ingles:"Por favor, seleccione el nivel de ingles",
                        otroidio:"Por favor, ingrese otro idioma",
                        filvideo:"Por favor, escriba la experiencia en filmación y video",
                        talla:"Por favor, seleccione la talla",
                        nacionalidad:"Por favor, seleccione la nacionalidad",

                        
                       
                        pais:"Por favor, seleccione el pais",
                        estado:"Por favor, seleccione el estado",
                        localidad:"Por favor, seleccione la localidad",
                        direccion:"Por favor, ingrese la direccion",
                        codigo_postal:"Por favor, ingrese el codigo postal",
                       
                        agencia:"Por favor, seleccione la agencia",
                        puesto:"Por favor, seleccione el puesto",
                        programa:"Seleccione el programa",
                      
                        vencimiento:"Ingrese la fecha de vencimiento",
                    
                    }
                });
                
                
            });


$(function () {
                // validate signup form on keyup and submit 
                $("#signupForm2cchp").validate({
                    rules: {
                        //programa: "required",
                        color: "required",
                        tviave: "required",
                        salida: "required",
                   
                        
                    },
                    messages: {
                        //programa: "Seleccione el Programa",
                        color: "Por favor, Seleccione el color",
                        tviave: "Por favor, Seleccione la terea durante el viaje",
                        salida: "Por favor, Seleccione la salida",
                    }
                });
            });

$(function () {
    // validate signup form on keyup and submit 
    $("#newformpres").validate({
        rules: {
            descripcion: {
                required: true,
                maxlength: 24,
            },
            direccion: {
                    required: true,
                    maxlength: 73,
            },
        },
        messages: {
            descripcion:{
                required: "Campo Requerido",
                maxlength: "Maximo 24 dígitos",
            },
            direccion:{
                required: "Campo Requerido",
                maxlength: "Maximo 73 dígitos",
            },
        }

    });
});





//validacion para consultas especificas Seleccionar / Deseleccionar todos 
function funciondp(id,pID) {
    $( "#" + pID + " :checkbox").prop('checked', $('#' + id).is(':checked')); 
}

function funciondc (id,pID) {
    $( "#" + pID + " :checkbox").prop('checked', $('#' + id).is(':checked')); 
}

function funcioner (id,pID) {
    $( "#" + pID + " :checkbox").prop('checked', $('#' + id).is(':checked')); 
}

function funciond (id,pID) {
    $( "#" + pID + " :checkbox").prop('checked', $('#' + id).is(':checked')); 
}

function funcionp (id,pID) {
    $( "#" + pID + " :checkbox").prop('checked', $('#' + id).is(':checked')); 
}

function funcionc (id,pID) {
    $( "#" + pID + " :checkbox").prop('checked', $('#' + id).is(':checked')); 
}

function funciono (id,pID) {
    $( "#" + pID + " :checkbox").prop('checked', $('#' + id).is(':checked')); 
}
//validacion para consultas especificas Seleccionar / Deseleccionar todos 
                


$(document).ready(function(){
    //////////////////////////////////////////////////////////////////////////////
    $("#totalmexninos").blur(function () 
    {
        var totalmexninos = $("#totalmexninos").val();
        var totalmexninas = $("#totalmexninas").val();
        var totalninosmex = parseInt(totalmexninos) + parseInt(totalmexninas)
        $("#totalmex").val(totalninosmex);                 
    });
    $("#totalmexninas").blur(function () 
    {
        var totalmexninos = $("#totalmexninos").val();
        var totalmexninas = $("#totalmexninas").val();
        var totalninosmex = parseInt(totalmexninos) + parseInt(totalmexninas)
        $("#totalmex").val(totalninosmex);                 
    });

    $("#chaperonmexf").blur(function () 
    {
        var chaperonmexm = $("#chaperonmexm").val();
        var chaperonmexf = $("#chaperonmexf").val();
        var chaperonmex = parseInt(chaperonmexm) + parseInt(chaperonmexf)
        $("#chaperonmex").val(chaperonmex);                 
    });
    $("#chaperonmexm").blur(function () 
    {
        var chaperonmexm = $("#chaperonmexm").val();
        var chaperonmexf = $("#chaperonmexf").val();
        var chaperonmex = parseInt(chaperonmexm) + parseInt(chaperonmexf)
        $("#chaperonmex").val(chaperonmex);                 
    });

    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    $("#totalvsaninas").blur(function () 
    {
        var totalvsaninos = $("#totalvsaninos").val();
        var totalvsaninas = $("#totalvsaninas").val();
        var totalvsa = parseInt(totalvsaninos) + parseInt(totalvsaninas)
        $("#totalvsa").val(totalvsa);                 
    });

    $("#totalvsaninos").blur(function () 
    {
        var totalvsaninos = $("#totalvsaninos").val();
        var totalvsaninas = $("#totalvsaninas").val();
        var totalvsa = parseInt(totalvsaninos) + parseInt(totalvsaninas)
        $("#totalvsa").val(totalvsa);                 
    });

    $("#chaperonvsaf").blur(function () 
    {
        var chaperonvsam = $("#chaperonvsam").val();
        var chaperonvsaf = $("#chaperonvsaf").val();
        var chaperonvsa = parseInt(chaperonvsam) + parseInt(chaperonvsaf)
        $("#chaperonvsa").val(chaperonvsa);                 
    });
    
    $("#chaperonvsam").blur(function () 
    {
        var chaperonvsam = $("#chaperonvsam").val();
        var chaperonvsaf = $("#chaperonvsaf").val();
        var chaperonvsa = parseInt(chaperonvsam) + parseInt(chaperonvsaf)
        $("#chaperonvsa").val(chaperonvsa);                 
    });
    //////////////////////////////////////////////////////////////////////////////


});


//nuevo para el seguro de cancelacion voucher
$(document).ready(function() {
$('#voucherform').hide();
var v = $("#segucancelacion").val();
    if (v=="FM" || v=="AR")
    {
        $('#voucherform').show(); 
                   
    }
    else
        {
            $('#voucherform').hide();
        }

$('#segucancelacion').change(function(event){
    var v = $("#segucancelacion").val();
    if (v=="FM" || v=="AR")
    {
        $('#voucherform').show(); 
                   
    }
    else
        {
            $('#voucherform').hide();
        }
    });
});


//nuevo para el seguro de upgrade
$(document).ready(function() {
$('#seguroupgrade').hide();
    var v = $("#segumedico").val();
    if (v=="NO")
    {
        $('#seguroupgrade').hide(); 
                   
    }
    else
        {
            $('#seguroupgrade').show();
        }

$('#segumedico').change(function(event){
    var v = $("#segumedico").val();
    if (v=="NO")
    {
        $('#seguroupgrade').hide(); 
                   
    }
    else
        {
            $('#seguroupgrade').show();
        }
    });
});




$(document).ready(function(){
    $('#chaperonappxv').change(function(event) {
    if ($(this).val().length > 2) {
        alert("Solo se pueden seleccionar 2 clientes a la vez");
        $(this).val(ultimo_valido);
    }else{
        ultimo_valido = $(this).val();
    }
    });


});  


$(document).ready(function(){
    $("#slidingDiv").hide();
    $("#slidingDivTitulo1").show();
    $("#slidingDivTitulo2").hide();
    
    $('#statusTennsColor').click(function(){
        if($("#statusTennsColor").is(':checked')) {  
            $("#slidingDiv").hide(); 
            $("#slidingDivTitulo2").hide();
            $("#slidingDivTitulo1").show();   
        } else {  
            $("#slidingDiv").show();
            $("#slidingDivTitulo2").show();
            $("#slidingDivTitulo1").hide();    
        }  
    });
});

$(document).ready(function(){
    $("#slidingDivc").hide();
    $("#slidingDivTitulo1c").show();
    $("#slidingDivTitulo2c").hide();
    
    $('#statusChapColor').click(function(){
        if($("#statusChapColor").is(':checked')) {  
            $("#slidingDivc").hide(); 
            $("#slidingDivTitulo2c").hide();
            $("#slidingDivTitulo1c").show();   
        } else {  
            $("#slidingDivc").show();
            $("#slidingDivTitulo2c").show();
            $("#slidingDivTitulo1c").hide();    
        }  
    });
});


$(document).ready(function(){
    $("#slidingDivc").hide();
    $("#slidingDivTitulo1c").show();
    $("#slidingDivTitulo2c").hide();

        if($("#statusTennsColor").is(':checked')) {  
            $("#slidingDiv").hide(); 
            $("#slidingDivTitulo2").hide();
            $("#slidingDivTitulo1").show();   
        } else {  
            $("#slidingDiv").show();
            $("#slidingDivTitulo2").show();
            $("#slidingDivTitulo1").hide();    
        }

        
    
        if($("#statusChapColor").is(':checked')) {  
            $("#slidingDivc").hide(); 
            $("#slidingDivTitulo2c").hide();
            $("#slidingDivTitulo1c").show();   
        } else {  
            $("#slidingDivc").show();
            $("#slidingDivTitulo2c").show();
            $("#slidingDivTitulo1c").hide();    
        }



});


$(document).ready(function(){

    $("input[name=accion]").click(function () {
        var id_radio = $(this).val()   
        console.log(id_radio); 

        if (id_radio==2){
            var id1 = $("#inputid1").val();
            $("#inputid2").val(id1);
            $("#inputid3").val(id1);
        }
        if (id_radio==3){
            var id1 = $("#inputid1").val();
            $("#inputid2").val(id1);
            $("#inputid3").val(id1);
            $("#inputid4").val(id1);      

        }
            

    });

    

    

});

// ********************************* Validacion para el formulario de padres ********************************
$(document).ready(function(){
    $("#validarpadres").hide();
    if($("#accionpadres").is(':checked')) {  
            $("#validarpadres").show();
        } else {  
            $("#validarpadres").hide();
        }
    $('#accionpadres').click(function(){
        if($("#accionpadres").is(':checked')) {  
            $("#validarpadres").show();
        } else {  
            $("#validarpadres").hide();
        } 
    });
});