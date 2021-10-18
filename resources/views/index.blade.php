<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.datatables.net/1.10.25/css/dataTables.bootstrap5.min.css" />
  <link rel="stylesheet" href="{{asset('css/style.css')}}">
  <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
  <script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.25/js/dataTables.bootstrap5.min.js"></script>
  <script src="https://kit.fontawesome.com/6a7fa42af7.js" crossorigin="anonymous"></script>
  <title>Pembuatan Surat</title>
</head>
<body>
  <nav class="navbar ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        Generate Surat
      </a>
    </div>
  </nav>
  <div id="modal" class="modal">
    </div>

    <div class="modalEdit" id="modalEdit"></div>

    <div class="container">
      <table id="tabel-data" class="table table-striped table-bordered" width="100%" cellspacing="0">
        <thead>
            <tr>
                <th>Tanggal</th>
                <th>Pengirim</th>
                <th>Alasan Izin</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody id="listLetter">
        </tbody>
      </table>
      <button type="button" class="btn btn-primary button-primary" id="btnModal">Tambah Surat</button>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.5.2/bootbox.min.js"></script>

    <script src="{{ asset('js/data.js') }}"></script>
</body>
</html>