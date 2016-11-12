



<?php
//include "connectdb.php";

 include "connect.php";

$query= "SELECT * FROM user ";

$rs=$dbhandle->query($query);

while($row=$rs->fetch_assoc() ){

   $data[]= $row;
}
print json_encode($data);


?>