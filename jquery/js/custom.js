// Instancia jQuery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag

    let items = $('.featured-item') // class

    let destaques = $('#featured') //id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link')

    $('.featured-item:first h4').append('<span class="badge bg-secondary bg-danger">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary bg-danger">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary bg-danger">Novo</span>')
    // $('.featured-item:first h4').addClass('active') adicionar classe
    // $('.featured-item:first h4').removeClass('active') remover classe
    // $('.featured-item:first h4').toggleClass('active') ativado por algum evento
    // $('.featured-item:first h4').hide('active') esconder elemonto
    // $('.featured-item:first h4').show('active') exibir elemento
    // $('.featured-item:first h4').fade('active') adiciona uma transição ao elemento (In ou Out + tempo de transição)
    // $('.featured-item:first h4').css('color', '#ffffff') apenas um elemento css
    // $('.featured-item:first h4').css({ para modificar mais de um elemento css 
        // 'color': '#ffffff',
        // 'background': '#ff0000',
        // 'font-weight': '100'
    // })
    
    $('.featured-item h4').click( function(){

        $(this).css({
            'color': '#f00',
            'font-weight': '100'
        });

    });

/*
 * Manipulaçao de evento
 */

    // $('.featured-item h4').dblclick( function(){
    // $('.featured-item h4').mouseleave( function(){
    // $('.featured-item h4').blur( function(){
    // $('.featured-item h4').hover( function(){
        // console.log($(this).find('h4').text() + ' - ' + ($(this).find('h6').text()); 

    $('.featured-item h4').mouseenter( function(){
        console.log($(this).find('h4').text());
    });


    $('.featured-item a').on('click', function(event){

        event.preventDefault();

        alert('Produto esgotado')
    })

})    