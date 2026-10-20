import { Link } from "react-router-dom";

const members = [
  { name: "Nguyễn Quang Chí", id: "N23DCAT009", role: "Team Lead — Backend & Thanh toán" },
  { name: "Tô Long Đức", id: "N23DCAT013", role: "Frontend & UI/UX" },
  { name: "Phạm Thái Dương", id: "N23DCAT016", role: "Backend & Quản lý dữ liệu" },
];

const features = [
  { title: "Mua sắm truyện Marvel", desc: "Duyệt, tìm kiếm, lọc theo nhân vật và năm phát hành, xem chi tiết từng tập truyện." },
  { title: "Giỏ hàng & Thanh toán", desc: "Thanh toán COD hoặc VNPay sandbox, gửi email xác nhận đơn hàng qua Gmail SMTP." },
  { title: "Đăng nhập / Đăng ký", desc: "Email + mật khẩu hoặc Google OAuth, xác thực OTP khi quên/đổi mật khẩu." },
  { title: "Quy trình duyệt truyện", desc: "Publisher đăng truyện mới → Manager duyệt → Công bố lên cửa hàng." },
  { title: "Dashboard quản lý", desc: "Thống kê doanh thu, quản lý đơn hàng, duyệt truyện cho vai trò Manager/Admin." },
  { title: "Phân quyền 4 vai trò", desc: "System Admin, Manager, Publisher và Buyer với quyền hạn riêng biệt." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero nhỏ */}
      <section className="border-b border-black/15 bg-[#111] px-5 py-20 text-white lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-3 text-xs font-extrabold tracking-[.18em] text-[#ff4050] uppercase">Về chúng tôi</p>
          <h1 className="font-display text-6xl leading-none font-black tracking-[-.04em] uppercase sm:text-7xl">
            Đồ án môn <span className="text-[#e51c2a]">Lập trình Web</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
            PANEL. là cửa hàng truyện tranh Marvel trực tuyến — sản phẩm đồ án cuối môn của nhóm,
            Học viện Công nghệ Bưu chính Viễn thông (PTIT) cơ sở TP. Hồ Chí Minh.
          </p>
        </div>
      </section>

      {/* Tính năng chính */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-12 lg:py-20">
        <div className="border-b border-black/25 pb-7">
          <p className="mb-3 text-xs font-extrabold tracking-[.18em] text-[#e51c2a] uppercase">Tính năng</p>
          <h2 className="font-display text-4xl leading-none font-black tracking-[-.03em] uppercase sm:text-5xl">Dự án làm được gì?</h2>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="border border-black/15 bg-white/60 p-6 transition hover:shadow-[6px_8px_0_rgba(229,28,42,.2)]">
              <h3 className="font-display text-2xl font-black tracking-[-.02em] uppercase">{f.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Thành viên nhóm */}
      <section className="mx-auto max-w-[1440px] px-5 pb-20 lg:px-12 lg:pb-28">
        <div className="border-b border-black/25 pb-7">
          <p className="mb-3 text-xs font-extrabold tracking-[.18em] text-[#e51c2a] uppercase">Đội ngũ</p>
          <h2 className="font-display text-4xl leading-none font-black tracking-[-.03em] uppercase sm:text-5xl">Thành viên nhóm</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <div key={m.id} className="flex items-center gap-4 border border-black/15 bg-[#e51c2a]/5 p-5">
              <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#e51c2a] text-lg font-black text-white">
                {m.name
                  .split(" ")
                  .slice(-2)
                  .map((w) => w[0])
                  .join("")}
              </div>
              <div>
                <p className="font-display text-xl font-extrabold">{m.name}</p>
                <p className="text-xs font-mono text-black/45">{m.id}</p>
                <p className="mt-1 text-xs font-bold text-[#e51c2a]">{m.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-black/15 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-black/60">Khám phá thêm danh mục truyện của dự án:</p>
          <Link to="/" className="inline-flex items-center gap-3 bg-black px-6 py-3 text-xs font-extrabold tracking-[.08em] text-white uppercase transition hover:bg-[#e51c2a]">
            Về trang chủ
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
