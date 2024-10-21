import { Button } from '@/components/ui/button'
import Navbar from '../components/home/navbar'
import Footer from '@/components/home/footer'

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow">
        <Navbar />
        <main className="flex flex-col items-center justify-center text-center py-16">
          <div className="text-6xl font-semibold text-purple-500 mb-4">
            Where heart meets art.
          </div>
          <p className="text-3xl text-gray-600 mb-6">
            Canva makes it easy to create and share professional designs.
          </p>
          <Button className="bg-purple-500 text-white hover:bg-purple-700 transition duration-200 py-3 px-6 rounded-md shadow-lg">
            Start designing
          </Button>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Page
