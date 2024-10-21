import Image from 'next/image'
import { Copyright, Facebook, Twitter, Instagram, Github } from 'lucide-react'
import HomoLogo from '../../public/homoLogo.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 p-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image src={HomoLogo} alt="Homo Logo" width={150} height={150} />
        </div>

        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="flex items-center space-x-2">
            <Copyright size={18} />
            <span className="text-sm">
              2024 My Website. All rights reserved.
            </span>
          </div>
          <div className="text-sm text-gray-600 text-center">
            Privacy policy | Terms
          </div>
        </div>

        <div className="flex space-x-4">
          <Instagram
            color="#f1414a"
            className="hover:scale-110 transition-transform"
          />
          <Twitter
            color="#1DA1F2"
            className="hover:scale-110 transition-transform"
          />
          <Facebook
            color="#1877F2"
            className="hover:scale-110 transition-transform"
          />
          <Github className="hover:scale-110 transition-transform text-gray-800" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
