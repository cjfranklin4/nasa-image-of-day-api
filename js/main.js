document.querySelector('button').addEventListener('click', getPic);


//APOD Api
function getPic (){
    let picDate = document.querySelector('input').value;
    let picImg = document.getElementById('picImg')
    let picVid = document.getElementById('picVid')
    const url = 'https://api.nasa.gov/planetary/apod?api_key=jQVaJ7ob9ZZdeL4wNdtPyfPAagLeUm37Yb6XzcL1&date='+picDate;

    fetch(url)
        .then(res => res.json()) 
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText=data.title;
            
            if(data.media_type === 'image'){
                picImg.style.display = 'block'
                picVid.style.display="none"
                document.querySelector('img').src=data.url
            } else if (data.media_type === 'video') {
                picVid.style.display = 'block'
                picImg.style.display='none'
                document.querySelector('#picVid').src=data.url
            } else {
                alert('Please enter a valid date')

            }
           document.querySelector('.des').innerText=data.explanation 

        })
        .catch(err => {
            console.log(`error ${err}`)
        })

    
}

//Modal Image 
let modal = document.getElementById("myModal");
let img = document.getElementById("picImg");
let modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
