$(document).ready(function () {
    $.get("http://api.spmgroup.vn:8080/parking-apis/cards", function (jsonData) {
        var tableData = $("#inOutTable");
        var rowTemplate = "<tr>" +
            "<td>#id</td>" +
            "<td>#code</td>" +
            "<td>#stt</td>" +
            "<td>#vehicle</td>" +
            "</tr>";
        tableData.find("tbody tr").remove();
        $.each(jsonData, function (k, v) {
            var newRow = rowTemplate.replace("#id", v.id)
            .replace("#code",v.code)
            .replace("#stt", v.stt)
            .replace("#vehicle", v.vehicle_id);
            tableData.append(newRow);
        });
    });
});