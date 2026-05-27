import './style.css'
import { Analytics } from '@vercel/analytics/react'
export const metadata = {title:'DK Design',description:'Premium interior design, drawings and 3D visualization studio',icons:{icon:'/favicon.png'}}
export default function RootLayout({children}){return <html lang="uk"><body>{children}<Analytics /></body></html>}
