$(document).ready(function () {
    $.get("http://api.spmgroup.vn:8080/parking-apis/revenue", function (jsonData) {
        var tableData = $("#revenueIndexTable");
        var rowTemplate = "<tr>" +
            "<td>#vehicleName</td>" +
            "<td>#totalCheckIn</td>" +
            "<td>#totalCheckOut</td>" +
            "<td>#totalPrice</td>" +
            "</tr>";
        var rowTotal = "<tr style='background-color: lightblue;'>" +
            "<td>#vehicleName</td>" +
            "<td>#totalCheckIn</td>" +
            "<td>#totalCheckOut</td>" +
            "<td>#totalPrice</td>" +
            "</tr>";
        var rowTotalFinish = "<tr style='background-color: palegreen;'>" +
            "<td>#vehicleName</td>" +
            "<td>#totalCheckIn</td>" +
            "<td>#totalCheckOut</td>" +
            "<td>#totalPrice</td>" +
            "</tr>";
        tableData.find("tbody tr").remove();
        var dataMotoNormal = jsonData.motoNormal;
        var dataMotoMonthly = jsonData.motoMonthly;
        var dataOtoNormal = jsonData.otoNormal;
        var dataOtoMonthly = jsonData.otoMonthly;
        var newRow1 = rowTemplate.replace("#vehicleName", "xe máy")
        .replace("#totalCheckIn", dataMotoNormal.total_checkin).replace("#totalCheckOut", dataMotoNormal.total_checkout)
        .replace("#totalPrice", dataMotoNormal.total_price);
        tableData.append(newRow1);

        var newRow2 = rowTemplate.replace("#vehicleName", "xe oto")
        .replace("#totalCheckIn", dataOtoNormal.total_checkin).replace("#totalCheckOut", dataOtoNormal.total_checkout)
        .replace("#totalPrice", dataOtoNormal.total_price);
        tableData.append(newRow2);

        var newRow3 = rowTotal.replace("#vehicleName", "__Tổng xe thường")
        .replace("#totalCheckIn", (dataMotoNormal.total_checkin + dataOtoNormal.total_checkin))
        .replace("#totalCheckOut", (dataMotoNormal.total_checkout + dataOtoNormal.total_checkout))
        .replace("#totalPrice", (dataMotoNormal.total_price + dataOtoNormal.total_price));
        tableData.append(newRow3);

        var newRow4 = rowTemplate.replace("#vehicleName", "xe máy")
        .replace("#totalCheckIn", dataMotoMonthly.total_checkin).replace("#totalCheckOut", dataMotoMonthly.total_checkout)
        .replace("#totalPrice", dataMotoMonthly.total_price);
        tableData.append(newRow4);

        var newRow5 = rowTemplate.replace("#vehicleName", "xe oto")
        .replace("#totalCheckIn", dataOtoMonthly.total_checkin).replace("#totalCheckOut", dataOtoMonthly.total_checkout)
        .replace("#totalPrice", dataOtoMonthly.total_price);
        tableData.append(newRow5);

        var newRow6 = rowTotal.replace("#vehicleName", "__Tổng xe tháng")
        .replace("#totalCheckIn", (dataMotoMonthly.total_checkin + dataOtoMonthly.total_checkin))
        .replace("#totalCheckOut", (dataMotoMonthly.total_checkout + dataOtoMonthly.total_checkout))
        .replace("#totalPrice", (dataMotoMonthly.total_price + dataOtoMonthly.total_price));
        tableData.append(newRow6);

        var newRow7 = rowTotalFinish.replace("#vehicleName", "___Tổng cộng")
        .replace("#totalCheckIn", (dataMotoNormal.total_checkin + dataOtoNormal.total_checkin + dataMotoMonthly.total_checkin + dataOtoMonthly.total_checkin))
        .replace("#totalCheckOut", (dataMotoNormal.total_checkout + dataOtoNormal.total_checkout + dataMotoMonthly.total_checkout + dataOtoMonthly.total_checkout))
        .replace("#totalPrice", (dataMotoNormal.total_price + dataOtoNormal.total_price + dataMotoMonthly.total_price + dataOtoMonthly.total_price));
        tableData.append(newRow7);
    });      
});