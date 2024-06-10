import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import FirstPost from './components/Todolist';

export default function Home() {
  return (

    <main className="flex  flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started to make to&nbsp;
          <code className="font-mono font-bold">ToDoList</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.linkedin.com/in/abu-bakar-0b3003229"
            target="_blank"
            rel="noopener noreferrer" >
            By{' '}
            <h1 className="font-mono font-bold">Abu Bakar</h1>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute ">
        <h1 className="text-4xl font-bold">Awesome ToDo App</h1>
      </div>

      <div>
        <FirstPost />

      </div>


    </main >
  )
}
