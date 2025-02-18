import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
   
    <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Text Section */}
          <div className="flex-1 max-w-xl text-center md:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl mb-6">
              Hassle-Free Doctor Appointments
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Say goodbye to long queues! Easily book, manage, and attend your medical appointments anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="w-full sm:w-auto">
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-[350px] h-[350px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                className="object-cover"
                alt="Doctor examining a patient"
                fill
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
