<?php
require_once "../vendor/autoloader.php";

$accion=$_GET["action"];
/* $n=$_GET["n"];  */
switch($accion){
    case "saying":
        require "../controller/controllersaying.php";
        $controllerSaying = new controllersaying();
        $controllerSaying -> sayingWord($n-1);
        break;
    case "hello":
        require "../controller/controllerhello.php";
        $controllerHello = new controllerhello();
        $controllerHello -> helloTime();
        break;
    case "bye":
        require "../controller/controllerbye.php";
        $controllerbye = new controllerbye();
        $controllerbye -> byeTime();
        break;
    default:
    echo "hay un error cara pinga";
    break;
}
/* Numero aleatorio:    $posicion=rand(0,count($sayings) -1);
echo $sayings[$posicion]; */
