<?php

class controllerbye
{
    public function byeTime()
    {
        
        $timeBack = new timeModel();
        require_once "../view/genericview.php";
        $genericViewBye = new GenericView();
        $currentTime = $timeBack->getCurrentTime();
        $genericViewBye -> genericView("Adios vro ", $currentTime);
    }
}
