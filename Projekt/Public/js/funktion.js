function create() {
    //create a div
    var div = document.createElement("div");

    //create class = "test" for dive
    var divattr = document.createAttribute("class");
    divattr.value = "test";

    //add class = "test" to div
    div.setAttributeNode(divattr);

    //create edit botton
    var input = document.createElement("input");
    var inputattr = document.createAttribute("type");
    inputattr.value = "button";
    input.setAttributeNode(inputattr);
    var inputattr1 = document.createAttribute("value");
    inputattr1.value = "edit";
    input.setAttributeNode(inputattr1);

    //create text cscshabi
    var text = document.createTextNode("cscshabi");

    //add botton and text to dive
    div.appendChild(input);
    div.appendChild(text);

    //create dive style
    var style = document.createAttribute("style");
    div.setAttributeNode(style);
    div.style.backgroundColor = "#F00";
    div.style.borderWidth = "20px";
    div.style.borderColor = "#000";
    div.style.width = "500px";
    div.style.height = "500px";
    div.style.marginLeft = "30%";
    div.style.marginTop = "1%";

    //add div to body
    document.getElementsByTagName("body").item(0).appendChild(div);
}
