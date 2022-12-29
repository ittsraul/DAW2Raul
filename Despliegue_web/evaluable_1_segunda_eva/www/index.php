<?php
     try {
    //almacenamos la información de la conexión en variables
     $servername = "localhost";
     $username = "AEVDESP";
     $password = "raul";
     $db = "contener";
         $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
         $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     } catch (PDOException $e) {
         echo 'Connection has failed: ' . $e->getMessage();
     }
?>