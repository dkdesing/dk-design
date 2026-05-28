import './style.css'
import { Analytics } from '@vercel/analytics/react'
export const metadata = {
  title: "DK Design | Дизайн інтер’єру",

  description:
    "DK Design — дизайн інтер’єру в Івано-Франківську, Київі та всій Україні. 3D візуалізації, креслення, сучасні проєкти квартир, будинків та комерційних просторів.",

  keywords: [
    "дизайн інтер’єру",
    "3D візуалізація",
    "дизайнер інтер’єру",
    "Івано-Франківськ",
    "креслення",
    "дизайн квартири",
    "DK Design"
  ],
}
export default function RootLayout({children}){return <html lang="uk"><body>{children}<Analytics /></body></html>}
