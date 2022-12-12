<?php
namespace app\model;
class timemodel{
public function getCurrentTime(){
    return date("h:i:s", time());
}
}
?>