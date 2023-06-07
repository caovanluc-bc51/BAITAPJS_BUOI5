/**
 * BÀI 1: QUẢN LÝ TUYỂN SINH
 * MÔ HÌNH 3 KHỐI
 * ĐẦU VÀO:
 * -ĐIỂM CHUẨN HỘI ĐỒNG
 * -ĐIỂM MÔN THI 1, ĐIỂM MÔN THI 2, ĐIỂM MÔN THI 3
 * -ĐIỂM KHU VỰC ƯU TIÊN
 * -ĐIỂM ĐỐI TƯỢNG ƯU TIÊN
 * XỬ LÝ:
 * -TỔNG ĐIỂM 3 MÔN THI = ĐIỂM MÔN THI 1 + ĐIỂM MÔN THI 2 + ĐIỂM MÔN THI 3
 * - ĐIỂM ƯU TIÊN = ĐIỂM KHU VỰC + ĐIỂM ĐỐI TƯỢNG
 * - ĐIỂM TỔNG KẾT = TỔNG ĐIỂM 3 MÔN THI + ĐIỂM ƯU TIÊN
 * - NẾU (ĐIỂM TỔNG KẾT >= ĐIỂM CHUẨN HỘI ĐỒNG VÀ ĐIỂM MÔN THI 1 > 0 VÀ ĐIỂM MÔN THI 2 > 0 VÀ ĐIỂM MÔN THI 3 > 0) --> ĐẬU
 * - ĐIỀU KIỆN SAI --> RỚT
 * ĐẦU RA:
 * -IN RA KẾT QUẢ ĐẬU HAY RỚT
 * -IN RA ĐIỂM TỔNG KẾT
 */
const KHU_VUC_A = 2;
const KHU_VUC_B = 1;
const KHU_VUC_C = 0.5;
const KHONG_KHU_VUC = 0;
const DOI_TUONG_1 = 2.5;
const DOI_TUONG_2 = 1.5;
const DOI_TUONG_3 = 1;
const KHONG_DOI_TUONG = 0;

function layDiemKhuVuc() {
  var khuVucA = getEle("khuVucA");
  var khuVucB = getEle("khuVucB");
  var khuVucC = getEle("khuVucC");
  var khongKhuVucUuTien = getEle("khongKhuVucUuTien");
  var diemKhuVuc = " ";
  if (khuVucA.checked) {
    diemKhuVuc = KHU_VUC_A;
  } else if (khuVucB.checked) {
    diemKhuVuc = KHU_VUC_B;
  } else if (khuVucC.checked) {
    diemKhuVuc = KHU_VUC_C;
  } else {
    diemKhuVuc = KHONG_KHU_VUC;
  }
  return diemKhuVuc;
}
function layDiemDoiTuong() {
  var khuVucA = getEle("doiTuong1");
  var khuVucB = getEle("doiTuong2");
  var khuVucC = getEle("doiTuong3");
  var khongKhuVucUuTien = getEle("khongDoiTuongUuTien");
  var diemDoiTuong = " ";
  if (khuVucA.checked) {
    diemDoiTuong = DOI_TUONG_1;
  } else if (khuVucB.checked) {
    diemDoiTuong = DOI_TUONG_2;
  } else if (khuVucC.checked) {
    diemDoiTuong = DOI_TUONG_3;
  } else {
    diemDoiTuong = KHONG_DOI_TUONG;
  }
  return diemDoiTuong;
}
function getEle(id) {
  return document.getElementById(id);
}
function xemKetQuaThi() {
  var diemChuan = getEle("diemChuan").value * 1;
  var diemMonThu1 = getEle("diemMonThu1").value * 1;
  var diemMonThu2 = getEle("diemMonThu2").value * 1;
  var diemMonThu3 = getEle("diemMonThu3").value * 1;
  var tongDiem3MonThi = diemMonThu1 + diemMonThu2 + diemMonThu3;
  var diemKhuVuc = layDiemKhuVuc();
  var diemDoiTuong = layDiemDoiTuong();
  var diemUuTien = diemKhuVuc + diemDoiTuong;
  var diemTongKet = tongDiem3MonThi + diemUuTien;
  if (diemMonThu1 === 0 || diemMonThu2 === 0 || diemMonThu3 === 0) {
    var result = "BẠN ĐÃ RỚT, TỔNG SỐ ĐIỂM ĐẠT ĐƯỢC LÀ: " + diemTongKet;
    getEle("footerKetQuaThi").innerHTML = result;
  } else if (diemTongKet >= diemChuan) {
    var result = "BẠN ĐÃ ĐẬU, TỔNG SỐ ĐIỂM ĐẠT ĐƯỢC LÀ: " + diemTongKet;
    getEle("footerKetQuaThi").innerHTML = result;
  } else if (diemTongKet < diemChuan) {
    var result = "BẠN ĐÃ RỚT, TỔNG SỐ ĐIỂM ĐẠT ĐƯỢC LÀ: " + diemTongKet;
    getEle("footerKetQuaThi").innerHTML = result;
  }
}

/**
 * BÀI 2: TÍNH TIỀN ĐIỆN
 * MÔ HÌNH 3 KHỐI
 * ĐẦU VÀO:
 * -TÊN NGƯỜI DÙNG
 * -SoKwTieuThu
 * XỬ LÝ:
 * -khai báo biến tienDien
 * - Nếu 0 < SoKwTieuThu <= 50 --> tienDien = SoKwTieuThu * 500
 * - Nếu 50 < SoKwTieuThu <= 100 --> tienDien = (50*500) + (SoKwTieuThu - 50) * 650
 * - Nếu 100 < SoKwTieuThu <= 200 --> tienDien = (50*500) + (50*650) + (SoKwTieuThu - 100) * 850
 * - Nếu 200 < SoKwTieuThu <= 350 --> tienDien = (50*500) + (50*650) + (100 * 850) + (SoKwTieuThu - 200) * 1100
 * - Nếu 350 < SoKwTieuThu --> tienDien = (50*500) + (50*650) + (100 * 850) + (150 * 1100) + (SoKwTieuThu - 350) * 1300
 * ĐẦU RA:
 * -IN RA TÊN NGƯỜI DÙNG
 * -IN RA SỐ TIỀN ĐIỆN
 */
function getEle2(id) {
  return document.getElementById(id);
}
function tinhTienDien() {
  var tenNguoiDung = getEle2("tenNguoiDung").value;
  var soKwTieuThu = getEle2("soKwTieuThu").value * 1;
  var tienDien = 0;
  var content = "";
  var numberFormat = new Intl.NumberFormat("VN-vn");
  if (0 < soKwTieuThu && soKwTieuThu <= 50) {
    tienDien = soKwTieuThu * 500;
    content += "<p>Tên Người Dùng: " + tenNguoiDung + "</p>";
    content +=
      "<p>Số Tiền Điện Cần Thanh Toán Là: " +
      numberFormat.format(tienDien) +
      " vnd</p>";
    getEle2("footerTinhTienDien").innerHTML = content;
  } else if (50 < soKwTieuThu && soKwTieuThu <= 100) {
    tienDien = 50 * 500 + (soKwTieuThu - 50) * 650;
    content += "<p>Tên Người Dùng: " + tenNguoiDung + "</p>";
    content +=
      "<p>Số Tiền Điện Cần Thanh Toán Là: " +
      numberFormat.format(tienDien) +
      " vnd</p>";
    getEle2("footerTinhTienDien").innerHTML = content;
  } else if (100 < soKwTieuThu && soKwTieuThu <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKwTieuThu - 100) * 850;
    content += "<p>Tên Người Dùng: " + tenNguoiDung + "</p>";
    content +=
      "<p>Số Tiền Điện Cần Thanh Toán Là: " +
      numberFormat.format(tienDien) +
      " vnd</p>";
    getEle2("footerTinhTienDien").innerHTML = content;
  } else if (200 < soKwTieuThu && soKwTieuThu <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKwTieuThu - 200) * 1100;
    content += "<p>Tên Người Dùng: " + tenNguoiDung + "</p>";
    content +=
      "<p>Số Tiền Điện Cần Thanh Toán Là: " +
      numberFormat.format(tienDien) +
      " vnd</p>";
    getEle2("footerTinhTienDien").innerHTML = content;
  } else if (350 < soKwTieuThu) {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKwTieuThu - 350) * 1300;
    content += "<p>Tên Người Dùng: " + tenNguoiDung + "</p>";
    content +=
      "<p>Số Tiền Điện Cần Thanh Toán Là: " +
      numberFormat.format(tienDien) +
      " vnd</p>";
    getEle2("footerTinhTienDien").innerHTML = content;
  } else {
    alert("VUI LÒNG NHẬP TÊN NGƯỜI DÙNG VÀ SỐ KW ĐIỆN TIÊU THỤ");
  }
}
/**
 * BÀI 3: TÍNH THUẾ THU NHẬP CÁ NHÂN
 * MÔ HÌNH 3 KHỐI
 * ĐẦU VÀO:
 * -hoVaTen
 * -tongThuNhapNam
 * -soNguoiPhuThuoc
 * XỬ LÝ:
 * -thuNhapChiuThue = tongThuNhapNam - 4tr - soNguoiPhuThuoc * 1.6tr
 * - Nếu 0 < thuNhapChiuThue && thuNhapChiuThue <= 60tr --> thueThuNhapCaNhan = thuNhapChiuThue * 5 / 100
 * - Nếu 60tr < thuNhapChiuThue && thuNhapChiuThue <= 120tr --> thueThuNhapCaNhan = (60tr * 5 / 100) + (thuNhapChiuThue - 60tr) * 10 / 100
 * - Nếu 120tr < thuNhapChiuThue && thuNhapChiuThue <= 210tr --> thueThuNhapCaNhan = (60tr * 5 / 100) + (120tr * 10 / 100) + (thuNhapChiuThue - 120tr) * 15 / 100
 * - Nếu 210 < thuNhapChiuThue && thuNhapChiuThue <= 384tr --> thueThuNhapCaNhan = (60tr * 5 / 100) + (120tr * 10 / 100) + (210 * 15 / 100) + (thuNhapChiuThue - 210) * 20 / 100
 * - Nếu 384tr < thuNhapChiuThue && thuNhapChiuThue <= 624tr --> thueThuNhapCaNhan = (60tr * 5 / 100) + (120tr * 10 / 100) + (210 * 15 / 100) + (384tr * 20 /100) + (thuNhapChiuThue - 384tr) * 25 / 100
 * - Nếu 624tr < thuNhapChiuThue && thuNhapChiuThue <= 960tr --> thueThuNhapCaNhan = (60tr * 5 / 100) + (120tr * 10 / 100) + (210 * 15 / 100) + (384tr * 20 /100) + (624tr * 25 /100) + (thuNhapChiuThue - 624tr) * 30 / 100
 * - Nếu 960tr < thuNhapChiuThue --> thueThuNhapCaNhan = (60tr * 5 / 100) + (120tr * 10 / 100) + (210 * 15 / 100) + (384tr * 20 /100) + (624tr * 25 /100) + (960tr * 30 / 100) + (thuNhapChiuThue - 960tr) * 35 / 100
 * ĐẦU RA:
 * - IN RA HỌ VÀ TÊN
 * - IN RA SỐ TIỀN THUẾ THU NHẬP CÁ NHÂN PHẢI TRẢ
 */

function getEle3(id) {
  return document.getElementById(id);
}
function tinhTienThue() {
  var hoVaTen = getEle3("hoVaTen").value;
  var tongThuNhapNam = getEle3("tongThuNhapNam").value * 1;
  var soNguoiPhuThuoc = getEle3("soNguoiPhuThuoc").value * 1;
  var thuNhapChiuThue = 0;
  var thueThuNhapCaNhan = 0;
  var content2 = "";
  var numberFormat2 = new Intl.NumberFormat("VN-vn");
  thuNhapChiuThue = tongThuNhapNam - 4e6 - soNguoiPhuThuoc * 16e5;
  if (0 < thuNhapChiuThue && thuNhapChiuThue <= 60e6) {
    thueThuNhapCaNhan = (thuNhapChiuThue * 5) / 100;
    content2 += "<p>Họ Và Tên: " + hoVaTen + "</p>";
    content2 +=
      "<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: " +
      numberFormat2.format(thueThuNhapCaNhan) +
      " vnd</p>";
    getEle3("footerTinhTienThue").innerHTML = content2;
  } else if (60e6 < thuNhapChiuThue && thuNhapChiuThue <= 120e6) {
    thueThuNhapCaNhan =
      (60e6 * 5) / 100 + ((thuNhapChiuThue - 60e6) * 10) / 100;
    content2 += "<p>Họ Và Tên: " + hoVaTen + "</p>";
    content2 +=
      "<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: " +
      numberFormat2.format(thueThuNhapCaNhan) +
      " vnd</p>";
    getEle3("footerTinhTienThue").innerHTML = content2;
  } else if (120e6 < thuNhapChiuThue && thuNhapChiuThue <= 210e6) {
    thueThuNhapCaNhan =
      (60e6 * 5) / 100 +
      (60e6 * 10) / 100 +
      ((thuNhapChiuThue - 120e6) * 15) / 100;
    content2 += "<p>Họ Và Tên: " + hoVaTen + "</p>";
    content2 +=
      "<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: " +
      numberFormat2.format(thueThuNhapCaNhan) +
      " vnd</p>";
    getEle3("footerTinhTienThue").innerHTML = content2;
  } else if (210e6 < thuNhapChiuThue && thuNhapChiuThue <= 384e6) {
    thueThuNhapCaNhan =
      (60e6 * 5) / 100 +
      (60e6 * 10) / 100 +
      (90e6 * 15) / 100 +
      ((thuNhapChiuThue - 210e6) * 20) / 100;
    content2 += "<p>Họ Và Tên: " + hoVaTen + "</p>";
    content2 +=
      "<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: " +
      numberFormat2.format(thueThuNhapCaNhan) +
      " vnd</p>";
    getEle3("footerTinhTienThue").innerHTML = content2;
  } else if (384e6 < thuNhapChiuThue && thuNhapChiuThue <= 624e6) {
    thueThuNhapCaNhan =
      (60e6 * 5) / 100 +
      (60e6 * 10) / 100 +
      (90e6 * 15) / 100 +
      (174e6 * 20) / 100 +
      ((thuNhapChiuThue - 384e6) * 25) / 100;
    content2 += "<p>Họ Và Tên: " + hoVaTen + "</p>";
    content2 +=
      "<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: " +
      numberFormat2.format(thueThuNhapCaNhan) +
      " vnd</p>";
    getEle3("footerTinhTienThue").innerHTML = content2;
  } else if (624e6 < thuNhapChiuThue && thuNhapChiuThue <= 960e6) {
    thueThuNhapCaNhan =
      (60e6 * 5) / 100 +
      (60e6 * 10) / 100 +
      (90e6 * 15) / 100 +
      (174e6 * 20) / 100 +
      (240e6 * 25) / 100 +
      ((thuNhapChiuThue - 624e6) * 30) / 100;
    content2 += "<p>Họ Và Tên: " + hoVaTen + "</p>";
    content2 +=
      "<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: " +
      numberFormat2.format(thueThuNhapCaNhan) +
      " vnd</p>";
    getEle3("footerTinhTienThue").innerHTML = content2;
  } else if (960e6 < thuNhapChiuThue) {
    thueThuNhapCaNhan =
      (60e6 * 5) / 100 +
      (60e6 * 10) / 100 +
      (90e6 * 15) / 100 +
      (174e6 * 20) / 100 +
      (240e6 * 25) / 100 +
      (336e6 * 30) / 100 +
      ((thuNhapChiuThue - 960e6) * 35) / 100;
    content2 += "<p>Họ Và Tên: " + hoVaTen + "</p>";
    content2 +=
      "<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: " +
      numberFormat2.format(thueThuNhapCaNhan) +
      " vnd</p>";
    getEle3("footerTinhTienThue").innerHTML = content2;
  } else {
    alert("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN ĐỂ TÍNH THUẾ");
  }
}
/**
 * BÀI 4: TÍNH TIỀN CÁP
 * MÔ HÌNH 3 KHỐI
 * ĐẦU VÀO:
 * -Loại khách hàng: nhaDan, doanhNghiep
 * -maKhachHang
 * -soKenhCaoCap
 * -soKetNoi
 * XỬ LÝ:
 * -Nếu loại khách hàng là nhaDan --> tienCap = soKenhCaoCap * 7.5$ + 4.5$ + 20.5$;
 * -Nếu loại khách hàng là doanhNghiep thì:
 * + Nếu soKetNoi <=10 --> tienCap = soKenhCaoCap * 50$ + 15$ + 75$;
 * + Nếu soKetNoi > 10 --> tienCap = soKenhCaoCap * 50$ + 15$ + 75$ + (soKetNoi - 10) * 5$;
 * ĐẦU RA:
 * -In ra tên khách hàng
 * - In ra số tiền cáp
 */
function getEle4(id) {
  return document.getElementById(id);
}
getEle4("formSoKetNoi").style.display = "none";
function layLoaiKhachHang() {
  var loaiKhachHang = getEle4("mySelect").value;
  if (loaiKhachHang === "chonLoaiKhachHang") {
    getEle4("formSoKetNoi").style.display = "none";
  } else if (loaiKhachHang === "nguoiDan") {
    getEle4("formSoKetNoi").style.display = "none";
  } else if (loaiKhachHang === "doanhNghiep") {
    getEle4("formSoKetNoi").style.display = "block";
  }
  return loaiKhachHang;
}
function tinhTienCap() {
  var maKhachHang = getEle4("maKhachHang").value;
  var soKenhCaoCap = getEle4("soKenhCaoCap").value;
  var soKetNoi = getEle4("soKetNoi").value;
  var loaiKhachHang = layLoaiKhachHang();
  var tienCap = 0;
  var content3 = "";
  if (loaiKhachHang === "chonLoaiKhachHang") {
    alert("Vui Lòng CHỌN LOẠI KHÁCH HÀNG");
  } else if (loaiKhachHang === "nguoiDan") {
    tienCap = soKenhCaoCap * 7.5 + 4.5 + 20.5;
    content3 += "<p>Mã Khách Hàng: " + maKhachHang + "</p>";
    content3 += "<p>Số Tiền Cáp: " + tienCap + "$</p>";
    getEle4("footerTinhTienCap").innerHTML = content3;
  } else if (loaiKhachHang === "doanhNghiep") {
    if (soKetNoi <= 10) {
      tienCap = soKenhCaoCap * 50 + 15 + 75;
      content3 += "<p>Mã Khách Hàng: " + maKhachHang + "</p>";
      content3 += "<p>Số Tiền Cáp: " + tienCap + "$</p>";
      getEle4("footerTinhTienCap").innerHTML = content3;
    } else if (soKetNoi > 10) {
      tienCap = soKenhCaoCap * 50 + 15 + 75 + (soKetNoi - 10) * 5;
      content3 += "<p>Mã Khách Hàng: " + maKhachHang + "</p>";
      content3 += "<p>Số Tiền Cáp: " + tienCap + "$</p>";
      getEle4("footerTinhTienCap").innerHTML = content3;
    }
  }
}
