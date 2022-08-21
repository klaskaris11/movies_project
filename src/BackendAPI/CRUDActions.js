// Abstract CRUD methods
export const getResource = (url) => {
    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then((actualData) => {
            return Promise.resolve(actualData.results);
        })
        .catch((error) => {
            console.log("Error: ", error);
            return Promise.reject(error);
        });
}