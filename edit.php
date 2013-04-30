<?php
    session_start();
    if (!isset($_SESSION['no']))
    {
        header("Location: login.html");
        exit(0);
    }
    require_once("config.php");
    require_once("mysql.php");
    global $db;
	$dboperator = new MysqlOperator($db["name"],$db["user"],$db["password"],$db["database"],'pconn', 'UTF8');
    $sql = "select * from info where no=" . $_SESSION['no'];
    $dboperator->query($sql);
	$result = $dboperator->fetch_array();
    if ($result == null)
    {
        header("Location: login.html");
        exit(0);
    }
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<title>山东大学在职研究生软件工程2012秋季班通信录系统-修改信息</title>
<link href="css/register_public.css" rel="stylesheet" />
<link href="css/register_passport.css" rel="stylesheet" />
<script src="js/reg_form.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js"></script>
<script>
    function byid(id)
    {
        return document.getElementById(id);
    }
    function warning(id,warningtxt)
    {
        document.getElementById(id).style.width="";
        document.getElementById(id).style.height="";
        document.getElementById(id).style.background="";
        document.getElementById(id).innerHTML=warningtxt;
        document.getElementById(id).style.color="#cc0000";
    }
    function checksuccess(id)
    {
        document.getElementById(id).innerHTML="";
        document.getElementById(id).style.background='url("images/spt.jpg") no-repeat -490px -260px';
        document.getElementById(id).style.width="30px";
        document.getElementById(id).style.height="14px";
    }
</script>
</head>
<body>
<div class="main_box w980">
    <dl class="top_box" id="top_box_yoka">
        <dt>
            <a href="#" target="_blank">
                <img src="images/logo.jpg" />
                <!--山东大学在职研究生软件工程2012秋季班通信录系统V1.0-->
            </a>
        </dt>
    <dd>
    </dd>
</dl>

<dl class="top_box" style="display:none;">
    <dt>
        <a href="#" target="_blank">
            山东大学在职研究生软件工程2012秋季班通信录系统
        </a>
    </dt>
    <dd>
    </dd>
</dl>

<div class="middle_box reg_box" id="reg_box">
    <dl style="font-size:20px; margin-bottom:15px; font-weight:bold;">
        <dt>修改<?php echo $result['name'];?>的个人信息</dt>
    </dl>
<div class="reg_form" id="regForm">
    <form action="edit_submit.php" method="POST" id="r_myform" name="r_myform">    
    <dl>
        <dt>性别<span>*</span></dt>
        <dd class="radioBox">
            <input type="radio" name="r_sex" id="sex1" tabindex="5" value="1" <?php if($result['sex'] == 1) echo "checked='checked'";?> />
            <label for="sex1" hidefocus="true">男</label>
            <input type="radio" name="r_sex" id="sex2" value="2" <?php if($result['sex'] == 2) echo "checked='checked'";?> />
            <label for="sex2" hidefocus="true">女</label>
        </dd>
    </dl>
    
    <dl>
        <dt>所在城市<span>*</span></dt>
        <dd>
            <i>
                <input type="text" class="txt_input" id="r_city" name="r_city" onkeyup="limitstr(this)" maxlength="30" tabindex="6" onblur="check_city();" value="<?php echo $result['city']?>" />
            </i>
            <span id="checkcity">填写您所在的城市</span>
        </dd>
    </dl>
    
    <dl>
        <dt>手机号<span></span></dt>
        <dd>
            <i>
                <input type="text" class="txt_input" name="r_phone" id="r_phone" onblur="check_phone();" tabindex="7" onkeyup="limitstr(this)" maxlength="20" value="<?php echo $result['phone'];?>" />
            </i>
            <span id="checkphone">根据个人情况输入手机号码</span>
        </dd>
    </dl>
    
    <dl>
        <dt>QQ号<span></span></dt>
        <dd>
            <i>
                <input type="text" class="txt_input" name="r_qq" id="r_qq" tabindex="8" onkeyup="limitstr(this)" maxlength="20" onblur="check_qq();" value="<?php echo $result['qq']; ?>"/>
            </i>
            <span id="checkqq">为了大家方便联系您，请输入QQ号</span>
        </dd>
    </dl>
    
    <dl>
        <dt>邮箱<span></span></dt>
    <dd id="input_div">
    <div>
    <ul>
    <li class="on"><a href="javascript:void(0)"></a></li>
    <li><a href="javascript:void(0)">@163.com</a></li>
    <li><a href="javascript:void(0)">@126.com</a></li>
    <li><a href="javascript:void(0)">@sina.com</a></li>
    <li><a href="javascript:void(0)">@yahoo.com.cn</a></li>
    <li><a href="javascript:void(0)">@yahoo.cn</a></li>
    <li><a href="javascript:void(0)">@hotmail.com</a></li>
    <li><a href="javascript:void(0)">@sohu.com</a></li>
    <li><a href="javascript:void(0)">@gmail.com</a></li>
    <li><a href="javascript:void(0)">@yeah.net</a></li>
    <li><a href="javascript:void(0)">@139.com</a></li>
    <li><a href="javascript:void(0)">@tom.com</a></li>
    <li><a href="javascript:void(0)">@21cn.com</a></li>
    <li><a href="javascript:void(0)">@qq.com</a></li>
    </ul>

    <dl><dt style="top:20px;"></dt><dd class="up"></dd><dd class="down"></dd></dl>
    </div>

    <i><input type="text" class="txt_input" autocomplete="off" name="r_email" id="r_email" onblur="check_email();" tabindex="9" value="<?php echo $result['email']?>" /></i><span id="checkmail">请输入您的常用邮箱</span></dd>
    </dl>

    <dl>
        <dt>工作单位<span></span></dt>
        <dd>
            <i>
                <input type="text" class="txt_input" id="r_work" name="r_work" onkeyup="limitstr(this)" maxlength="100" tabindex="10" onblur="check_work();" value="<?php echo $result['work'];?>"/>
            </i>
            <span id="checkwork">您可以填写您的工作单位，也可以填写您的具体工作</span>
        </dd>
    </dl>
	
	<dl style="height:150px;">
        <dt>备注<span></span></dt>
        <dd style="background:none; padding-left:0;">
            <i style="background:none; width:100%; height:100px;">
                <textarea cols="100" rows="5" name="r_comment" id="r_comment" style="" tabindex="11" ><?php echo $result['comment'];?></textarea>
            </i>
            <div id="checkcomment">亲，这里可以随便填，写写兴趣、志向、理想都可以</div>
        </dd>
    </dl>
    
    <!-- 注册按钮 -->
    <dl>
        <dt></dt>
        <dd class="submit_box_2">
            <a href="javascript:check_submit();" id="href_submit" class="submit_btn" tabindex="10" /></a>
        </dd>
    </dl>
</form>
</div>
</div>
<div class="bottom_box">
<p>山东大学在职研究生软件工程2012秋季班通信录系统</p>
<p class="fontArial">powered by <a href="http://www.weibo.com/ilvkai" style='text-decoration:none'>吕凯</a>. 
                    如有问题请联系我,QQ:627580471</p>
</div>
</div>
</body>
</html>

<input type="hidden" name="check_no_result" id="check_name_result" />
<input type="hidden" name="check_name_result" id="check_no_result" />
<script>

// 检查学号
function check_no()
{
    if(byid('r_no').value == "")
    {
        warning("checkno","学号不能为空");
    }
    var no_value = byid('r_no').value;
    $.post("checkno.php", {no:no_value}, 
        function(msg) {
            if (msg == -1)
            {
                warning("checkno","学号不正确");
                byid('check_no_result').value="";
                return false;
            }
            else if (msg == 0)
            {
                warning("checkno","学号已经注册");
                byid('check_no_result').value="";
                return false;
            }
            else if (msg == 1)
            {
                checksuccess("checkno","学号正确");
                byid('check_no_result').value="success";
                return true;
            }
        }
    );
}

// 检查姓名
function check_name()
{
    if(byid('r_name').value == "")
    {
        warning("checkname","姓名不能为空");
    }
    var name_value = byid('r_name').value;
    var no_value = byid('r_no').value;
    $.post("checkname.php", {name:name_value, no:no_value}, 
        function(msg) {
            if (msg == -1)
            {
                warning("checkname","姓名不正确");
                byid('check_name_result').value="";
                return false;
            }
            else if (msg == 1)
            {
                checksuccess("checkname","姓名正确");
                byid('check_name_result').value="success";
                return true;
            }
        }
    );
}

// 检验手机号
function check_phone()
{
    if(byid('r_phone').value == "")
    {
        warning("checkphone","手机号不能为空");
        byid('r_phone').value = "";
        return false;
    }
    var phone_value = byid('r_phone').value;
    var vReg = /^1(3|4|5|8)\d{9}$/;
    if (!vReg.test(phone_value))
    {
        warning("checkphone","手机号格式不正确");
        byid('r_phone').value = "";
        return false;
    }
    else
    {
        checksuccess("checkphone","手机号格式正确");
        return true;
    }    
}

// QQ
function check_qq()
{
    checksuccess("checkqq");
    return true;
}

// 邮箱
function check_email()
{
    if(byid('r_email').value=="")
    {
        warning("checkmail","邮箱不能为空");
        return false;
    }
    if(!byid('r_email').value.match(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/))
    {
        warning("checkmail","邮箱格式不正确");
        byid('r_email').value="";
        return false;
    }
    else
    {
        checksuccess("checkmail");
        return true;
    }
}

// work
function check_work()
{
    checksuccess("checkwork");
    return true;
}

function limitstr(obj)
{
    var mlength=obj.getAttribute? parseInt(obj.getAttribute("maxlength")) : ""
    if (obj.getAttribute && obj.value.length>mlength)
    {
        obj.value=obj.value.substring(0,mlength);
    }
}

// 校验密码
function check_password()
{
    if(byid('r_password').value=="")
    {
        warning("checkpassword","密码不能为空");
        return false;
    }
    if(byid('r_password').value.match(/[\'\"\\]/))
    {
        warning("checkpassword","密码不能包含非法字符");
        return false;
    }
    if(byid('r_password').value.length<6)
    {
        warning("checkpassword","密码不能少于6位，且区分大小写");
        return false;
    }
    if(byid('r_password').value.length>20)
    {
        warning("checkpassword","密码不能大于20位，且区分大小写");
        return false;
    }
    checksuccess("checkpassword");
    return true;
}

// 校验确认密码
function check_password2()
{
    if(byid('r_password2').value=="")
    {
        warning("checkpassword2","确认密码不能为空");
        return false;
    }
    if(byid('r_password2').value.match(/[\'\"\\]/))
    {
        warning("checkpassword2","确认密码不能包含非法字符");
        return false;
    }
    if(byid('r_password2').value.length<6)
    {
        warning("checkpassword2","确认密码不能少于6位");
        return false;
    }
    if(byid('r_password2').value!=byid('r_password').value)
    {
        warning("checkpassword2","两次输入的密码不一致");
        return false;
    }
    checksuccess("checkpassword2");
    return true;
}

function check_city()
{
    if(byid('r_city').value=="")
    {
        warning("checkcity","城市不能为空");
        return false;
    }
    else
    {
        checksuccess("checkcity");
        return true;
    }
}

// 提交之前对表单的内容进行检查
function check_submit()
{
    if(check_city())
    {
        document.r_myform.submit();
        return true;
    }
    else
    {
        return false;
    }
}
</script>