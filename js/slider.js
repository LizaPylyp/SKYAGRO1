let offset = 0;
const sliderLine = document.querySelector('.video-list');

document.querySelector('.video-next').addEventListener('click', function(){
offset = offset + 617;
if (offset >2468) {
  offset = 0;
}
sliderLine.style.left = -offset + 'px';
});

document.querySelector('.video-prev').addEventListener('click', function(){
  offset = offset - 617;
  if (offset <0) {
    offset = 2468;
  }
  sliderLine.style.left = -offset + 'px';
  });