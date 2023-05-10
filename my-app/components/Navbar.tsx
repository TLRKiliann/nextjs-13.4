import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex w-full bg-slate-100 border-b">
      <h1 className="p-2 ml-4 w-full">Navbar</h1>
      <ul className="p-2 flex w-auto justify-end border border-red-600">
        <li className="mr-36">
          <Link href="#">
            First
          </Link>
        </li>
        <li className="mr-36">
          <Link href="#">
            Second
          </Link>          
        </li>
        <li className="mr-6">
          <Link href="#">
            Third
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar