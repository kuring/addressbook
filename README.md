addressbook
===========

## 项目简介
  本项目简易的通讯录系统，可以用来管理班级里之间同学的通讯录，特别是在职研究生。编程语言采用php，数据库采用mysql，界面基于extjs2。由于一个班级的学号和学生姓名已经确定，用户注册需要通过学号、姓名等来注册。
## 界面说明
### 注册界面
用户仅可以通过姓名和学号匹配时才能注册。
![注册](https://raw.github.com/kuring/addressbook/master/images_doc/regist.png)
### 登录界面
![登录](https://raw.github.com/kuring/addressbook/master/images_doc/login.png)
### 通讯录列表界面
![通讯录列表](https://raw.github.com/kuring/addressbook/master/images_doc/list.png)
## 数据库说明
本系统数据库包含两张表：info（注册的详细信息）、no_name（学号和姓名对应关系表，该表需要搭建系统的时候将学号和姓名填写进去）。
### info字段说明
- id:自增长主键
- no:学号
- name:姓名
- password:密码，为了简单直接采用了明文保存
- sex:性别
- city:所在城市
- phone:电话号码
- qq:qq号
- work:工作单位
- email:邮箱
- comment:个人的简介等说明性信息可以放到这里

### no_name字段说明
在搭建系统的时候需要将班级内的学号和姓名填入此表中，用户才能注册。
- no：学号
- name：姓名

## 安装说明
1. 将程序目录中的addressbook.sql文件导入到mysql数据库
2. 在no_name表中插入班级内同学的学号和姓名的记录
3. 数据库的连接配置在config.php文件中修改
4. 将程序放入到支持php的环境下，ok，现在就可以使用这个简单的通讯录系统了。(^ˍ^）
