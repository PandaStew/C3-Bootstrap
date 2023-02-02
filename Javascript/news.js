var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b4809d1f05334dfb8b91385ea5b422f9';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
