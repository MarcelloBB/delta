import Habit from "./components/Habit"

export default function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={5} />
      <Habit completed={4} />
      <Habit completed={6} />
      <Habit completed={13} />
    </div>
  )
}

