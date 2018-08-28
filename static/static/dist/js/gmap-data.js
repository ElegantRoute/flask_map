/*Gmap Init*/

var schoolZoneMarkers = [];
var constructionMarkers = [];
var billiardMarkers = [];
var childPedestrianAccidentMarkers = [];
var childrenSafetyZoneMarkers = [];
var fireStationMarkers = [];
var fireStationSafetyCenterMarkers = [];
var hotelMarkers = [];
var playGroundMarkers = [];
var policeOfficeMarkers = [];
var roomSalonMarkers = [];
var singingRoomMarkers = [];
var childrenSafetyHouseMarkers = [];

//타이틀만 모아놓은 행렬
var arrayOfTitles = [
    'schoolZone',
    'construction',
    'billiard',
    'childPedestrianAccident',
    'childrenSafetyZone',
    'fireStation',
    'fireStationSafetyCenter',
    'hotel',
    'playGround',
    'policeOffice',
    'roomSalon',
    'singingRoom',
    'childrenSafetyHouse'
];

// 마커이미지의 주소와, 크기로 마커 이미지를 생성하여 리턴하는 함수입니다
function createMarkerImage(src, size) {
    var markerImage = new daum.maps.MarkerImage(src, size);
    return markerImage;
}

// 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
function createMarker(position, image) {
    var marker = new daum.maps.Marker({
        position: position,
        image: image
    });
    return marker;
}

// 마커를 생성하고 마커 배열에 추가하는 함수입니다
function createMarkers(markerArray) {
    for (var i = 0; i < markerArray.length; i++) {

        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new daum.maps.Size(20, 20);

        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(marker[i].icon, imageSize);
        var temp_marker = createMarker(new daum.maps.LatLng(markerArray[i].lat, markerArray[i].lng), markerImage);

        // 인포윈도우를 생성합니다
        var infowindow = new daum.maps.InfoWindow({
            content : markerArray[i].infobox
        });

        //마커위에 마우스 올라가면 info가나오고 아니면 안나오게 설정
        daum.maps.event.addListener(temp_marker, 'mouseover', makeOverListener(map, temp_marker, infowindow));
        daum.maps.event.addListener(temp_marker, 'mouseout', makeOutListener(infowindow));

        // 생성된 마커를 각 마커 배열에 추가합니다
        returnMarker(markerArray[i].title).push(temp_marker);
    }
}

// 마커들의 지도 표시 여부를 설정하는 함수입니다
function setVisibleMarkers(markerArray, map) {
    for (var i = 0; i < markerArray.length; i++) {

        //현재 중심좌표와 각 점을 연결해서 선을 만들고 그 선의 길이를 계산해서 표시할 마커를 정한다 //개선방법 생각해볼것 굳이 선만들려고 함수 하나더 써야하나.... // 공식을 적용하기는 쪼오금 어려워서 마지막방법
        var polyline = new daum.maps.Polyline({path: [markerArray[i].getPosition(), myNowPosition]});
        var temp = polyline.getLength();

        //어디까지 보일지 반경을 설정해 준다
        if (temp <= 2500) {
            markerArray[i].setMap(map);
        }
        else {
            markerArray[i].setMap(null);
        }
    }
}

// 인포윈도우를 여는 함수입니다
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 함수입니다
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}

function changeMarker(info){
    var Menu = document.getElementById(info+'Menu');
    var markerArray = returnMarker(info);

    //이미 선택되어있으면 해당마커가 안보이게 설정
    if(Menu.className === 'menu_selected'){
        Menu.className = '';
        setVisibleMarkers(markerArray, null);
    }
    else{
        //그것이 아니면 선택되고 해당되는 마커가 보이게 설정
        Menu.className = 'menu_selected';
        setVisibleMarkers(markerArray, map);
    }
}

//마커가 보이게 설정되어있으면 true 반환하고 아니면 false 반환
function isSelected(info){
    var Menu = document.getElementById(info+'Menu');

    if(Menu.className === 'menu_selected'){
        return true
    }
    else{
        return false
    }
}

//들어온변수에 맞는 마커행렬 반환
function returnMarker(name) {
    if (name === 'schoolZone') {
        return schoolZoneMarkers
    }
    else if (name === 'construction') {
        return constructionMarkers
    }
    else if (name === 'billiard') {
        return billiardMarkers
    }
    else if (name === 'childPedestrianAccident') {
        return childPedestrianAccidentMarkers
    }
    else if (name === 'childrenSafetyZone') {
        return childrenSafetyZoneMarkers
    }
    else if (name === 'fireStation') {
        return fireStationMarkers
    }
    else if (name === 'fireStationSafetyCenter') {
        return fireStationSafetyCenterMarkers
    }
    else if (name === 'hotel') {
        return hotelMarkers
    }
    else if (name === 'playGround') {
        return playGroundMarkers
    }
    else if (name === 'policeOffice') {
        return policeOfficeMarkers
    }
    else if (name === 'roomSalon') {
        return roomSalonMarkers
    }
    else if (name === 'singingRoom') {
        return singingRoomMarkers
    }
    else if (name === 'childrenSafetyHouse') {
        return childrenSafetyHouseMarkers
    }
}

document.getElementById('fireStationMenu').onclick=function(){ changeMarker('fireStation')}

//브라우저가 모든 로딩을 끝냈을때 실행하는 함수.
window.onload = (function () {
    "use strict";
    var marker = document.getElementById('marker');
    /* Map initialization js*/
    if( $('#mapwrap').length > 0 ){

        //자동으로 잡는거 안되면 서울시청이 중심
        var startPosition = new daum.maps.LatLng(37.566679, 126.978406);

        //자동으로 위치 잡기
        //Chrome 브라우저는 https 환경에서만 geolocation을 지원 흑흑 호에엥 flask는 http라서 ssl을 추가해줘야 하는데 안되네;; 좀더 노오력해보자
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function(position) {

                var now_lat = position.coords.latitude, // 위도
                    now_lng = position.coords.longitude; // 경도

                startPosition = new daum.maps.LatLng(now_lat, now_lng);
            });
        }

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: startPosition, // 지도의 중심좌표
                level: 4// 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new daum.maps.Map(mapContainer, mapOption);

        //마커에 넣을 정보를 app.py에서 json형식으로 받아온다
        //var marker={{ mark|tojson }};

        //서울시청 좌표로 초기화
        var myNowPosition = new daum.maps.LatLng(37.566679, 126.978406);

        //내가 지금 보고있는 지도의 중심 좌표를 얻어옵니다. // 지도가 움직일때마다 실행된다
        daum.maps.event.addListener(map, 'dragend', function() {

            // 지도 중심좌표를 얻어옵니다
            myNowPosition = map.getCenter();

            //지도의 중심좌표가 변경될때마다 지도를 갱신해서 범위에 맞는 마커만 찍도록 합니다.
            for( var i=0; i<arrayOfTitles.length; i++) {
                if (isSelected(arrayOfTitles[i])) {
                    setVisibleMarkers(returnMarker(arrayOfTitles[i]), null);
                    setVisibleMarkers(returnMarker(arrayOfTitles[i]), map);
                }
            }
        });

        createMarkers(); // 마커를 생성하고 마커 배열에 추가합니다
    }




    // if( $('#map_canvas_1').length > 0 ){
    //     var settings = {
    //         zoom: 16,
    //         center: new google.maps.LatLng(43.270441,6.640888),
    //         mapTypeControl: false,
    //         scrollwheel: false,
    //         draggable: true,
    //         panControl:false,
    //         scaleControl: false,
    //         zoomControl: false,
    //         streetViewControl:false,
    //         navigationControl: false,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP,
    //         styles: [
    //             {
    //                 "featureType": "water",
    //                 "elementType": "geometry",
    //                 "stylers": [
    //                     {
    //                         "color": "#e9e9e9"
    //                     },
    //                     {
    //                         "lightness": 17
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "landscape",
    //                 "elementType": "geometry",
    //                 "stylers": [
    //                     {
    //                         "color": "#f5f5f5"
    //                     },
    //                     {
    //                         "lightness": 20
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road.highway",
    //                 "elementType": "geometry.fill",
    //                 "stylers": [
    //                     {
    //                         "color": "#ffffff"
    //                     },
    //                     {
    //                         "lightness": 17
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road.highway",
    //                 "elementType": "geometry.stroke",
    //                 "stylers": [
    //                     {
    //                         "color": "#ffffff"
    //                     },
    //                     {
    //                         "lightness": 29
    //                     },
    //                     {
    //                         "weight": 0.2
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road.arterial",
    //                 "elementType": "geometry",
    //                 "stylers": [
    //                     {
    //                         "color": "#ffffff"
    //                     },
    //                     {
    //                         "lightness": 18
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road.local",
    //                 "elementType": "geometry",
    //                 "stylers": [
    //                     {
    //                         "color": "#ffffff"
    //                     },
    //                     {
    //                         "lightness": 16
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "poi",
    //                 "elementType": "geometry",
    //                 "stylers": [
    //                     {
    //                         "color": "#f5f5f5"
    //                     },
    //                     {
    //                         "lightness": 21
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "poi.park",
    //                 "elementType": "geometry",
    //                 "stylers": [
    //                     {
    //                         "color": "#dedede"
    //                     },
    //                     {
    //                         "lightness": 21
    //                     }
    //                 ]
    //             },
    //             {
    //                 "elementType": "labels.text.stroke",
    //                 "stylers": [
    //                     {
    //                         "visibility": "on"
    //                     },
    //                     {
    //                         "color": "#ffffff"
    //                     },
    //                     {
    //                         "lightness": 16
    //                     }
    //                 ]
    //             },
    //             {
    //                 "elementType": "labels.text.fill",
    //                 "stylers": [
    //                     {
    //                         "saturation": 36
    //                     },
    //                     {
    //                         "color": "#333333"
    //                     },
    //                     {
    //                         "lightness": 40
    //                     }
    //                 ]
    //             },
    //             {
    //                 "elementType": "labels.icon",
    //                 "stylers": [
    //                     {
    //                         "visibility": "off"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "transit",
    //                 "elementType": "geometry",
    //                 "stylers": [
    //                     {
    //                         "color": "#f2f2f2"
    //                     },
    //                     {
    //                         "lightness": 19
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "administrative",
    //                 "elementType": "geometry.fill",
    //                 "stylers": [
    //                     {
    //                         "color": "#fefefe"
    //                     },
    //                     {
    //                         "lightness": 20
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "administrative",
    //                 "elementType": "geometry.stroke",
    //                 "stylers": [
    //                     {
    //                         "color": "#fefefe"
    //                     },
    //                     {
    //                         "lightness": 17
    //                     },
    //                     {
    //                         "weight": 1.2
    //                     }
    //                 ]
    //             }
    //         ]};
    //     var map = new google.maps.Map(document.getElementById("map_canvas_1"), settings);
    //     google.maps.event.addDomListener(window, "resize", function() {
    //         var center = map.getCenter();
    //         google.maps.event.trigger(map, "resize");
    //         map.setCenter(center);
    //     });
    //
    //     var infowindow = new google.maps.InfoWindow();
    //     var companyPos = new google.maps.LatLng(43.270441,6.640888);
    //     var companyMarker = new google.maps.Marker({
    //         position: companyPos,
    //         map: map,
    //         title:"Our Office",
    //         zIndex: 3});
    //     google.maps.event.addListener(companyMarker, 'click', function() {
    //         infowindow.open(map,companyMarker);
    //     });
    // }
    // if( $('#map_canvas_2').length > 0 ){
    //     var settings = {
    //         zoom: 16,
    //         center: new google.maps.LatLng(43.270441,6.640888),
    //         mapTypeControl: false,
    //         scrollwheel: false,
    //         draggable: true,
    //         panControl:false,
    //         scaleControl: false,
    //         zoomControl: false,
    //         streetViewControl:false,
    //         navigationControl: false,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP,
    //         styles: [
    //             {
    //                 "featureType": "administrative",
    //                 "elementType": "labels.text.fill",
    //                 "stylers": [
    //                     {
    //                         "color": "#444444"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "landscape",
    //                 "elementType": "all",
    //                 "stylers": [
    //                     {
    //                         "color": "#f2f2f2"
    //                     },
    //                     {
    //                         "visibility": "on"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "landscape.natural",
    //                 "elementType": "all",
    //                 "stylers": [
    //                     {
    //                         "visibility": "on"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "poi",
    //                 "elementType": "all",
    //                 "stylers": [
    //                     {
    //                         "visibility": "off"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road",
    //                 "elementType": "all",
    //                 "stylers": [
    //                     {
    //                         "saturation": -100
    //                     },
    //                     {
    //                         "lightness": 45
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road.highway",
    //                 "elementType": "all",
    //                 "stylers": [
    //                     {
    //                         "visibility": "simplified"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road.arterial",
    //                 "elementType": "labels.icon",
    //                 "stylers": [
    //                     {
    //                         "visibility": "off"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "transit",
    //                 "elementType": "all",
    //                 "stylers": [
    //                     {
    //                         "visibility": "off"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "water",
    //                 "elementType": "all",
    //                 "stylers": [
    //                     {
    //                         "color": "#68ebb5"
    //                     },
    //                     {
    //                         "visibility": "on"
    //                     }
    //                 ]
    //             }
    //         ]};
    //     var map = new google.maps.Map(document.getElementById("map_canvas_2"), settings);
    //     google.maps.event.addDomListener(window, "resize", function() {
    //         var center = map.getCenter();
    //         google.maps.event.trigger(map, "resize");
    //         map.setCenter(center);
    //     });
    //     var contentString = '<div id="content-map-marker" style="text-align:left; padding-top:10px; padding-left:10px">'+
    //         '<div id="siteNotice">'+
    //         '</div>'+
    //         '<h6 id="firstHeading" class="firstHeading" style=" margin-bottom:0px;"><strong>Hello Friend!</strong></h4>'+
    //         '<div id="bodyContent">'+
    //         '<p style="font-family: Varela Round; color:#adadad; font-size:13px; margin-bottom:10px">Here we are. Come to drink a coffee!</p>'+
    //         '</div>'+
    //         '</div>';
    //     var infowindow = new google.maps.InfoWindow({
    //         content: contentString
    //     });
    //
    //     var companyPos = new google.maps.LatLng(43.270441,6.640888);
    //     var companyMarker = new google.maps.Marker({
    //         position: companyPos,
    //         map: map,
    //         title:"Our Office",
    //         zIndex: 3});
    //     google.maps.event.addListener(companyMarker, 'click', function() {
    //         infowindow.open(map,companyMarker);
    //     });
    // }
});