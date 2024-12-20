export default function Details() {
  return (
    <>
      <nav className="nav">
        <a href="https://docs.pmnd.rs/zustand">Documentation</a>
        <a href="https://github.com/pmndrs/zustand">Github</a>
      </nav>
      <div className="bottom">
        <a
          href="https://github.com/pmndrs/zustand/tree/main/examples/demo"
          className="bottom-right"
        >
          {'<Source />'}
        </a>
      </div>
      <span className="header-left">Zustand</span>
    </>
  )
}
