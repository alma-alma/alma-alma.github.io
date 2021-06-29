let imagesData = [];
let data = {
    photo: '',
    title: '',
    description: ','
  };

// first photo
let currentPhoto = 0;
data = {
    photo: './images/P4050001.JPG',
    title: 'Boy is eating noodles',
    description: 'Description - long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows,'
  };
imagesData.push(data);
console.log(imagesData[currentPhoto]);
console.log('konec ladeni');

// second photo
currentPhoto++;
data = {
    photo: './images/P6201581.JPG',
    title: 'Snidane v prostredcich IPCHO',
    description: 'Description - long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows,'
  };
imagesData.push(data);
console.log(imagesData[currentPhoto]);
console.log('konec ladeni');

// third photo
currentPhoto++;
data = {
    photo: './images/P6231661.JPG',
    title: 'Posledni vecere',
    description: 'Description - long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows,'
  };
imagesData.push(data);
console.log(imagesData[currentPhoto]);
console.log('konec ladeni');

// fourth photo
currentPhoto++;
data = {
    photo: './images/P6261688.JPG',
    title: 'Uzena ryba',
    description: 'Description - long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows,'
  };
imagesData.push(data);
console.log(imagesData[currentPhoto]);

// fifth photo
currentPhoto++;
data = {
    photo: './images/P6261697.JPG',
    title: 'Samovar',
    description: 'Description - long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows,'
  };
imagesData.push(data);
console.log(imagesData[currentPhoto]);

// sixth photo
currentPhoto++;
data = {
    photo: './images/P6281721.JPG',
    title: 'Rybar prodava uzene ryby',
    description: 'Description - long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows,'
  };
imagesData.push(data);
console.log(imagesData[currentPhoto]);

// seventh photo
currentPhoto++;
data = {
    photo: './images/P6281722.JPG',
    title: 'Pani vybira uzenou rybu',
    description: 'Description - long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows,'
  };
imagesData.push(data);
console.log(imagesData[currentPhoto]);

// eighth photo
currentPhoto++;
data = {
    photo: './images/PB130006.JPG',
    title: 'Prvni curry po prijezdu do Kolomba',
    description: 'Description - long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows,'
  };
imagesData.push(data);
console.log(imagesData[currentPhoto]);

// ninth photo
currentPhoto++;
data = {
    photo: './images/PB130007.JPG',
    title: 'Nektere omacky maji barvu, jakoby je pred nami uz nekdo jedl',
    description: 'Description - long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows,'
  };
imagesData.push(data);
console.log(imagesData[currentPhoto]);

// tenth photo
currentPhoto++;
data = {
    photo: './images/DSC_0050.JPG',
    title: 'Krab je dietni strava',
    description: 'Description - long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows,'
  };
imagesData.push(data);
console.log(imagesData[currentPhoto]);

// eleventh photo
currentPhoto++;
data = {
    photo: './images/DSC_0053.JPG',
    title: 'Krab po veceri',
    description: 'Description - long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows, long text for many rows,'
  };
imagesData.push(data);
console.log(imagesData[currentPhoto]);

// funkce pro zobrazeni aktualni fotky
let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);
  $('#photo-title').text(imagesData[photoNumber].title);
  $('#photo-description').text(imagesData[photoNumber].description);
  //displayThumbnails();
}

//zobrazeni od zacatku
currentPhoto=0;
loadPhoto(currentPhoto);

$('#right-arrow').click(() => {
  let mySelector = document.querySelectorAll('#thumbnail');
  mySelector[currentPhoto].dataset.current = 'no';
  currentPhoto++;
  if(currentPhoto >= imagesData.length) {
    currentPhoto = 0;
  };
  mySelector[currentPhoto].dataset.current = 'yes';
  loadPhoto(currentPhoto);
})

$('#left-arrow').click(() => {
  let mySelector = document.querySelectorAll('#thumbnail');
  mySelector[currentPhoto].dataset.current = 'no';
   currentPhoto--;
  if(currentPhoto < 0) {
    currentPhoto = imagesData.length-1;
  };
  mySelector[currentPhoto].dataset.current = 'yes';
  loadPhoto(currentPhoto);
})

var thumbnailCurrent = '';
let displayThumbnails = () => {
  imagesData.forEach((item,index)=> {
    if (index===currentPhoto) {
      thumbnailCurrent = 'yes';
    } else {
      thumbnailCurrent = 'no';
    };
    $('#thumbnail-container').append('<img title="'+ item.title + '" id="thumbnail" class="thumbnail" data-current="' +thumbnailCurrent +'" data-index="' + index +'" src="'+item.photo+ '">');
  });
};
displayThumbnails();
$('.thumbnail').click((event) => {
  let mySelector = document.querySelectorAll('#thumbnail');
  mySelector[currentPhoto].dataset.current = 'no';
  currentPhoto = $(event.target).attr('data-index');
  loadPhoto(currentPhoto);
  mySelector[currentPhoto].dataset.current = 'yes';
  }
 );