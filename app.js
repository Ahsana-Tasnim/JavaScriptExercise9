/**
 * Ahsana Tasnim
 * Exercise 9
 */

'use strict';

let $ = function(id) {
    return document.getElementById(id);
}

let paragraphColorChange = function(p, colour){
    p.style.color = colour;
}

let toggle = function(){
    let h2 = this;
    let toggleButton = h2.getElementsByTagName('i')[0];
    let topicDiv = h2.nextElementSibling;

    if(!topicDiv.classList.contains('close')){
        topicDiv.classList.add('close');

    }else if(topicDiv.classList.contains('close')){
        topicDiv.classList.remove('close');


    }
}

window.onload = function(){
    //get h2
    let faqs = $('faqs');
    let h2Elements = faqs.getElementsByTagName('h2');
    let paragraphs = document.getElementsByTagName('p');

    for(let i = 0; i < paragraphs.length; i++){
        paragraphs[i].addEventListener('mouseenter', function(){
            paragraphColorChange(this, 'green');
        })

        paragraphs[i].addEventListener('mouseout', function(){
            paragraphColorChange(this, 'grey');
        })    
    }

    for (let i = 0; i < h2Elements.length; i++){
        h2Elements[i].addEventListener('click', toggle);
    }
}