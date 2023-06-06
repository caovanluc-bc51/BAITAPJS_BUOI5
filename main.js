/**
 * MÔ HÌNH 3 KHỐI BÀI 1: QUẢN LÝ TUYỂN SINH
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
//Khai báo điểm ưu tiên các loại
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
  } else if (khongKhuVucUuTien.checked) {
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
  } else if (khongKhuVucUuTien.checked) {
    diemDoiTuong = KHONG_DOI_TUONG;
  }
  return diemDoiTuong;
}
function getEle(id){
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
  if (
    diemTongKet >= diemChuan &&
    diemMonThu1 > 0 &&
    diemMonThu2 > 0 &&
    diemMonThu3 > 0
  ) {
    var result1 = "BẠN ĐÃ ĐẬU, TỔNG SỐ ĐIỂM ĐẠT ĐƯỢC LÀ: " + diemTongKet;
    getEle("footerKetQuaThi").innerHTML = result1;
  } else {
    var result2 = "BẠN ĐÃ RỚT, TỔNG SỐ ĐIỂM ĐẠT ĐƯỢC LÀ: " + diemTongKet;
    getEle("footerKetQuaThi").innerHTML = result2;
  }
}
