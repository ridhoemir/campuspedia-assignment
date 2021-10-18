<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <!-- Bootstrap CSS -->
  {{-- <link rel="stylesheet" href="{{asset('css/cetak_pdf.css')}}"> --}}
  <title>Cetak PDF</title>
  <style>
    *{
      font-weight: 10
    }
  </style>
</head>
<body>
  <div style="float: right; margin-top: -10px"><h4>{{$letter_resource->tgl_surat}}</h4></div>
  <div class="tujuan-surat" style="margin-top: 10px">
    <h4>Yth. <br>{{$letter_resource->jabatan_penerima}} <br>{{$letter_resource->alamat_perusahaan}}</h4>
  </div>

  <div class="main-surat">
    <h4>Dengan Hormat, <br> Saya yang bertandatangan di bawah ini:</h4>
    <h4>Nama&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {{$letter_resource->nama_lengkap_pengirim}} <br>Alamat&nbsp;&nbsp;&nbsp;: {{$letter_resource->alamat_pengirim}} <br>Jabatan&nbsp;&nbsp;: {{$letter_resource->jabatan}}.</h4>
    <h4>Dengan surat pernyataan ini saya mengajukan permohonan izin untuk tidak masuk kerja selama {{$letter_resource->lama_izin}} hari dikarenakan {{strtolower($letter_resource->alasan_izin)}}.</h4>
    <h4>Demikian surat izin kerja ini saya sampaikan, atas kebijakan Bapak/Ibu saya ucapkan terimakasih.</h4>
  </div>

  <div class="ttd" style="float: right; ">
    <h4>Hormat Saya,<br><br><br><br><br>{{$letter_resource->nama_lengkap_pengirim}}</h4>
  </div>
  <script src="{{ asset('js/data.js') }}"></script>
</body>
</html>