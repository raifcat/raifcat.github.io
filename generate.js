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

const rankCheckboxInput = document.getElementById("rank-checkbox-input")

const itemTagCheckboxInput = document.getElementById("item-tag-checkbox-input")

const creditCheckboxInput = document.getElementById("credit-checkbox-input")
const creditTextInput = document.getElementById("credit-text-input")

const scoutCheckboxInput = document.getElementById("scout-checkbox-input")
const soldierCheckboxInput = document.getElementById("soldier-checkbox-input")
const pyroCheckboxInput = document.getElementById("pyro-checkbox-input")
const demomanCheckboxInput = document.getElementById("demoman-checkbox-input")
const heavyCheckboxInput = document.getElementById("heavy-checkbox-input")
const engieCheckboxInput = document.getElementById("engie-checkbox-input")
const medicCheckboxInput = document.getElementById("medic-checkbox-input")
const sniperCheckboxInput = document.getElementById("sniper-checkbox-input")
const spyCheckboxInput = document.getElementById("spy-checkbox-input")

const jsonFileInput = document.getElementById("json-file-input")

const cardItemScoutImg = document.getElementById("item-card-scout-img")
const cardItemSoldierImg = document.getElementById("item-card-soldier-img")
const cardItemPyroImg = document.getElementById("item-card-pyro-img")
const cardItemDemomanImg = document.getElementById("item-card-demoman-img")
const cardItemHeavyImg = document.getElementById("item-card-heavy-img")
const cardItemEngieImg = document.getElementById("item-card-engie-img")
const cardItemMedicImg = document.getElementById("item-card-medic-img")
const cardItemSniperImg = document.getElementById("item-card-sniper-img")
const cardItemSpyImg = document.getElementById("item-card-spy-img")


const cardItemName = document.getElementById("card-item-name");
const cardItemLevel = document.getElementById("card-item-level");
const cardItemImg = document.getElementById("item-card-img");
const cardAttributesList = document.getElementById("attributes-list-div");
const cardItemUnusualText = document.getElementById("card-item-unusual")
const cardItemFestivizedText = document.getElementById("card-item-festivized")
const cardItemLimitedText = document.getElementById("card-item-limit")
const cardItemTradableText = document.getElementById("card-item-tradable")
const cardItemRestrictionText = document.getElementById("card-item-restriction")

const cardItemCreditText = document.getElementById("item-card-credits-text")

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

const allStrangeCounters = document.getElementsByClassName('strange-counters-text-input');
const allStrangeCountersNumber = document.getElementsByClassName('strange-counters-number-input');

var allStrangeCountersTextArray = [];
var allStrangeCounterNumberArray = []

const allAttributes = document.getElementsByClassName('attributes-text-input');
const allAttributesTypes = document.getElementsByClassName('attributes-select-input');

var attributesText = [];
var attributesTextType = []

const allItemSets = document.getElementsByClassName('item-set-text-input');
const allItemSetsTypes = document.getElementsByClassName('item-set-select-input');

var allItemSetsText = [];
var allItemSetsTextType = []

function generateButtonClicked(){


    if (!itemTagCheckboxInput.checked) {
        cardItemName.innerHTML = itemNameInput.value;
    } else{
        cardItemName.innerHTML = `"${itemNameInput.value}"`;
    }
    


    function imageToBase64(url, callback) {
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    const base64String = reader.result;
                    callback(base64String);
                };
            });
    }

    if (itemImageInput.files[0]){
        imageToBase64(URL.createObjectURL(itemImageInput.files[0]), function (base64String) {
            cardItemImg.src = base64String;
        });
    } else{
        imageToBase64(cardItemImg.src, function (base64String) {
            cardItemImg.src = base64String;
        });
    }
    
    cardItemName.style.color = qualityColours[itemQualityInput.value]
    cardItemLevel.innerHTML = `Level ${itemLevelInput.value} ${itemTypeInput.value}`

    attributesText = []
    attributesTextType = []

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

    allStrangeCountersTextArray = []
    allStrangeCounterNumberArray = []

    if (!strangeCheckboxInput.checked) {
    for (var i = 0; i < allStrangeCounters.length; i++) {
        allStrangeCountersTextArray.push(allStrangeCounters[i].value);
        allStrangeCounterNumberArray.push(allStrangeCountersNumber[i].value);
    }}

    if (strangeCheckboxInput.checked) {
        cardItemStrangeIcon.style.display = "block"
        cardItemLevel.style.display = "none"
        cardItemStrangeCounterDiv.style.display = "block"
        cardItemStrangeCounterDiv.innerHTML = ""

        
        allStrangeCountersTextArray = [];
        allStrangeCounterNumberArray = []


        const strangeQualities = ["Strange", "Unremarkable", "Scarcely Lethal", "Mildly Menacing", "Somewhat Threatening", "Uncharitable", "Notably Dangerous", "Sufficiently Lethal", "Truly Feared", "Spectacularly Lethal", "Gore-Spattered", "Wicked Nasty", "Positively Inhumane", "Totally Ordinary", "Face-Melting", "Rage-Inducing", "Server-Clearing", "Epic", "Legendary", "Australian", "Hale's Own"]
        const strangeQualityKills = [0, 10, 25, 45, 70, 100, 135, 175, 225, 275, 350, 500, 750, 999, 1000, 1500, 2500, 5000, 7500, 7616, 8500]

        if (itemQualityInput.value == "2"){

        }

        for (var i = 0; i < allStrangeCounters.length; i++) {
            allStrangeCountersTextArray.push(allStrangeCounters[i].value);
            allStrangeCounterNumberArray.push(allStrangeCountersNumber[i].value);

            const attributeText = document.createElement("p")

            if (i==0){
                attributeText.innerHTML = `${itemTypeInput.value} - ${allStrangeCounters[i].value}: ${allStrangeCountersNumber[i].value}`

                if (!itemTagCheckboxInput.checked && rankCheckboxInput.checked && !rankCheckboxInput.disabled){
                    cardItemName.innerHTML = `${strangeQualities[0]} ${cardItemName.innerHTML}`
                }
                
                attributeText.innerHTML = `${strangeQualities[0]} ${itemTypeInput.value} - ${allStrangeCounters[i].value}: ${allStrangeCountersNumber[i].value}`

                for (var a = 0; a < strangeQualities.length; a++) {
                    if (allStrangeCountersNumber[i].value >= strangeQualityKills[a+1]){

                        if (!itemTagCheckboxInput.checked && rankCheckboxInput.checked && !rankCheckboxInput.disabled){
                            cardItemName.innerHTML = `${strangeQualities[a + 1]} ${itemNameInput.value}`
                        }
                        
                        attributeText.innerHTML = `${strangeQualities[a + 1]} ${itemTypeInput.value} - ${allStrangeCounters[i].value}: ${allStrangeCountersNumber[i].value}`
                    } else{
                        break
                    }
                }

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

    allItemSetsText = [];
    allItemSetsTextType = []
    if (!itemSetCheckboxInput.checked) {
    for (var i = 0; i < allItemSets.length; i++) {
        allItemSetsText.push(allItemSets[i].value);
        allItemSetsTextType.push(allItemSetsTypes[i].value);
    }
    }


    cardItemSetListDiv.innerHTML = ""

    if (itemSetCheckboxInput.checked){
        

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

    if (scoutCheckboxInput.checked) { cardItemScoutImg.style.display = "block" } else { cardItemScoutImg.style.display = "none" }
    if (soldierCheckboxInput.checked) { cardItemSoldierImg.style.display = "block" } else { cardItemSoldierImg.style.display = "none" }
    if (pyroCheckboxInput.checked) { cardItemPyroImg.style.display = "block" } else { cardItemPyroImg.style.display = "none" }
    if (demomanCheckboxInput.checked) { cardItemDemomanImg.style.display = "block" } else { cardItemDemomanImg.style.display = "none" }
    if (heavyCheckboxInput.checked) { cardItemHeavyImg.style.display = "block" } else { cardItemHeavyImg.style.display = "none" }
    if (engieCheckboxInput.checked) { cardItemEngieImg.style.display = "block" } else { cardItemEngieImg.style.display = "none" }
    if (medicCheckboxInput.checked) { cardItemMedicImg.style.display = "block" } else { cardItemMedicImg.style.display = "none" }
    if (sniperCheckboxInput.checked) { cardItemSniperImg.style.display = "block" } else { cardItemSniperImg.style.display = "none" }
    if (spyCheckboxInput.checked) { cardItemSpyImg.style.display = "block" } else { cardItemSpyImg.style.display = "none" }

    if (creditCheckboxInput.checked){
        cardItemCreditText.style.display = "block"
        cardItemCreditText.innerHTML = `Made by ${creditTextInput.value}`
    } else{
        cardItemCreditText.style.display = "none"
    }




}



// Set up the loop with setInterval
setInterval(generateButtonClicked, 2000);              


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


function constructJSONFile(){

    


    const json = {
        "version": 1,

        "name": itemNameInput.value,
        "level": itemLevelInput.value,
        "type": itemTypeInput.value,
        "quality": itemQualityInput.value,
        "isLimitedEdition": limitedEditionCheckBoxInput.checked,
        "isFestivied": festivizedCheckboxInput.checked,
        "showRankOnName": rankCheckboxInput.checked,
        "isHalloweenRestricted": halloweenCheckboxInput.checked,
        "isPyrolandRestricted": pyrolandCheckboxInput.checked,
        "isNotTradable": tradableCheckboxInput.checked,
        "isNotCraftable": craftableCheckboxInput.checked,
        "isAchievment": achievementCheckboxInput.checked,
        "usesItemTag": itemTagCheckboxInput.checked,

        "image": cardItemImg.src,

        "isUnusual": unusualCheckboxInput.checked,
        "unusualEffect": unusualTextInput.value,

        "isGift": giftCheckboxInput.checked,
        "giftText": giftTextInput.value,
        "giftDate": giftDateInput.value,

        "isCrafted": craftedCheckboxInput.checked,
        "craftedText": craftedTextInput.value,

        "limitedUse": limitedCheckboxInput.checked,
        "limitedUseNumber": limitedTextInput.value,

        "itemSetEnabled": itemSetCheckboxInput.checked,
        "itemSetName": itemSetNameInput.value,
        "itemSetsText": allItemSetsText,
        "itemSetsType": allItemSetsTextType,

        "itemSetBonusEnabled": itemSetBonusCheckboxInput.checked,
        "itemSetBonusText": itemSetBonusTextInput.value,

        "creditEnabled": creditCheckboxInput.checked,
        "creditText": creditTextInput.value,

        "classesCanUse": {
            "scout": scoutCheckboxInput.checked,
            "soldier": soldierCheckboxInput.checked,
            "pyro": pyroCheckboxInput.checked,
            "demoman": demomanCheckboxInput.checked,
            "heavy": heavyCheckboxInput.checked,
            "engie": engieCheckboxInput.checked,
            "medic": medicCheckboxInput.checked,
            "sniper": sniperCheckboxInput.checked,
            "spy": spyCheckboxInput.checked,

        },

        "limitedAmountActive": limitedCheckboxInput.checked,
        "limitedAmount": limitedTextInput.value,

        "attributesText": attributesText,
        "attributesType": attributesTextType,

        "showStrangeParts": strangeCheckboxInput.checked,
        "strangePartsText": allStrangeCountersTextArray,
        "strangePartsNumber": allStrangeCounterNumberArray

    }



    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(json)));
    element.setAttribute('download', "itemcard.json");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}



function loadJSONFile(){
    var reader = new FileReader();
    reader.onload = readSuccess;
    reader.readAsText(jsonFileInput.files[0]);
    jsonFileInput.value = null

    function readSuccess(evt) {

        

        rawJSON = evt.target.result
        jsonData = JSON.parse(rawJSON);

        console.log(jsonData)

        itemNameInput.value = jsonData["name"]
        itemLevelInput.value = jsonData["level"]
        itemTypeInput.value = jsonData["type"]
        itemQualityInput.value = jsonData["quality"]
        limitedEditionCheckBoxInput.checked = jsonData["isLimitedEdition"]
        festivizedCheckboxInput.checked = jsonData["isFestivized"]
        rankCheckboxInput.checked = jsonData["showRankOnName"]
        halloweenCheckboxInput.checked = jsonData["isHalloweenRestricted"]
        pyrolandCheckboxInput.checked = jsonData["isPyrolandRestricted"]
        itemTagCheckboxInput.checked = jsonData["usesItemTag"]

        cardItemImg.src = jsonData["image"]

        tradableCheckboxInput.checked = jsonData["isNotTradable"]

        if (jsonData["isNotTradable"]){
            craftableCheckboxInput.disabled = true
            achievementCheckboxInput.disabled = false
        } else{
            craftableCheckboxInput.disabled = false
            achievementCheckboxInput.disabled = true
        }

        craftableCheckboxInput.checked = jsonData["isNotCraftable"]

        if (jsonData["isNotCraftable"]) {
            tradableCheckboxInput.disabled = true
            achievementCheckboxInput.disabled = true
        } else{
            tradableCheckboxInput.disabled = false
            achievementCheckboxInput.disabled = false
        }

        achievementCheckboxInput.checked = jsonData["isAchievment"]

        unusualCheckboxInput.checked = jsonData["isUnusual"]
        unusualTextInput.disabled = !jsonData["isUnusual"]
        unusualTextInput.value = jsonData["unusualEffect"]
        giftCheckboxInput.checked = jsonData["isGift"]

        giftTextInput.disabled = !jsonData["isGift"]
        giftDateInput.disabled = !jsonData["isGift"]

        giftTextInput.value = jsonData["giftText"]
        giftDateInput.value = jsonData["giftDate"]

        craftedCheckboxInput.checked = jsonData["isCrafted"]

        craftedTextInput.disabled = !jsonData["isCrafted"]
            
        craftedTextInput.value = jsonData["craftedText"]
        limitedCheckboxInput.checked = jsonData["limitedUse"]
        limitedTextInput.disabled = !jsonData["limitedUse"]
        limitedTextInput.value = jsonData["limitedUseNumber"]
        itemSetCheckboxInput.checked = jsonData["itemSetEnabled"]

        itemSetNameInput.disabled = !jsonData["itemSetEnabled"];
        itemSetBonusCheckboxInput.disabled = !jsonData["itemSetEnabled"];
        
        itemSetNameInput.value = jsonData["itemSetName"]

        itemSetBonusCheckboxInput.checked = jsonData["itemSetBonusEnabled"]

        itemSetBonusTextInput.disabled = !jsonData["itemSetBonusEnabled"]

        itemSetBonusTextInput.value = jsonData["itemSetBonusText"]

        scoutCheckboxInput.checked = jsonData["classesCanUse"]["scout"]
        soldierCheckboxInput.checked = jsonData["classesCanUse"]["soldier"]
        pyroCheckboxInput.checked = jsonData["classesCanUse"]["pyro"]
        demomanCheckboxInput.checked = jsonData["classesCanUse"]["demoman"]
        heavyCheckboxInput.checked = jsonData["classesCanUse"]["heavy"]
        engieCheckboxInput.checked = jsonData["classesCanUse"]["engie"]
        medicCheckboxInput.checked = jsonData["classesCanUse"]["medic"]
        sniperCheckboxInput.checked = jsonData["classesCanUse"]["sniper"]
        spyCheckboxInput.checked = jsonData["classesCanUse"]["spy"]

        creditCheckboxInput.checked = jsonData["creditEnabled"]
        creditTextInput.disabled = !jsonData["creditEnabled"]
        creditTextInput.value = jsonData["creditText"]

        strangeCheckboxInput.checked = jsonData["showStrangeParts"]
        rankCheckboxInput.disabled = !jsonData["showStrangeParts"]

        document.getElementById("item-set-div").innerHTML = ""

        for (var i = 0; i < jsonData["itemSetsText"].length; i++){
            const attributeDiv = document.createElement("div");
            attributeDiv.className = "item-set-item-div"

            const inputDiv = document.createElement("input")
            inputDiv.className = "item-set-text-input"
            attributeDiv.appendChild(inputDiv)

            inputDiv.value = jsonData["itemSetsText"][i]

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

            selectDiv.value = jsonData["itemSetsType"][i]

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
    
        attributesDiv.innerHTML = ""
    
        for (var i = 0; i < jsonData["attributesText"].length; i++){
            const attributeDiv = document.createElement("div");
            attributeDiv.className = "attributes-item-div"

            const inputDiv = document.createElement("input")
            inputDiv.className = "attributes-text-input"
            attributeDiv.appendChild(inputDiv)

            inputDiv.value = jsonData["attributesText"][i]

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

            selectDiv.value = jsonData["attributesType"][i]

            const deleteButton = document.createElement("button");
            deleteButton.className = "attributes-delete-button"
            deleteButton.onclick = function () { this.parentNode.parentNode.removeChild(this.parentNode) }
            attributeDiv.appendChild(deleteButton)


            const buttonImage = document.createElement("img")
            buttonImage.src = "./media/images/delete.png"
            buttonImage.height = 20
            buttonImage.width = 20
            deleteButton.appendChild(buttonImage)

            attributesDiv.appendChild(attributeDiv)
        }

        document.getElementById("strange-counters-div").innerHTML = ""

        for (var i = 0; i < jsonData["strangePartsText"].length; i++){

            const attributeDiv = document.createElement("div");
            attributeDiv.className = "strange-counters-item-div"

            const inputDiv = document.createElement("input")
            inputDiv.className = "strange-counters-text-input"
            attributeDiv.appendChild(inputDiv)

            inputDiv.value = jsonData["strangePartsText"][i]

            const selectDiv = document.createElement("input");
            selectDiv.type = "number"
            selectDiv.className = "strange-counters-number-input margin-left"
            selectDiv.style = "width: 200px;"
            attributeDiv.appendChild(selectDiv)

            selectDiv.value = jsonData["strangePartsNumber"][i]

            if (!i == 0){
                const deleteButton = document.createElement("button");
                deleteButton.className = "attributes-delete-button"
                deleteButton.onclick = function () { this.parentNode.parentNode.removeChild(this.parentNode) }
                attributeDiv.appendChild(deleteButton)

                const buttonImage = document.createElement("img")
                buttonImage.src = "./media/images/delete.png"
                buttonImage.height = 20
                buttonImage.width = 20
                deleteButton.appendChild(buttonImage)
            }

            


            

            document.getElementById("strange-counters-div").appendChild(attributeDiv)

        }
        
    };
    

    
}