
<?php
require_once "../model/timemodel.php";
require_once "../view/genericview.php";
function helloTime(){
    $currentTime = getCurrentTime();
    genericView("Hola ",$currentTime);
}
//Controlador que da paso a los archivos
//require_once('model.php');
//require_once('vista.php');
