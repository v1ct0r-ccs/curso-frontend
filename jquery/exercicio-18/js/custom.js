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

    $('.featured-item h4').mouseenter( function(){
        console.log($(this).find('h4').text());
    });


    $('.featured-item a').on('click', function(event){

        event.preventDefault();

        alert('Produto esgotado')
    })

})    