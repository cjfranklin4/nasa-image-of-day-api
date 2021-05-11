//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPic);

function getPic (){
    let picDate = document.querySelector('input').value;
    let picImg = document.getElementById('picImg')
    let picVid = document.getElementById('picVid')
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date='+picDate;

    fetch(url)
        .then(res => res.json()) //parse response as JSON
        .then(data => {
            console.log(data) //DELETE THIS LATER
            document.querySelector('h2').innerText=data.title;
            
            if(data.media_type === 'image'){
                picImg.style.display = 'block'
                document.querySelector('img').src=data.url
            } else{
                picVid.style.display = 'block'
                document.querySelector('video').src=data.url
            }
           document.querySelector('h3').innerText=data.explanation 

        })
        .catch(err => {
            console.log(`error ${err}`)
        })

    
}
