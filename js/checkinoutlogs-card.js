$(document).ready(function () {
    $.get("http://api.spmgroup.vn:8080/parking-apis/orders", function (jsonData) {
        var tableData = $("#inOutTable");
        var rowTemplate = "<tr>" +
            "<th scope=\"row\">#index</th>" +
            "<td>#id</td>" +
            "<td>#STT</td>" +
            "<td>#cardCode</td>" +
            "<td>#timeIn</td>" +
            "<td>#timeOut</td>" +
            "<td>#numberPlate</td>" +
            "<td>#staffIn</td>" +
            "<td>#vehicleCode</td>" +
            "<td>#staffOut</td>" +
            "<td>#vehicleName</td>" +
            "<td>#isCardLost</td>" +
            "<td>#totalPrice</td>" +
            "<td>#pcName</td>" +
            "<td>#account</td>" +
            "<td>#monthlyCardId</td>" +
            "</tr>";
        tableData.find("tbody tr").remove();
        $.each(jsonData, function (k, v) {
            var newRow = rowTemplate.replace("#index", k + 1).replace("#id", v
                    .order_id).replace("#STT",
                    v.card_stt).replace("#cardCode", v.card_code).replace("#timeIn", v
                    .checkin_time)
                .replace("#timeOut", v.checkout_time).replace("#numberPlate", v
                    .car_number);
            newRow = newRow.replace("#staffIn", v.admin_checkin_name).replace(
                "#vehicleCode", v
                .vehicle_code).replace("#staffOut", v.admin_checkout_name);
            newRow = newRow.replace("#vehicleName", v.vehicle_name).replace(
                "#isCardLost", v
                .is_card_lost).replace("#totalPrice", v.total_price);
            newRow = newRow.replace("#pcName", v.pc_name).replace("#account", v.account)
                .replace(
                    "#monthlyCardId", v.monthly_card_id);
            tableData.append(newRow);
        });
    });
});