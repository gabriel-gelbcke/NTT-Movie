import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Search {
  Poster: String,
  Title: String,
  Plot: String,
  Released: String,
  Genre: String,
  Awards: String
}

// export interface Search {

// }

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
// Array<Movie>

// http://www.omdbapi.com/?t=batman

export class SearchComponent {
  movies: any = [
    {
      "Title": "Alita: Battle Angel",
      "Year": "2019",
      "Rated": "PG-13",
      "Released": "14 Feb 2019",
      "Runtime": "122 min",
      "Genre": "Action, Adventure, Sci-Fi",
      "Director": "Robert Rodriguez",
      "Writer": "James Cameron, Laeta Kalogridis, Yukito Kishiro",
      "Actors": "Rosa Salazar, Christoph Waltz, Jennifer Connelly",
      "Plot": "A deactivated cyborg's revived, but can't remember anything of her past and goes on a quest to find out who she is.",
      "Language": "English, Spanish",
      "Country": "Japan, Canada, United States",
      "Awards": "10 wins & 25 nominations",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTQzYWYwYjctY2JhZS00NTYzLTllM2UtZWY5ZTk0NmYwYzIyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "62%"
        },
        {
          "Source": "Metacritic",
          "Value": "53/100"
        }
      ],
      "Metascore": "53",
      "imdbRating": "7.3",
      "imdbVotes": "290,601",
      "imdbID": "tt0437086",
      "Type": "movie",
      "DVD": "09 Jul 2019",
      "BoxOffice": "$85,838,210",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Back to the Future",
      "Year": "1985",
      "Rated": "PG",
      "Released": "03 Jul 1985",
      "Runtime": "116 min",
      "Genre": "Adventure, Comedy, Sci-Fi",
      "Director": "Robert Zemeckis",
      "Writer": "Robert Zemeckis, Bob Gale",
      "Actors": "Michael J. Fox, Christopher Lloyd, Lea Thompson",
      "Plot": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Won 1 Oscar. 23 wins & 25 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.5/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "93%"
        },
        {
          "Source": "Metacritic",
          "Value": "87/100"
        }
      ],
      "Metascore": "87",
      "imdbRating": "8.5",
      "imdbVotes": "1,291,396",
      "imdbID": "tt0088763",
      "Type": "movie",
      "DVD": "08 Aug 2013",
      "BoxOffice": "$214,077,472",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Batman",
      "Year": "1989",
      "Rated": "PG-13",
      "Released": "23 Jun 1989",
      "Runtime": "126 min",
      "Genre": "Action, Adventure",
      "Director": "Tim Burton",
      "Writer": "Bob Kane, Sam Hamm, Warren Skaaren",
      "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger",
      "Plot": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
      "Language": "English, French, Spanish",
      "Country": "United States, United Kingdom",
      "Awards": "Won 1 Oscar. 11 wins & 28 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.5/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "76%"
        },
        {
          "Source": "Metacritic",
          "Value": "69/100"
        }
      ],
      "Metascore": "69",
      "imdbRating": "7.5",
      "imdbVotes": "402,377",
      "imdbID": "tt0096895",
      "Type": "movie",
      "DVD": "24 Jul 2014",
      "BoxOffice": "$251,409,241",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Batman Forever",
      "Year": "1995",
      "Rated": "PG-13",
      "Released": "16 Jun 1995",
      "Runtime": "121 min",
      "Genre": "Action, Adventure",
      "Director": "Joel Schumacher",
      "Writer": "Bob Kane, Lee Batchler, Janet Scott Batchler",
      "Actors": "Val Kilmer, Tommy Lee Jones, Jim Carrey",
      "Plot": "Batman must battle former district attorney Harvey Dent, who is now Two-Face and Edward Nygma, The Riddler with help from an amorous psychologist and a young circus acrobat who becomes his sidekick, Robin.",
      "Language": "English",
      "Country": "United States, United Kingdom",
      "Awards": "Nominated for 3 Oscars. 10 wins & 26 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "41%"
        },
        {
          "Source": "Metacritic",
          "Value": "51/100"
        }
      ],
      "Metascore": "51",
      "imdbRating": "5.4",
      "imdbVotes": "265,031",
      "imdbID": "tt0112462",
      "Type": "movie",
      "DVD": "31 Jan 2013",
      "BoxOffice": "$184,069,126",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Batman & Robin",
      "Year": "1997",
      "Rated": "PG-13",
      "Released": "20 Jun 1997",
      "Runtime": "125 min",
      "Genre": "Action, Sci-Fi",
      "Director": "Joel Schumacher",
      "Writer": "Bob Kane, Akiva Goldsman",
      "Actors": "Arnold Schwarzenegger, George Clooney, Chris O'Donnell",
      "Plot": "Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.",
      "Language": "English",
      "Country": "United States, United Kingdom",
      "Awards": "10 wins & 22 nominations",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "3.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "12%"
        },
        {
          "Source": "Metacritic",
          "Value": "28/100"
        }
      ],
      "Metascore": "28",
      "imdbRating": "3.8",
      "imdbVotes": "267,224",
      "imdbID": "tt0118688",
      "Type": "movie",
      "DVD": "31 Jan 2013",
      "BoxOffice": "$107,353,792",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Jurassic Park",
      "Year": "1993",
      "Rated": "PG-13",
      "Released": "11 Jun 1993",
      "Runtime": "127 min",
      "Genre": "Action, Adventure, Sci-Fi",
      "Director": "Steven Spielberg",
      "Writer": "Michael Crichton, David Koepp",
      "Actors": "Sam Neill, Laura Dern, Jeff Goldblum",
      "Plot": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      "Language": "English, Spanish",
      "Country": "United States",
      "Awards": "Won 3 Oscars. 44 wins & 27 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.2/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "92%"
        },
        {
          "Source": "Metacritic",
          "Value": "68/100"
        }
      ],
      "Metascore": "68",
      "imdbRating": "8.2",
      "imdbVotes": "1,060,897",
      "imdbID": "tt0107290",
      "Type": "movie",
      "DVD": "18 May 2015",
      "BoxOffice": "$407,185,075",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
      "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      "Language": "English, Japanese, French",
      "Country": "United States, United Kingdom",
      "Awards": "Won 4 Oscars. 159 wins & 220 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "87%"
        },
        {
          "Source": "Metacritic",
          "Value": "74/100"
        }
      ],
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "2,530,924",
      "imdbID": "tt1375666",
      "Type": "movie",
      "DVD": "20 Jun 2013",
      "BoxOffice": "$292,587,330",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Indiana Jones and the Last Crusade",
      "Year": "1989",
      "Rated": "PG-13",
      "Released": "24 May 1989",
      "Runtime": "127 min",
      "Genre": "Action, Adventure",
      "Director": "Steven Spielberg",
      "Writer": "Jeffrey Boam, George Lucas, Menno Meyjes",
      "Actors": "Harrison Ford, Sean Connery, Alison Doody",
      "Plot": "In 1938, after his father goes missing while pursuing the Holy Grail, Indiana Jones finds himself up against the Nazis again to stop them from obtaining its powers.",
      "Language": "English, German, Greek, Latin, Italian",
      "Country": "United States",
      "Awards": "Won 1 Oscar. 9 wins & 24 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2Q0ODg4ZmItNDZiYi00ZWY5LTg2NzctNmYwZjA5OThmNzE1XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.2/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "84%"
        },
        {
          "Source": "Metacritic",
          "Value": "65/100"
        }
      ],
      "Metascore": "65",
      "imdbRating": "8.2",
      "imdbVotes": "807,806",
      "imdbID": "tt0097576",
      "Type": "movie",
      "DVD": "28 Jan 2014",
      "BoxOffice": "$197,171,806",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Rambo",
      "Year": "2008",
      "Rated": "R",
      "Released": "25 Jan 2008",
      "Runtime": "92 min",
      "Genre": "Action, Adventure, Thriller",
      "Director": "Sylvester Stallone",
      "Writer": "Art Monterastelli, Sylvester Stallone, David Morrell",
      "Actors": "Sylvester Stallone, Julie Benz, Matthew Marsden",
      "Plot": "In Thailand, John Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.",
      "Language": "English, Burmese, Thai",
      "Country": "United States, Germany",
      "Awards": "1 win & 1 nomination",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.0/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "38%"
        },
        {
          "Source": "Metacritic",
          "Value": "46/100"
        }
      ],
      "Metascore": "46",
      "imdbRating": "7.0",
      "imdbVotes": "243,158",
      "imdbID": "tt0462499",
      "Type": "movie",
      "DVD": "26 Aug 2016",
      "BoxOffice": "$42,754,105",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "Rated": "PG",
      "Released": "25 May 1977",
      "Runtime": "121 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "George Lucas",
      "Writer": "George Lucas",
      "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
      "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
      "Language": "English",
      "Country": "United States",
      "Awards": "Won 6 Oscars. 67 wins & 31 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.6/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "93%"
        },
        {
          "Source": "Metacritic",
          "Value": "90/100"
        }
      ],
      "Metascore": "90",
      "imdbRating": "8.6",
      "imdbVotes": "1,442,969",
      "imdbID": "tt0076759",
      "Type": "movie",
      "DVD": "10 Oct 2016",
      "BoxOffice": "$460,998,507",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Shawshank Redemption",
      "Year": "1994",
      "Rated": "R",
      "Released": "14 Oct 1994",
      "Runtime": "142 min",
      "Genre": "Drama",
      "Director": "Frank Darabont",
      "Writer": "Stephen King, Frank Darabont",
      "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
      "Plot": "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 7 Oscars. 21 wins & 42 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "9.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "89%"
        },
        {
          "Source": "Metacritic",
          "Value": "82/100"
        }
      ],
      "Metascore": "82",
      "imdbRating": "9.3",
      "imdbVotes": "2,865,799",
      "imdbID": "tt0111161",
      "Type": "movie",
      "DVD": "15 Aug 2008",
      "BoxOffice": "$28,767,189",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    }
  ]


}