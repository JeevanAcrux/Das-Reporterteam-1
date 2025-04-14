$(document).ready(function() {
    $('.bck-dropdown-button').click(function(){
        var classname = $(this).parent().find('.fa-chevron-up').attr('class');
       $(this).parent().find('.bck-dropdown-content').slideToggle(280);
       if(classname != undefined && classname != null && classname.toLowerCase() == 'fa fa-chevron-up'){
        $(this).parent().find('.fa-chevron-up').removeClass().addClass('fa fa-chevron-down');
       }
       else{
        $(this).parent().find('.fa-chevron-down').removeClass().addClass('fa fa-chevron-up');
       }
       });
});

