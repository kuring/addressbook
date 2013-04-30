<?php
require_once("config.php");
require_once("mysql.php");

$title = null;

if (isset($_REQUEST["title"]))
{
    $title = $_REQUEST["title"];
}

global $db;
$dboperator = new MysqlOperator($db["name"],$db["user"],$db["password"],$db["database"],'pconn', 'UTF8');

// 个数
if ($title != null)
{
    $sql = "select count(*) from info where name like '%$title%'";
}
else
{
    $sql = "select count(*) from info";
}
$dboperator->query($sql);
$result = $dboperator->fetch_array();
$count = $result[0];
$json = "{total:$count,results:[";

// 查询具体
if ($title != null)
{
    $sql = "select * from info where name like '%$title%'";
}
else
{
    $sql = "select * from info";
}
$dboperator->query($sql);
while ($result = $dboperator->fetch_array())
{
    $id = $result['id'];
    $no = $result['no'];
    $name = $result['name'];
    // 1男2女
    $sex = $result['sex'];
    if ($sex == 1)
    {
        $sex = "男";
    }
    else
    {
        $sex = "女";
    }
    $city = $result['city'];
    $phone = $result['phone'];
    $qq = $result['qq'];
    $work = $result['work'];
    $email = $result['email'];
    $comment = $result['comment'];
    
    $json .= "{
        id:$id,
        no:$no,
        name:'$name',
        sex:'$sex',
        city:'$city',
        phone:'$phone',
        qq:'$qq',
        work:'$work',
        email:'$email',
        comment:'$comment'
    },";
}
$json = substr($json, 0, strlen($json) - 1);
$json .= "]}";
echo $json;
?>