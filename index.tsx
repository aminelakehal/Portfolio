"use client"

import Image from "next/image"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect, useCallback } from "react"
import { Mail, Menu, Globe } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const translations = {
  fr: {
    about: "À propos",
    skills: "Compétences",
    projects: "Réalisations",
    contact: "Contact",
    name: "Nom",
    email: "Email",
    message: "Message",
    send: "Envoyer",
    orContactMe: "Ou contactez-moi directement :",
    allRightsReserved: "Tous droits réservés.",
    aboutMe: "À propos de moi",
    aboutMeText:
      "Développeur web passionné avec une expertise en technologies frontend et backend. Je crée des solutions web innovantes et performantes pour répondre aux besoins de mes clients.",
    mySkills: "Mes Compétences",
    myProjects: "Mes Réalisations",
    contactMe: "Contactez-moi",
  },
  en: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    orContactMe: "Or contact me directly:",
    allRightsReserved: "All rights reserved.",
    aboutMe: "About Me",
    aboutMeText:
      "Passionate web developer with expertise in frontend and backend technologies. I create innovative and high-performance web solutions to meet my clients' needs.",
    mySkills: "My Skills",
    myProjects: "My Projects",
    contactMe: "Contact Me",
  },
  ar: {
    about: "نبذة عني",
    skills: "المهارات",
    projects: "المشاريع",
    contact: "اتصل بي",
    name: "الاسم",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    send: "إرسال",
    orContactMe: "أو اتصل بي مباشرة:",
    allRightsReserved: "جميع الحقوق محفوظة.",
    aboutMe: "نبذة عني",
    aboutMeText:
      "مطور ويب متحمس مع خبرة في تقنيات الواجهة الأمامية والخلفية. أقوم بإنشاء حلول ويب مبتكرة وعالية الأداء لتلبية احتياجات عملائي.",
    mySkills: "مهاراتي",
    myProjects: "مشاريعي",
    contactMe: "اتصل بي",
  },
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")
  const [lang, setLang] = useState("fr")

  const t = translations[lang]

  const skills = {
    backend: ["Laravel", "MySQL", "Node.js", "Composer"],
    languages: ["TypeScript", "PHP", "JavaScript", "SQL"],
    frontend: ["React", "Tailwind CSS", "Next.js", "Vite.js", "Bootstrap", "Flutter", "npm"],
  }

  const filterSkills = (category) => {
    setActiveTab(category)
  }

  const projects = [
    {
      title: "Centre de Recherche Scientifique (CRTI)",
      description: "Création d'un site web dynamique complet pour le Centre de Recherche Scientifique (CRTI).",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Sky Travel",
      description: "Création d'un site web dynamique pour l'agence de voyage Sky Travel.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Sahla Réserve",
      description: "Création d'un site web et application mobile et ios Sahla réserve.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  const navItems = [
    { href: "#about", label: t.about },
    { href: "#skills", label: t.skills },
    { href: "#projects", label: t.projects },
    { href: "#contact", label: t.contact },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Amine Lakehal</h1>
          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Globe className="h-4 w-4 text-black" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLang("fr")}>Français</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang("en")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang("ar")}>العربية</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-black" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="block px-2 py-1 text-lg">
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        <Card className="mb-12" id="about">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/amine.jpg"
                alt="Amine Lakehal"
                width={150}
                height={150}
                className="rounded-full mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">{t.aboutMe}</h2>
                <p className="text-muted-foreground">{t.aboutMeText}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-12" id="skills">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-semibold">{t.mySkills}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Button variant={activeTab === "all" ? "default" : "outline"} onClick={() => filterSkills("all")}>
                Toutes
              </Button>
              <Button variant={activeTab === "backend" ? "default" : "outline"} onClick={() => filterSkills("backend")}>
                Backend
              </Button>
              <Button
                variant={activeTab === "languages" ? "default" : "outline"}
                onClick={() => filterSkills("languages")}
              >
                Langages
              </Button>
              <Button
                variant={activeTab === "frontend" ? "default" : "outline"}
                onClick={() => filterSkills("frontend")}
              >
                Frontend
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(skills).map(([category, skillList]) =>
                skillList.map(
                  (skill) =>
                    (activeTab === "all" || activeTab === category) && (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ),
                ),
              )}
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="mb-12" id="projects">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-semibold">{t.myProjects}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full max-w-3xl mx-auto overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {projects.map((project, index) => (
                  <div className="flex-[0_0_100%] min-w-0" key={index}>
                    <Card className="h-full mx-4 transition-all duration-300 transform hover:scale-105">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4">
              {projects.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`mx-1 ${selectedIndex === index ? "bg-primary text-primary-foreground" : ""}`}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card id="contact">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-semibold">{t.contactMe}</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  {t.name}
                </label>
                <Input id="name" placeholder={t.name} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {t.email}
                </label>
                <Input id="email" type="email" placeholder={t.email} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  {t.message}
                </label>
                <Textarea id="message" placeholder={t.message} rows={4} />
              </div>
              <Button type="submit">{t.send}</Button>
            </form>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{t.orContactMe}</h3>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:votre-email@example.com" className="text-primary hover:underline">
                  votre-email@example.com
                </a>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white transition-colors duration-300"
                  asChild
                >
                  <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-[#333] hover:border-[#333] hover:text-white transition-colors duration-300"
                  asChild
                >
                  <a href="https://github.com/aminelakehal" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white transition-colors duration-300"
                  asChild
                >
                  <a href="https://www.instagram.com/x_amine_x_amine/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Amine Lakehal. {t.allRightsReserved}
          </p>
        </div>
      </footer>
    </div>
  )
}

