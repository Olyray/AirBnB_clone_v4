console.log("The script is working");
$(document).ready(function(){
    console.log("Inside the document module")
    let clickedAmenities = {};
    // Check if it has been ticked
    console.log(clickedAmenities);
    $('input[type="checkbox"]').change(function(){
        const amenityName = $(this).attr("data-name");
        const amenityID = $(this).attr("data-id");
        console.log(amenityID);
        console.log(amenityName);
        if (this.checked){
            clickedAmenities[amenityID] = amenityName;
        }
        else{
            delete clickedAmenities[amenityID];
        }
        //If it has, store it in the h4 attribute
        const checkedItems = Object.values(clickedAmenities).join(", ");
        console.log(clickedAmenities);
        $(".amenities h4").text(checkedItems);
        
    });
});