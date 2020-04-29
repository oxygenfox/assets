  $(document).ready(function() {
    var d = new Date();
    var month = new Array();
    month[0] = "Januari";
    month[1] = "Februari";
    month[2] = "Maret";
    month[3] = "April";
    month[4] = "Mei";
    month[5] = "Juni";
    month[6] = "Juli";
    month[7] = "Agustus";
    month[8] = "September";
    month[9] = "Oktober";
    month[10] = "November";
    month[11] = "Desember";

    $("#date").html(d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear());
    $.ajax({
      url: "https://api.kawalcorona.com/indonesia/", success: function(result) {

        var positif = result[0].positif;
        var sembuh = result[0].sembuh;
        var meninggal = result[0].meninggal
        var ganti_angka_positif = positif.replace(",", "");
        var ganti_angka_sembuh = sembuh.replace(",", "");
        var ganti_angka_meninggal = meninggal.replace(",", "");
        $("#positif").html(result[0].positif);
        $("#sembuh").html(result[0].sembuh);
        $("#meninggal").html(result[0].meninggal);
        var tingkat_kematian = (ganti_angka_meninggal / ganti_angka_positif) * 100;
        $("#total").html(tingkat_kematian.toFixed(1) + "%");
        $.ajax({
          url: "https://api.kawalcorona.com/positif/", success: function(result) {

            var posi = result.value;
            var ganti_angka_posi = posi.replace(",", "");
            $("#posi").html(result.value);
          }});
        $.ajax({
          url: "https://api.kawalcorona.com/sembuh/", success: function(result) {

            var semb = result.value;
            var ganti_angka_posi = semb.replace(",", "");
            $("#semb").html(result.value);
          }});
        $.ajax({
          url: "https://api.kawalcorona.com/meninggal/", success: function(result) {

            var men = result.value;
            var ganti_angka_posi = men.replace(",", "");
            $("#men").html(result.value);
          }});
      }});
  });
