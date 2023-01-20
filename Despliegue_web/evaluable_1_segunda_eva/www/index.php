<html>
    <head>
        <title>Welcome to LAMP Infrastructure</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <style>
            .tabled{
                border-color: 2px solid black;
                border-radius: 10%;
                color: purple;
            }
        </style>
    </head> 
    <body>
        <div class="container-fluid">
            <?php
                echo "<h1>¡Hola, Raul Sales te esta hackeando!</h1>";

                $conn = mysqli_connect('db', 'root', 'luar', "Aevraul");

                $query = 'SELECT * From Aevraul';
                $result = mysqli_query($conn, $query);

                echo '<table class="tabled">';
                echo '<thead><tr><th></th><th>name : </th><th> surname : </th></tr></thead>';
                while($value = $result->fetch_array(MYSQLI_ASSOC)){
                    echo '<tr>';
                    foreach($value as $element){
                        echo '<td>' . $element . '</td>';
                    }

                    echo '</tr>';
                }
                echo '</table>';

                $result->close();
                mysqli_close($conn);
            ?>
        </div>
    </body>
</html>

