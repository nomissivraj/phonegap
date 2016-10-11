angular.module('app.controllers', [])
  
.controller('rATENEWCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.$on("$ionicView.beforeEnter", loadSelectedItem);
    $scope.$on("$ionicView.leave", clearEditMode);
    $scope.$on("$ionicView.leave", clearStateIndex);
    $scope.$on("$ionicView.enter", makeDeleteBtn);
}])
   
.controller('halo5GuardiansCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('fPSRATECtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.$on("$ionicView.enter", renderList);
    $scope.$on("$ionicView.loaded", renderList);
}])
   
.controller('mUSTPLAYWISHLISTCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    $scope.$on("$ionicView.enter", loadWishItems);

}])
   
.controller('cOMPARECtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

//create empty array to store items
var state = [];
//Select index of item clicked
//open edit page
//populate with stuff from selected index
var isChecked = false;
var editMode = false;
var itemLat = 50.371846;
var itemLon = -4.138970;


//function to stringify into JSON string
var indexToEdit;

function edit(selectedIndex) {

    var seralisedStateIndex = JSON.stringify(state[selectedIndex]);
    localStorage.setItem("selectedItem", seralisedStateIndex);
    indexToEdit = selectedIndex;
    localStorage.setItem("editMode", "true");
    getEditMode = localStorage.getItem("editMode");
    editMode = JSON.parse(getEditMode);
}


function loadSelectedItem() {
    
var serialisedStateIndex = localStorage.getItem("selectedItem");
    stateIndex = JSON.parse(serialisedStateIndex) || [];
    if (!stateIndex) {
        return;
    }
    rebuild();
}

function rebuild (){
    if (!stateIndex) {
        return;
    }
        document.getElementById("insertImage").src = stateIndex.thumbnail || "../img/defaultImg.png";
        document.getElementById("titleHead").innerHTML = stateIndex.name || "New Item";
        document.getElementById("newTitle").innerHTML = stateIndex.name || "";
        document.getElementById("newPlatform").selectedIndex = stateIndex.platformIndex;
        document.getElementById("newGenre").innerHTML = stateIndex.genre || "";
        document.getElementById("newOverallRating").selectedIndex = stateIndex.overallIndex;
        document.getElementById("newStoryRating").selectedIndex = stateIndex.storyIndex;
        document.getElementById("newMultiplayerRating").selectedIndex = stateIndex.multiplayerIndex;
        document.getElementById("newCompetitiveRating").selectedIndex = stateIndex.competitiveIndex;
        document.getElementById("newDesc").innerHTML = stateIndex.description || "";
        var isChecked = document.getElementById("recommendCheckbox").getElementsByTagName("input")[0].checked = stateIndex.recommended;    
}

function clearStateIndex() {
    localStorage.removeItem("selectedItem");
    //console.log("CLEAR STATE");
    
}

function clearEditMode() {
    localStorage.setItem("editMode", "false");
    var resetFalse = localStorage.getItem("editMode");
    editMode = JSON.parse(resetFalse);
}

function makeDeleteBtn() {
    if (editMode){

        var deleteBtn = document.createElement("a");
        deleteBtn.setAttribute("class", "button button-dark  button-block");
        deleteBtn.setAttribute("onclick", "handleDelete();");

        var btnText = deleteBtn.innerHTML = "Delete";

        deleteBtnTarget = document.getElementById("deleteCnt");
        deleteBtnTarget.appendChild(deleteBtn);
    }
}

function buildObject() {
    
    // SELECT THINGS FROM PAGE TO MAKE INTO JSON object
    var newTitle = document.getElementById("newTitle").value;//selection 1
    var newImage = document.getElementById("insertImage").src;//selection 2
    
    var newPlatformSelect = document.getElementById("newPlatform");//selection3
    var newPlatform = newPlatformSelect.options[newPlatformSelect.selectedIndex].value;
    var platformIndex = newPlatformSelect.selectedIndex;
    
    var newGenre = document.getElementById("newGenre").value;//selection 4
    
    var newOverallRatingSelect = document.getElementById("newOverallRating");//selection 5
    var newOverallRating = newOverallRatingSelect.options[newOverallRatingSelect.selectedIndex].value;
    var overallIndex = newOverallRatingSelect.selectedIndex;
    
    var newStoryRatingSelect = document.getElementById("newStoryRating");//selection 6
    var newStoryRating = newStoryRatingSelect.options[newStoryRatingSelect.selectedIndex].value;
    var storyIndex = newStoryRatingSelect.selectedIndex;
    
    var newMultiplayerRatingSelect = document.getElementById("newMultiplayerRating");//selection 7
    var newMultiplayerRating = newMultiplayerRatingSelect.options[newMultiplayerRatingSelect.selectedIndex].value;
    var multiplayerIndex = newMultiplayerRatingSelect.selectedIndex;
    
    var newCompetitiveRatingSelect = document.getElementById("newCompetitiveRating");//selection 8
    var newCompetitiveRating = newCompetitiveRatingSelect.options[newCompetitiveRatingSelect.selectedIndex].value;
    var competitiveIndex = newCompetitiveRatingSelect.selectedIndex;
    
    var newRecommend = document.getElementById("recommendCheckbox").getElementsByTagName("input")[0].checked;
    var newDescription = document.getElementById("newDesc").value;
    
    findMe();
    itemLat = userLat;
    itemLon = userLon;
    
    
  //MAKE & ADD JSON OBJECT TO STATE ARRAY
     return {
        name: newTitle,
        thumbnail: newImage,
        platform: newPlatform,
        platformIndex: platformIndex,
        genre: newGenre,
        overallRating: newOverallRating,
        overallIndex: overallIndex,
        storyRating: newStoryRating,
        storyIndex: storyIndex,
        multiplayerRating: newMultiplayerRating,
        multiplayerIndex: multiplayerIndex,
        competitiveRating: newCompetitiveRating,
        competitiveIndex: competitiveIndex,
        recommended: newRecommend,
        description: newDescription,
        itemLatitude: itemLat,
        itemLongitude: itemLon
        
    };
        
}

function pushToArray() {
    var newObject = buildObject();
        state.push(newObject);
}

function saveOver() {
// SELECT THINGS FROM PAGE TO UPDATE EXISTING JSON object
    var newTitle = document.getElementById("newTitle").value;//selection 1
    var newImage = document.getElementById("insertImage").src;//selection 2
    
    var newPlatformSelect = document.getElementById("newPlatform");//selection3
    var newPlatform = newPlatformSelect.options[newPlatformSelect.selectedIndex].value;
    var platformIndex = newPlatformSelect.selectedIndex;
    
    var newGenre = document.getElementById("newGenre").value;//selection 4
    
    var newOverallRatingSelect = document.getElementById("newOverallRating");//selection 5
    var newOverallRating = newOverallRatingSelect.options[newOverallRatingSelect.selectedIndex].value;
    var overallIndex = newOverallRatingSelect.selectedIndex;
    
    var newStoryRatingSelect = document.getElementById("newStoryRating");//selection 6
    var newStoryRating = newStoryRatingSelect.options[newStoryRatingSelect.selectedIndex].value;
    var storyIndex = newStoryRatingSelect.selectedIndex;
    
    var newMultiplayerRatingSelect = document.getElementById("newMultiplayerRating");//selection 7
    var newMultiplayerRating = newMultiplayerRatingSelect.options[newMultiplayerRatingSelect.selectedIndex].value;
    var multiplayerIndex = newMultiplayerRatingSelect.selectedIndex;
    
    var newCompetitiveRatingSelect = document.getElementById("newCompetitiveRating");//selection 8
    var newCompetitiveRating = newCompetitiveRatingSelect.options[newCompetitiveRatingSelect.selectedIndex].value;
    var competitiveIndex = newCompetitiveRatingSelect.selectedIndex;
    
    var newRecommend = document.getElementById("recommendCheckbox").getElementsByTagName("input")[0].checked;
    var newDescription = document.getElementById("newDesc").value;
    
  //UPDATE JSON OBJECT TO STATE ARRAY
     state[indexToEdit] = {
        name: newTitle,
        thumbnail: newImage,
        platform: newPlatform,
        platformIndex: platformIndex,
        genre: newGenre,
        overallRating: newOverallRating,
        overallIndex: overallIndex,
        storyRating: newStoryRating,
        storyIndex: storyIndex,
        multiplayerRating: newMultiplayerRating,
        multiplayerIndex: multiplayerIndex,
        competitiveRating: newCompetitiveRating,
        competitiveIndex: competitiveIndex,
        recommended: newRecommend,
        description: newDescription };

}

function handleDelete() {
    if (confirm("Are you sure you want to permanently delete this item?") == true){
        deleteItem();
        location.href = "#/page1/tab2/home";
    } 
}

function deleteItem() {
    state.splice(indexToEdit,1);
    saveState();
}


function handleSave() {
    if (editMode === true){
    saveOver();
        saveState();
        return;
    }
    pushToArray();
    saveState();
        
}


function saveState() {
        
    var serialisedState = JSON.stringify(state);
    //save JSONified objects to local storage
    localStorage.setItem("stateItem", serialisedState);
    renderList();   
}

function loadStuff() {
    //load objects into array. use this in button to push info to state array
    
    var serialisedState = localStorage.getItem("stateItem");
    state = JSON.parse(serialisedState) || [];
    
    
    renderList();

}



function renderList() {//from json objects
    
    var target = document.getElementById("fPSRATE-list1");//designate injection point
    
    if (!target) {
        return;
    }
    
    target.innerHTML = "";
    if (state.length === 0) {
            var welcomeContainer = document.createElement("div");
            var welcomeImage = document.createElement("img");
            var clearDiv = document.createElement("div");
            var welcomeText = document.createElement("h2dark");
        
            welcomeContainer.setAttribute("class", "dark welcome space");
            welcomeImage.setAttribute("src", "img/hello.png");
            welcomeImage.setAttribute("class", "welcome-image");
            clearDiv.setAttribute("style", "clear:both;");
            welcomeText.innerHTML = "<b>Welcome to FPS Rate :)</b><br><br> To start rating, please click on the + button below or the add new button located at the right in the apps main tabs.";
        
            welcomeContainer.appendChild(welcomeImage);
            welcomeContainer.appendChild(clearDiv);
            welcomeContainer.appendChild(welcomeText);
            target.appendChild(welcomeContainer);
        }
    
    
    
    for (var i = 0; i < state.length; i++) {
        // pull out current object into list item
        var listItem = state[i];
        
        //create html container and tags that the stuff will go in
        var itemContainer = document.createElement("ion-item");
        var itemLinkWrap = document.createElement("a");
        var itemTitle = document.createElement("h2dark");
        var itemImage = document.createElement("img");
        var itemDescription = document.createElement("p");
        var itemRating = document.createElement("span");

        // put the individual things from listItem object that we pull out above into their tags from above
        itemContainer.setAttribute("class", "item-thumbnail-left dark  space item item-complex");
        itemLinkWrap.setAttribute("href", "#/page1/tab2/page2")
        itemLinkWrap.setAttribute("class", "item-content"); 
        index = i;
        itemLinkWrap.setAttribute("onclick", "edit("+index+");");
        itemTitle.innerHTML = listItem.name || "";
        itemImage.setAttribute("src", listItem.thumbnail || "../img/defaultImg.png");
        itemDescription.innerHTML = listItem.description || "";
        itemDescription.setAttribute("style", "white-space:normal;");
        itemRating.innerHTML = "Game Rating: " +listItem.overallRating;
        
        
        if (listItem.recommended) {
            itemLinkWrap.setAttribute("class", "item-content recommended");
            itemContainer.setAttribute("class", "item-thumbnail-left dark  space item item-complex recommendedBorder");   
        } else if (!listItem.recommended){
            itemRating.setAttribute("style", "color: #4f4731;");
            itemLinkWrap.setAttribute("class", "item-content regular")
        }
        // append the tags with shit in into the container
        itemLinkWrap.appendChild(itemImage);
        itemLinkWrap.appendChild(itemTitle);
        itemLinkWrap.appendChild(itemDescription);
        itemLinkWrap.appendChild(itemRating);
        itemContainer.appendChild(itemLinkWrap);

        //put current item into target container
        target.appendChild(itemContainer);
        
    }
    
}



// Take Photo
function takePic() {
    var options = {
            quality: 80,
            encodingType: Camera.EncodingType.PNG,
            targetWidth: 600,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            destinationType: Camera.DestinationType.FILE_URI
        };
    navigator.camera.getPicture(onSuccess, onFail, options);    
}

function onSuccess(tempFilename) {
    var img = document.getElementById("insertImage");
    img.setAttribute("src", tempFilename);
    
    //new
    window.resolveLocalFileSystemURI(tempFilename, gotFileHandle, onFail); 
    //alert("window file system uri bit")
}

function gotFileHandle(fileHandle) { 
    photoFileHandle = fileHandle;
    var destination = "file:///data/data/com.phonegap.fpsrate/files/files/";
    window.resolveLocalFileSystemURI(destination, gotDestination, onFail);
    //alert("got file handle success")
}

function gotDestination(destinationDirectory) {
    photoFileHandle.moveTo(destinationDirectory, photoFileHandle.name, moveSuccessful, onFail);
    //alert("got destination thing success")
}

function moveSuccessful(fileHandle) {
    var img = document.getElementById("insertImage");
    img.src = fileHandle.toURL();
    
    //alert("File moved to " + fileHandle.toURL());
}

function onFail(error) {
    alert("You didn't take a picture. Please try again");
}

// CHOOSE PHOTO
function choosePic() {
    var galOptions = {
        sourceType:Camera.PictureSourceType.PHOTOLIBRARY
    }
    navigator.camera.getPicture(onChooseSuccess, onChooseFail, galOptions);
}

function onChooseSuccess(PHOTOLIBRARY){
    var img = document.getElementById("insertImage");
    img.setAttribute("src", PHOTOLIBRARY);
}

function onChooseFail() {
    alert("You forgot to select a picture. Please try again.");
}

// GEOLOCATION
var walking = 'WALKING';
var driving = 'DRIVING';
var travelMode = walking;

function drive() {
    travelMode = driving;    
    initMap();
    document.getElementById("travelMode").innerHTML = "Driving";
}

function walk() {
    travelMode = walking;
    initMap();
    document.getElementById("travelMode").innerHTML = "Walking";
}


var gpsOptions = {
        frequency: 3000,
        enableHighAccuracy: true
};

function findMe (){
    navigator.geolocation.watchPosition(onGpsSuccess, onGpsFail, gpsOptions)
}

var userLat;
var userLon;
var targetLat = 50.371846;
var targetLon = -4.139098;

var map;
  function initMap() {
      
        var currentPos = {lat: userLat, lng: userLon};
        var target = {lat: targetLat, lng: targetLon};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: currentPos,
          scrollwheel: true,
          zoom: 12
        });

        var directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        });

        // Set destination, origin and travel mode.
        var request = {
          destination: target,
          origin: currentPos,
          travelMode: travelMode
        };

        // Pass the directions request to the directions service.
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
          if (status == 'OK') {
            // Display the route on the map.
            directionsDisplay.setDirections(response);
          }
        });
}





function onGpsSuccess (position) {
    console.log("I AM WORKING")

    userLat = position.coords.latitude;
    userLon = position.coords.longitude;
    document.getElementById('map').style.width = "100%";
    document.getElementById('map').style.height = "350px";
    
    var unhide = document.getElementsByClassName("unHideMe");
    for (i = 0; i < unhide.length; i++){
        unhide[i].style.display = "inline";
    }
    
    initMap();
}


function onGpsFail() {
    alert("Broke AF");
}


wishArray = [];

function buildWishItems() {
    
    var getWishInput = document.getElementById('wishText');
    var wishInput = getWishInput.value;
    console.log(wishInput);
    return {
        text: wishInput
    };
}


function pushWish() {
    var newWishObj = buildWishItems();
        wishArray.push(newWishObj);
}

function saveWishItems() {
    var serialisedWish = JSON.stringify(wishArray);
    localStorage.setItem("wishArray", serialisedWish);
    renderWishItems();
}

function loadWishItems() {
    var retrieveWish = localStorage.getItem("wishArray");
    wishArray = JSON.parse(retrieveWish) || [];
    renderWishItems();
}

function renderWishItems() {
        var insertWish = document.getElementById('mUSTPLAYWISHLIST-container5');
        
        if (!insertWish) {
            return;
        }
    
        insertWish.innerHTML = "";    
    
        for (var i = wishArray.length-1; i >= 0; i--) {
            var wishItem = wishArray[i];            

            var newWishItemCont = document.createElement("label");
            newWishItemCont.setAttribute("class", "item item-input wish-item");

            var newWishLabel = document.createElement("span");
            newWishLabel.setAttribute("class", "input-label");
            newWishLabel.innerHTML = "Item: ";

            var newWishTextArea = document.createElement("textarea");
            newWishTextArea.setAttribute("placeholder", "enter here");
            newWishTextArea.value = wishItem.text;

            newWishItemCont.appendChild(newWishLabel);
            newWishItemCont.appendChild(newWishTextArea);
            insertWish.appendChild(newWishItemCont);
        }
}

function handleWish() {
    pushWish();
    saveWishItems();
    document.getElementById("wishText").innerHTML = "";
}