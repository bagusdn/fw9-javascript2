function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
      dataArray.sort((x, y) => x - y);
      result = dataArray.filter((e) => {
        if (e > nilaiAwal && e < nilaiAkhir) {
          return e;
        }
      });
      return result;
    } else if (nilaiAwal > nilaiAkhir && dataArray.length > 5) {
      return "Nilai akhir harus lebih besar dari Nilai Awal";
    } else if (nilaiAwal < nilaiAkhir && dataArray.length <= 5) {
      return "Jumlah angka dalam array tidak ada";
    } else if (nilaiAwal > nilaiAkhir && dataArray.length <= 5) {
      return "Nilai akhir harus lebih besar dari Nilai Awal & Jumlah angka dalam array tidak ada";
    } else {
      return "Masukkan data dengan benar";
    }
  }
  console.log(SeleksiNilai(40, 100, [30,30,50,60,120,4]));
  // kondisi data ksong