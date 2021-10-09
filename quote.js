const btn = document.getElementById("bt")

btn.addEventListener("click", func)

var quote = document.getElementById("bq")
var cite = document.getElementById("ct")
function func(e){

  var quoteObj = {
    quote : "",
    from : "",
  }
  fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "b13af12b9fmsha24f7a90401edacp1c40f4jsned7137de695d"
      }
    })
    .then(response => {
      return response.json();
    }).then(json => {
      quote.textContent = `"${json.content}"`
      cite.textContent = json.originator.name
      })
    .catch(err => {
      console.error(err);
    });
 
}
