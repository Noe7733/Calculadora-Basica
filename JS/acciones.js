$(document).ready(function () {
    $("#ejecutar").click(function () {

        var variable1 = $("#num1").val();
        console.log("Valor del numero 1:", variable1);
        var num1 = parseInt(variable1);

        var variable2 = $("#num2").val();
        console.log("Valor del numero 2:", variable2);
        var num2 = parseInt(variable2);

        var opcion = $("#opciones").val();
        console.log("opc elegida:", opcion);
        var opcionNum = parseInt(opcion);

        if (!variable1 || !variable2) {
            alert("No ha ingresado ningun numero, favor de ingresar los numeros!!!!");

        } else {
            operacionesAritmeticas(num1, num2, opcionNum);
        }
        function operacionesAritmeticas(variable1, variable2, opcionNum) {
            var resultado = 0;

            switch (opcionNum) {
                case 0:
                    alert("No ha ingresado ningun numero, favor de ingresar los numeros!!!!");
                    break;
                case 1:
                    console.log("suma");
                    resultado = variable1 + variable2;
                    console.log(resultado);
                    $("#Salida").val(resultado);
                    break;
                case 2:
                    console.log("resta");
                    resultado = variable1 - variable2;
                    console.log(resultado);
                    $("#Salida").val(resultado);
                    break;
                case 3:
                    console.log("multiplicacion");
                    resultado = variable1 * variable2;
                    console.log(resultado);
                    $("#Salida").val(resultado);
                    break
                case 4:
                    console.log("division");
                    resultado = variable1 / variable2;
                    console.log(resultado);
                    $("#Salida").val(resultado);
                    break;
                default:
                    break;
            }
        }
    });
});