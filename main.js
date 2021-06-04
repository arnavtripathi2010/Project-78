
  var images = ["61zTGIEvQoL.jpg","26-268437_family-clipart-only-child-only-father-clipart.png", "mother.png", "brother.png", "sister.JPEG"];
 var names = ["Fmaily Book","Ashutosh prasad", "Rakhi tripathi", "Arnav tripathi", "ameya tripathi"]; 
 var i = 0; 
 function update() 
 {
   i++;
    var numbers_of_family_member_in_array = 4
     if(i > numbers_of_family_member_in_array ) 
     {
        i = 0; 
      } 
      var updatedImage = images[i];
       var updatedName = names[i]; 
       document.getElementById("family_member_image").src = updatedImage;
        document.getElementById("family_member_name").innerHTML = updatedName; }
