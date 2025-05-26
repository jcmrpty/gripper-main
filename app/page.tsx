import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-cyan-700">GRIPPER PRINT</div>
        <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
          <WhatsappIcon size={20} />
          <span>CONTÁCTENOS POR WHATSAPP</span>
        </Button>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-cyan-800 mb-16">Sitio en construcción</h1>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-cyan-700 mb-2">Nuestros Productos</h2>
          <p className="text-gray-600">Pronto podrás ordenar en línea</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Canvas */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64 bg-cyan-100">
              <Image src="/placeholder.svg?height=400&width=600" alt="Canvas" fill className="object-cover" />
              <div className="absolute top-3 right-3 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">
                Destacado
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-cyan-700">CANVAS</h3>
            </div>
          </div>

          {/* Afiches */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64 bg-yellow-100">
              <Image src="/placeholder.svg?height=400&width=600" alt="Afiches" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-cyan-700">AFICHES</h3>
            </div>
          </div>

          {/* Banners */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64 bg-blue-100">
              <Image src="/placeholder.svg?height=400&width=600" alt="Banners" fill className="object-cover" />
              <div className="absolute top-3 right-3 bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                Personalizable
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-cyan-700">BANNERS</h3>
            </div>
          </div>

          {/* Formularios y Papelería */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64 bg-teal-100">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Formularios y Papelería"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-cyan-700">FORMULARIOS Y PAPELERÍA</h3>
            </div>
          </div>

          {/* POP */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64 bg-purple-100">
              <Image src="/placeholder.svg?height=400&width=600" alt="POP" fill className="object-cover" />
              <div className="absolute top-3 right-3 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">Nuevo</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-cyan-700">POP</h3>
            </div>
          </div>

          {/* Invitaciones */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64 bg-pink-100">
              <Image src="/placeholder.svg?height=400&width=600" alt="Invitaciones" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-cyan-700">INVITACIONES</h3>
            </div>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Próximamente</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos trabajando para brindarte la mejor experiencia en impresión. Muy pronto podrás realizar tus pedidos
            en línea.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-cyan-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Para consultas:{" "}
            <a href="mailto:ventasgripper@gmail.com" className="font-semibold hover:underline">
              ventasgripper@gmail.com
            </a>
          </p>
          <p className="text-cyan-200">© {new Date().getFullYear()} Gripper Print. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
