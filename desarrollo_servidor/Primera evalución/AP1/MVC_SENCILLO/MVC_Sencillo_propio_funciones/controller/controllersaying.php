<?php
require_once('../model/sayingmodel.php');
require_once('../view/sayingview.php');
function sayingWord($n){
    $getSayingsw = getSayings($n);
    sayingOfView($getSayingsw);
}

?>