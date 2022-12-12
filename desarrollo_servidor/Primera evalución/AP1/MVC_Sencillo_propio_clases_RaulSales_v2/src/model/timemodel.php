<?php
class timemodel{
public function getCurrentTime(){
    return date("h:i:s", time());
}
}
?>