$(document).ready(function() {
    $('.dashtab a').click(function(event) {
        event.preventDefault();
        var thisid = $(this).attr('href');
        $(".dashtab a").removeClass('active');
        $(this).addClass('active');
        $('.dashtabdiv').css('display', 'none');
        $(thisid).css('display', 'block');
    });

    var abitems = $("div.refund");
    if(abitems.length > 4) {
        abitems.parent().parent('.walletrefund').append('<div class="seemorebtn"><a href="#" class="morebbBoxab"> See More </a></div>'); 
        $('.morebbBoxab').on('click',function(e){
            e.preventDefault();
            if($(this).hasClass('.fullopen')){
                $(this).removeClass('.fullopen');
                $(this).parent().parent('.walletrefund').children('.forheight').css('height',266);
                $(this).html('See More ');
                if(abitems.length > 8) {
                    $('.forheight').mCustomScrollbar('destroy');
                }
            }
            else {
                $(this).addClass('.fullopen');
                $(this).parent().parent('.walletrefund').children('.forheight').css('height', 'auto');
                $(this).html(' See Less ');
                if(abitems.length > 8) {
                    $('.forheight').mCustomScrollbar();
                }
            }
        });
    } 
    if(abitems.length > 8) {
        $('.forheight').mCustomScrollbar();
        setTimeout(function() {$('.forheight').mCustomScrollbar('destroy');}, 500);
    }

});

$(()=>{
    $("#buy").click(function(){
        $("#launcher").click();
    });

        if(urlParam('ecn') == "yes")
        {
            $("#alert").attr("class","alert alert-danger");
    $("#alert").css("display","block");
    $("#alert").html("Your wallet does not have enough balance to purchase <br> <strong>add some money to your wallet</strong>");

    setTimeout(() => {
        $("#alert").css("display","none");
    }, 4000);
    }

    
});


function urlParam(name){
var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
return results[1] || 0;
}

$(document).ready(function () {
    // $("#manage").attr("class", "active");
      $("#payout").attr("class", "active");
      $("#payout").attr("href", "#");
 });

 $("#requestUpgrade").click(function(){
             console.log("clicked upgrade");
             
         });

         function showResponse()
         {
             console.log("Click of upgrade");
             $("#requestUpgrade").html("Requesting.....");
             $.ajax({
                 url:"/requestUpgrade",
                 method:"GET",
                 success:function(data)
                 {
                     $("#alert").attr("class","alert alert-success");
                     $("#alert").css("display","block");
                     $("#alert").html("Your membership upgrade request has been submitted");
                     $("#requestUpgrade").html("Requested an Upgrade");
                 },
                 error:function(data)
                 {
                     
                 }
             });
         }