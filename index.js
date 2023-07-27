const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const exchangeIcon = document.querySelector(".exchange");
const selectTag = document.querySelectorAll("select");
const icons = document.querySelectorAll(".row i");
const translateBtn = document.querySelector("button");

selectTag.forEach((tag, id) =>{
    for(let country_code in countries){
        let selected = id == 0 ? country_code ==
        "en-GB" ? "selected" : "" : country_code ==
        "de-DE" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        //the line above, figure out how the hell to do that because if you type it out, the ${} becomes part of the 'option' expression instead of acting as a selector
        tag.insertAdjacentHTML("beforeend", option);
    }
}
);