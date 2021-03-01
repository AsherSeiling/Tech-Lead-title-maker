// © 2020 Asher Seiling

// Display title variable
let title_create = "";
// Aray of add to title
let add_to_title = ["(addressing my haters)", "(Millionare point of view)", "As a millionare","(As a millionare)", "(Dissing the haters)"];

// Main function
function generate_title(){
    const prefix_title = $("#prefix_text").val();
    const random_select_num = Math.floor(Math.random() * add_to_title.length) + 0;
    title_create = prefix_title + " " + add_to_title[random_select_num];
    // Return result
    return_res();

}


// Funciton that returns the result

function return_res(){
    $("#the_title_is").html("The Tech Lead name for this is");
    $("#disp_result").html(title_create);
}