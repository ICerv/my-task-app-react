import AllTasks from "./components/AllTasks"


const App = () => {
  return (
    <div className="all-tasks">
      <AllTasks />
    </div>
  )
}

export default App






//cisty javasctipt - zacatek
  // const vychoziPole = [5, 6, 7, 8, 9]
  // const vyslednePole = vychoziPole.map((jednoCislo) => {
  //   return jednoCislo + 10
  // })
  // console.log(vyslednePole)
  //cisty javasctipt - konec

  //funkce map() - zacatek
  // const data = [
  //   { id: 1, name: 'Vynést koš' },
  //   { id: 2, name: 'Uklidit kuchyň' },
  //   { id: 3, name: 'Zajít do fitka' },
  //   { id: 4, name: 'Nakoupit' },
  //   { id: 5, name: 'Nakrmit kočku' },
  // ]

  // const vysledek = data.map((jedenUkol) => {
  //   return jedenUkol.name
  // })
  // console.log(vysledek)
  //funkce map() - konec

  //funkce filter() - zacatek
  // const data = [
  //   { id: 1, name: 'Vynést koš' },
  //   { id: 2, name: 'Uklidit kuchyň' },
  //   { id: 3, name: 'Zajít do fitka' },
  //   { id: 4, name: 'Nakoupit' },
  //   { id: 5, name: 'Nakrmit kočku' },
  // ]

  // const vymazaneId = 3

  // const vyslednePole = data.filter((jedenUkol) => {
  //   return jedenUkol.id !== vymazaneId
  // })
  // console.log(vyslednePole)

  //funkce filter() - konec

