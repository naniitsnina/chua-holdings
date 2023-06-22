
$(function () {
    $(".carousel").carousel({ interval: 3000, pause: false, wrap: true,  });
    $("#carouselButton").on('click', function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    $("#reserveButton").on('click', function () {
        $('#reserveModal').modal('show');
    });
 
    $("#loginButton").on('click',function () {
        $('#loginModal').modal('show');
    });

    

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });    
});

    

