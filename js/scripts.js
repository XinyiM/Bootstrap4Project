
    $(document).ready(function(){
        $("#mycarousel").carousel( { interval: 2000 } );
        $("#carouselButton").click(function(){
            // if the carouselbutton has children named fa-pause 
            // this means it is a pause button
            if($('#carouselButton').children('span').hasClass('fa-pause')){
                $('#mycarousel').carousel('pause');
                $('#carouselButton').children('span').removeClass('fa-pause');
                $('#carouselButton').children('span').addClass('fa-play');
            }else{
                $('#mycarousel').carousel('cycle');
                $('#carouselButton').children('span').removeClass('fa-play');
                $('#carouselButton').children('span').addClass('fa-pause');
            }
        });



    });

    $(document).ready(function(){
        $("#loginBtn").click(function(){
            $('#loginModal').modal('show');
        });
    });

    $(document).ready(function() {
        $("#reserveBtn").click(function(){
            $('#reserve').modal('show');
        });
    });
