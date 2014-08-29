	/*---- Countdown Timer ----*/
	var countDownTill = '2014/12/12'; // Give the date format like this yyyy/mm/dd
	
	$('#countdown-time').countdown(countDownTill, function(event) {
     $(this).html(event.strftime(''
       + '<div class="count-number-text-holder"><span class="counting-numbers">%w</span> <span class="text">weeks</span> </div>'
       + '<div class="count-number-text-holder"><span class="counting-numbers">%d</span> <span class="text">days</span> </div>'
       + '<div class="count-number-text-holder"><span class="counting-numbers">%H</span> <span class="text">hours</span> </div>'
       + '<div class="count-number-text-holder"><span class="counting-numbers">%M</span> <span class="text">minutes</span> </div>'
       + '<div class="count-number-text-holder"><span class="counting-numbers">%S</span> <span class="text">seconds</span></div>'));
	});
	/*---- Ends Countdown Timer ----*/
	
	/*---- Team Image Slider ----*/
	$("#team-slider").owlCarousel({
		lazyLoad : true,
		items : 2
	});
	/*---- Ends Team Image Slider ----*/
	$("html").niceScroll({cursorcolor: "#2B3E50", touchbehavior: false, bouncescroll: true});
   
   $("#subscriberBtn").click(function(){
   var postData = {email_address:$("#subscribers").val()};
   if($("#subscribers").val().length>0){
	$.ajax({
				type: 'post',
				url: 'http://192.168.6.103/TF/comming_soon/php/subscribers.php',
				data:postData,	
				beforeSend : function (){
					$("#subscriberBtn").attr("disabled","disabled").html("").append("<i class='fa fa-spinner fa-spin'></i>");
				},
				complete : function (){
					$("#subscriberBtn").removeAttr("disabled","disabled").html("").append("<i class='fa fa-envelope'></i> Subscribe");
				},
				success: function (data) {
				 if(data.success){					
					$("#msgs").removeClass("alert-warning").addClass("alert-success").html(data.success).fadeIn().fadeOut(8000);					
				 }else if(data.error){					
					$("#msgs").removeClass("alert-success").addClass("alert-warning").html(data.error).fadeIn().fadeOut(8000);
				}				 
				}
			  });
   }else{	
	$("#msgs").removeClass("alert-success").addClass("alert-warning").html("Enter Valid Email").fadeIn().fadeOut(8000);
   }
	
			  
   });
   
   $("#contact_btn").click(function(){
   var postData = {contact_us_email:$("#contact_us_email").val(),contact_msg:$("#contact_msg").val()};
   if($("#contact_us_email").val().length>0){
		if($("#contact_msg").val()){
			$.ajax({
				type: 'post',
				url: 'http://192.168.6.103/TF/comming_soon/php/contact_us.php',
				data:postData,	
				beforeSend : function (){
					$("#contact_btn").attr("disabled","disabled").html("").append("<i class='fa fa-spinner fa-spin'></i>");
				},
				complete : function (){
					$("#contact_btn").removeAttr("disabled","disabled").html("").append("Submit");
				},
				success: function (data) {
				 if(data.success){					
					$("#c_msgs").removeClass("alert-warning").addClass("alert-success").html(data.success).fadeIn().fadeOut(8000);					
				 }else if(data.error){					
					$("#c_msgs").removeClass("alert-success").addClass("alert-warning").html(data.error).fadeIn().fadeOut(8000);
				}				 
				}
			  });
		}else{
			$("#c_msgs").removeClass("alert-success").addClass("alert-warning").html("Enter a msg.").fadeIn().fadeOut(8000);
		}	
   }else{	
	$("#c_msgs").removeClass("alert-success").addClass("alert-warning").html("Enter Valid Email").fadeIn().fadeOut(8000);
   }
	
			  
   });   
   
   $("#nav-bar").scroll_navi();
  
   
   