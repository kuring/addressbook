<?php
    session_start();
    if (!isset($_SESSION['no']))
    {
        header("Location: login.html");
        exit(0);
    }
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="ext/resources/css/ext-all.css" />
        <link href="css/register_passport.css" rel="stylesheet" />
        <script type="text/javascript" src="ext/adapter/ext/ext-base.js"></script>
        <script type="text/javascript" src="ext/ext-all.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=utf8" />
        <title>山东大学在职研究生软件工程2012秋季班通信录系统</title>
        <style type="text/css">
            .title{height:50px; 
                   width:100%; 
                   background-color: gray; 
                   font-size:20px; 
                   text-align:center; 
                   line-height:50px; 
                   overflow:hidden; 
                   color:#fff;
                   background-image: url(images/layout-browser-hd-bg.gif);
                   }
        </style>
    </head>
    <body>
        <script type="text/javascript" src="js/list.js"></script>
        <div class="title" style="">山东大学在职研究生软件工程2012秋季班通信录系统</div>
        <div id="content"></div>
        <?php
            echo "<div type='hidden' name='login_no' id='login_no' value='" . $_SESSION['no'] . "' />";
        ?>        
        <div class="bottom_box" style="font-size:12px; padding-top:15px;">
            <p>山东大学在职研究生软件工程2012秋季班通信录系统</p>
            <p class="fontArial">powered by <a href="http://www.weibo.com/ilvkai" style='text-decoration:none'>吕凯</a>. 
                            如有问题请联系我,QQ:627580471</p>
        </div>
    </body>
</html>
