window.addEventListener('load', () => {

  const images = [
    'moreImages/image1.jpg',
    'moreImages/image2.jpg',
    'moreImages/image3.jpg',
    'moreImages/image4.jpg',
    'moreImages/image5.jpg',
    'moreImages/image6.jpg',
    'moreImages/image7.jpg',
    'moreImages/image8.jpg',
    'moreImages/image9.jpg',

    // Add more image URLs here
  ];



  /*Kopierad från föreläsning exempel*/

   // We need to add the event listener to the body 
    window.addEventListener('activate.bs.scrollspy', function () {
        // To find the element we can use the fact that bootstrap
        //adds the active class to the a-element. Then we can get the current section via the href attribute 
        navelement = document.querySelector('#myListSpy a.active').getAttribute('href');
        // Finally we add an activated class to the found element 
        document.querySelector(navelement).classList.add("activated");
  
      });
  
      //for every image you click on in gallery a new modal gets created, the src for each modal is the same source for for every image 
      /*Get all the images in gallery*/
      let allImages = document.querySelectorAll(".clickImage");
      /*Looping trough all images*/
      allImages.forEach(function (img) {
        /*Adding a listener that listens to click one very image*/
        img.addEventListener("click", function () {
  
          let src = img.getAttribute("src");
          let modalImg = document.querySelector("#modalImage");
          modalImg.setAttribute("src", src);
          let modal = document.querySelector("#myImageModal");
          /*Creates a new modal*/
          let myModal = new bootstrap.Modal(modal);
          myModal.show();
        });
      });
      
    /*Listening to the when u scroll event on the current page*/ 
    window.addEventListener('scroll', function() {
      
      let currentPage = location.pathname.split('/').pop();
      if (currentPage === 'gallery.html') {

        if (window.scrollY > 10) {
          document.querySelector('.hideText').classList.add('hide');
        } else {
          document.querySelector('.hideText').classList.remove('activated');
        }

      }

    });

    
    
    const rowGallery = document.querySelector(".rowGallery");
    // Loop through the images array and create <img> elements for each image
    images.forEach(imageUrl => {

      let col = document.createElement('col');
      let img = document.createElement('img');
      col.classList.add("col-md-6", "col-lg-3", "mb-5", "mb-lg-0", "px-2", "py-0", "text-center", "rounded");
      
      img.classList.add("imageHoverEffect", "img-fluid", "align-self-center", "imagesgallery", "clickImage");
      img.src = imageUrl;
      col.appendChild(img);
      rowGallery.appendChild(col);


    });

    
    

    let showMoreGallery = document.querySelector("#showMoreGalleryBtn");
    showMoreGallery.addEventListener("click", function() {

      console.log("HEEEJ");
     let moreRows = document.querySelector(".rowGallery");
      
      
      if (moreRows.classList.contains('d-none')) {
        // The container has the class 'd-none'
        moreRows.classList.remove("d-none");
        showMoreGallery.textContent = "Show less";
      } else {
        // The container does not have the class 'd-none'
        moreRows.classList.add("d-none");
        showMoreGallery.textContent = "Show more";
      }
      
      


    });


});