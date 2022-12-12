<?php
namespace app\controller;

use app\model\timemodel;
use app\view\GenericView;

class controllerbye
{
    public function byeTime()
    {
        $timeBack = new timeModel();
        //require_once "../view/genericview.php";
        $genericViewBye = new GenericView();
        $currentTime = $timeBack->getCurrentTime();
        $genericViewBye -> genericView("Adios vro ", $currentTime);
    }
}
