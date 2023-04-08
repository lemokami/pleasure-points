import type { Component } from 'solid-js';
import '@fontsource/press-start-2p';
import '@fontsource/bungee';

const App: Component = () => {
  return (
    <div class='relative'>
      <div class='hidden text-white/60 text-xl uppercase font-semibold tracking-widest absolute inset-0 md:bg-gray-900 md:flex md:justify-center md:items-center h-screen text-center z-50'>
        Please use your phone to access PressurePoints⚡️
      </div>
      <div class='bg-[#EA5455] h-screen w-full p-4 flex flex-col overflow-hidden'>
        <div class='bg-black rounded-xl p-5 flex flex-col items-center justify-between gap-5'>
          <div class='bg-[#F9F5EB] text-[#977641] p-5 rounded-md w-full flex flex-col justify-between items-center gap-20'>
            <div class='flex items-center gap-1'>
              <img
                src='/assets/heart-filled.svg'
                alt='heart-filled'
                class='w-7'
              />
              <img src='/assets/heart-half.svg' alt='heart-half' class='w-7' />
              <img
                src='/assets/heart-outline.svg'
                alt='heart-outline'
                class='w-7'
              />
              <img
                src='/assets/heart-outline.svg'
                alt='heart-outline'
                class='w-7'
              />
              <img
                src='/assets/heart-outline.svg'
                alt='heart-outline'
                class='w-7'
              />
            </div>
            <span class='text-xl uppercase'>OFF</span>
            <span class='text-sm'>01:02</span>
          </div>
          <span class='text-white/25 text-lg brand-text'>PressurePoints</span>
        </div>
        <div class='flex flex-col items-center w-full py-12 gap-16'>
          <div class='flex items-center justify-between px-2 w-full'>
            <button class='rounded-full w-28 h-28 bg-black ml-4'></button>
            <div class='flex items-center gap-12 transform -rotate-45 z-0'>
              <button class='flex items-center justify-center rounded-full w-12 h-12 bg-black text-white'>
                -
              </button>
              <button class='flex items-center justify-center rounded-full w-12 h-12 bg-black text-white'>
                -
              </button>
            </div>
          </div>
          <div class='flex items-center gap-8 text-[#A03B3B] text-xs'>
            <button class='bg-black rounded-md px-8 p-2 uppercase'>Mode</button>
            <button class='bg-black rounded-md px-8 p-2 uppercase'>Help</button>
          </div>
        </div>
        <div class='absolute bottom-10 w-'>
          <img src='/assets/spots.svg' alt='spots' class='scale-110 w-screen' />
        </div>
      </div>
    </div>
  );
};

export default App;
