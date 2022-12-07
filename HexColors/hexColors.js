function colorChange(){
    const hex_text = document.getElementById("hex-code");
    const hex_for_body = document.getElementsByTagName("body")[0];
    var hex_map =[
        "0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"
        ];
    var hex='';
    for(var i=0;i < 6; i++){
        var random_index = Math.floor(Math.random()* hex_map.length);
        hex+=hex_map[random_index];
    }
    hex_text.innerHTML = hex;
    hex_for_body.style.background = "#" + hex;
}