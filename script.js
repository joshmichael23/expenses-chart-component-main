$(document).ready(function(){
    let active;
    $.ajax({
        url: "data.json",
        method: "GET",
        success: function(data) {
            $.each(data, function( index, data ) {

                var barscontainer = $(`<div class="bars-container"></div>`);
                var hover = $(`<div class="bar-hover hide">$${data.amount}</div>`);
                var bar =  $(`<div class="bar" style="height: ${data.amount*2}px"></div>`);
                if(data.day=='wed'){
                    bar.addClass('bar-highest');
                }
                var day = $(`<p class="day">${data.day}</p>`);
                
                hover.appendTo(barscontainer);
                bar.appendTo(barscontainer);
                day.appendTo(barscontainer);
                barscontainer.appendTo($("div.graph"));
            });
        }
    });

    
    $('.graph-container').on("mouseenter", "div.bar", function(){
        $('.bar-hover').each(function(){
            $(this).addClass('hide').removeClass('active');
        });

    
        $(this).prev('.bar-hover').removeClass('hide').addClass('active');

        console.log(active);
    });
});

