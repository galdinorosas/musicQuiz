!function o(e,n,t){function i(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var p=n[s]={exports:{}};e[s][0].call(p.exports,function(o){var n=e[s][1][o];return i(n?n:o)},p,p.exports,o,e,n,t)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<t.length;s++)i(t[s]);return i}({1:[function(o,e,n){$(document).ready(function(){function o(o){$("#songPlaying")[0].pause(),$("#songPlaying").prop("src",o),$("#songPlaying")[0].volume=.5,$("#songPlaying")[0].load(),$("#songPlaying")[0].play()}$(".userInput").submit(function(o){o.preventDefault()}),$(".timer").runner(),$(".submitButton, .startGameButton").tooltip();var e=[{question:"Which alternative artist made the song Reptilia?",optionOne:"Franz Ferdinand",optionTwo:"The Strokes",optionThree:"The Killers",optionFour:"Arctic Monkeys",answer:"The Strokes"},{question:"Which English rock band made the song Citizen Erased?",optionOne:"Muse",optionTwo:"Radiohead",optionThree:"Linkin Park",optionFour:"Coldplay",answer:"Muse"},{question:"What is the name of female vocalist in the band No Doubt?",optionOne:"Karen O",optionTwo:"Haley Williams",optionThree:"Gwen Stefani",optionFour:"Florence Welch",answer:"Gwen Stefani"},{question:"Who is the name of the actor in the show Community, who is also the artist in Childish Gambino?",optionOne:"Danny Pudi",optionTwo:"Donald Glover",optionThree:"Joel Mchale",optionFour:"Ken Jeong",answer:"Donald Glover"},{question:"Which group member first left the American hip-hop group N.W.A?",optionOne:"Eazy-E",optionTwo:"Dr. Dre",optionThree:"MC Ren",optionFour:"Ice Cube",answer:"Ice Cube"},{}];$(".playButton").on("click",function(){$("#songPlaying")[0].play()}),$(".pauseButton").on("click",function(){$("#songPlaying")[0].pause()}),$(".visibleQuestion").text(e[0].question),$(".text1").text(e[0].optionOne),$(".text2").text(e[0].optionTwo),$(".text3").text(e[0].optionThree),$(".text4").text(e[0].optionFour);var n;$(".optionsButton").on("click",function(){"none"==$(".introStartGameContainer").css("display")&&$(".timer").runner("toggle"),"none"==$(".optionsContainer").css("display")?$(".optionsContainer").show(500):$(".optionsContainer").slideUp("slow")});var t=0,i=1;$(".submitButton").on("click",function(){if(!$("ul input").is(":checked"))return void $(".submitButton").tooltip();switch($(".submitButton").tooltip("destroy"),6>i&&($(".visibleQuestion").text(e[i].question),$(".text1").text(e[i].optionOne),$(".text2").text(e[i].optionTwo),$(".text3").text(e[i].optionThree),$(".text4").text(e[i].optionFour)),$("#option1").is(":checked")&&e[i-1].optionOne===e[i-1].answer?t++:$("#option2").is(":checked")&&e[i-1].optionTwo===e[i-1].answer?t++:$("#option3").is(":checked")&&e[i-1].optionThree===e[i-1].answer?t++:$("#option4").is(":checked")&&e[i-1].optionFour===e[i-1].answer&&t++,i++,$("#currentQuestionNumber").text(i),i){case 2:o("sound/citizenErased.mp3");break;case 3:o("sound/hellaGood.mp3");break;case 4:o("sound/sweatpants.mp3");break;case 5:o("sound/straightOuttaCompton.mp3");break;case 6:n=$(".timer").runner("lap"),$(".timer").runner("reset",!0),console.log(n),$("#currentQuestionNumber").text("DONE"),$("#quizTime").text(n),$(".questionAndAnswerContainer").fadeOut(800,function(){$("#totalCorrectAnswers").text(t+"/5"),$(".endContainer").fadeIn(800)})}$("#option1").prop("checked",!1),$("#option2").prop("checked",!1),$("#option3").prop("checked",!1),$("#option4").prop("checked",!1)}),$(".startGameButton").on("click",function(){$(".introStartGameContainer").fadeOut(800,function(){$(".questionAndAnswerContainer").fadeIn(800)}),o("sound/Reptilia.mp3"),$("#songPlaying")[0].volume=.5,$("#songPlaying")[0].load(),$("#songPlaying")[0].play(),$("#currentQuestionNumber").text(i),$(".timer").runner("start")}),$(".newGameButton, .optionsNewGameButton").on("click",function(){$(".timer").runner("reset",!0),n=0,$(".visibleQuestion").text(e[0].question),$(".text1").text(e[0].optionOne),$(".text2").text(e[0].optionTwo),$(".text3").text(e[0].optionThree),$(".text4").text(e[0].optionFour),t=0,i=1,$(".optionsContainer").slideUp(600),$(".questionAndAnswerContainer").css("display","none"),$(".endContainer").css("display","none"),$(".introStartGameContainer").fadeIn(800),$("#songPlaying")[0].pause(),$("#currentQuestionNumber").text("#")}),$("#answerOne").on("click",function(o){console.log("check",$(o.target).attr("value")),$("#option1").prop("checked",!0)}),$("#answerTwo").on("click",function(){console.log("check"),$("#option2").prop("checked",!0)}),$("#answerThree").on("click",function(){console.log("check"),$("#option3").prop("checked",!0)}),$("#answerFour").on("click",function(){console.log("check"),$("#option4").prop("checked",!0)})})},{}]},{},[1]);