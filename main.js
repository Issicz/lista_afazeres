
$(document).ready(function(){
    $('#adicionar').click(function(e){
        e.preventDefault();
        var tarefaAdd = $('#tarefaAdd').val();
        if (tarefaAdd !== ''){
            $('#Tarefas').append('<li>' + tarefaAdd + '</li>');
        }
    })
    
    $('#Tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });

})
