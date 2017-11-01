console.log("%c随便一些东西", "font-size:2em");
var jQuery = require("jquery");
require('!style-loader!css-loader!bootstrap/dist/css/bootstrap.css');
require('bootstrap');
require("!style-loader!css-loader!../css/main.css");
jQuery(function () {
    jQuery("#music").on("click", function () {
        console.log("music click");
        jQuery("#music-frame").toggle(300);
    }).on("mouseover", function () {
        console.log("music mouseover");
        jQuery("#hint").fadeOut(500);
    })
})

var angular = require("angular");
var translationsEN = {
    "app.welcome-slogan": "I'm Allen, Welcome to my homepage...",
    "app.guest-count": "You are the <a href='http://www.amazingcounters.com'><img border='0' src='http://cc.amazingcounters.com/counter.php?i=3205343&c=9616342' alt='AmazingCounters.com'></a>guests!!",
    "app.profile": "Profile",
    "app.address": "Beijing China",
    "app.university": "Nankai University & 2012 bachelor",
    "app.skill": "Skills",
    "app.language": "Language",
    "app.framework": "Framework",
    "app.lesson": "Lessons",
    "app.lesson-content": "Database system/Computer network/Data structure/Operating system...",
    "app.english": "English Level",
    "app.english-content": "CET-6, Listening & Speaking & Reading & Writing",
    "app.csdn": "CSDN, my blogs will be punished on it",
    "app.github": "Github, code will be push on there",
    "app.stackoverflow": "StackOverflow, some questions and answers",
}
var translationsCN = {
    "app.welcome-slogan": "我是Allen, 欢迎访问我的个人主页...",
    "app.guest-count": "您是第 <a href='http://www.amazingcounters.com'><img border='0' src='http://cc.amazingcounters.com/counter.php?i=3205343&c=9616342' alt='AmazingCounters.com'></a>位访客!!",
    "app.profile": "简介",
    "app.address": "中国 北京",
    "app.university": "南开大学 & 2012届本科生",
    "app.skill": "技能",
    "app.language": "编程语言",
    "app.framework": "框架",
    "app.lesson": "课程",
    "app.lesson-content": "数据库/计算机网络/数据结构/操作系统...",
    "app.english": "英语等级",
    "app.english-content": "英语六级, 听、说、读、写基本技能",
    "app.csdn": "CSDN, 博客主要写在这里",
    "app.github": "Github, 一些平时的demo会保存在这里",
    "app.stackoverflow": "StackOverflow, 问的问题及回答在这里",
}
angular.module("app", [require("angular-translate")])
    .config(["$translateProvider", function ($translateProvider) {
        $translateProvider.translations('en', translationsEN);
        $translateProvider.translations('zh-CN', translationsCN);
        $translateProvider.preferredLanguage('zh-CN');
    }])
    .controller("ctrl", ["$scope", "$translate", function ($scope, $translate) {
        $scope.changeLanguage = function (lang) {
            $translate.use(lang);
        }
    }])