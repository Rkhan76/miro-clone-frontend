import { Button } from '../ui/button'
import Image from 'next/image'
import HomeLogo from '../../public/homoLogo.svg'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white text-gray-800 shadow-md">
      <div className="flex items-center space-x-4">
        <Image src={HomeLogo} alt="Home Logo" width={200} height={200} />
      </div>
      <div className="flex space-x-4">
        <Button
          size="lg"
          variant="outline"
          className="text-purple-500 border-purple-500 hover:bg-purple-100 transition-colors"
        >
          Login
        </Button>
        <Button
          size="lg"
          variant="custom"
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          Signup
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
