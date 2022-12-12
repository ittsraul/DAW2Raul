
<?php

class controllerhello{

function helloTime(){
    //require_once "../model/timemodel.php";
    $timeModel = new Timemodel();
    require_once "../view/genericview.php";
    $genericView = new GenericView();
    $currentTime = $timeModel -> getCurrentTime();
    $genericView ->genericView("Hola ",$currentTime);
}
}
//Controlador que da paso a los archivos
//require_once('model.php');
//require_once('vista.php');
