<?php
/* require_once('../model/sayingmodel.php');
require_once('../view/sayingview.php'); */
class controllersaying
{
    function sayingWord($n)
    {
        $sayinsLet = new sayingmodel();
        require_once "/../view/sayingview.php";
        $getSayingsw = $sayinsLet->getSayings($n);
        $genericSaying = new sayingview();
        $genericSaying ->sayingOfView($getSayingsw);
    }
}
