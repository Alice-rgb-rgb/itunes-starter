function run() {

    var artist = "drake";

    $.ajax({
        url: 'https://itunes.apple.com/search?media=music&term=' + artist,
        dataType: "json",
        success: process
    });
}
//change
function process(data) {
    
    console.log(data)

    let tableHTML = "";

    /*  loop over data and build table rows so that they come
        out like tableHTML += "<tr><td>" + data[i].songName + "</td></tr>"    */
    
    //add completed table into HTML table tag
    document.getElementById("output").innerHTML = tableHTML;
    
}
