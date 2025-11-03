import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Home as HomeIcon, Heart, Building2, Users, Shield, Plane, Ship, Wrench, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Seguro Automóvel",
      description: "Proteção completa para seu veículo contra roubos, acidentes e danos.",
      color: "text-secondary",
    },
    {
      icon: HomeIcon,
      title: "Seguro Condomínio",
      description: "Segurança para a estrutura e áreas comuns do seu condomínio.",
      color: "text-secondary",
    },
    {
      icon: Users,
      title: "Consórcio",
      description: "Planeje a conquista do seu sonho imóvel de forma inteligente.",
      color: "text-secondary",
    },
    {
      icon: Building2,
      title: "Seguro Empresarial",
      description: "Garanta a continuidade do seu negócio contra imprevistos.",
      color: "text-secondary",
    },
    {
      icon: HomeIcon,
      title: "Seguro Residencial",
      description: "Proteja seu lar e seus bens contra coberturas personalizadas.",
      color: "text-secondary",
    },
    {
      icon: Heart,
      title: "Seguro de Vida",
      description: "Tranquilidade para você e sua família no futuro.",
      color: "text-secondary",
    },
    {
      icon: Shield,
      title: "Previdência Privada",
      description: "Invista hoje para garantir uma aposentadoria tranquila.",
      color: "text-secondary",
    },
    {
      icon: Shield,
      title: "Seguro Saúde",
      description: "Cuide do bem-estar com acesso às melhores redes de saúde.",
      color: "text-secondary",
    },
    {
      icon: Wrench,
      title: "Máquinas e Equipamentos",
      description: "Proteção para seus equipamentos essenciais contra danos e perdas.",
      color: "text-secondary",
    },
    {
      icon: FileText,
      title: "Seguro de Transporte",
      description: "Segurança para suas cargas durante o transporte, seja qual for o destino.",
      color: "text-secondary",
    },
    {
      icon: Plane,
      title: "Seguro Aeronáutico",
      description: "Cobertura completa para sua aeronave, em solo ou no ar.",
      color: "text-secondary",
    },
    {
      icon: Ship,
      title: "Seguro Náutico",
      description: "Navegue com tranquilidade protegendo sua embarcação.",
      color: "text-secondary",
    },
    {
      icon: FileText,
      title: "Responsabilidade Civil",
      description: "Proteção contra danos involuntários causados a terceiros.",
      color: "text-secondary",
    },
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Conheça Nossas Soluções em Seguros
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore nossa variedade de seguros e encontre a cobertura ideal para você, sua família e seu negócio.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
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
              Não encontrou o que procurava? Fale conosco!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossos especialistas estão prontos para ajudar a encontrar a solução perfeita para suas necessidades.
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

export default Services;
