<?phprequire_once("config.php");require_once("mysql.php");$no = null;$name = null;$password = null;$city = null;$sex = null;$phone = null;$qq = null;$email = null;$work = null;$comment = null;if (isset($_POST["r_no"])){    $no = $_POST["r_no"];}if (isset($_POST["r_name"])){    $name = $_POST["r_name"];}if (isset($_POST["r_password"])){    $password = $_POST["r_password"];}if (isset($_POST["r_city"])){    $city = $_POST["r_city"];    $city = htmlspecialchars(stripslashes($city));}if (isset($_POST["r_sex"])){    $sex = $_POST["r_sex"];}if (isset($_POST["r_phone"])){    $phone = $_POST["r_phone"];}if (isset($_POST["r_qq"])){    $qq = $_POST["r_qq"];}if (isset($_POST["r_email"])){    $email = $_POST["r_email"];}if (isset($_POST["r_work"])){    $work = $_POST["r_work"];    $work = htmlspecialchars(stripslashes($work));}if (isset($_POST["r_comment"])){    $comment = $_POST["r_comment"];    $search = array ("'<script[^>]*?>.*?</script>'si",  // 去掉 javascript                 "'<[\/\!]*?[^<>]*?>'si",           // 去掉 HTML 标记                 "'([\r\n])[\s]+'",                 // 去掉空白字符                 "'&(quot|#34);'i",                 // 替换 HTML 实体                 "'&(amp|#38);'i",                 "'&(lt|#60);'i",                 "'&(gt|#62);'i",                 "'&(nbsp|#160);'i",                 "'&(iexcl|#161);'i",                 "'&(cent|#162);'i",                 "'&(pound|#163);'i",                 "'&(copy|#169);'i",                 "'&#(\d+);'e");                    // 作为 PHP 代码运行    $replace = array ("",                      "",                      "\\1",                      "\"",                      "&",                      "<",                      ">",                      " ",                      chr(161),                      chr(162),                      chr(163),                      chr(169),                      "chr(\\1)");    $comment = preg_replace ($search, $replace, $comment);    //$comment = preg_replace("'([\r\n])[\s]+'", "", $comment);    $comment = str_replace(array("\r\n", "\r", "\n"), "", $comment);}if ($no != null &&    $name != null &&    $password != null &&    $city != null &&    $sex != null)    {        global $db;        $dboperator = new MysqlOperator($db["name"],$db["user"],$db["password"],$db["database"],'pconn', 'UTF8');        // 检测是否已经注册过账号        $sql = "select count(*) from info where no='$no'";        $dboperator->query($sql);        $result = $dboperator->fetch_array();        if ($result != null && $result[0] > 0)        {            header("Location: regist_already.html");            exit(0);        }                $sql = "insert into info(no,name,password,sex,city,phone,qq,email,work,comment)                 values('$no','$name','$password','$sex','$city','$phone','$qq','$email','$work','$comment')";        $result = $dboperator->query($sql);        if ($result != null)        {            header("Location: regist_success.html");        }        else        {            header("Location: regist_error.html");        }    }    else    {        header("Location: regist_error.html");    }?>