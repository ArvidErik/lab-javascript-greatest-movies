
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const data = [
    {
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Crime', 'Drama'],
        score: 9.3
    },
    {
        title: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        genre: ['Crime'],
        score: 9.2
    },
    {
        title: 'The Godfather: Part II',
        year: 1974,
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        genre: ['Crime', 'Drama'],
    }
]

function getAllDirectors(moviesArray) {
    return moviesArray.map((element) => {
        return element.director
    })
}

// console.log(getAllDirectors(data))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let filteredMovies = moviesArray.filter((element) => {
        return element.director === "Steven Spielberg" && element.genre.includes("Drama")
    });
    let result = filteredMovies.length
    return result
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) return 0;

    let scoreArray = moviesArray.map((element) => {
        return element.score;
    });
    // console.log(scoreArray);

    // clean: remove undefined
    // let cleanedScoreArray = scoreArray.filter((element) => {
    //     return element !== undefined;
    // })
    // console.log(cleanedScoreArray);

    let sumOfScores = scoreArray.reduce((acc, element) => {
        return acc + element;
    });
    // console.log(sumOfScores)
    let avg = (sumOfScores / scoreArray.length).toFixed(2)

    return Number(avg)
}

// console.log(scoresAverage(data))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((element) => {
        return element.genre.includes("Drama")
    });
    // console.log(dramaMovies);

    if (dramaMovies.length === 0) {
        return 0;

    } else {
        let scoreArray = dramaMovies.map((element) => {
            return element.score;
        });

        let cleanedScoreArray = scoreArray.filter((element) => {
            return element !== undefined;
        })
        // console.log(cleanedScoreArray);

        let sumOfScores = cleanedScoreArray.reduce((acc, element) => {
            return acc + element;
        });
        // console.log(sumOfScores)
        let avg = (sumOfScores / cleanedScoreArray.length).toFixed(2)

        return Number(avg)
    }
}

// console.log(dramaMoviesScore(data));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArr = moviesArray.map((element) => {
        return element;
    })
    const sortedArr = newArr.sort((a, b) => {
        return a.year - b.year;
    })
    return sortedArr;
}
console.log(orderByYear(data));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArr = moviesArray.map((element) => {
        return element;
    });
    const alphaOrder = newArr.sort((a, b) => {
        return a.title - b.title;
    });

    const first20 = [];

    // for (let i = 0; i <= 20; i++) {
    //     let title = alphaOrder[i].alphaOrder.title
    //     first20.push(title);
    // }
    // return first20
}


orderAlphabetically(data);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
