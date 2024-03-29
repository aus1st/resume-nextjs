import  './global.css'
import SideBar from './components/sidebar'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col sm:flex-row'>
        <SideBar/>
        
        <main className='grow-full p-8 sm:p-16 w-full sm:basis-2/3 ml-auto'>
        {children}
        </main>
        </body>
    </html>
  )
}
