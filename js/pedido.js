
var lista_pedidos = new Array();
var numero_pedido = 1000;

function validaciones(pedido) {

    if (pedido['nombre'].trim() === "") {
        document.getElementById("divMessages").innerHTML = '<div class="alert alert-danger" role="alert">' +
            'Complete su nombre y apellidos' +
            '</div>';
        return false;
    }

    if (pedido['dni'].trim() === "" && pedido['dni'].trim().match(/[0-9]{8}/)) {
        document.getElementById("divMessages").innerHTML = '<div class="alert alert-danger" role="alert">' +
            'Complete su número de DNI' +
            '</div>';
        return false;
    }

    if (pedido['direccion'].trim() === "") {
        document.getElementById("divMessages").innerHTML = '<div class="alert alert-danger" role="alert">' +
            'Complete su dirección' +
            '</div>';
        return false;
    }


    return true;
}

function registrarPedido() {

    var pedido = new Array();

    pedido['nombre'] = document.getElementById("txtName").value;
    pedido['dni'] = document.getElementById("txtDocumentNumber").value;
    pedido['direccion'] = document.getElementById("txtAddress").value;
    pedido['referencia'] = document.getElementById("txtReference").value;
    pedido['telefono'] = document.getElementById("txtPhoneNumber").value;
    select = document.getElementById("selProduct");
    pedido['producto'] = document.getElementById("selProduct").options[select.selectedIndex].text;

    if (validaciones(pedido) === true) {
        lista_pedidos[numero_pedido] = pedido;

        tabla_pedidos = document.getElementById("tablePedidos");
        tabla_pedidos.innerHTML = tabla_pedidos.innerHTML + '<tr>\n' +
            '                    <th scope="row">' + numero_pedido + '</th>\n' +
            '                    <td>Mark</td>\n' +
            '                    <td>Otto</td>\n' +
            '                    <td>@mdo</td>\n' +
            '                </tr>';


        numero_pedido++;
    }

}