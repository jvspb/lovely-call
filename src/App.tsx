

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center select-none">
        <h1 className="font-semibold text-4xl -mt-36 animate-bounce">OI LINDINHA DO MEU CORAÇÃO!</h1>
        <h2 className="font-semibold text-zinc-400">Tem pedido melhor que esse?</h2>

        <div>
          <div className="mt-10 w-[300px] h-54 bg-zinc-900 rounded-md shadow-md p-4 text-center flex flex-col gap-3">
            <h1 className="text-lg font-semibold">Vamos sair próxima semana?</h1>
            <h2 className="text-justify text-sm text-zinc-500 font-semibold">O lugar, a gente decide, os melhores rolês são decididos na hora.</h2>
          </div>
          <div className="flex justify-between">
            <button 
              onClick={() => alert("Tá bom então ^^\nTe amo")}
              className="px-2 py-1 bg-emerald-600 rounded-md font-semibold mt-2 hover:bg-emerald-700 transition-colors">Claro, eu te amo!</button>
            <button 
              onMouseOver={(event) => {
                const btn = event.currentTarget;
                btn.style.left = `${Math.ceil(Math.random() * 80)}%`;
                btn.style.top = `${Math.ceil(Math.random() * 80)}%`;
              }}
              id="botao"
              className="absolute ml-40 px-2 py-1 bg-rose-500 rounded-md font-semibold mt-2 hover:bg-rose-600 transition-colors">Não, eu te odeio!</button>
          </div>
        </div>
    </div>
  )
}

export default App
