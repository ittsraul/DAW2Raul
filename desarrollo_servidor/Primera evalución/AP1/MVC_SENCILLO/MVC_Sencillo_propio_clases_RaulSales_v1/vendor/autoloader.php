<?php

function autoloadingController($className){
    $file = __DIR__. "/../controller/".$className.".php";
    if(file_exists($file)){
        require_once $file;
    }
}
function autoloadingModel($className){
    $file = __DIR__. "/../model/".$className.".php";
    if(file_exists($file)){
        require_once $file;
    }
}
function autoloadingView($className){
    $file = __DIR__. "/../view/".$className.".php";
    if(file_exists($file)){
        require_once $file;
    }
}


spl_autoload_register("autoloadingController");
spl_autoload_register("autoloadingModel");
spl_autoload_register("autoloadingView");
