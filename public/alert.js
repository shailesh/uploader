$(function() {
   $("#button").click(function(){
      if (confirm("Click OK to continue?")){
         $("#form").submit();
      }
   });
});
