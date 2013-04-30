/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50524
Source Host           : 127.0.0.1:3306
Source Database       : addressbook

Target Server Type    : MYSQL
Target Server Version : 50524
File Encoding         : 65001

Date: 2012-12-08 22:28:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `info`
-- ----------------------------
DROP TABLE IF EXISTS `info`;
CREATE TABLE `info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no` varchar(15) NOT NULL,
  `name` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `sex` tinyint(4) NOT NULL,
  `city` varchar(15) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `qq` varchar(15) NOT NULL,
  `work` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `comment` varchar(3000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for `no_name`
-- ----------------------------
DROP TABLE IF EXISTS `no_name`;
CREATE TABLE `no_name` (
  `no` varchar(15) NOT NULL,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
