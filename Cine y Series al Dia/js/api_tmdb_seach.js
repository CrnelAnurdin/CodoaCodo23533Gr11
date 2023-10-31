        const apiKey = 'a09da150e865a54ff7e24de489927ac9';
        const searchInput = document.getElementById('searchInput');
        const resultsGrid = document.getElementById('resultsGrid');

        searchInput.addEventListener('input', searchMovies);

        function searchMovies() {
            const searchQuery = searchInput.value;
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
                .then(response => response.json())
                .then(data => {
                    displayResults(data.results);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        function displayResults(results) {
            resultsGrid.innerHTML = ''; 
            for (const result of results) {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                // Create an anchor element for each movie card
                const movieLink = document.createElement('a');
                movieLink.href = `vid/video.mp4`; // Adjust the URL as needed
                movieLink.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w200${result.poster_path}" alt="${result.title}">
                    <h3>${result.title}</h3>
                    <p>Release Date: ${result.release_date}</p>
                    <p>Vote Average: ${result.vote_average}</p>
                `;

                // Append the anchor element to the movie card
                movieCard.appendChild(movieLink);

                resultsGrid.appendChild(movieCard);
        }      
    }