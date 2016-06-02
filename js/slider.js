//function for projects loop
"use strict"
$("document").ready(function() {
    var imageSrc = ["./img/countdown.png", "./img/quote.png", "./img/tictactoe.png"];
    var projectName = ["Countdown", "Quote Generator", "Tic Tac Toe"];
    var projetxDescription = [
        "A JavaScript based countdown which asks user for the time, and then start the timer for the given time.",
        "A JavaScript based Quote Generator, which shows prestored quotes on the user request.",
        "A JavaScript based TicTacToe game, which selects randomly between X and O and and let the user fill the squares from both ends."
    ];

    var image = $('#pic'),
        title = $('#projtitle'),
        details = $('#projdetails'),
        btn1 = $('#nextBtn'),
        btn2 = $('#prevBtn'),
        i = 0;

    function checkbtn2() {
        if(i == 0)
        {
            btn2.fadeOut(700).hide();
        }
        else
        {
            btn2.fadeIn(700).show();
        }
    };

     function checkbtn1() {
        if(i >= projectName.length - 1)
        {
            btn1.fadeOut(700).hide();
        }
        else
        {
            btn1.fadeIn(700).show();
        }
    };

    checkbtn2();
    btn1.click(function() {
        i++;
        checkbtn1();
        if(i == projectName.length) {
            i = 0;
        }
        checkbtn2();
        $("#pic, #projtitle, #projdetails").fadeOut(700, function() {
            image.attr("src", imageSrc[i]).fadeIn(700);
            title.text(projectName[i]).fadeIn(700);
            details.text(projetxDescription[i]).fadeIn(700);
        });
    });

    btn2.click(function() {
        i--;
        checkbtn1();
        checkbtn2();
        $("#pic, #projtitle, #projdetails").fadeOut(700, function() {
            image.attr("src", imageSrc[i]).fadeIn(700);
            title.text(projectName[i]).fadeIn(700);
            details.text(projetxDescription[i]).fadeIn(700);
        });
        if(i == projectName.length) {
            i = 0;
        }
    });
});
