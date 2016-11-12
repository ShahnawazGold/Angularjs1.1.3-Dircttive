


<?php
//include "connectdb.php";

 include "connect.php";




$data =json_decode(file_get_contents("php://input")  );

$name =$dbhandle->real_escape_string ($data->name);

$fname =$dbhandle->real_escape_string ($data->fname);


$query= "INSERT INTO user( `name`, `fname`) VALUES ('".$name."','".$fname."')";

$dbhandle->query($query);




?>