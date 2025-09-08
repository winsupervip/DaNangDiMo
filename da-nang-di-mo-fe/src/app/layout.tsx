export const metadata = {
  title: 'Home Page',
  description: 'home page description',
};

import { ReactNode } from 'react';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <html>
     <body>
       {children}
     </body>
  </html>;
}
