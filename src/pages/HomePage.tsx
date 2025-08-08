import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-lg font-bold">VinZap · Маркетплейс запчастей</div>
          <nav className="hidden md:flex gap-4 text-sm">
            <Link to="/login" className="hover:underline">Войти</Link>
            <Link to="/registration" className="hover:underline">Покупателю</Link>
            <Link to="/seller-landing" className="hover:underline">Продавцу</Link>
            <Link to="/admin-login" className="hover:underline">Админ</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Найди нужные <span className="whitespace-nowrap">автозапчасти</span> за минуты
          </h1>
          <p className="mt-4 text-gray-600">
            Одна заявка — и все проверенные поставщики получают запрос. Сравнивай цены,
            наличие и сроки, общайся в чате и оформляй заказ.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/registration"
              className="px-5 py-3 rounded-lg bg-black text-white hover:opacity-90"
            >
              Создать заявку (покупатель)
            </Link>
            <Link
              to="/seller-landing"
              className="px-5 py-3 rounded-lg border bg-white hover:bg-gray-100"
            >
              Подключить магазин (продавец)
            </Link>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            Без обмена контактами. Все коммуникации и файлы — в личных кабинетах.
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <div className="text-sm font-medium mb-2">Как это работает</div>
          <ol className="space-y-3 text-sm">
            <li>1. Покупатель заполняет заявку: авто, VIN, список запчастей.</li>
            <li>2. Система рассылает запрос всем проверенным продавцам.</li>
            <li>3. Продавцы отвечают: цена / нет в наличии / под заказ + срок.</li>
            <li>4. Чат для уточнений и отправки фото прямо в системе.</li>
            <li>5. Покупатель выбирает лучшее предложение и оформляет заказ.</li>
          </ol>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 pb-12 grid md:grid-cols-3 gap-4">
        {[
          { t: "Единая заявка", d: "Не прозваниваешь — продавцы находят тебя сами." },
          { t: "Умные ответы", d: "Цена, наличие, либо срок под заказ — всё структурировано." },
          { t: "Встроенный чат", d: "Вопросы, уточнения и фото без обмена контактами." },
        ].map((f) => (
          <div key={f.t} className="bg-white rounded-2xl border shadow-sm p-5">
            <div className="font-semibold">{f.t}</div>
            <div className="text-sm text-gray-600 mt-1">{f.d}</div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-xs text-gray-500 bg-white">
        © {new Date().getFullYear()} VinZap. Все права защищены.
      </footer>
    </div>
  );
}
