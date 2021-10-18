function main() {
  const getLetter = () => {
    fetch('http://127.0.0.1:8000/api/letter')
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if(responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllLetter(responseJson.data);
        }
      })
      .catch(error => {
        showResponseMessage(error);
      })
  };

  const getSpesificLetter = (letterId) => {
    fetch(`http://127.0.0.1:8000/api/letter/${letterId}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if(responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderModalEdit(responseJson.data);
        }
      })
      .catch(error => {
        showResponseMessage(error);
      })
  }

  const insertLetter = (letter) => {
    fetch('http://127.0.0.1:8000/api/letter', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(letter)
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        showResponseMessage(responseJson.message);
        getLetter();
        if(responseJson.message == 'Surat berhasil disimpan'){
          closeModal();
        }
      })
      .catch(error => {
        // showResponseMessage(error);
      })
  };

  const updateLetter = (letter) => {
    fetch(`http://127.0.0.1:8000/api/letter/${letter.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(letter)
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        showResponseMessage(responseJson.message);
        console.log(letter);
        getLetter();
        closeModal();
      })
      .catch(error => {
        // showResponseMessage(error);
      })
  }

  const removeLetter = (letterId) => {
    fetch(`http://127.0.0.1:8000/api/letter/${letterId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            showResponseMessage(responseJson.message);
            getLetter();
        })
        .catch(error => {
            showResponseMessage(error);
        })
  };

  const renderModal = () => {
    const content = `
      <div class="modal-content">
      <span class="close">&times;</span>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="mb-1">
              <label for="jabatan_penerima" class="form-label">Jabatan Penerima</label>
              <input type="text" class="form-control" name="jabatan_penerima" id="jabatan_penerima"  required>
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
              <input type="text" class="form-control" name="nama_lengkap_pengirim" id="nama_lengkap_pengirim"  required>
            </div>
          </div>
          <div class="col">
            <div class="mb-1">
              <label for="alamat_pengirim" class="form-label">Alamat Pengirim</label>
              <input type="text" class="form-control" name="alamat_pengirim" id="alamat_pengirim"  required>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="mb-1">
              <label for="jabatan" class="form-label">Jabatan Pengirim</label>
              <input type="text" class="form-control" name="jabatan" id="jabatan"  required>
            </div>
          </div>
          <div class="col">
            <div class="mb-1">
              <label for="tgl_surat" class="form-label">Tanggal Surat</label>
              <input type="date" class="form-control" name="tgl_surat" id="tgl_surat"  required>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="mb-1">
              <label for="alasan_izin" class="form-label">Alasan Izin</label>
              <input type="text" class="form-control" name="alasan_izin" id="alasan_izin"  required></input>
            </div>
          </div>
          <div class="col">
            <div class="mb-1">
              <label for="lama_izin" class="form-label">Lama Izin (Hari)</label>
              <input type="text" class="form-control" name="lama_izin" id="lama_izin"  required></input>
            </div>
          </div>
        </div>
        </div>
          <button class="btn btn-primary" id="btnSave">Submit</button>
        </div>
    `
    const modal = document.querySelector('#modal')
    modal.innerHTML = content;
    
    const inputPenerima = document.querySelector('#jabatan_penerima');
    const inputPerusahaan = document.querySelector('#alamat_perusahaan');
    const inputNamaLengkap = document.querySelector('#nama_lengkap_pengirim');
    const inputAlamat = document.querySelector('#alamat_pengirim');
    const inputJabatan = document.querySelector('#jabatan');
    const inputAlasanIzin = document.querySelector('#alasan_izin');
    const inputLamaIzin = document.querySelector('#lama_izin');
    const inputTglSurat = document.querySelector('#tgl_surat');
    const btnSave = document.querySelector('#btnSave');
    const btnExit = document.querySelector('.close');
    
    btnSave.addEventListener("click", function() {
      const letter = {
        jabatan_penerima: inputPenerima.value,
        alamat_perusahaan: inputPerusahaan.value,
        nama_lengkap_pengirim: inputNamaLengkap.value,
        alamat_pengirim: inputAlamat.value,
        jabatan: inputJabatan.value,
        alasan_izin: inputAlasanIzin.value,
        lama_izin: inputLamaIzin.value,
        tgl_surat: inputTglSurat.value
      };
      insertLetter(letter);
    });

    btnExit.addEventListener("click", function() {
      closeModal();
      modal.innerHTML = "";
    })
  }

  const renderModalEdit = (letter) => {
    const modalElement = document.querySelector('#modalEdit');
    const content = `
      <div class="modal-content">
      <span class="close">&times;</span>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="mb-1">
              <label for="jabatan_penerima" class="form-label">Jabatan Penerima</label>
              <input type="text" class="form-control" name="jabatan_penerima" id="jabatan_penerima" value = "${letter.jabatan_penerima}" required>
            </div>
          </div>
           <div class="col">
            <div class="mb-1">
              <label for="alamat_perusahaan" class="form-label">Alamat Perusahaan</label>
              <input type="text" class="form-control" name="alamat_perusahaan" id="alamat_perusahaan" value = "${letter.alamat_perusahaan}" required>
            </div>
           </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="mb-1">
              <label for="nama_lengkap_pengirim" class="form-label">Nama Lengkap Pengirim</label>
              <input type="text" class="form-control" name="nama_lengkap_pengirim" id="nama_lengkap_pengirim" value = "${letter.nama_lengkap_pengirim}" required>
            </div>
          </div>
          <div class="col">
            <div class="mb-1">
              <label for="alamat_pengirim" class="form-label">Alamat Pengirim</label>
              <input type="text" class="form-control" name="alamat_pengirim" id="alamat_pengirim" value = "${letter.alamat_pengirim}" required>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="mb-1">
              <label for="jabatan" class="form-label">Jabatan Pengirim</label>
              <input type="text" class="form-control" name="jabatan" id="jabatan" value = "${letter.jabatan}" required>
            </div>
          </div>
          <div class="col">
            <div class="mb-1">
              <label for="tgl_surat" class="form-label">Tanggal Surat</label>
              <input type="date" class="form-control" name="tgl_surat" id="tgl_surat" value = "${letter.tgl_surat}" required>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="mb-1">
              <label for="alasan_izin" class="form-label">Alasan Izin</label>
              <input type="text" class="form-control" name="alasan_izin" id="alasan_izin" value = "${letter.alasan_izin}" required></input>
            </div>
          </div>
          <div class="col">
            <div class="mb-1">
              <label for="lama_izin" class="form-label">Lama Izin (Hari)</label>
              <input type="text" class="form-control" name="lama_izin" id="lama_izin" value = "${letter.lama_izin}" required></input>
            </div>
          </div>
        </div>
        </div>
        <div class="mb-1">
          <input type="text" class="form-control" name="id" id="idLetter" value = "${letter.id}" hidden>
        </div>
          <button class="btn btn-primary" id="btnSave">Save</button>
        </div>
    `
    modalElement.innerHTML = content;
    const btnSave = document.querySelector("#modalEdit > .modal-content > #btnSave");
    btnSave.addEventListener("click", function() {
      updateLetter(getInputValue());
    });
    modalElement.style.display = 'block';

    const btnExit = document.querySelector("#modalEdit > .modal-content > .close")
    btnExit.addEventListener("click", function() {
      closeModal();
      modalElement.innerHTML = "";
    })
  }

  const getInputValue = () => {
    const idLetter = document.querySelector('#idLetter');
    const inputPenerima = document.querySelector('#jabatan_penerima');
    const inputPerusahaan = document.querySelector('#alamat_perusahaan');
    const inputNamaLengkap = document.querySelector('#nama_lengkap_pengirim');
    const inputAlamat = document.querySelector('#alamat_pengirim');
    const inputJabatan = document.querySelector('#jabatan');
    const inputAlasanIzin = document.querySelector('#alasan_izin');
    const inputLamaIzin = document.querySelector('#lama_izin');
    const inputTglSurat = document.querySelector('#tgl_surat');
    const letter = {
      id: idLetter.value,
      jabatan_penerima: inputPenerima.value,
      alamat_perusahaan: inputPerusahaan.value,
      nama_lengkap_pengirim: inputNamaLengkap.value,
      alamat_pengirim: inputAlamat.value,
      jabatan: inputJabatan.value,
      alasan_izin: inputAlasanIzin.value,
      lama_izin: inputLamaIzin.value,
      tgl_surat: inputTglSurat.value
    };
    return letter;
  }


  const renderAllLetter = (letters) => {
    const listLetterElement = document.querySelector('#listLetter');
    listLetterElement.innerHTML = "";
    if(letters != ''){
      letters.forEach(letter => {
        listLetterElement.innerHTML += `
        <tr>
            <td>${letter.tgl_surat}</td>
            <td>${letter.nama_lengkap_pengirim}</td>
            <td>${letter.alasan_izin}</td>
            <td> <button type="button" class="btn btn-success button-edit" id="${letter.id}">Edit</button>
            <button type="button" class="btn btn-primary button-print" onclick="window.open('/letter/print/${letter.id}', '_blank')" id="${letter.id}">Print</button>
            <button type="button" class="btn btn-danger button-delete" id="${letter.id}">Delete</button>
            </td>
        </tr>
        `
      });
    } else {
      listLetterElement.innerHTML += `
        <tr>
          <td colspan="4" style="text-align:center">0 Result</td>
        </tr>
        `
    }

    const buttons = document.querySelectorAll(".button-delete");
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            const letterId = event.target.id;
            removeLetter(letterId);
        })
    });

    const btnEdit = document.querySelectorAll(".button-edit");
    btnEdit.forEach(button => {
      button.addEventListener("click", event => {
          const letterId = event.target.id;
          getSpesificLetter(letterId);
      })
    })

  };

  const closeModal = () => {
    const modal = document.querySelector("#modal")
    const modalEdit = document.querySelector("#modalEdit")

    modal.style.display = "none";
    modalEdit.style.display = "none";

    modal.innerHTML = "";
    modalEdit.innerHTML = "";
  }


  const showResponseMessage = (message = "Check your internet connection") => {
    alert(`${message}`);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const btnModal = document.querySelector('#btnModal');
    btnModal.addEventListener("click", function() {
      renderModal();
      modal.style.display = "block";
    });

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    getLetter();
  })
}

main();