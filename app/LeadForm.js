"use client";

import { useState } from "react";

export default function LeadForm() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const data = {
      name: form.get("name"),
      phone: form.get("phone"),
      city: form.get("city"),
      objectType: form.get("objectType"),
      area: form.get("area"),
      style: form.get("style"),
      package: form.get("package"),
      comment: form.get("comment"),
    };

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  return (
    <>
      <button className="leadBtn" onClick={() => setOpen(true)}>
        Залишити заявку
      </button>

      <button className="floatingLeadBtn" onClick={() => setOpen(true)}>
        Заявка
      </button>

      {open && (
        <div className="leadOverlay">
          <div className="leadModal">
            <button className="leadClose" onClick={() => setOpen(false)}>
              ×
            </button>

            <h2>Залишити заявку</h2>
            <p>Заповніть форму, і ми зв’яжемось з вами.</p>

            {sent ? (
              <div className="leadSuccess">
                Дякуємо! Заявку відправлено ✅
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="leadForm">
                <input name="name" placeholder="Ваше ім’я" required />
                <input name="phone" placeholder="Номер телефону" required />
                <input name="city" placeholder="Місто" required />

                <select name="objectType" required>
                  <option value="">Тип об’єкта</option>
                  <option>Квартира</option>
                  <option>Будинок</option>
                  <option>Комерційне приміщення</option>
                </select>

                <input name="area" placeholder="Квадратура, м²" required />

                <select name="style" required>
                  <option value="">Стиль</option>
                  <option>Сучасний</option>
                  <option>Мінімалізм</option>
                  <option>Лофт</option>
                  <option>Класика</option>
                  <option>Скандинавський</option>
                  <option>Інший</option>
                </select>

                <select name="package" required>
                  <option value="">Пакет</option>
                  <option>MINI</option>
                  <option>BASE</option>
                  <option>MAX</option>
                </select>

                <textarea name="comment" placeholder="Коментар"></textarea>

                <button type="submit">Надіслати</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}