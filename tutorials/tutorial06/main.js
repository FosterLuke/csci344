/**
 * Your logic here (do it however you want).
 * 
 * The things you have to have:
 *    1. A function (i.e., "Event Handler") to initiate the search.
 *    2. Logic to take the user inputs to build the search query.
 *    3. Logic to send the search query to the relevant server.
 *    4. Logic to display the results to the screen.
 * 
 * Provider-specific instructions:
 *    1. If you choose Yelp, allow your user to input both a search term
 *       and a location.
 *          * See API Tutor for guidance: https://www.apitutor.org/
 *          * Sample query: https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Asheville,%20NC&term=pizza
 * 
 *    2. If you choose Spotify, allow your user to specify both a search term 
 *       and a resource type (album, artist, or track).
 *          * See API Tutor for guidance: https://www.apitutor.org/
 *          * Sample query: https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=track
 * 
 *    3. If you choose Twitter, allow your user to specify both a search term
 *       and a result_type (mixed, recent, or popular).
 *          * See API Tutor for guidance: https://www.apitutor.org/
 *          * Sample query: https://www.apitutor.org/twitter/simple/1.1/search/tweets.json?q=cats&result_type=popular
 */

const apiUrl = 'https://www.apitutor.org/spotify/simple/v1/search?q=';

const showResults = async (ev) => {
    const term = document.querySelector('#term').value;
    const resourceType = document.querySelector('#resource_type').value;
    const endpoint = `${apiUrl}${term}&type=${resourceType}`;
    console.log(endpoint);

    const request = await fetch(endpoint);
    const jsonData = await request.json();


    if(resourceType == "artist"){
    const htmlOutput = jsonData.map(artistHtml).join('');
    document.querySelector('#results').innerHTML =  htmlOutput;
    } else if(resourceType == "track"){
        const htmlOutput = jsonData.map(trackHtml).join('');
        document.querySelector('#results').innerHTML =  htmlOutput;
    } else {
        const htmlOutput = jsonData.map(albumHtml).join('');
        document.querySelector('#results').innerHTML =  htmlOutput;
    }


}

const trackHtml = track => {
    return `
        <section class="track">
            <img src="${track.album.image_url}">
            <h2>${track.name}</h2>
            <p>${track.preview_url}</p>
        </section>
        `
} 


const artistHtml = artist => {
    return `
        <section class="track">
            <img src="${artist.image_url}">
            <h2>${artist.name}</h2>
        </section>
        `
} 

const albumHtml = album => {
    return `
        <section class="track">
            <img src="${album.image_url}">
            <h2>${album.name}</h2>
        </section>
        `
} 
