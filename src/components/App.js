import React, { useEffect, useState } from "react";

function App() {
    const [dogImage, setDogImage] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setDogImage(data.message);
            setIsLoaded(true);
    });
    }, [])

    if (!isLoaded) return <p>Loading...</p> 

    return <img alt="A Random Dog" src={dogImage} />
}

export default App;
