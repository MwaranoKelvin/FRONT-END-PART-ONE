        // PART 1: Variables & Conditionals 
        const jokes = [
            "Why is my name Kelvin? Because I am above C level! 😎",
            "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
            "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
            "Why don't programmers like nature? It has too many bugs! 🌳",
            "What's a programmer's favorite hangout place? The Foo Bar! 🍺",
            "Why did the programmer quit his job? He didn't get arrays! 💸",
            "How do you comfort a JavaScript bug? You console it! 🤗",
            "Why do Java developers wear glasses? Because they can't C# ! 👓",
            "What do you call a programmer from Finland? Nerdic! ❄️",
            "Why did the developer go broke? Because he used up all his cache! 💰",
            "What's the object-oriented way to become wealthy? Inheritance! 👑"
        ];
        
        let jokeCount = 0; // Variable to track jokes shown on the page
        let isRainbowMode = false; // Conditional state variable


        // PART 2:In this section, I demonstrated the application of Reusable Functions
        const getRandomJoke = () => jokes[Math.floor(Math.random() * jokes.length)];
        
        const updateJokeDisplay = (newJoke = getRandomJoke()) => { // Function with default parameter
            document.getElementById('joke').textContent = newJoke;
            jokeCount++; // After a joke is displayed, increment the count
            document.getElementById('stats').textContent = `Jokes shown: ${jokeCount}`; // Template literal
        };

        // PART 3: Loops Examples 
        // Loop 1: Display all available jokes in console on load
        console.log("🎭 All available jokes:");
        jokes.forEach((joke, index) => console.log(`${index + 1}. ${joke}`)); // forEach loop

        // Loop 2: Create initial joke pool validation
        for (let i = 0; i < jokes.length; i++) { // Traditional for loop
            if (jokes[i].length < 10) console.warn(`Short joke detected at index ${i}`);
        }

        // PART 4: DOM Manipulations 
        // DOM Manipulation 1: Set initial random joke on page load
        window.addEventListener('load', () => updateJokeDisplay());

        // DOM Manipulation 2: Event listener for new joke button
        document.getElementById('newJoke').addEventListener('click', () => updateJokeDisplay());

        // DOM Manipulation 3: Class toggle for rainbow styling
        document.getElementById('styleToggle').addEventListener('click', () => {
            const jokeElement = document.getElementById('joke');
            isRainbowMode = !isRainbowMode; 
            
            if (isRainbowMode) {
                jokeElement.classList.add('rainbow'); // Add CSS class
                document.getElementById('styleToggle').textContent = 'Normal Mode';
            } else {
                jokeElement.classList.remove('rainbow'); // Remove CSS class
                document.getElementById('styleToggle').textContent = 'Rainbow Mode';
            }
        });

        // Dynamic title update based on condition (DOM manipulation + Conditional)
        setTimeout(() => { 
            document.title = jokeCount > 0 ? `Dev Jokes (${jokeCount} shown)` : 'Dev Jokes - Get Started!';
        }, 100);