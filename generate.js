const generateButton = document.getElementById("generate-button");

const itemNameInput = document.getElementById("item-name-input");
const itemLevelInput = document.getElementById("item-level-input");
const itemTypeInput = document.getElementById("item-type-input");
const itemQualityInput = document.getElementById("item-quality-input");
const itemImageInput = document.getElementById("item-image-input");

const unusualTextInput = document.getElementById("unusual-name-input")
const unusualCheckboxInput = document.getElementById("unusual-checkbox-input")

const limitedCheckboxInput = document.getElementById("limited-checkbox-input")
const limitedTextInput = document.getElementById("limited-amount-input")

const festivizedCheckboxInput = document.getElementById("festivized-checkbox-input")
const limitedEditionCheckBoxInput = document.getElementById("edition-checkbox-input")

const tradableCheckboxInput = document.getElementById("tradable-checkbox-input")
const craftableCheckboxInput = document.getElementById("crafting-checkbox-input")
const achievementCheckboxInput = document.getElementById("achievement-checkbox-input")

const halloweenCheckboxInput = document.getElementById("halloween-checkbox-input")
const pyrolandCheckboxInput = document.getElementById("pyroland-checkbox-input")

const craftedCheckboxInput = document.getElementById("crafted-checkbox-input")
const craftedTextInput = document.getElementById("crafted-text-input")

const giftCheckboxInput = document.getElementById("gift-checkbox-input")
const giftTextInput = document.getElementById("gift-text-input")
const giftDateInput = document.getElementById("gift-date-input")

const itemSetCheckboxInput = document.getElementById("item-set-checkbox-input")
const itemSetNameInput = document.getElementById("item-set-text-input")

const itemSetBonusCheckboxInput = document.getElementById("item-set-bonus-checkbox-input")
const itemSetBonusTextInput = document.getElementById("item-set-bonus-text-input")

const strangeCheckboxInput = document.getElementById("strange-counters-checkbox-input")
const strangeCounterDiv = document.getElementById("strange-counters-div")

const cardItemName = document.getElementById("card-item-name");
const cardItemLevel = document.getElementById("card-item-level");
const cardItemImg = document.getElementById("item-card-img");
const cardAttributesList = document.getElementById("attributes-list-div");
const cardItemUnusualText = document.getElementById("card-item-unusual")
const cardItemFestivizedText = document.getElementById("card-item-festivized")
const cardItemLimitedText = document.getElementById("card-item-limit")
const cardItemTradableText = document.getElementById("card-item-tradable")
const cardItemRestrictionText = document.getElementById("card-item-restriction")

const cardItemUserGift = document.getElementById("card-item-gift-user")
const cardItemDateGift = document.getElementById("card-item-gift-date")

const cardItemUnusualIcon = document.getElementById("unusual-icon")
const cardItemHalloweenIcon = document.getElementById("halloween-icon")
const cardItemStrangeIcon = document.getElementById("strange-icon")
const cardItemPyrovisionIcon = document.getElementById("pyrovision-icon")

const cardItemCraftedText = document.getElementById("card-item-crafted")

const attributesDiv = document.getElementById("attributes-div")

const cardItemSetListDiv = document.getElementById("item-set-list-div")
const cardItemSetName = document.getElementById("item-set-name")

const cardItemSetBonus = document.getElementById("item-set-bonus")
const cardItemSetBonusText = document.getElementById("item-set-bonus-text")

const cardItemStrangeCounterDiv = document.getElementById("strange-counters-list-div")

qualityColours = ["#FFD700", "#B2B2B2", "#CF6A32", "#4D7455", "#476291", "#8650AC", "#AA0000", "#38F3AB", "#FAFAFA", "#70B04A", "#A50F79", "#B0C3D9", "#5E98D9", "#4B69FF", "#8847FF", "#D32CE6", "#EB4B4B"];

positiveColour = "rgb(143,190,236)"
negativeColour = "rgb(255,62,62)"
neutralColour = "rgb(227,218,195)"


function generateButtonClicked(){

    cardItemName.innerHTML = itemNameInput.value ?? "Conniver's Kunai";
    if (itemImageInput.files[0]){
        cardItemImg.src = window.URL.createObjectURL(itemImageInput.files[0])
    }
    
    cardItemName.style.color = qualityColours[itemQualityInput.value]
    cardItemLevel.innerHTML = `Level ${itemLevelInput.value} ${itemTypeInput.value}`

    const allAttributes = document.getElementsByClassName('attributes-text-input');
    const allAttributesTypes = document.getElementsByClassName('attributes-select-input');
    var attributesText = [];
    var attributesTextType = []

    cardAttributesList.innerHTML = ""

    for (var i = 0; i < allAttributes.length; i++) {
        attributesText.push(allAttributes[i].value);
        attributesTextType.push(allAttributesTypes[i].value);

        const attributeText = document.createElement("p")

        if (allAttributesTypes[i].value == "positive"){
            attributeText.className = "item-card-text positive-color"
        } else if (allAttributesTypes[i].value == "negative") {
            attributeText.className = "item-card-text negative-color"
        } else {
            attributeText.className = "item-card-text neutral-color"
        }
        
        attributeText.innerHTML = allAttributes[i].value

        cardAttributesList.appendChild(attributeText)
    }

    if (unusualCheckboxInput.checked){
        cardItemUnusualText.innerHTML = `★ Unusual Effect: ${unusualTextInput.value}`
        cardItemUnusualText.style.display = "block"
    } else{
        cardItemUnusualText.innerHTML = ""
        cardItemUnusualText.style.display = "none"
    }

    if (festivizedCheckboxInput.checked){
        cardItemFestivizedText.innerHTML = "Festivized"
        cardItemFestivizedText.style.display = "block"
    } else{
        cardItemFestivizedText.innerHTML = ""
        cardItemFestivizedText.style.display = "none"
    }

    if (limitedCheckboxInput.checked){
        cardItemLimitedText.innerHTML = `This is a limited use item. Uses: ${limitedTextInput.value}`
        cardItemLimitedText.style.display = "block"
    } else {
        cardItemLimitedText.innerHTML = ""
        cardItemLimitedText.style.display = "none"
    }

    if (tradableCheckboxInput.checked && !tradableCheckboxInput.disabled && !achievementCheckboxInput.checked){
        cardItemTradableText.innerHTML = "( Not Tradable or Marketable )"
        cardItemTradableText.style.display = "block"
    } else if (tradableCheckboxInput.checked && !tradableCheckboxInput.disabled && achievementCheckboxInput.checked && !achievementCheckboxInput.disabled){
        cardItemTradableText.innerHTML = "( Achievement Item: Not Tradable or Marketable )"
        cardItemTradableText.style.display = "block"
    } else if (craftableCheckboxInput.checked && !craftableCheckboxInput.disabled){
        cardItemTradableText.innerHTML = "( Not Usable in Crafting )"
        cardItemTradableText.style.display = "block"
    } else{
        cardItemTradableText.innerHTML = ""
        cardItemTradableText.style.display = "none"
    }

    if (unusualCheckboxInput.checked){
        cardItemUnusualIcon.style.display = "block"
    } else{
        cardItemUnusualIcon.style.display = "none"
    }

    if (strangeCheckboxInput.checked) {
        cardItemStrangeIcon.style.display = "block"
        cardItemLevel.style.display = "none"
        cardItemStrangeCounterDiv.style.display = "block"
        cardItemStrangeCounterDiv.innerHTML = ""

        const allStrangeCounters = document.getElementsByClassName('strange-counters-text-input');
        const allStrangeCountersNumber = document.getElementsByClassName('strange-counters-number-input');
        
        var allStrangeCountersTextArray = [];
        var allStrangeCounterNumberArray = []


        for (var i = 0; i < allStrangeCounters.length; i++) {
            allStrangeCountersTextArray.push(allStrangeCounters[i].value);
            allStrangeCounterNumberArray.push(allStrangeCountersNumber[i].value);

            const attributeText = document.createElement("p")

            if (i==0){
                attributeText.innerHTML = `${itemTypeInput.value} - ${allStrangeCounters[i].value}: ${allStrangeCountersNumber[i].value}`
            }else{
                attributeText.innerHTML = `(${allStrangeCounters[i].value}: ${allStrangeCountersNumber[i].value})`
            }
            
            attributeText.className = "item-card-text level-color"

            cardItemStrangeCounterDiv.appendChild(attributeText)
        }

    } else {
        cardItemStrangeIcon.style.display = "none"
        cardItemLevel.style.display = "block"
        cardItemStrangeCounterDiv.style.display = "none"
    }

    if (halloweenCheckboxInput.checked) {
        cardItemHalloweenIcon.style.display = "block"
        cardItemRestrictionText.style.display = "block"
    } else {
        cardItemHalloweenIcon.style.display = "none"
        cardItemRestrictionText.style.display = "none"
    }

    if (pyrolandCheckboxInput.checked) {
        cardItemPyrovisionIcon.style.display = "block"
    } else {
        cardItemPyrovisionIcon.style.display = "none"
    }

    if (limitedEditionCheckBoxInput.checked){
        cardItemLevel.style.color = "yellow"
    } else{
        cardItemLevel.style.color = "rgb(114,103,90)"
    }

    if (giftCheckboxInput.checked){
        const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const dateSplited = giftDateInput.value.split("-")
        const hourSplited = dateSplited[2].split("T")
        cardItemUserGift.innerHTML = `Gift from: ${giftTextInput.value}`
        cardItemDateGift.innerHTML = `Date Recieved: ${dateSplited[2].split("T")[0] } ${months[parseInt(dateSplited[1]) - 1]} ${dateSplited[0]} (${hourSplited[1]})`

        cardItemUserGift.style.display = "block"
        cardItemDateGift.style.display = "block"
    } else{
        cardItemUserGift.style.display = "none"
        cardItemDateGift.style.display = "none"
    }

    if (craftedCheckboxInput.checked){
        cardItemCraftedText.innerHTML = `Crafted by ${craftedTextInput.value}`
        cardItemCraftedText.style.display = "block"
    } else{
        cardItemCraftedText.style.display = "none"
    }

    cardItemSetListDiv.innerHTML = ""

    if (itemSetCheckboxInput.checked){
        const allItemSets = document.getElementsByClassName('item-set-text-input');
        const allItemSetsTypes = document.getElementsByClassName('item-set-select-input');
        var allItemSetsText = [];
        var allItemSetsTextType = []

        cardItemSetName.innerHTML = itemSetNameInput.value
        cardItemSetName.style.display = "block"

        for (var i = 0; i < allItemSets.length; i++) {
            allItemSetsText.push(allItemSets[i].value);
            allItemSetsTextType.push(allItemSetsTypes[i].value);


            const attributeText = document.createElement("p")

            if (allItemSetsTypes[i].value == "complete") {
                attributeText.className = "item-card-text complete-item-set-color"
            } else if (allItemSetsTypes[i].value == "incomplete") {
                attributeText.className = "item-card-text incomplete-item-set-color"
            }
            attributeText.innerHTML = allItemSets[i].value

            document.getElementById("item-set-list-div").appendChild(attributeText)
        }
    } else{
        cardItemSetName.style.display = "none"
    }

    if (itemSetBonusCheckboxInput.checked && !itemSetBonusCheckboxInput.disabled && itemSetCheckboxInput.checked){
        cardItemSetBonus.style.display = "block"
        cardItemSetBonusText.style.display = "block"
        cardItemSetBonusText.innerHTML = itemSetBonusTextInput.value
    } else{
        cardItemSetBonus.style.display = "none"
        cardItemSetBonusText.style.display = "none"
    }

    if (strangeCounterDiv.checked){

    }

    window.scrollTo(0,0)


}

function generateNewAttribute(){

    const attributeDiv = document.createElement("div");
    attributeDiv.className = "attributes-item-div"

    const inputDiv = document.createElement("input")
    inputDiv.className = "attributes-text-input"
    attributeDiv.appendChild(inputDiv)

    const selectDiv = document.createElement("select");
    selectDiv.className = "attributes-select-input"
    attributeDiv.appendChild(selectDiv)

    const positiveOption = document.createElement("option");
    positiveOption.innerHTML = "Positive"
    positiveOption.value = "positive"
    selectDiv.appendChild(positiveOption)

    const negativeOption = document.createElement("option");
    negativeOption.innerHTML = "Negative"
    negativeOption.value = "negative"
    selectDiv.appendChild(negativeOption)

    const neutralOption = document.createElement("option");
    neutralOption.innerHTML = "Neutral"
    neutralOption.value = "neutral"
    selectDiv.appendChild(neutralOption)

    const deleteButton = document.createElement("button");
    deleteButton.className = "attributes-delete-button"
    deleteButton.onclick = function () {this.parentNode.parentNode.removeChild(this.parentNode)}
    attributeDiv.appendChild(deleteButton)


    const buttonImage = document.createElement("img")
    buttonImage.src = "./media/images/delete.png"
    buttonImage.height = 20
    buttonImage.width = 20
    deleteButton.appendChild(buttonImage)

    attributesDiv.appendChild(attributeDiv)
}

function generateNewItemSetMember(){
    const attributeDiv = document.createElement("div");
    attributeDiv.className = "item-set-item-div"

    const inputDiv = document.createElement("input")
    inputDiv.className = "item-set-text-input"
    attributeDiv.appendChild(inputDiv)

    const selectDiv = document.createElement("select");
    selectDiv.className = "item-set-select-input"
    attributeDiv.appendChild(selectDiv)

    const positiveOption = document.createElement("option");
    positiveOption.innerHTML = "Incomplete"
    positiveOption.value = "incomplete"
    selectDiv.appendChild(positiveOption)

    const negativeOption = document.createElement("option");
    negativeOption.innerHTML = "Complete"
    negativeOption.value = "complete"
    selectDiv.appendChild(negativeOption)


    const deleteButton = document.createElement("button");
    deleteButton.className = "attributes-delete-button"
    deleteButton.onclick = function () { this.parentNode.parentNode.removeChild(this.parentNode) }
    attributeDiv.appendChild(deleteButton)


    const buttonImage = document.createElement("img")
    buttonImage.src = "./media/images/delete.png"
    buttonImage.height = 20
    buttonImage.width = 20
    deleteButton.appendChild(buttonImage)

    document.getElementById("item-set-div").appendChild(attributeDiv)
}

function generateNewStrangeCounter(){
    const attributeDiv = document.createElement("div");
    attributeDiv.className = "strange-counters-item-div"

    const inputDiv = document.createElement("input")
    inputDiv.className = "strange-counters-text-input"
    attributeDiv.appendChild(inputDiv)

    const selectDiv = document.createElement("input");
    selectDiv.type = "number"
    selectDiv.className = "strange-counters-number-input margin-left"
    selectDiv.style = "width: 200px;"
    attributeDiv.appendChild(selectDiv)

    const deleteButton = document.createElement("button");
    deleteButton.className = "attributes-delete-button"
    deleteButton.onclick = function () { this.parentNode.parentNode.removeChild(this.parentNode) }
    attributeDiv.appendChild(deleteButton)


    const buttonImage = document.createElement("img")
    buttonImage.src = "./media/images/delete.png"
    buttonImage.height = 20
    buttonImage.width = 20
    deleteButton.appendChild(buttonImage)

    document.getElementById("strange-counters-div").appendChild(attributeDiv)
}


function takeScreenshot(){
    html2canvas(document.querySelector("#item-card-div")).then(canvas => {
        var img = canvas.toDataURL("image/png");
        var image = document.createElement('a');
        image.download = 'itemcard.png';
        image.href = img;
        image.click()
    });
}

function takeScreenshotAndCopy(){
    html2canvas(document.querySelector("#item-card-div")).then(canvas => {
        var img = canvas.toDataURL("image/png");
        
        navigator.clipboard.write([
            new ClipboardItem({
                'image/png': urltoBlob(img)
            })
        ]);
    });
}

function urltoBlob(dataUrl) {
    var array = dataUrl.split(','), mime = array[0].match(/:(.*?);/)[1];

    string = atob(array[1]), n = string.length, uInt8array = new Uint8Array(n);

    while (n--) {
        uInt8array[n] = string.charCodeAt(n);
    }

    return new Blob([uInt8array], { type: mime });
}

function itemSetCheckboxInputOnClick(){
    
    itemSetNameInput.disabled = !itemSetCheckboxInput.checked; 
    itemSetBonusCheckboxInput.disabled = !itemSetCheckboxInput.checked

    if (itemSetBonusCheckboxInput.disabled){
        itemSetBonusTextInput.disabled = true;
    } else if (!itemSetBonusCheckboxInput.disabled && itemSetBonusCheckboxInput.checked){
        itemSetBonusTextInput.disabled = false;
    }
}