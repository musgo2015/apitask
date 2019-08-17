$(document).ready(function() {


    $("#swapi").click(function() {

        $('#demo').hide();

        traerSwapi();

    });


    $("#people").click(function() {

        $('#demo').hide();

        traerPeople();

    });


    $("#planets").click(function() {

        $('#demo').hide();

        traerPlanets();

    });


    $("#films").click(function() {

        $('#demo').hide();

        traerFilms();

    });

    $("#species").click(function() {

        $('#demo').hide();

        traerEspecies();

    });
    $("#startchips").click(function() {

        $('#demo').hide();

        traerNaves();

    });



});