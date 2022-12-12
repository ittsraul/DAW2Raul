<?php
$accion=$_GET["action"];
$n=$_GET["n"]; 
switch($accion){
    case "saying":
        require "../controller/controllersaying.php";
        sayingWord($n-1);
        break;
    case "hello":
        require "../controller/controllerhello.php";
        helloTime();
        break;
    case "bye":
        require "../controller/controllerbye.php";
        byeTime();
        break;
    default:
    echo "hay un error cara pinga";
    break;
}
/* Numero aleatorio:    $posicion=rand(0,count($sayings) -1);
echo $sayings[$posicion]; */
