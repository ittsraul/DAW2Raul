<?php
/* //soltamos chorro de código html en una variable
$template = file_get_contents('templates/template.html');
//le pasamos a clave el contenido del nombre de array asociativo y a valor su valor correspondiente
foreach ($sayings as $refran=>$contenido) {
    //el '{' delimita lo que contenga {.
    $template = str_replace('{'.$refran.'}', $contenido, $template);
};
echo $template; */
namespace app\view;

class genericview
{
    public function genericView($greetings, $currentTime)
    {
        echo $greetings . $currentTime;
    }
}
