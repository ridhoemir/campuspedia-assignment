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
      })
      .catch(error => {
        // showResponseMessage(error);
      })
  };

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

  const printLetter = (letterId) => {
    fetch(`http://127.0.0.1:8000/api/letter/${letterId}`, {
        method: "GET",
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
  }
  const renderAllLetter = (letters) => {
    const listLetterElement = document.querySelector('#listLetter');
    listLetterElement.innerHTML = "";
    if(letters != ''){
      letters.forEach(letter => {
        // listLetterElement.innerHTML += `
        // <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
        //     <div class="card">
        //         <div class="card-body">
        //             <h5>(${letter.tgl_surat}) ${letter.penerima}</h5>
        //             <p>${letter.pengirim}</p>
        //             <button type="button" class="btn btn-danger button-delete" id="${letter.id}">Hapus</button>
        //         </div>
        //     </div>
        // </div>`
        listLetterElement.innerHTML += `
        <tr>
            <td>${letter.tgl_surat}</td>
            <td>${letter.nama_lengkap_pengirim}</td>
            <td>${letter.alasan_izin}</td>
            <td> <button type="button" class="btn btn-success button-success" id="${letter.id}">Edit</button>
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

  };

    

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(`${message}`);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const inputPenerima = document.querySelector('#jabatan_penerima');
    const inputPerusahaan = document.querySelector('#alamat_perusahaan');
    const inputNamaLengkap = document.querySelector('#nama_lengkap_pengirim');
    const inputAlamat = document.querySelector('#alamat_pengirim');
    const inputJabatan = document.querySelector('#jabatan');
    const inputAlasanIzin = document.querySelector('#alasan_izin');
    const inputLamaIzin = document.querySelector('#lama_izin');
    const inputTglSurat = document.querySelector('#tgl_surat');
    const btnSave = document.querySelector('#btnSave');
    const btnModal = document.querySelector('#btnModal');
    const btnExit = document.querySelector('.close');
    const modal = document.getElementById('modal')

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

    btnModal.addEventListener("click", function() {
      modal.style.display = "block";
    });

    btnExit.addEventListener("click", function() {
      modal.style.display = "none";
    })

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    getLetter();
  })
}

main();