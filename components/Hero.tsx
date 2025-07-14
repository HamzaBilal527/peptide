'use client'

import { Button } from '@flexi-ui/button'

export const Hero = () => {
  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24'>
      <div className='absolute left-64 top-32'>
        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600'>
          <div className='h-8 w-8 rounded-full bg-white opacity-80' />
        </div>
      </div>

      <div className='absolute right-48 top-20'>
        <div className='flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-500'>
          <div className='h-10 w-10 rounded-full bg-white opacity-80'></div>
        </div>
      </div>

      <div className='absolute bottom-32 left-48'>
        <div className='w-18 h-18 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-400'>
          <div className='h-9 w-9 rounded-full bg-white opacity-80'></div>
        </div>
      </div>

      <div className='absolute bottom-20 right-80'>
        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800'>
          <div className='h-8 w-8 rounded-full bg-white opacity-80'></div>
        </div>
      </div>

      <div className='absolute bottom-16 right-32'>
        <div className='flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-purple-800'>
          <div className='h-10 w-10 rounded-full bg-white opacity-80'></div>
        </div>
      </div>

      <div className='relative z-10 mx-auto max-w-4xl px-6 text-center'>
        <h1 className='mb-8 text-6xl font-bold leading-tight text-gray-900'>Protects Public By Testing Peptide</h1>
        <p className='mx-auto mb-12 max-w-2xl text-xl text-gray-600'>
          We've tested 1371 samples from 60 vendors across 15 popular peptides.
        </p>
        <Button>Explore More About Us</Button>
      </div>
    </section>
  )
}
