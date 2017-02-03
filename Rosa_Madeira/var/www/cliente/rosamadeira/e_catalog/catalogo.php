<?php
header("Access-Control-Allow-Origin: *");

exit('hello');
require __DIR__ . '/vendor/autoload.php';
$opcao = $_REQUEST['opcao'];

switch($opcao){
  case "listar":
    f_listar_catalogo();
    break;
  default:
    f_home();
    break;
};

function f_home(){
  echo 'home_catalogo';
}

function f_listar_catalogo(){
  $DB = new Class_DB();


  $query = "SELECT nome, valor, categoria from produto";
  $DB->query($query);
  while($DB->next_record()){
    $linha = array();
    $linha['nome'] = $DB->f('nome');
    $linha['valor']        = $DB->f('valor');
    $linha['categoria']    = $DB->f('categoria');

    $retorno[] = $linha;
  };

  echo json_encode($retorno);
}

?>
