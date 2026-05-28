export async function POST(req) {
  try {
    const data = await req.json();

    const text = `
📩 Нова заявка з сайту DK Design

👤 Ім'я: ${data.name}
📞 Телефон: ${data.phone}
🏙️ Місто: ${data.city}
🏠 Тип об'єкта: ${data.objectType}
📐 Квадратура: ${data.area} м²
🎨 Стиль: ${data.style}
📦 Пакет: ${data.package}
💬 Коментар: ${data.comment || "Не вказано"}
`;

    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
      }),
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: "Помилка відправки" }, { status: 500 });
  }
}