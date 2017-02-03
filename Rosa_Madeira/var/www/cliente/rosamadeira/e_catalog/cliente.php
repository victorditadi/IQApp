<?php
header("Access-Control-Allow-Origin: *");

require __DIR__ . '/vendor/autoload.php';
//
$DB = new Class_DB();

$opcao = $_REQUEST['opcao'];

switch($opcao){
    case 'listar':
        f_listar_cliente();
        break;
    case 'gerar_cliente':
        f_gerar_cliente();
//        echo 'hello';
        break;
    case 'atualizar_cliente':
        f_atualiza_cliente();
        break;
    case 'listar_compras':
        f_listar_compras();
        break;
    default:
        f_home();
        break;
}

function f_home(){
    echo 'hello home';
}

function f_listar_cliente(){
    global $DB;
    $id_revendedor = $_REQUEST['id_revendendor'];
    $id_cliente = $_REQUEST['id_cliente'];
    if($id_revendedor != '') $query = "SELECT * FROM cliente where id_revendedor = '$id_revendedor'";
    if($id_cliente != '') $query = "SELECT * FROM cliente where id = '$id_cliente'";
    $DB->query($query);
    while($DB->next_record())
    {
        $linha = array();
        $linha['codigo_cliente']    = $DB->f('codigo_cliente');
        $linha['nome_cliente']    = $DB->f('nome_cliente');
        $linha['cep']           = $DB->f('cep');
        $linha['endereco']      = $DB->f('endereco');
        $linha['telefone']      = $DB->f('telefone');
        $linha['email']      = $DB->f('email');

        $retorno[] = $linha;
    };


    echo json_encode($retorno);
}

function f_gerar_cliente(){
    global $DB;
    $email = $_REQUEST['email'];
    $nome = $_REQUEST['nome'];
    $endereco = $_REQUEST['endereco'];
    $data_nascimento = $_REQUEST['data_nascimento'];
    $cep = $_REQUEST['cep'];
    $telefone = $_REQUEST['telefone'];
    $id_revendendor = $_REQUEST['id_revendendor'];

    $codigo_cliente = cria_senha();
    if($nome == '') exit('error-nome');
    if($id_revendendor == '') exit('error-id-revendedor');
    $query = "INSERT into cliente (nome_cliente, cep, endereco, id_revendedor, codigo_cliente, telefone, email, data_nascimento) VALUES ('$nome', '$cep', '$endereco', $id_revendendor, '$codigo_cliente', '$telefone', '$email', '$data_nascimento')";
    $DB->query($query);
    $DB->next_record();

    echo json_encode($codigo_cliente);
};

function geraSenha($tamanho = 8, $maiusculas = true, $numeros = true, $simbolos = false)
{
    $lmin = 'abcdefghijklmnopqrstuvwxyz';
    $lmai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $num = '1234567890';
    $simb = '!@#$%*-';
    $retorno = '';
    $caracteres = '';
    $caracteres .= $lmin;
    if ($maiusculas) $caracteres .= $lmai;
    if ($numeros) $caracteres .= $num;
    if ($simbolos) $caracteres .= $simb;
    $len = strlen($caracteres);
    for ($n = 1; $n <= $tamanho; $n++) {
        $rand = mt_rand(1, $len);
        $retorno .= $caracteres[$rand-1];
    }
    return $retorno;
};

function cria_senha(){
    global $DB;
    $retorno = geraSenha(6, true, true);
    $query = "SELECT COUNT(0) FROM cliente where codigo_cliente = '$retorno'";
    $DB->query($query);
    $DB->next_record();
    $contador = $DB->f(0);
    if($contador != 0 ) cria_senha();
    if($contador == 0 ){
        $retorno = strtoupper($retorno);
        return $retorno;
    }
};

function f_atualiza_cliente(){
    global $DB;

    $email = $_REQUEST['email'];
    $nome = $_REQUEST['nome'];
    $endereco = $_REQUEST['endereco'];
    $cep = $_REQUEST['cep'];
    $telefone = $_REQUEST['telefone'];
    $id_cliente = $_REQUEST['id_cliente'];
    $query = "UPDATE cliente SET nome_cliente = '$nome', cep = '$cep', endereco = '$endereco', telefone = '$telefone', email = '$email' WHERE codigo_cliente = '$id_cliente'";
    $DB->query($query);
    echo 'ok';

}

function f_listar_compras(){
    global $DB;
    $id_cliente = $_REQUEST['id_cliente'];

    $query = "SELECT * FROM venda where codigo_cliente = '$id_cliente'";
    $DB->query($query);
    while($DB->next_record())
    {
        $linha = array();
        $linha['id']           = $DB->f('id');
        $linha['status']       = $DB->f('status');
        $linha['data']         = $DB->f('data');
        $linha['valor']        = $DB->f('valor');

        $retorno[] = $linha;
    }
    echo json_encode($retorno);
}
?>