// window.onload = function (){
//     getCourse();
// }
//
// function getCourse(){
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/api/course",
//         success: function (data) {
//             let c = `<div id="courseList">`;
//             for (let i = 0; i <data.length ; i++) {
//                 c+=`<div class="N-block"> <span class="d-left">Aug<br>
//                                     26
//                                     </span> <font color="#000" size="+1"><a href="#">${data[i].description}</a></font> </div>
//                                     <hr>`;
//
//             }
//             c+=`</div>`;
//             document.getElementById("courseList").innerHTML=c;
//     });
// }