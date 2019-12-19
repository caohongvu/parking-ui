$(document).ready(function () {
    $.get("http://api.spmgroup.vn:8080/parking-apis/orders", function (jsonData) {
        var tableData = $("#inOutTable");
        var rowTemplate = "<tr>" +
            "<td>#STT</td>" +
            "<td>#cardNum</td>" +
            "<td>#cardCode</td>" +
            "<td>#timeIn</td>" +
            "<td>#timeOut</td>" +
            "<td>#numberPlate</td>" +
            "<td>#staffIn</td>" +
            "<td>#staffOut</td>" +
            "<td>#vehicleName</td>" +
            "<td>#isCardLost</td>" +
            "<td>#totalPrice</td>" +
            "</tr>";
        tableData.find("tbody tr").remove();
        var index = 1;
        $.each(jsonData, function (k, v) {
            var newRow = rowTemplate.replace("#STT", index)
            .replace("#cardNum",v.card_stt)
            .replace("#cardCode", v.card_code)
            .replace("#timeIn", v.checkinTimeInFormat)
            .replace("#timeOut", v.checkoutTimeInFormat)
            .replace("#numberPlate", v.car_number);
            newRow = newRow.replace("#staffIn", v.admin_checkin_name)
            .replace("#staffOut", v.admin_checkout_name);
            newRow = newRow.replace("#vehicleName", v.vehicle_name)
            .replace("#isCardLost", v.is_card_lost)
            .replace("#totalPrice", v.total_price);

            tableData.append(newRow);
            index++;
        });
    });
});