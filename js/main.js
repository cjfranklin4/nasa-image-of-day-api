document.querySelector('button').addEventListener('click', getPic);

function getPic (){
    let picDate = document.querySelector('input').value;
    let picImg = document.getElementById('picImg')
    let picVid = document.getElementById('picVid')
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date='+picDate;

    fetch(url)
        .then(res => res.json()) 
        .then(data => {
            //console.log(data)
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
