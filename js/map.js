
var nightSpotMarkers = []; // 야경 명소 마커 배열
var currentMarker; // 내 위치 마커

var container = document.getElementById('map'); 
var options = { 
    center: new kakao.maps.LatLng(37.5658, 126.9778), 
    level: 10 
};

var map = new kakao.maps.Map(container, options); 

// 내 위치 
var defaultLocation = {
    name: " 내 위치",
    latlng: new kakao.maps.LatLng(37.499553, 127.035888) 
};


// "내 위치 찾기" 버튼을 클릭 함수 
function findMyLocation() {
    
 
    var marker = new kakao.maps.Marker({
        map: map, 
        position: defaultLocation.latlng, 
        title: defaultLocation.name 
    });
    
    currentMarker = marker;


    map.setCenter(defaultLocation.latlng);
    
     
    map.setLevel(1);
    
    var iwContent = '<div style="padding:5px;font-size:14px;">' + defaultLocation.name + '</div>';
        
        
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : true
    });
    
        
    (function(marker, infowindow) {
        kakao.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
        });
    })(marker, infowindow);

}


var api_key = "645349657864757437364a7255674c";

//"내 주변 야경명소 찾기" 버튼
$(".panel-button").click(function () { 

        
  
    var url = `http://openapi.seoul.go.kr:8088/${api_key}/json/viewNightSpot/1/51/`;
        
    $.ajax({
        url:url,
        type:"GET",
        cache:false,
        success: function(data,status){
            (status == "success") && parseJSON(data); 
        },

    });
});


function parseJSON(data) {
    
    for (var row of data.viewNightSpot.row) {
        const title = row.TITLE; 
        const addr = row.ADDR ;
        var lat = parseFloat(row.LA); // 위도 
        var lng = parseFloat(row.LO); // 경도 
        const subway = row.SUBWAY ;
        const bus = row.BUS ;
        const parkingInfo = row.PARKING_INFO ;
       
        

        
        var latlng = new kakao.maps.LatLng(lat, lng);
        
        
        var marker = new kakao.maps.Marker({
            map: map, 
            position: latlng, 
            title: title  
        });
        
        //야경 명소 마커 배열 추가
        nightSpotMarkers.push(marker); 

   
        var iwContent = `<div class="custom-infowindow">
        <div class="iw-title">${title}</div>
        <div class="iw-detail-item"><span class="iw-label">주소:</span> ${addr}</div>
        <div class="iw-detail-item"><span class="iw-label">지하철:</span> ${subway}</div>
        <div class="iw-detail-item"><span class="iw-label">버스:</span> ${bus}</div>
        <div class="iw-detail-item"><span class="iw-label">주차:</span> ${parkingInfo}</div>
        </div>
        `,
        iwRemoveable = true;
        
        var infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });

       
        (function(marker, infowindow) {
            kakao.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        })(marker, infowindow);

        
    }
    

    if (nightSpotMarkers.length > 0) {
        map.setCenter(nightSpotMarkers[9].getPosition());
        map.setLevel(7); //마커들이 보이도록 
    }
}
        
    