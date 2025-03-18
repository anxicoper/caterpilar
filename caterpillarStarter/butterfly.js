$(function() {  
    
       $('#restore').hide();
    
    
    
        $('#transform').on('click', function() {
    
            // Change heading text
    
            $('h1').text('The Butterfly');
    
    
    
            // Change paragraph content
    
            $('#p1').html('This is a <strong>butterfly</strong> in its natural habitat:');
    
    
    
            // Change image to butterfly
    
            $('img').attr('src', 'https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png');
    
    
    
            // Change link text and URL
    
            $('a').attr('href', 'https://en.wikipedia.org/wiki/Butterfly');
    
            $('a').text('Butterfly');
    
    
    
            // Change heading and paragraph color
    
            $('h1, #p1').css('color', 'orange');
    
    
    
            // Add new content
    
            const butterflyFacts = $('<p class="result">Butterflies taste with their feet and have a lifespan of about a month.</p>');
    
            $('body').append(butterflyFacts);
    
    
    
            // Toggle buttons
    
            $('#transform').hide();
    
            $('#restore').show();
    
        });
    
    
    
        $('#restore').on('click', function() {
    
            location.reload(true); 
    
        }); 
    
    });
    