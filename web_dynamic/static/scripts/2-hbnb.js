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
    $.get("http://localhost:5001/api/v1/status/", function(data){
        //if the status is okay, add the class available to api_status
        console.log(data.status);
        if (data.status === 'OK'){
            $("#api_status").addClass("available");
        }
        //else remove the class from api_status
        else{
            $("#api_staus").removeClass("available");
        }
    });
});