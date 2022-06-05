const mainImage = document.querySelector('#image');
const images = ['pic1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 'pic4.jpeg', 'pic5.jpeg', 'pic6.jpeg', 'pic7.jpeg', 'pic8.jpeg', 'pic9.jpeg', 'pic10.jpeg', 'pic11.jpeg'];

    
function changeImage() {
   let randomIndex = Math.floor(Math.random() * images.length);
   console.log(randomIndex);
    mainImage.src = 'images/' + images[randomIndex];
}