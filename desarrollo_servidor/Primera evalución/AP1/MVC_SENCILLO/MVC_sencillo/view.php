<?php
    //soltamos chorro de código html en una variable
    $template = file_get_contents('templates/template.html');
    //le pasamos a clave el contenido del nombre de array asociativo y a valor su valor correspondiente
    foreach ($diccionario as $clave=>$valor) {
        //el '{' delimita lo que contenga {.
        $template = str_replace('{'.$clave.'}', $valor, $template);
    };
    echo $template;
?>

