<?php

require_once "../model/timemodel.php";
require_once "../view/genericview.php";
function byeTime(){
    $currentTime = getCurrentTime();
    genericView("Adios vro ",$currentTime);
}
?>