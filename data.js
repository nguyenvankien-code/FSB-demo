/* ==========================================================================
   DỮ LIỆU & CẤU HÌNH — Dashboard Hiệu suất 5 Phòng ban (bản tĩnh Netlify)
   Cập nhật hàng tháng: sửa các mảng bên dưới rồi lưu file. Không cần đụng index.html.
   ========================================================================== */
window.DATA = {
  ky: "09/2026",

  // 🛒 Sale — lead (BANT)
  sale: [
    { khach:"Khách A", kenh:"Hội thảo",  nganSach:300, thamQuyen:"Có",     nhuCau:"Cao",  thang:1 },
    { khach:"Khách B", kenh:"Website",   nganSach:80,  thamQuyen:"Không",  nhuCau:"TB",   thang:3 },
    { khach:"Khách C", kenh:"Giới thiệu",nganSach:500, thamQuyen:"Có",     nhuCau:"Cao",  thang:1 },
    { khach:"Khách D", kenh:"Zalo",      nganSach:50,  thamQuyen:"Không",  nhuCau:"Thấp", thang:6 },
    { khach:"Khách E", kenh:"Website",   nganSach:200, thamQuyen:"Có",     nhuCau:"TB",   thang:2 },
    { khach:"Khách F", kenh:"Hội thảo",  nganSach:120, thamQuyen:"Không",  nhuCau:"Cao",  thang:2 },
    { khach:"Khách G", kenh:"Giới thiệu",nganSach:400, thamQuyen:"Có",     nhuCau:"Cao",  thang:1 },
    { khach:"Khách H", kenh:"Zalo",      nganSach:30,  thamQuyen:"Không",  nhuCau:"Thấp", thang:6 }
  ],

  // 📣 Marketing — chiến dịch
  mkt: [
    { cd:"CD-01", kenh:"Facebook", chiPhi:20000000, doanhThu:90000000 },
    { cd:"CD-02", kenh:"Google",   chiPhi:15000000, doanhThu:60000000 },
    { cd:"CD-03", kenh:"TikTok",   chiPhi:10000000, doanhThu:25000000 },
    { cd:"CD-04", kenh:"Facebook", chiPhi:8000000,  doanhThu:30000000 },
    { cd:"CD-05", kenh:"Zalo",     chiPhi:5000000,  doanhThu:12000000 },
    { cd:"CD-06", kenh:"Google",   chiPhi:12000000, doanhThu:84000000 }
  ],

  // ⚙️ Kho — tồn kho
  kho: [
    { ma:"VT01", ten:"Thép silic",     dvt:"kg",  ton:850,  dinhMuc:1200, tonMin:900,  donGia:42000 },
    { ma:"VT02", ten:"Dây đồng",       dvt:"kg",  ton:620,  dinhMuc:700,  tonMin:650,  donGia:285000 },
    { ma:"VT03", ten:"Dầu máy",        dvt:"lít", ton:900,  dinhMuc:1000, tonMin:1000, donGia:38000 },
    { ma:"VT04", ten:"Tôn vỏ",         dvt:"kg",  ton:450,  dinhMuc:800,  tonMin:500,  donGia:25000 },
    { ma:"VT05", ten:"Sứ cách điện",   dvt:"cái", ton:40,   dinhMuc:30,   tonMin:30,   donGia:650000 },
    { ma:"VT06", ten:"Bu lông M16",    dvt:"cái", ton:1500, dinhMuc:800,  tonMin:800,  donGia:3500 },
    { ma:"VT07", ten:"Cánh tản nhiệt", dvt:"cái", ton:90,   dinhMuc:120,  tonMin:80,   donGia:120000 }
  ],

  // 👥 Nhân sự — chấm công (chuẩn 26 công/tháng)
  ns: [
    { nv:"NV01", ngayCong:26, tangCa:10, luongCB:12000000, phuCap:1500000 },
    { nv:"NV02", ngayCong:24, tangCa:4,  luongCB:10000000, phuCap:1000000 },
    { nv:"NV03", ngayCong:26, tangCa:0,  luongCB:15000000, phuCap:2000000 },
    { nv:"NV04", ngayCong:22, tangCa:8,  luongCB:9000000,  phuCap:800000 },
    { nv:"NV05", ngayCong:25, tangCa:6,  luongCB:11000000, phuCap:1200000 },
    { nv:"NV06", ngayCong:20, tangCa:0,  luongCB:8000000,  phuCap:500000 },
    { nv:"NV07", ngayCong:26, tangCa:12, luongCB:13000000, phuCap:1500000 }
  ],

  // 💰 Tài chính — chi phí / công nợ (hạn: YYYY-MM-DD)
  tc: [
    { ngay:"2026-08-05", ncc:"NCC Alpha", danhMuc:"Văn phòng phẩm", soTien:12000000,  han:"2026-08-20", trangThai:"Đã trả" },
    { ngay:"2026-08-10", ncc:"NCC Beta",  danhMuc:"Marketing",      soTien:45000000,  han:"2026-08-25", trangThai:"Chưa trả" },
    { ngay:"2026-08-12", ncc:"NCC Gamma", danhMuc:"Vận chuyển",     soTien:8000000,   han:"2026-08-27", trangThai:"Chưa trả" },
    { ngay:"2026-08-15", ncc:"NCC Beta",  danhMuc:"Marketing",      soTien:45000000,  han:"2026-08-25", trangThai:"Chưa trả" },
    { ngay:"2026-08-20", ncc:"NCC Delta", danhMuc:"Nguyên liệu",    soTien:120000000, han:"2026-09-05", trangThai:"Chưa trả" },
    { ngay:"2026-08-22", ncc:"NCC Alpha", danhMuc:"Văn phòng phẩm", soTien:6000000,   han:"2026-09-01", trangThai:"Đã trả" },
    { ngay:"2026-08-28", ncc:"NCC Gamma", danhMuc:"Vận chuyển",     soTien:15000000,  han:"2026-08-30", trangThai:"Chưa trả" },
    { ngay:"2026-09-02", ncc:"NCC Delta", danhMuc:"Nguyên liệu",    soTien:95000000,  han:"2026-09-18", trangThai:"Chưa trả" }
  ],

  // ⚙️ CẤU HÌNH — trọng số + ngưỡng (CEO chỉnh)
  config: {
    trongSo: { TC:30, SALE:25, MKT:20, KHO:15, NS:10 }, // tổng nên = 100
    nguongDo: 50,        // điểm < 50  -> Đỏ
    nguongXanh: 75,      // điểm >= 75 -> Xanh (giữa là Vàng)
    canhBaoNoNgay: 7     // cảnh báo công nợ sắp đến hạn trong N ngày
  }
};
