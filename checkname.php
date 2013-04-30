<?php
// 检查学号和姓名是否正确
require_once("config.php");
require_once("mysql.php");

if (isset($_POST["no"]) && isset($_POST["name"])) {
	$no = $_POST['no'];
	$name = $_POST["name"];
	
	global $db;
	$dboperator = new MysqlOperator($db["name"],$db["user"],$db["password"],$db["database"],'pconn', 'UTF8');
	$sql = "select count(*) from no_name where no='$no' and name='$name'";
	$dboperator->query($sql);
	$result = $dboperator->fetch_array();
	$count = $result[0];
	if ($count == 0)
	{
		echo -1;
	}
	else
	{
		echo 1;
	}
}
else
{
	echo -1;
}
?>