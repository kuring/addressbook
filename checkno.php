<?php
// 检查学号是否正确
require_once("config.php");
require_once("mysql.php");

if (isset($_REQUEST["no"])) {
	$number = $_REQUEST['no'];
	global $db;
	$dboperator = new MysqlOperator($db["name"],$db["user"],$db["password"],$db["database"],'pconn', 'UTF8');
	$sql = "select count(*) from no_name where no='$number'";
	$dboperator->query($sql);
	$result = $dboperator->fetch_array();
	$count = $result[0];
	if ($count == 0)
	{
		echo -1;
	}
	else
	{
		// 查看之前是否已经注册过
		$sql = "select count(*) from info where no='$number'";
		$dboperator->query($sql);
		$result = $dboperator->fetch_array();
		$count = $result[0];
		if ($count > 0)
		{
			echo 0;	// 已经注册
		}
		else
		{
			echo 1;	// 未注册
		}
	}
}
else
{
	echo -1;
}
?>