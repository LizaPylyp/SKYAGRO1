<?php
$name = filter_var(trim($_POST['name']),
FILTER_SANITIZE_STRING);
$location = filter_var(trim($_POST['location']),
FILTER_SANITIZE_STRING);
$volume = filter_var(trim($_POST['volume']),
FILTER_SANITIZE_STRING);
$telefon = filter_var(trim($_POST['telefon']),
FILTER_SANITIZE_STRING);

if(mb_strlen($location) <10 || mb_strlen($location)>400){
    echo "Недопустима довжина тесту";
    exit();
} else if(mb_strlen($telefon) < 7 || mb_strlen($telefon)>13){
    echo "Недопустима довжина номеру";
    exit();
}


$mysql = new mysqli('root', 'root', 'root', 'root', 'lolo');
$mysql->query ("INSERT INTO `regi` (`name`, `location`, `volune`, `telefon`),
VALUES('$name', '$location', '$volume', '$telefon')");


$mysql->close();
ini_set('max_execution_time', 300);
header('Location: /')
?>
