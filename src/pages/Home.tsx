import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Home as HomeIcon, Heart, Building2, Users, Shield, Sparkles } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import carInsurance from "@/assets/car-insurance.jpg";
import homeInsurance from "@/assets/home-insurance.jpg";
import lifeInsurance from "@/assets/life-insurance.jpg";
import businessInsurance from "@/assets/business-insurance.jpg";

const Home = () => {
  const insuranceTypes = [
    {
      icon: Car,
      title: "Seguro Automóvel",
      description: "Proteção completa para seu veículo contra roubos, acidentes e danos.",
      image: carInsurance,
    },
    {
      icon: HomeIcon,
      title: "Seguro Residencial",
      description: "Garanta a segurança do seu lar e de seus bens contra imprevistos.",
      image: homeInsurance,
    },
    {
      icon: Heart,
      title: "Seguro de Vida",
      description: "Assegure o futuro e a tranquilidade financeira de quem você ama.",
      image: lifeInsurance,
    },
    {
      icon: Building2,
      title: "Seguro Empresarial",
      description: "Proteja seu negócio, seus funcionários e seu patrimônio.",
      image: businessInsurance,
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Nossa equipe está pronta para entender suas necessidades e oferecer a melhor solução.",
    },
    {
      icon: Shield,
      title: "As Melhores Seguradoras",
      description: "Trabalhamos com as seguradoras mais renomadas do mercado para sua segurança.",
    },
    {
      icon: Sparkles,
      title: "Consultoria Especializada",
      description: "Conte com nossos especialistas para tirar todas as suas dúvidas e fazer a escolha certa.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroFamily}
            alt="Família feliz representando segurança e proteção"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
              A proteção e tranquilidade que você e sua família merecem.
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8">
              Somos especialistas em encontrar a solução ideal para proteger o que mais importa para você.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contato">Cotação Rápida</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Encontre o seguro ideal para você
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore nossa variedade de seguros e encontre a cobertura ideal para você, sua família e seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceTypes.map((insurance, index) => (
              <Link
                key={index}
                to="/seguros"
                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={insurance.image}
                    alt={insurance.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <insurance.icon className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {insurance.title}
                  </h3>
                  <p className="text-muted-foreground">{insurance.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Por que escolher a Washington Seguros?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos mais do que seguros, entregamos confiança e um serviço de excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <benefit.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Pronto para proteger o que mais importa?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fale com um de nossos especialistas e encontre o plano perfeito para você.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contato">Fale com um Especialista</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
