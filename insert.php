
<?php


$data =json_decode(file_get_contents("php://input")  );

$name = mysql_real_escape_string($data->name );
$fname = mysql_real_escape_string($data->fname );

mysql_connect("localhost","root","");
mysql_select_db("ang");

mysql_query("INSERT INTO user( `name`, `fname`) VALUES ('".$name."','".$fname."')");

?>