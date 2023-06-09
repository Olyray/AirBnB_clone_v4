$(document).ready(function(){
    let clickedAmenities = {};
    // Check if it has been ticked
    $('input[type="checkbox"]').change(function(){
        const amenityName = $(this).attr("data-name");
        const amenityID = $(this).attr("data-id");
        if (this.checked){
            clickedAmenities[amenityID] = amenityName;
        }
        else{
            delete clickedAmenities[amenityID];
        }
        //If it has, store it in the h4 attribute
        const checkedItems = Object.values(clickedAmenities).join(", ");
        $(".amenities h4").text(checkedItems);
    });
});