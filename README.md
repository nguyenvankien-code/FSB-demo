# Dashboard Hiệu suất 5 Phòng ban — Bản tĩnh (Netlify)

Web tĩnh, chấm điểm ngay trong trình duyệt. Không cần server, không cần build.

## 📁 Nội dung thư mục
```
netlify-dashboard/
├── index.html      ← giao diện + máy chấm điểm (mở là chạy)
├── data.js         ← DỮ LIỆU & trọng số (sửa file này mỗi tháng)
├── netlify.toml    ← cấu hình Netlify
└── README.md       ← file này
```

## 🚀 Cách đưa lên Netlify (2 cách)

### Cách 1 — Kéo & thả (nhanh nhất, ~1 phút)
1. Vào https://app.netlify.com/drop
2. **Kéo cả thư mục `netlify-dashboard`** (hoặc file `netlify-dashboard.zip`) thả vào trang.
3. Netlify tạo URL ngay, ví dụ `https://ten-ngau-nhien.netlify.app`. Xong.

### Cách 2 — Netlify + Git (để cập nhật tự động)
1. Đẩy thư mục này lên một repo GitHub.
2. Netlify → **Add new site → Import from Git** → chọn repo → Deploy.
3. Mỗi lần sửa `data.js` và push, Netlify tự cập nhật.

## ✏️ Cập nhật số liệu hàng tháng
Mở **`data.js`**, sửa các mảng `sale / mkt / kho / ns / tc` và đổi `ky`, lưu lại.
Chỉnh trọng số & ngưỡng trong `config` ở cuối file:
- `trongSo` — trọng số 5 phòng (tổng nên = 100)
- `nguongDo` (mặc định 50) · `nguongXanh` (75) — ngưỡng màu
- `canhBaoNoNgay` (7) — cảnh báo công nợ sắp đến hạn

## ⚠️ Giới hạn của bản tĩnh
- Nút **Duyệt / Bỏ qua** lưu trên **trình duyệt của người xem** (localStorage), không dùng chung nhiều người.
- **Không phân quyền** theo vai (ai có link đều xem toàn cảnh).
- Công nợ "quá hạn/sắp đến hạn" tính theo **ngày thực tế lúc mở web**.

👉 Cần lưu chung nhiều người + phân quyền CEO/Trưởng phòng → dùng bản **Google Apps Script** (thư mục `apps-script`).
