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
function getEle2(id){
    return document.getElementById(id);
}
function tinhTienDien(){
    var tenNguoiDung = getEle2('tenNguoiDung').value;
    var soKwTieuThu = getEle2('soKwTieuThu').value*1;
    var tienDien = 0;
    var content = '';
    var numberFormat = new Intl.NumberFormat("VN-vn")
    if(0 < soKwTieuThu && soKwTieuThu <= 50){
        tienDien = soKwTieuThu * 500;
        content += '<p>Tên Người Dùng: '+ tenNguoiDung +'</p>';
        content += '<p>Số tiền điện cần thanh toán là: '+ numberFormat.format(tienDien) +' vnd</p>';
        getEle2('footerTinhTienDien').innerHTML = content;
    }else if(50 < soKwTieuThu && soKwTieuThu <= 100){
        tienDien = (50 * 500) + (soKwTieuThu - 50) * 650;
        content += '<p>Tên Người Dùng: '+ tenNguoiDung +'</p>';
        content += '<p>Số tiền điện cần thanh toán là: '+ numberFormat.format(tienDien) +' vnd</p>';
        getEle2('footerTinhTienDien').innerHTML = content;
    }else if(100 < soKwTieuThu && soKwTieuThu <= 200){
        tienDien = (50 * 500) + (50 * 650) + (soKwTieuThu - 100) * 850;
        content += '<p>Tên Người Dùng: '+ tenNguoiDung +'</p>';
        content += '<p>Số tiền điện cần thanh toán là: '+ numberFormat.format(tienDien) +' vnd</p>';
        getEle2('footerTinhTienDien').innerHTML = content;
    }else if(200 < soKwTieuThu && soKwTieuThu <= 350){
        tienDien = (50 * 500) + (50 * 650) + (100 * 850) + (soKwTieuThu - 200) * 1100;
        content += '<p>Tên Người Dùng: '+ tenNguoiDung +'</p>';
        content += '<p>Số tiền điện cần thanh toán là: '+ numberFormat.format(tienDien) +' vnd</p>';
        getEle2('footerTinhTienDien').innerHTML = content;
    }else if(350 < soKwTieuThu){
        tienDien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soKwTieuThu - 350) * 1300;
        content += '<p>Tên Người Dùng: '+ tenNguoiDung +'</p>';
        content += '<p>Số Tiền Điện Cần Thanh Toán Là: '+ numberFormat.format(tienDien) +' vnd</p>';
        getEle2('footerTinhTienDien').innerHTML = content;
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

function getEle3(id){
    return document.getElementById(id);
}
function tinhTienThue(){
    var hoVaTen = getEle3('hoVaTen').value;
    var tongThuNhapNam = getEle3('tongThuNhapNam').value*1;
    var soNguoiPhuThuoc = getEle3('soNguoiPhuThuoc').value*1;
    var thuNhapChiuThue = 0;
    var thueThuNhapCaNhan = 0;
    var content2 = '';
    var numberFormat2 = new Intl.NumberFormat("VN-vn");
    thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
    if(0 < thuNhapChiuThue && thuNhapChiuThue <= 60000000){
        thueThuNhapCaNhan = thuNhapChiuThue * 5 / 100;
        content2 += '<p>Họ Và Tên: '+ hoVaTen +'</p>';
        content2 += '<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: '+ numberFormat2.format(thueThuNhapCaNhan) +' vnd</p>';
        getEle3('footerTinhTienThue').innerHTML = content2;
    }else if(60000000 < thuNhapChiuThue && thuNhapChiuThue <= 120000000){
        thueThuNhapCaNhan =(60000000*5/100) + (thuNhapChiuThue - 60000000)*10/100;
        content2 += '<p>Họ Và Tên: '+ hoVaTen +'</p>';
        content2 += '<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: '+ numberFormat2.format(thueThuNhapCaNhan) +' vnd</p>';
        getEle3('footerTinhTienThue').innerHTML = content2;
    }else if(120000000 < thuNhapChiuThue && thuNhapChiuThue <= 210000000){
        thueThuNhapCaNhan = (60000000*5/100) + (60000000*10/100) + (thuNhapChiuThue-120000000)*15/100;
        content2 += '<p>Họ Và Tên: '+ hoVaTen +'</p>';
        content2 += '<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: '+ numberFormat2.format(thueThuNhapCaNhan) +' vnd</p>';
        getEle3('footerTinhTienThue').innerHTML = content2;
    }else if(210000000<thuNhapChiuThue && thuNhapChiuThue<=384000000){
        thueThuNhapCaNhan = (60000000*5/100) + (60000000*10/100) + (90000000*15/100) + (thuNhapChiuThue-210000000)*20/100;
        content2 += '<p>Họ Và Tên: '+ hoVaTen +'</p>';
        content2 += '<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: '+ numberFormat2.format(thueThuNhapCaNhan) +' vnd</p>';
        getEle3('footerTinhTienThue').innerHTML = content2;
    }else if(384000000<thuNhapChiuThue && thuNhapChiuThue<=624000000){
        thueThuNhapCaNhan = (60000000*5/100) + (60000000*10/100) + (90000000*15/100) + (174000000*20/100) + (thuNhapChiuThue-384000000)*25/100;
        content2 += '<p>Họ Và Tên: '+ hoVaTen +'</p>';
        content2 += '<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: '+ numberFormat2.format(thueThuNhapCaNhan) +' vnd</p>';
        getEle3('footerTinhTienThue').innerHTML = content2;
    }else if(624000000<thuNhapChiuThue && thuNhapChiuThue<=960000000){
        thueThuNhapCaNhan = (60000000*5/100) + (60000000*10/100) + (90000000*15/100) + (174000000*20/100) + (240000000*25/100) + (thuNhapChiuThue-624000000)*30/100;
        content2 += '<p>Họ Và Tên: '+ hoVaTen +'</p>';
        content2 += '<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: '+ numberFormat2.format(thueThuNhapCaNhan) +' vnd</p>';
        getEle3('footerTinhTienThue').innerHTML = content2;
    }else if(960000000<thuNhapChiuThue){
        thueThuNhapCaNhan = (60000000*5/100) + (60000000*10/100) + (90000000*15/100) + (174000000*20/100) + (240000000*25/100) + (336000000*30/100) + (thuNhapChiuThue-960000000)*35/100;
        content2 += '<p>Họ Và Tên: '+ hoVaTen +'</p>';
        content2 += '<p>Số Tiền Thuế Thu Nhập Cá Nhân Là: '+ numberFormat2.format(thueThuNhapCaNhan) +' vnd</p>';
        getEle3('footerTinhTienThue').innerHTML = content2;
    }
}