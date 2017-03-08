/* global Materialize */

(function ($) {
    $(function () {

      	$(".element").typed({
        	strings: [
        		'$ Completei o Segundo Grau integrado ao Técnico em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul (IFRS) no ano de 2016, e, atualmente, estou cursando o Terceiro Grau em Ciências da Computação na Universidade Luterana do Brasil (ULBRA). Possuo sólidos conhecimentos em Desenvolvimento Web, incluindo os aspectos de análise e produção que a programação de software exige. Minha experiência possui ênfase em PHP e JavaScript, visto que as linguagens são vastamente implantadas nos sistemas da Prefeitura Municipal de Canoas, atual local de trabalho, onde também são utilizadas metodologias ágeis, como o Kanban e o Scrum.'
			],
        	typeSpeed: -10
      	});

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy({scrollOffset: 0});

    }); // end of document ready
})(jQuery); // end of jQuery name space

