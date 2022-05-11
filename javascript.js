/* Final Project: OMDb Movie Search Database
    Author: Andrew Escamilla
    Filename: javascript.js
*/

$("#searchBtn").on("click", function() {
    var searchInput = $("#searchInput").val();
    var searchType = $("#searchType").val();

    $.getJSON("https://www.omdbapi.com/?apikey=130d2b6b&type=" + searchType + "&s=" + searchInput, function(result) {
        console.log(result);
        if (result.Response  === "True") {
            document.getElementById("results").innerHTML = "";

            for (var movie of result.Search) { 
                var cardDiv = $("<div></div>");
                cardDiv.attr("class", "card");
                cardDiv.attr("style", "width: 15rem;")

                var cardDivImg = $("<img/>");
                cardDivImg.attr("class", "card-img-top");
                cardDivImg.attr("src", movie.Poster);
                

                var cardBody = $("<div></div>");
                cardBody.attr("class", "class-body");

                var cardTitle = $("<h5></h5>");
                cardTitle.attr("class", "card-title");
                cardTitle.attr("class", "mt-3");
                cardTitle.text(movie.Title);

                var cardType = $("<p></p>");
                cardType.attr("class", "card-text");
                cardType.text("Type: " + movie.Type);

                var cardYear = $("<p></p>");
                cardYear.attr("class", "card-text");
                cardYear.text("Year: " + movie.Year);

                var cardImdbLink = $("<a>View in IMDb</a>");
                cardImdbLink.attr("class", "card-link");
                cardImdbLink.attr("href", "https://www.imdb.com/title/" + movie.imdbID);
                cardImdbLink.attr("target", "_blank");
                

                cardBody.append(cardDivImg);
                cardBody.append(cardTitle);
                cardBody.append(cardType);
                cardBody.append(cardYear);
                cardBody.append(cardImdbLink);

                cardDiv.append(cardBody);
                
                $("#results").append(cardDiv);
            }

        } else {
            alert("Search not found.")
        }
    });
});

