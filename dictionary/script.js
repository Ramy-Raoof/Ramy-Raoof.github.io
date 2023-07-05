document.addEventListener("DOMContentLoaded", function() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1133117a2fmshd73c2dc7758392dp12711djsn5c7c88beda20',
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    function dictionary(word) {
      fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then(response => {
          const wordheading = document.getElementById('wordheading');
          const definition = document.getElementById('definition');
          wordheading.innerHTML = response.word;
          definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
        })
        .catch(err => console.error(err));
    }
  
    const searchbtn = document.getElementById('searchbtn');
    const searchinput = document.getElementById('searchinput');
  
    searchbtn.addEventListener('click', e => {
      e.preventDefault();
      dictionary(searchinput.value);
    });
  });
  
