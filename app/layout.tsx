import './globals.css';
import type { Metadata } from 'next';
import { site } from './config';
export const metadata: Metadata = { title: site.nom, description: site.sousTitre };
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="fr"><body>{children}</body></html>;
}
