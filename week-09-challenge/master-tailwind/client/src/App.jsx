

function App() {
  return (
    <>
      <div className="text-white">
        <header className="flex flex-col items-center mb-4">
          <img 
            className="h-96 object-cover mask-radial-at-center mask-radial-from-35% mask-radial-to-70%"
            src="https://static.wikia.nocookie.net/joke-battles/images/d/df/Gigachad.png/revision/latest/scale-to-width-down/400?cb=20230812064835" 
            alt="Oscar pfp" />
          <header className="flex flex-col items-center">
            <span className="text-sky-600">
              @vegetta
            </span>
            <h1 className="text-3xl font-extrabold leading-tight mt-1">
              Samuel De Luque
            </h1>
          </header>
          <section className="flex justify-center gap-2">
            <a className="
              bg-purple-100 p-2 size-12 border border-purple-600
                flex items-center justify-center 
                rounded-full
                hover:scale-110
              " 
              href="https://twitch.tv/">
              <svg height={28} width={28}>
                <use href="../public/assets/sprite.svg#twitch"/>
              </svg>
            </a>
            <a className="
                bg-gradient-to-tr from-yellow-600 via-pink-600 to-purple-600 
                p-2 size-12 border border-purple-600
                flex items-center justify-center 
                rounded-full
                hover:scale-110
              " 
              href="https://instagram.com/">
              <svg height={28} width={28}>
                <use href="../public/assets/sprite.svg#instagram"/>
              </svg>
            </a>
            <a className="
                bg-zinc-900 
                p-2 size-12 border border-zinc-900 
                flex items-center justify-center 
                rounded-full
                hover:scale-110
              " 
              href="https://github.com/">
              <svg height={28} width={28}>
                <use href="../public/assets/sprite.svg#github"/>
              </svg>
            </a>
            <a className="
                bg-white
                p-2 size-12 border border-red-600
                flex items-center justify-center 
                rounded-full
                hover:scale-110
              " 
              href="https://youtube.com/">
              <svg height={28} width={28}>
                <use href="../public/assets/sprite.svg#youtube"/>
              </svg>
            </a>
            <a className="
                bg-black
                p-2 size-12 border border-black
                flex items-center justify-center 
                rounded-full
                hover:scale-110
              " 
              href="https://x.com/">
              <svg height={28} width={28}>
                <use href="../public/assets/sprite.svg#x"/>
              </svg>
            </a>
            <a className="
                bg-white
                p-2 size-12 border border-blue-600
                flex items-center justify-center 
                rounded-full
                hover:scale-110
              " 
              href="https://linkedin.com/">
              <svg height={28} width={28}>
                <use href="../public/assets/sprite.svg#linkedin"/>
              </svg>
            </a>
          </section>
        </header>
        <main className="italic">
          Aquí van las hostias que reparto
        </main>
        <footer className="text-sm text-zinc-400">
          Desaroollado con perfectamente por @Willy*
        </footer>
      </div>
    </>
  )
}

export default App
