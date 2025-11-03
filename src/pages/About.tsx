import { BookOpen, Handshake, Building, Award, Target, Eye, Heart } from "lucide-react";
import teamJohn from "@/assets/team-john.jpg";
// import teamMaria from "@/assets/team-maria.jpg";
// import teamDavid from "@/assets/team-david.jpg";
// import teamEmily from "@/assets/team-emily.jpg";
import consultation from "@/assets/consultation.jpg";

const About = () => {
  const timeline = [
    {
      icon: BookOpen,
      year: "18/09/2015",
      title: "Ano de fundação",
      description: "Washington Seguros foi fundada com a missão de fornecer soluções de seguros personalizadas e confiáveis para famílias e empresas.",
    },
    {
      icon: Handshake,
      year: "18/09/2015",
      title: "Primeira grande parceria",
      description: "Fizemos parceria com uma seguradora nacional líder para ampliar nossas ofertas, oferecendo aos clientes acesso a uma gama mais ampla de opções de cobertura.",
    },
    {
      icon: Building,
      year: "18/09/2021",
      title: "Expansão do escritório",
      description: "Mudamos para nossa nova sede para Jose Americo para melhor atender nossa crescente base de clientes e expandir nossa equipe.",
    },
    {
      icon: Award,
      year: "18/09/2025",
      title: "Comemorando 10 anos",
      description: "Com orgulho servindo nossa comunidade por mais de 10 anos com confiança, integridade e um compromisso inabalável com a segurança de nossos clientes.",
    },
  ];

  const philosophy = [
    {
      icon: Target,
      title: "Missão",
      description: "Fornecer soluções de seguros abrangentes e personalizadas, entregues com integridade e atendimento excepcional.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser a corretora de seguros mais confiável e respeitada em nossa comunidade, conhecida por nossa experiência e defesa inabalável do cliente.",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Integridade, Client-First Excellence, Community, e Trust. Esses princípios guiam cada decisão que tomamos e toda interação que temos.",
    },
  ];

  const team = [
    {
      name: "Washington Marques",
      role: "Fundador & CEO",
      image: teamJohn,
    }
  ];

  const differentiators = [
    {
      title: "Serviço personalizado",
      description: "Levamos o tempo necessário para entender suas necessidades específicas e encontramos a cobertura certa, não apenas uma política de tamanho único para todos.",
    },
    {
      title: "Conhecimento técnico",
      description: "Utilizando ferramentas modernas para agilizar o processo de seguro, tornando-o mais fácil e eficiente para você.",
    },
    {
      title: "Ampla gama de parceiros",
      description: "Nossa extensa rede de seguradoras de alto nível garante que você obtenha os melhores preços e as melhores opções.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nossa história, sua segurança..
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Saiba mais sobre o nosso compromisso em proteger o que é mais importante para você.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12 lg:mb-16">
            Nossa jornada
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-primary">{item.year}</span>
                    <span className="hidden md:block text-muted-foreground">-</span>
                    <span className="text-xl font-semibold text-card-foreground">{item.title}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12 lg:mb-16">
            Nossa Filosofia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-8 text-center shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12 lg:mb-16">
            Conheça nossa equipe
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
                O que nos diferencia
              </h2>
              
              <div className="space-y-6">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={consultation}
                alt="Professionals consulting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
