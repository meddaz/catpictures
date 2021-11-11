var url = 'https://aws.random.cat/meow';

$.getJSON(url, function (data) {
  
  display.innerHTML =   `<img src="${data.file}" alt="cat(s)">` 
    
    
});