function hasilSubmit() {
  
  // inisialisasi data player
      var data, nama, peran, tahunLahir, umurSekarang, playerHealth, monsterHealth, kodeMonster;
      data = document.getElementById('daftar');
      nama = data.elements['nama'].value;
      peran = data.elements['peran'].value;
      tahunLahir = data.elements['tahunLahir'].value;
      umurSekarang = 2017 - tahunLahir;
      playerHealth = tahunLahir * Math.random();
      monsterHealth = tahunLahir * Math.random();
      kodeMonster = Math.floor(Math.pow(100, Math.random()));
  

  //menentukan rules nama
      if (nama === '') {
        document.getElementById('hasilNama').innerHTML= 'Nama tidak boleh kosong';
      }
      else {
        document.getElementById('hasilNama').innerHTML= 'Selamat datang di Dunia Proxytia, ' + nama + '!';
      }
  
           
  //menentukan rules peran
      if (nama === '' && peran !== ''){
        peran = 'kacung';
        document.getElementById('hasilPeran').innerHTML = 'Halo Kacung, bersiap untuk memulai!'
      }
      else if(nama !== '' && peran == 'ksatria') {
        document.getElementById('hasilPeran').innerHTML = 'Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!';
      }
      else if(nama !== '' && peran == 'tabib'){
        document.getElementById('hasilPeran').innerHTML = 'Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.';
      }
      else if(nama !== '' && peran == 'penyihir'){
        document.getElementById('hasilPeran').innerHTML = 'Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!';
      }
      else {
        document.getElementById('hasilPeran').innerHTML= 'Pilih peranmu untuk memulai game';
      }
  
  
  //cek kondisi kesehatan monster dan player  
      for(var x = 1; x<= tahunLahir; x++){
        if ((x%umurSekarang)=== 0 && (x%kodeMonster)=== 0){
          console.log('Health keduanya bertambah');
          playerHealth = playerHealth + kodeMonster;
          monsterHealth = monsterHealth + umurSekarang;
        }
        else if ((x%umurSekarang)=== 0){
          console.log(peran + ' ' + nama + ' menyerang monster!');
          monsterHealth = monsterHealth - umurSekarang;
        }
        else if ((x%kodeMonster)=== 0){
          console.log('Monster menyerang ' + peran + ' ' + nama + '!');
          playerHealth = playerHealth - kodeMonster;
        }
      }
  
  //menampilkan hasil
      if (playerHealth > monsterHealth) {
        console.log('Selamat, ' + peran + ' ' + nama + ' anda memenangkan pertarungan!');
        document.getElementById('hasilGame').innerHTML= 'Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!';
      } else {
        console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
        document.getElementById('hasilGame').innerHTML= 'Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...';
      }
    }