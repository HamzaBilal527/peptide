'use client'

import { Button } from '@flexi-ui/button'
import { Link } from '@flexi-ui/link'
import { Square } from 'lucide-react'

export const Navbar = () => {
  return (
    <header className='border-b border-divider'>
      <div className='mx-auto px-6'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Square className='h-6 w-6 fill-current' />
            <span className='text-2xl font-bold'>FINNRICK</span>
          </div>

          <nav className='hidden items-center space-x-8 md:flex'>
            {['VENDORS', 'PRODUCTS', 'ABOUT', 'METHODOLOGY', 'FREE TEST'].map((item, index, array) => (
              <Link key={item} href={`/${item.toLowerCase()}`} {...(index !== array.length - 1 ? { color: 'foreground' } : {})}>
                {item}
              </Link>
            ))}
          </nav>

          <div className='flex items-center space-x-4'>
            <Button variant='bordered' color='secondary' className='text-foreground'>
              Sign In
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
