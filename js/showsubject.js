window.onload = function () {
    getSubject();
}

function getSubject() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/subject",
        success: function (data) {
            let c = `<div class="list_subject"> `;
            for (let i = 0; i < data.length; i++) {
                c += `<select name="subject_class" id="subject-class">
                                <option value="${data[i].id}">${data[i].name}</option>
                            </select>`;
            }
            c += `</div>`;
            document.getElementById("list_subject").innerHTML = c;
        }
    });
}

