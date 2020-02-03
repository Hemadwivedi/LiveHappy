$(document).ready(function(){

    $("#jokesBtn").on('click' , function() {
        $.ajax({
            url: "../html/joke.html",
            context: document.body,
            method: 'get',
            success: function(data){
                $('#content').html(data);
                $.loadCacategories();
            } 
          });
    });

    $("#gifsBtn").on('click' , function() {
        $.ajax({
            url: "../html/gif.html",
            context: document.body,
            method: 'get',
            success: function(data){
                $('#content').html(data);
            } 
          });
    });


    $("#videoBtn").on('click' , function() {

    });

    
});