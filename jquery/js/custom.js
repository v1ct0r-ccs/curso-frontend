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

    /*
     * Callback
     * entendendo ações que começam ao termino de outra
     */

    // $('.featured-item:nth(1)').hide(2000, function(){
    //     // esse é o callback
    //     alert( $(this).find('h4').text() + 'esgotado')
    // })

    $('.featured-item:nth(1)')
       .hide(2000, function(){
        // esse é o callback
            console.log( $(this).find('h4').text() + 'esgotado')
    })
       .show(2000, function(){
            console.log( $(this).find('h4').text() + 'em estoque')
       })

    /*
    * Animações
    */
       const duracao = 1000 // equivalente a 1 segundo
    $('.featured-item:nth(0)')
       .hide(duracao)
       .show(duracao)
       .fadeOut(duracao)
       .fadeIn(duracao)
       .toggle(duracao)
       .toggle(duracao)

    $('#form-submit').on('click', function(){

        e.preventDefault()

        if($('#email').val() != '' ){

            $('#email').animate({
                opacity: "toggle",
                top: "-50"

            }, duracao, function(){
                console.log($(this).val())
            })
        }
            
    });

    /*
     * Ouvinte de eventos .nav-modal-open
     */

    $('.nav-modal-open').on('click', function(e){

        e.preventDefault();

        let elem = $(this).attr('rel')

        $('.modal-body').html($('#'+elem).html())
        $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modalId'))

        myModal.show()

    })

    $('body').on('submit', '.modal-body .form', function(e){

        e.preventDefault()
  
        const inputName = $('#nome')
        const inputEmail = $('#email')
  
        validate(inputName)
        validate(inputEmail)
  
        if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
           console.log('preencher corretamente os campos obrigatórios')
           return false
        } else {
           $(this).submit()  
        }
     })
  
     $('body').on('blur', '#nome', function(){
        validate($(this))
     })
  
     $('body').on('blur', '#email', function(){
        validate($(this))
     })

     $('body').on('blur', '#date', function(){
        validate($(this))
        $(this).mask('00/00/0000');
     }) 
  
     $('body').on('blur', '#time', function(){
        validate($(this))
        $(this).mask('00:00');
     })
  
     $('body').on('blur', '#cep', function(){
        validate($(this))
        $(this).mask('00000-000');
     })
  
     $('body').on('blur', '#telefone', function(){
        validate($(this))
        $(this).mask('00000-0000');
     })
  
     $('body').on('blur', '#cpf', function(){
        validate($(this))
        $(this).mask('000.000.000-00');
     })

})    