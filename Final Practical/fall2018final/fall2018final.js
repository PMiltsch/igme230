'use strict';
        let articlechoose = document.querySelector('select'); // the select menu
        let articleDisplay = document.querySelector('#selectedarticle');  // the space for the verse to display
        let article = "article0.txt" ; // the chosen verse; initialize with first menu option
        

        function updateArticle(article) {
    let articleRequest = new XMLHttpRequest();  // defines a specific request
    articleRequest.open('GET', article);  // specifies what to do when request is sent
    articleRequest.responseType = 'text'; // specifies that the files should be treated as text
    articleRequest.onload = function () {  // specifies what to do when file is loaded
        articleDisplay.innerHTML = articleRequest.response;  // place the response text in the selected element
    };
    articleRequest.send(); // actually sends the request
};

articleChoose.onchange = function () {
    article = articleChoose.value;
    updateArticle(article);
};

articleChoose.value = article; // shows initial menu option
    updateArticle(article);  // shows intial content



