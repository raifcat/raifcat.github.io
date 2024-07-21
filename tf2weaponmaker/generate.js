const generateButton = document.getElementById("generate-button");

const itemNameInput = document.getElementById("item-name-input");
const itemLevelInput = document.getElementById("item-level-input");
const itemTypeInput = document.getElementById("item-type-input");
const itemQualityInput = document.getElementById("item-quality-input");
const itemImageInput = document.getElementById("item-image-input");

var unusualCheckboxInput = false
const unusualTextInput = document.getElementById("unusual-name-input")
const unusualCheckboxDiv = document.getElementById("unusual-checkbox-input")

var limitedCheckboxInput = false
const limitedCheckboxDiv = document.getElementById("limited-checkbox-input")
const limitedTextInput = document.getElementById("limited-amount-input")

var festivizedCheckboxInput = false
const festivizedCheckboxDiv = document.getElementById("festivized-checkbox-input")

var limitedEditionCheckBoxInput = false
const limitedEditionCheckBoxDiv = document.getElementById("edition-checkbox-input")

var tradableCheckboxInput = false
const tradableCheckboxDiv = document.getElementById("tradable-checkbox-input")
var craftableCheckboxInput = false
const craftableCheckboxDiv = document.getElementById("crafting-checkbox-input")
var achievementCheckboxInput = false
const achievementCheckboxDiv = document.getElementById("achievement-checkbox-input")

var halloweenCheckboxInput = false
const halloweenCheckboxDiv = document.getElementById("halloween-checkbox-input")

var restrictedCheckboxInput = false
const restrictedTextInput = document.getElementById("restricted-name-input")
const restrictedCheckboxDiv = document.getElementById("restricted-checkbox-input")

var pyrolandCheckboxInput = false
const pyrolandCheckboxDiv = document.getElementById("pyroland-checkbox-input")

var craftedCheckboxInput = false
const craftedCheckboxDiv = document.getElementById("crafted-checkbox-input")
const craftedTextInput = document.getElementById("crafted-text-input")

var giftCheckboxInput = false
const giftCheckboxDiv = document.getElementById("gift-checkbox-input")
const giftTextInput = document.getElementById("gift-text-input")
const giftDateInput = document.getElementById("gift-date-input")

var itemSetCheckboxInput = false
const itemSetCheckboxDiv = document.getElementById("item-set-checkbox-input")
const itemSetNameInput = document.getElementById("item-set-text-input")

var itemSetBonusCheckboxInput = false
var itemSetBonusCheckboxInputDisabled = true
const itemSetBonusCheckboxDiv = document.getElementById("item-set-bonus-checkbox-input")
const itemSetBonusTextInput = document.getElementById("item-set-bonus-text-input")

const strangeCheckboxDiv = document.getElementById("strange-counters-checkbox-input")
var strangeCheckboxInput = false

const strangeCounterDiv = document.getElementById("strange-counters-div")

const rankCheckboxDiv = document.getElementById("rank-checkbox-input")
var rankCheckboxInput = true
var rankCheckboxInputDisabled = true

const itemTagCheckboxDiv = document.getElementById("item-tag-checkbox-input")
var itemTagCheckboxInput = false

var creditCheckboxInput = false
const creditCheckboxDiv = document.getElementById("credit-checkbox-input")
const creditTextInput = document.getElementById("credit-text-input")


var scoutCheckboxInput = false
const scoutCheckboxDiv = document.getElementById("scout-checkbox-input")

var soldierCheckboxInput = false
const soldierCheckboxDiv = document.getElementById("soldier-checkbox-input")

var pyroCheckboxInput = false
const pyroCheckboxDiv = document.getElementById("pyro-checkbox-input")

var demomanCheckboxInput = false
const demomanCheckboxDiv = document.getElementById("demoman-checkbox-input")

var heavyCheckboxInput = false
const heavyCheckboxDiv = document.getElementById("heavy-checkbox-input")

var engieCheckboxInput = false
const engieCheckboxDiv = document.getElementById("engie-checkbox-input")

var medicCheckboxInput = false
const medicCheckboxDiv = document.getElementById("medic-checkbox-input")

var sniperCheckboxInput = false
const sniperCheckboxDiv = document.getElementById("sniper-checkbox-input")

var spyCheckboxInput = false
const spyCheckboxDiv = document.getElementById("spy-checkbox-input")


const jsonFileInput = document.getElementById("json-file-input")

const loadItemInput = document.getElementById("load-item-input")

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
const cardItemPaintIcon = document.getElementById("paint-icon")

const cardItemCraftedText = document.getElementById("card-item-crafted")

const attributesDiv = document.getElementById("attributes-div")

const cardItemSetListDiv = document.getElementById("item-set-list-div")
const cardItemSetName = document.getElementById("item-set-name")

const cardItemSetBonus = document.getElementById("item-set-bonus")
const cardItemSetBonusText = document.getElementById("item-set-bonus-text")

const cardItemStrangeCounterDiv = document.getElementById("strange-counters-list-div")

var monoPaintCheckboxInput = false
const monoPaintCheckboxDiv = document.getElementById("paint-checkbox-input")
const monoPaintSelectInput = document.getElementById("paint-1-select")
const monoPaintColorInput = document.getElementById("paint-1")

const tooltip = document.getElementById("tool-tip")

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


    if (!itemTagCheckboxInput) {
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


    if (limitedEditionCheckBoxInput) {
        cardItemLevel.style.color = "yellow"
        cardItemLevel.innerHTML = `Limited ${itemTypeInput.value}`
    } else {
        cardItemLevel.style.color = "rgb(114,103,90)"
        cardItemLevel.innerHTML = `Level ${itemLevelInput.value} ${itemTypeInput.value}`
    }

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

    if (unusualCheckboxInput){
        cardItemUnusualText.innerHTML = `★ Unusual Effect: ${unusualTextInput.value}`
        cardItemUnusualText.style.display = "block"
    } else{
        cardItemUnusualText.innerHTML = ""
        cardItemUnusualText.style.display = "none"
    }

    if (festivizedCheckboxInput){
        cardItemFestivizedText.innerHTML = "Festivized"
        cardItemFestivizedText.style.display = "block"
    } else{
        cardItemFestivizedText.innerHTML = ""
        cardItemFestivizedText.style.display = "none"
    }

    if (limitedCheckboxInput){
        cardItemLimitedText.innerHTML = `This is a limited use item. Uses: ${limitedTextInput.value}`
        cardItemLimitedText.style.display = "block"
    } else {
        cardItemLimitedText.innerHTML = ""
        cardItemLimitedText.style.display = "none"
    }

    cardItemTradableText.style.display = "none"

    if (tradableCheckboxInput || craftableCheckboxInput || achievementCheckboxInput){
        cardItemTradableText.style.display = "block"
        var achievementText = ""
        var tradableText = ""
        var craftedText = ""
        var not = "Not"

        if (achievementCheckboxInput){
            achievementText = "Achievment Item:"
        }

        if (tradableCheckboxInput){
            tradableText = "Tradable or Marketable"

            if (craftableCheckboxInput){
                tradableText = "Tradable, Marketable or "
            }
        }

        if (craftableCheckboxInput){
            craftedText = "Usable in Crafting"
        }

        if (achievementCheckboxInput && !tradableCheckboxInput && !craftableCheckboxInput) {
            achievementText = "Achievment Item"
            not = ""
        }

        cardItemTradableText.innerHTML = `( ${achievementText} ${not} ${tradableText}${craftedText} )`
    }

    if (unusualCheckboxInput){
        cardItemUnusualIcon.style.display = "block"
    } else{
        cardItemUnusualIcon.style.display = "none"
    }

    allStrangeCountersTextArray = []
    allStrangeCounterNumberArray = []

    if (!strangeCheckboxInput) {
    for (var i = 0; i < allStrangeCounters.length; i++) {
        allStrangeCountersTextArray.push(allStrangeCounters[i].value);
        allStrangeCounterNumberArray.push(allStrangeCountersNumber[i].value);
    }}

    if (strangeCheckboxInput) {
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

                if (!itemTagCheckboxInput && rankCheckboxInput && !rankCheckboxInput.disabled){
                    cardItemName.innerHTML = `${strangeQualities[0]} ${cardItemName.innerHTML}`
                }
                
                attributeText.innerHTML = `${strangeQualities[0]} ${itemTypeInput.value} - ${allStrangeCounters[i].value}: ${allStrangeCountersNumber[i].value}`

                for (var a = 0; a < strangeQualities.length; a++) {
                    if (allStrangeCountersNumber[i].value >= strangeQualityKills[a+1]){

                        if (!itemTagCheckboxInput && rankCheckboxInput && !rankCheckboxInput.disabled){
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
        cardItemStrangeCounterDiv.innerHTML = ""
    }

    if (halloweenCheckboxInput) {
        cardItemHalloweenIcon.style.display = "block"
    } else {
        cardItemHalloweenIcon.style.display = "none"
    }

    if (restrictedCheckboxInput){
        cardItemRestrictionText.style.display = "block"
        cardItemRestrictionText.innerHTML = `Holiday Restriction: ${restrictedTextInput.value}`
    } else {
        cardItemRestrictionText.style.display = "none"
    }

    if (pyrolandCheckboxInput) {
        cardItemPyrovisionIcon.style.display = "block"
    } else {
        cardItemPyrovisionIcon.style.display = "none"
    }

    if (monoPaintCheckboxInput){
        cardItemPaintIcon.style.display = "block"
        monoPaintColorInput.disabled = false
        
        if (monoPaintSelectInput.value != "0"){
            monoPaintColorInput.value = monoPaintSelectInput.value
        }

        cardItemPaintIcon.style.backgroundColor = monoPaintColorInput.value

    } else{
        monoPaintColorInput.disabled = true
        cardItemPaintIcon.style.display = "none"
    }

    monoPaintColorInput.onfocus = function () {     
        monoPaintSelectInput.value = "0"
    }



    if (giftCheckboxInput){
        const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const dateSplited = giftDateInput.value.split("-")
        const hourSplited = dateSplited[2].split("T")
        cardItemUserGift.innerHTML = `Gift from: ${giftTextInput.value}`
        cardItemDateGift.innerHTML = `Date Received: ${dateSplited[2].split("T")[0] } ${months[parseInt(dateSplited[1]) - 1]} ${dateSplited[0]} (${hourSplited[1]})`

        cardItemUserGift.style.display = "block"
        cardItemDateGift.style.display = "block"
    } else{
        cardItemUserGift.style.display = "none"
        cardItemDateGift.style.display = "none"
    }

    if (craftedCheckboxInput){
        cardItemCraftedText.innerHTML = `Crafted by ${craftedTextInput.value}`
        cardItemCraftedText.style.display = "block"
    } else{
        cardItemCraftedText.style.display = "none"
    }

    allItemSetsText = [];
    allItemSetsTextType = []
    if (!itemSetCheckboxInput) {
    for (var i = 0; i < allItemSets.length; i++) {
        allItemSetsText.push(allItemSets[i].value);
        allItemSetsTextType.push(allItemSetsTypes[i].value);
    }
    }


    cardItemSetListDiv.innerHTML = ""

    if (itemSetCheckboxInput){
        

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


    if (scoutCheckboxInput) { cardItemScoutImg.style.display = "block" } else { cardItemScoutImg.style.display = "none" }
    if (soldierCheckboxInput) { cardItemSoldierImg.style.display = "block" } else { cardItemSoldierImg.style.display = "none" }
    if (pyroCheckboxInput) { cardItemPyroImg.style.display = "block" } else { cardItemPyroImg.style.display = "none" }
    if (demomanCheckboxInput) { cardItemDemomanImg.style.display = "block" } else { cardItemDemomanImg.style.display = "none" }
    if (heavyCheckboxInput) { cardItemHeavyImg.style.display = "block" } else { cardItemHeavyImg.style.display = "none" }
    if (engieCheckboxInput) { cardItemEngieImg.style.display = "block" } else { cardItemEngieImg.style.display = "none" }
    if (medicCheckboxInput) { cardItemMedicImg.style.display = "block" } else { cardItemMedicImg.style.display = "none" }
    if (sniperCheckboxInput) { cardItemSniperImg.style.display = "block" } else { cardItemSniperImg.style.display = "none" }
    if (spyCheckboxInput) { cardItemSpyImg.style.display = "block" } else { cardItemSpyImg.style.display = "none" }

    if (creditCheckboxInput){
        cardItemCreditText.style.display = "block"
        cardItemCreditText.innerHTML = `Made by ${creditTextInput.value}`
    } else{
        cardItemCreditText.style.display = "none"
    }

    checkboxUpdateImg("itemTagCheckboxInput", itemTagCheckboxDiv)

    if (strangeCheckboxInput) {
        strangeCheckboxDiv.children[0].style.display = "block";
        rankCheckboxInputDisabled = false
        rankCheckboxDiv.classList.remove("disabled")
    } else {
        strangeCheckboxDiv.children[0].style.display = "none";
        rankCheckboxInputDisabled = true
        rankCheckboxDiv.classList.add("disabled")
    }

    checkboxUpdateImg("rankCheckboxInput", rankCheckboxDiv)

    itemSetNameInput.disabled = !itemSetCheckboxInput

    if (itemSetCheckboxInput){
        itemSetCheckboxDiv.children[0].style.display = "block";
        itemSetBonusCheckboxInputDisabled = false
        itemSetBonusCheckboxDiv.classList.remove("disabled")
    }else{
        itemSetCheckboxDiv.children[0].style.display = "none";
        itemSetBonusCheckboxInputDisabled = true
        itemSetBonusCheckboxDiv.classList.add("disabled")
    }

    if (itemSetCheckboxInput) {
        itemSetBonusTextInput.disabled = !itemSetBonusCheckboxInput
    } else{
        itemSetBonusTextInput.disabled = true
    }

    checkboxUpdateImg("itemSetBonusCheckboxInput", itemSetBonusCheckboxDiv)

    if (itemSetBonusCheckboxInput && !itemSetBonusCheckboxInputDisabled && itemSetCheckboxInput) {
        cardItemSetBonus.style.display = "block"
        cardItemSetBonusText.style.display = "block"
        cardItemSetBonusText.innerHTML = itemSetBonusTextInput.value
    } else {
        cardItemSetBonus.style.display = "none"
        cardItemSetBonusText.style.display = "none"
    }

    checkboxUpdateImg("halloweenCheckboxInput", halloweenCheckboxDiv)
    checkboxUpdateImg("restrictedCheckboxInput", restrictedCheckboxDiv)
    restrictedTextInput.disabled = !restrictedCheckboxInput
    checkboxUpdateImg("pyrolandCheckboxInput", pyrolandCheckboxDiv)
    checkboxUpdateImg("festivizedCheckboxInput", festivizedCheckboxDiv)
    checkboxUpdateImg("limitedEditionCheckBoxInput", limitedEditionCheckBoxDiv)

    checkboxUpdateImg("tradableCheckboxInput", tradableCheckboxDiv)
    checkboxUpdateImg("craftableCheckboxInput", craftableCheckboxDiv)
    checkboxUpdateImg("achievementCheckboxInput", achievementCheckboxDiv)

    checkboxUpdateImg("monoPaintCheckboxInput", monoPaintCheckboxDiv)
    monoPaintSelectInput.disabled = !monoPaintCheckboxInput
    monoPaintColorInput.disabled = !monoPaintCheckboxInput

    checkboxUpdateImg("scoutCheckboxInput", scoutCheckboxDiv)
    checkboxUpdateImg("soldierCheckboxInput", soldierCheckboxDiv)
    checkboxUpdateImg("pyroCheckboxInput", pyroCheckboxDiv)
    checkboxUpdateImg("demomanCheckboxInput", demomanCheckboxDiv)
    checkboxUpdateImg("heavyCheckboxInput", heavyCheckboxDiv)
    checkboxUpdateImg("engieCheckboxInput", engieCheckboxDiv)
    checkboxUpdateImg("medicCheckboxInput", medicCheckboxDiv)
    checkboxUpdateImg("sniperCheckboxInput", sniperCheckboxDiv)
    checkboxUpdateImg("spyCheckboxInput", spyCheckboxDiv)

    checkboxUpdateImg("unusualCheckboxInput", unusualCheckboxDiv)

    unusualTextInput.disabled = !unusualCheckboxInput

    checkboxUpdateImg("limitedCheckboxInput", limitedCheckboxDiv)
    limitedTextInput.disabled = !limitedCheckboxInput

    checkboxUpdateImg("giftCheckboxInput", giftCheckboxDiv)
    giftTextInput.disabled = !giftCheckboxInput
    giftDateInput.disabled = !giftCheckboxInput

    checkboxUpdateImg("craftedCheckboxInput", craftedCheckboxDiv)
    craftedTextInput.disabled = !craftedCheckboxInput

    checkboxUpdateImg("creditCheckboxInput", creditCheckboxDiv)
    creditTextInput.disabled = !creditCheckboxInput
}

function checkboxUpdateImg(input, div){
    if (window[input]) {
        div.children[0].style.display = "block";
    } else {
        div.children[0].style.display = "none";
    }
}


function checkboxEventListener(div, inputName, label=undefined, disabled=undefined){

    function checkboxInput() {
        if (window[disabled] == 0 || !disabled){

            window[inputName] = !window[inputName]

            generateButtonClicked()

            if (window[inputName]) {
                div.children[0].style.display = "block";
            } else {
                div.children[0].style.display = "none";
            }
        }
        
    }

    div.addEventListener('click', checkboxInput);
    if (label){
        document.getElementById(label).addEventListener('click', checkboxInput);
    }
    

}

checkboxEventListener(itemTagCheckboxDiv, "itemTagCheckboxInput", "item-tag-checkbox-input-label")
checkboxEventListener(strangeCheckboxDiv, "strangeCheckboxInput", "strange-counters-checkbox-input-label")
checkboxEventListener(rankCheckboxDiv, "rankCheckboxInput", "rank-checkbox-input-label", "rankCheckboxInputDisabled")
checkboxEventListener(itemSetCheckboxDiv, "itemSetCheckboxInput", "item-set-checkbox-input-label")
checkboxEventListener(itemSetBonusCheckboxDiv, "itemSetBonusCheckboxInput", "item-set-bonus-checkbox-input-label", "itemSetBonusCheckboxInputDisabled")
checkboxEventListener(halloweenCheckboxDiv, "halloweenCheckboxInput", "halloween-checkbox-input-label")
checkboxEventListener(restrictedCheckboxDiv, "restrictedCheckboxInput", "restricted-checkbox-input-label")
checkboxEventListener(pyrolandCheckboxDiv, "pyrolandCheckboxInput", "pyroland-checkbox-input-label")
checkboxEventListener(festivizedCheckboxDiv, "festivizedCheckboxInput", "festivized-checkbox-input-label")
checkboxEventListener(limitedEditionCheckBoxDiv, "limitedEditionCheckBoxInput", "edition-checkbox-input-label")

checkboxEventListener(tradableCheckboxDiv, "tradableCheckboxInput", "tradable-checkbox-input-label")
checkboxEventListener(craftableCheckboxDiv, "craftableCheckboxInput", "crafted-checkbox-input-label")
checkboxEventListener(achievementCheckboxDiv, "achievementCheckboxInput", "achievement-checkbox-input-label")

checkboxEventListener(monoPaintCheckboxDiv, "monoPaintCheckboxInput", "paint-checkbox-input-label")

checkboxEventListener(scoutCheckboxDiv, "scoutCheckboxInput")
checkboxEventListener(soldierCheckboxDiv, "soldierCheckboxInput")
checkboxEventListener(pyroCheckboxDiv, "pyroCheckboxInput")
checkboxEventListener(demomanCheckboxDiv, "demomanCheckboxInput")
checkboxEventListener(heavyCheckboxDiv, "heavyCheckboxInput")
checkboxEventListener(engieCheckboxDiv, "engieCheckboxInput")
checkboxEventListener(medicCheckboxDiv, "medicCheckboxInput")
checkboxEventListener(sniperCheckboxDiv, "sniperCheckboxInput")
checkboxEventListener(spyCheckboxDiv, "spyCheckboxInput")

checkboxEventListener(unusualCheckboxDiv, "unusualCheckboxInput", "unusual-checkbox-input-label")
checkboxEventListener(limitedCheckboxDiv, "limitedCheckboxInput", "limited-checkbox-input-label")
checkboxEventListener(giftCheckboxDiv, "giftCheckboxInput", "gift-checkbox-input-label")
checkboxEventListener(craftedCheckboxDiv, "craftedCheckboxInput", "crafteding-checkbox-input-label")
checkboxEventListener(creditCheckboxDiv, "creditCheckboxInput", "credit-checkbox-input-label")

// Set up the loop with setInterval
setInterval(generateButtonClicked, 2000);              


function generateNewAttribute(){

    const attributeDiv = document.createElement("div");
    attributeDiv.className = "attributes-item-div"

    const inputDiv = document.createElement("input")
    inputDiv.className = "attributes-text-input"
    attributeDiv.appendChild(inputDiv)
    inputDiv.onkeydown = function () { generateButtonClicked() }

    const selectDiv = document.createElement("select");
    selectDiv.className = "attributes-select-input"
    attributeDiv.appendChild(selectDiv)
    selectDiv.onchange = function () { generateButtonClicked() }

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
    deleteButton.onclick = function () { this.parentNode.parentNode.removeChild(this.parentNode); generateButtonClicked() }
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
    inputDiv.onkeydown = function () { generateButtonClicked() }

    const selectDiv = document.createElement("select");
    selectDiv.className = "item-set-select-input"
    attributeDiv.appendChild(selectDiv)
    inputDiv.onchange = function () { generateButtonClicked() }

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
    deleteButton.onclick = function () { this.parentNode.parentNode.removeChild(this.parentNode); generateButtonClicked() }
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

    inputDiv.onkeydown = function () { generateButtonClicked() }

    const selectDiv = document.createElement("input");
    selectDiv.type = "number"
    selectDiv.className = "strange-counters-number-input margin-left"
    selectDiv.style = "width: 200px;"
    attributeDiv.appendChild(selectDiv)

    selectDiv.onkeydown = function () {generateButtonClicked()}

    const deleteButton = document.createElement("button");
    deleteButton.className = "attributes-delete-button"
    deleteButton.onclick = function () { this.parentNode.parentNode.removeChild(this.parentNode); generateButtonClicked() }
    attributeDiv.appendChild(deleteButton)


    const buttonImage = document.createElement("img")
    buttonImage.src = "./media/images/delete.png"
    buttonImage.height = 20
    buttonImage.width = 20
    deleteButton.appendChild(buttonImage)

    document.getElementById("strange-counters-div").appendChild(attributeDiv)
}


function takeScreenshot(){
    document.getElementById("item-card-pos").style.width = "700px";

    html2canvas(document.querySelector("#item-card-div")).then(canvas => {
        var img = canvas.toDataURL("image/png");
        var image = document.createElement('a');
        image.download = 'itemcard.png';
        image.href = img;
        image.click()
    });
    document.getElementById("item-card-pos").style.width = null;

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
    
    itemSetNameInput.disabled = !itemSetCheckboxInput; 
    itemSetBonusCheckboxInput.disabled = !itemSetCheckboxInput

    if (itemSetBonusCheckboxInput.disabled){
        itemSetBonusTextInput.disabled = true;
    } else if (!itemSetBonusCheckboxInput.disabled && itemSetBonusCheckboxInput){
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
        "isLimitedEdition": limitedEditionCheckBoxInput,
        "isFestivied": festivizedCheckboxInput,
        "showRankOnName": rankCheckboxInput,
        "isHalloweenRestricted": halloweenCheckboxInput,
        "isPyrolandRestricted": pyrolandCheckboxInput,
        "isNotTradable": tradableCheckboxInput,
        "isNotCraftable": craftableCheckboxInput,
        "isAchievment": achievementCheckboxInput,
        "usesItemTag": itemTagCheckboxInput,

        "image": cardItemImg.src,

        "isRestricted": restrictedCheckboxInput,
        "restrictedText": restrictedTextInput.value,

        "isUnusual": unusualCheckboxInput,
        "unusualEffect": unusualTextInput.value,

        "isGift": giftCheckboxInput,
        "giftText": giftTextInput.value,
        "giftDate": giftDateInput.value,

        "isCrafted": craftedCheckboxInput,
        "craftedText": craftedTextInput.value,

        "isPainted": monoPaintCheckboxInput,
        "paintSelected": monoPaintSelectInput.value,
        "paintColor": monoPaintColorInput.value,

        "limitedUse": limitedCheckboxInput,
        "limitedUseNumber": limitedTextInput.value,

        "itemSetEnabled": itemSetCheckboxInput,
        "itemSetName": itemSetNameInput.value,
        "itemSetsText": allItemSetsText,
        "itemSetsType": allItemSetsTextType,

        "itemSetBonusEnabled": itemSetBonusCheckboxInput,
        "itemSetBonusText": itemSetBonusTextInput.value,

        "creditEnabled": creditCheckboxInput,
        "creditText": creditTextInput.value,

        "classesCanUse": {
            "scout": scoutCheckboxInput,
            "soldier": soldierCheckboxInput,
            "pyro": pyroCheckboxInput,
            "demoman": demomanCheckboxInput,
            "heavy": heavyCheckboxInput,
            "engie": engieCheckboxInput,
            "medic": medicCheckboxInput,
            "sniper": sniperCheckboxInput,
            "spy": spyCheckboxInput,

        },

        "limitedAmountActive": limitedCheckboxInput,
        "limitedAmount": limitedTextInput.value,

        "attributesText": attributesText,
        "attributesType": attributesTextType,

        "showStrangeParts": strangeCheckboxInput,
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
        jsonAssignValues(jsonData)

    };

}

function jsonAssignValues(jsonData){
   

        console.log(jsonData)

        itemNameInput.value = jsonData["name"]
        itemLevelInput.value = jsonData["level"]
        itemTypeInput.value = jsonData["type"]
        itemQualityInput.value = jsonData["quality"]
        limitedEditionCheckBoxInput = jsonData["isLimitedEdition"]
        festivizedCheckboxInput = jsonData["isFestivied"]
        rankCheckboxInput = jsonData["showRankOnName"]
        halloweenCheckboxInput = jsonData["isHalloweenRestricted"]
        pyrolandCheckboxInput = jsonData["isPyrolandRestricted"]
        itemTagCheckboxInput = jsonData["usesItemTag"]

        cardItemImg.src = jsonData["image"]

        tradableCheckboxInput = jsonData["isNotTradable"]

        craftableCheckboxInput = jsonData["isNotCraftable"]

        achievementCheckboxInput = jsonData["isAchievment"]

        restrictedCheckboxInput = jsonData["isRestricted"]
        restrictedTextInput.value = jsonData["restrictedText"]

        restrictedTextInput.disabled = !restrictedCheckboxInput

        monoPaintCheckboxInput = jsonData["isPainted"]
        monoPaintColorInput.value = jsonData["paintColor"]
        monoPaintSelectInput.value = jsonData["paintSelected"]

        unusualCheckboxInput = jsonData["isUnusual"]
        unusualTextInput.disabled = !jsonData["isUnusual"]
        unusualTextInput.value = jsonData["unusualEffect"]
        giftCheckboxInput = jsonData["isGift"]

        giftTextInput.disabled = !jsonData["isGift"]
        giftDateInput.disabled = !jsonData["isGift"]

        giftTextInput.value = jsonData["giftText"]
        giftDateInput.value = jsonData["giftDate"]

        craftedCheckboxInput = jsonData["isCrafted"]

        craftedTextInput.disabled = !jsonData["isCrafted"]
            
        craftedTextInput.value = jsonData["craftedText"]
        limitedCheckboxInput = jsonData["limitedUse"]
        limitedTextInput.disabled = !jsonData["limitedUse"]
        limitedTextInput.value = jsonData["limitedUseNumber"]
        itemSetCheckboxInput = jsonData["itemSetEnabled"]

        itemSetNameInput.disabled = !jsonData["itemSetEnabled"];
        itemSetBonusCheckboxInput.disabled = !jsonData["itemSetEnabled"];
        
        itemSetNameInput.value = jsonData["itemSetName"]

        itemSetBonusCheckboxInput = jsonData["itemSetBonusEnabled"]

        itemSetBonusTextInput.disabled = !jsonData["itemSetBonusEnabled"]

        itemSetBonusTextInput.value = jsonData["itemSetBonusText"]

        scoutCheckboxInput = jsonData["classesCanUse"]["scout"]
        soldierCheckboxInput = jsonData["classesCanUse"]["soldier"]
        pyroCheckboxInput = jsonData["classesCanUse"]["pyro"]
        demomanCheckboxInput = jsonData["classesCanUse"]["demoman"]
        heavyCheckboxInput = jsonData["classesCanUse"]["heavy"]
        engieCheckboxInput = jsonData["classesCanUse"]["engie"]
        medicCheckboxInput = jsonData["classesCanUse"]["medic"]
        sniperCheckboxInput = jsonData["classesCanUse"]["sniper"]
        spyCheckboxInput = jsonData["classesCanUse"]["spy"]

        creditCheckboxInput = jsonData["creditEnabled"]
        creditTextInput.disabled = !jsonData["creditEnabled"]
        creditTextInput.value = jsonData["creditText"]

        strangeCheckboxInput = jsonData["showStrangeParts"]
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

        generateButtonClicked()
}



document.addEventListener("mousemove", mouseMove);

function mouseMove(event){
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight
    var xOffset = 20
    const yOffset = 20
    
    if(event.x + xOffset + 450 > clientWidth){
        xOffset = -470
    }

    tooltip.style.left = `${event.x + xOffset}px`

    if (event.x + xOffset < 0) {
        tooltip.style.left = `20px`
    }

    tooltip.style.top = `${event.y + yOffset}px`

    if (event.y + yOffset + tooltip.offsetHeight > clientHeight){
        tooltip.style.top = `${clientHeight - tooltip.offsetHeight}px`
    }
    
}

tooltips = ['The name of the item e.g: "<span style="font-family: Tf2build">Tomislav</span>"',
            'Removes the strange rank on the item name and put "speech marks" on it',
            'The level of the item e.g: "15"',
            'The type of item. e.g: "Bat"',
            'The color of the item name. e.g: "<span style="color: #CF6A32; font-family: Tf2build;">Strange Weapon</span>"',
            'The image of the item <br> <span class="grey">(Accepts .png, .jpg, and gif) <br> (gif will be trimmed due to base64 limitations)</span> <img src="https://www.shutterstock.com/image-vector/surprised-shocked-scared-astonished-emoticon-600w-483529231.jpg" width="10px" height="10px">',
            'The attributes of the item to determine if its <span class="positive-color">positive</span>, <span class="negative-color">negative</span>, or <span class="neutral-color">neutral</span>',
            'Adds strange parts on the item as well as replace the level with the first part and gives the item name a rank.',
            'Adds the rank of the strange item on the name. e.g: "<span style="color: #CF6A32; font-family: Tf2build;">Sufficiently Lethal Knife</span>" <span class="grey">(Show strange parts? has to be toggle first)</span>',
            'Adds an item set to the item',
            'Adds the bonus of the item set <span class="grey">(Item sets has to be toggle first)</span>',
            'Shows the halloween restricted icon on the image',
            'Adds text on the item card. e.g: "<span class="negative-color">Holiday Restriction: TF Holiday</span>"',
            'Shows the pyroland vision icon on the image',
            'Adds text on the item card saying: "<span class="unusual-color">Festivized</span>"',
            'Removes the item level and replaces it with: "<span style="color: yellow">Limited [type]</span>"',
            'Adds text on the item card saying: "( Not Tradable or Marketable )"',
            'Adds text on the item card saying: "( Not Usable in Crafting )"',
            'Adds text on the item card saying: "( Achievement Item )"',
            'Adds class icons on the item card',
            'Adds text on the item card. e.g: "<span class="unusual-color">★ Unusual Effect: Kill-a-Watt</span>"',
            'Adds text on the item card. e.g: "<span class="limited-color">This is a limited use item. Uses: 10</span>"',
            'Adds text on the item card. e.g: "<span class="positive-color">Gift from: heavy</span>" <br> "Date Received: 18/01/2018 15:12:31"',
            'Adds text on the item card. e.g: "<span class="positive-color">Crafted by: sniper</span>"',
            'Adds text on the item card. e.g: "<span style="color:rgb(132, 209, 119);">Made by [your name!]</span>"',
            'Shows the paint icon on the image <br> <span class="grey">(Paint icon image will just be a square if you download/copy the png. You will have to take a screenshot)</span>',
            'Loads a different item preset' ]

function createToolTip(num){
    tooltip.style.display = "block"
    const tooltipText = tooltips[num]
    tooltip.innerHTML = tooltipText
}

function removeToolTip() {
    tooltip.style.display = "none"
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = JSON.parse(rawFile.responseText);
                jsonAssignValues(allText)
                generateButtonClicked()
            }
        }
    }
    rawFile.send(null);
}

function loadItemFunction(){
    readTextFile(`./weaponcards/${loadItemInput.value}.json`)
    loadItemInput.value = "select"
}
