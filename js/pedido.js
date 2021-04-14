
var lista_pedidos = new Array();
var numero_pedido = 1000;

function validaciones(pedido) {

    if (pedido['nombre'].trim() === "") {
        document.getElementById("divMessages").innerHTML = '<div class="alert alert-danger" role="alert">' +
            'Complete su nombre y apellidos' +
            '</div>';
        return false;
    }

    if (pedido['dni'].trim() === "" || !pedido['dni'].trim().match(/[0-9]{8}/)) {
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

    if (pedido['producto'].trim() === "(*) Selecciona tu producto") {
        document.getElementById("divMessages").innerHTML = '<div class="alert alert-danger" role="alert">' +
            'Debe seleccionar un producto' +
            '</div>';
        return false;
    }

    return true;
}

function mostrarPedidos() {
    tabla_pedidos = document.getElementById("tablePedidos");
    pedidos_html = '';
    lista_pedidos.forEach(function (pedido, numero_pedido){
        pedidos_html +=  '<tr>' +
            '                    <th scope="row">' + numero_pedido + '</th>' +
            '                    <td>' + pedido['nombre'] + '</td>' +
            '                    <td>' + pedido['direccion'] + '</td>' +
            '                    <td>' + pedido['telefono'] + '</td>' +
            '                    <td>' + pedido['producto'] + '</td>' +
            '                    <td>' + pedido['medio_pago'] + '</td>' +
            '                </tr>';
    });

    tabla_pedidos.innerHTML = pedidos_html;
}

function registrarPedido() {

    var pedido = new Array();

    pedido['nombre'] = document.getElementById("txtName").value;
    pedido['dni'] = document.getElementById("txtDocumentNumber").value;
    pedido['direccion'] = document.getElementById("txtAddress").value;
    pedido['telefono'] = document.getElementById("txtPhoneNumber").value;
    select = document.getElementById("selProduct");
    pedido['producto'] = document.getElementById("selProduct").options[select.selectedIndex].text;

    if (document.getElementById('rbtEfectivo').checked) {
        pedido['medio_pago'] = document.getElementById('rbtEfectivo').value;
    } else {
        pedido['medio_pago'] = document.getElementById('rbtTarjeta').value;
    }

    if (validaciones(pedido) === true) {
        lista_pedidos[numero_pedido] = pedido;
        mostrarPedidos();
        numero_pedido++;
        alert('Felicidades tu pedido N° ' + numero_pedido  + ' a sido registrado correctamente.');
    }

}