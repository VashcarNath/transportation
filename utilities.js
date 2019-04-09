function carousel()
{
  var index = 0;
  var image = document.getElementsByClassName("d-block");
  for(var i = 0; i< image.length; i++)
  {
      image[i].style.display = "none";
  }
  index++;
  if(index > image.length)
  {
      index = 1;
  }
  image[index-1].style.display = "block";  
  setTimeout(carousel, 9000); 
}
