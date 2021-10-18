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
  <div id="modal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="mb-1">
              <label for="jabatan_penerima" class="form-label">Jabatan Penerima</label>
              <input type="text" class="form-control" name="jabatan_penerima" id="jabatan_penerima" required>
            </div>
          </div>
           <div class="col">
            <div class="mb-1">
              <label for="alamat_perusahaan" class="form-label">Alamat Perusahaan</label>
              <input type="text" class="form-control" name="alamat_perusahaan" id="alamat_perusahaan" required>
            </div>
           </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="mb-1">
              <label for="nama_lengkap_pengirim" class="form-label">Nama Lengkap Pengirim</label>
              <input type="text" class="form-control" name="nama_lengkap_pengirim" id="nama_lengkap_pengirim" required>
            </div>
          </div>
          <div class="col">
            <div class="mb-1">
              <label for="alamat_pengirim" class="form-label">Alamat Pengirim</label>
              <input type="text" class="form-control" name="alamat_pengirim" id="alamat_pengirim" required>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="mb-1">
              <label for="jabatan" class="form-label">Jabatan Pengirim</label>
              <input type="text" class="form-control" name="jabatan" id="jabatan" required>
            </div>
          </div>
          <div class="col">
            <div class="mb-1">
              <label for="tgl_surat" class="form-label">Tanggal Surat</label>
              <input type="date" class="form-control" name="tgl_surat" id="tgl_surat" required>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="mb-1">
              <label for="alasan_izin" class="form-label">Alasan Izin</label>
              <input type="text" class="form-control" name="alasan_izin" id="alasan_izin" required></input>
            </div>
          </div>
          <div class="col">
            <div class="mb-1">
              <label for="lama_izin" class="form-label">Lama Izin (Hari)</label>
              <input type="text" class="form-control" name="lama_izin" id="lama_izin" required></input>
            </div>
          </div>
        </div>
        </div>
          <button class="btn btn-primary" id="btnSave">Submit</button>
        </div>
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