$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * 120) + 19;

    var crystalNumber = Math.floor(Math.random() * 12) + 1;
    var crystalNumber1 = Math.floor(Math.random() * 12) + 1;
    var crystalNumber2 = Math.floor(Math.random() * 12) + 1;
    var crystalNumber3 = Math.floor(Math.random() * 12) + 1;

    var crystalNumberArray = [crystalNumber];
    var crystalNumberArray1 = [crystalNumber1];
    var crystalNumberArray2 = [crystalNumber2];
    var crystalNumberArray3 = [crystalNumber3];

    
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var crystals = $(".crystals");
    $(".number-to-guess").text("Target Number: " + targetNumber);

    for (var i = 0; i < crystalNumberArray.length; i++) {
        var purpleCrystal = $("<img>");
        purpleCrystal.addClass("crystal");
        purpleCrystal.attr("src", "assets/images/purple_crystal.jpg");
        purpleCrystal.attr("currentValue", crystalNumberArray[i]);
        crystals.append(purpleCrystal);
    }

    for (var i = 0; i < crystalNumberArray.length; i++) {
        var pinkCrystal = $("<img>");
        pinkCrystal.addClass("crystal");
        pinkCrystal.attr("src", "assets/images/pink_crystal.jpg");
        pinkCrystal.attr("currentValue", crystalNumberArray1[i]);
        crystals.append(pinkCrystal);
    }

    for (var i = 0; i < crystalNumberArray.length; i++) {
        var clearCrystal = $("<img>");
        clearCrystal.addClass("crystal");
        clearCrystal.addClass("moveImage");
        clearCrystal.attr("src", "assets/images/clear_crystal.jpg");
        clearCrystal.attr("currentValue", crystalNumberArray2[i]);
        crystals.append(clearCrystal);
    }

    for (var i = 0; i < crystalNumberArray.length; i++) {
        var clearCrystal1 = $("<img>");
        clearCrystal1.addClass("crystal");
        clearCrystal1.addClass("moveImage");
        clearCrystal1.attr("src", "assets/images/clear_crystal1.jpg");
        clearCrystal1.attr("currentValue", crystalNumberArray3[i]);
        crystals.append(clearCrystal1);
    }

    
    
    crystals.on("click", ".crystal", function () {
        var crystalValue = ($(this).attr("currentValue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;



        for(var i = newTargetNumber; i == newTargetNumber; i++) {

        if (counter === targetNumber) {
            alert("You win!");
            wins++;
            counter = 0;
            var newTargetNumber =  Math.floor(Math.random() * 120) + 19;
            targetNumber = newTargetNumber;
            $(".number-to-guess").text("Target Number: " + targetNumber);
        }

        else if (counter >= targetNumber) {
            alert("You lose!!");
            losses++;
            counter = 0;
            var newTargetNumber =  Math.floor(Math.random() * 120) + 19;
            targetNumber = newTargetNumber;
            $(".number-to-guess").text("Target Number: " + targetNumber);

        }

        $(".counter").text("Current Score: " + counter);
        $(".wins").text("Wins: " + wins);
        $(".losses").text("Losses: " + losses);
    
    }
    
    });
});
