const inputForm = document.querySelector("#message-text");
const formButton = document.querySelector("#message-button");
const messageListDiv = document.querySelector("#message-list");
const messageListArr = [];

/*Imperative approach I always use 
function createListLI(elmText){
    const newDiv = document.createElement("div");
    newDiv.textContent = elmText;
    messageListDiv.appendChild(newDiv);
}

formButton.addEventListener("click", function(){
    messageListArr.push(inputForm.value);
    createListLI(messageListArr.at(messageListArr.length-1));
    inputForm.value = "";
})
*/




/*Functional Programming Approach w/ Currying*/
const createElm = tag => document.createElement(tag);
const createText = content => document.createTextNode(content);

const addClass = R.curry(function(className, elm){
    elm.classList.add(className);
    return elm
}
)

const append = R.curry(function(childElm, parentElm){
    parentElm.appendChild(childElm);
    return parentElm
})


const attr = R.curry(function(attrName, attrValue, elm){
    elm.setAttribute(attrName, attrValue);
    return elm
})


const addMessage = function(content){
    return R.compose(
        append(createText(content)),
        attr("data-message", content),
        addClass("bg-light"),
        addClass("p-2")

    )(createElm("div"))
}

formButton.addEventListener("click", function(){
    messageListDiv.appendChild(addMessage(inputForm.value));
    inputForm.value = "";
})
