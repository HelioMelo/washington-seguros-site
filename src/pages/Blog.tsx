import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import blogSeguros from "@/assets/blog-seguros.jpg";
import blogFamilia from "@/assets/blog-familia.jpg";
import blogCarro from "@/assets/blog-carro.jpg";
import blogNegocios from "@/assets/blog-negocios.jpg";
import blogResidencial from "@/assets/blog-residencial.jpg";
import blogAposentadoria from "@/assets/blog-aposentadoria.jpg";
import blogCondominio from "@/assets/blog-condominio.jpg";
import blogConsorcio from "@/assets/blog-consorcio.jpg";
import blogSaude from "@/assets/blog-saude.jpg";
import blogMaquinas from "@/assets/blog-maquinas.jpg";
import blogTransporte from "@/assets/blog-transporte.jpg";
import blogAeronautico from "@/assets/blog-aeronautico.jpg";
import blogNautico from "@/assets/blog-nautico.jpg";
import blogResponsabilidade from "@/assets/blog-responsabilidade.jpg";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Seguro Automóvel",
      excerpt: "Proteja seu veículo contra colisões, roubos e danos a terceiros. Com cobertura completa e assistência 24h, você dirige com segurança e tranquilidade, sabendo que estará protegido em qualquer imprevisto.",
      category: "Seguro Auto",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      image: blogCarro,
    },
    {
      id: 2,
      title: "Seguro Condomínio",
      excerpt: "Cuide de seu condomínio com cobertura para áreas comuns, incêndios, roubos e responsabilidade civil. Com um seguro completo, todos os moradores ficam protegidos e a gestão de riscos fica muito mais tranquila.",
      category: "Seguro Condomínio",
      date: "12 de Janeiro, 2024",
      readTime: "6 min",
      image: blogCondominio,
    },
    {
      id: 3,
      title: "Consórcio",
      excerpt: "Planeje grandes investimentos com segurança e previsibilidade. O consórcio permite adquirir bens ou serviços de forma programada, sem juros, garantindo contemplações e a realização dos seus projetos.",
      category: "Consórcio",
      date: "10 de Janeiro, 2024",
      readTime: "5 min",
      image: blogConsorcio,
    },
    {
      id: 4,
      title: "Seguro Empresarial",
      excerpt: "Proteja sua empresa contra danos a patrimônio, equipamentos e responsabilidade civil. Um seguro empresarial adequado reduz prejuízos, mantém a operação em funcionamento e oferece suporte em situações inesperadas.",
      category: "Seguro Empresarial",
      date: "8 de Janeiro, 2024",
      readTime: "7 min",
      image: blogNegocios,
    },
    {
      id: 5,
      title: "Seguro Residencial",
      excerpt: "Seu lar merece proteção completa contra incêndios, roubos e danos naturais. Com assistência 24h e coberturas personalizadas, você mantém sua casa segura e sua família tranquila.",
      category: "Seguro Residencial",
      date: "5 de Janeiro, 2024",
      readTime: "6 min",
      image: blogResidencial,
    },
    {
      id: 6,
      title: "Seguro Vida",
      excerpt: "Ofereça proteção financeira para você e sua família em caso de imprevistos. O seguro de vida garante apoio em momentos difíceis, assegurando estabilidade e tranquilidade para os seus entes queridos.",
      category: "Seguro de Vida",
      date: "2 de Janeiro, 2024",
      readTime: "6 min",
      image: blogFamilia,
    },
    {
      id: 7,
      title: "Previdência Privada",
      excerpt: "Planeje o seu futuro com segurança e tranquilidade financeira. A previdência privada ajuda a construir uma reserva sólida, garantindo estabilidade na aposentadoria e realização de sonhos.",
      category: "Previdência",
      date: "28 de Dezembro, 2023",
      readTime: "7 min",
      image: blogAposentadoria,
    },
    {
      id: 8,
      title: "Seguro Saúde",
      excerpt: "Tenha acesso a cobertura completa para consultas, exames e internações. Com seguro saúde, você garante atendimento rápido, qualidade nos serviços médicos e tranquilidade em qualquer situação.",
      category: "Seguro Saúde",
      date: "22 de Dezembro, 2023",
      readTime: "6 min",
      image: blogSaude,
    },
    {
      id: 9,
      title: "Seguro de Máquinas e Equipamentos",
      excerpt: "Proteja equipamentos industriais, agrícolas e tecnológicos contra danos, falhas ou roubo. Um seguro completo mantém suas operações funcionando e minimiza prejuízos financeiros.",
      category: "Seguro Equipamentos",
      date: "18 de Dezembro, 2023",
      readTime: "5 min",
      image: blogMaquinas,
    },
    {
      id: 10,
      title: "Seguro de Transporte",
      excerpt: "Garanta a segurança de cargas e mercadorias durante transporte rodoviário, aéreo ou aquaviário. Com cobertura contra danos e imprevistos, você reduz riscos logísticos e financeiros.",
      category: "Seguro Transporte",
      date: "15 de Dezembro, 2023",
      readTime: "6 min",
      image: blogTransporte,
    },
    {
      id: 11,
      title: "Seguro Aeronáutico",
      excerpt: "Proteja aeronaves, tripulantes e passageiros contra acidentes e danos a terceiros. Um seguro completo garante segurança, conformidade e suporte em qualquer situação.",
      category: "Seguro Aeronáutico",
      date: "10 de Dezembro, 2023",
      readTime: "5 min",
      image: blogAeronautico,
    },
    {
      id: 12,
      title: "Seguro Náutico",
      excerpt: "Navegue com segurança com cobertura para embarcações, equipamentos e responsabilidade civil. Um seguro náutico garante proteção contra acidentes, roubo ou danos naturais.",
      category: "Seguro Náutico",
      date: "5 de Dezembro, 2023",
      readTime: "6 min",
      image: blogNautico,
    },
    {
      id: 13,
      title: "Seguro de Responsabilidade Civil",
      excerpt: "Proteja-se de prejuízos decorrentes de danos causados a terceiros. Ideal para pessoas físicas ou jurídicas, garantindo suporte financeiro e jurídico em qualquer situação.",
      category: "Responsabilidade Civil",
      date: "1 de Dezembro, 2023",
      readTime: "5 min",
      image: blogResponsabilidade,
    },
    {
      id: 14,
      title: "Seguro de Equipamentos",
      excerpt: "Proteja equipamentos eletrônicos, tecnológicos e industriais contra roubo, danos ou falhas operacionais. Um seguro adequado mantém suas operações seguras e reduz prejuízos.",
      category: "Seguro Equipamentos",
      date: "25 de Novembro, 2023",
      readTime: "5 min",
      image: blogSeguros,
    },
  ];


  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Blog Washington Seguros
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Bem-vindo ao Blog! Aqui você encontra dicas, informações e novidades sobre todos os tipos de seguros que oferecemos. Nosso objetivo é ajudá-lo a proteger seu patrimônio, sua saúde e sua tranquilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="inline-flex items-center gap-1 text-secondary font-medium">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Precisa de Ajuda para Escolher seu Seguro?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para ajudar você a encontrar a proteção ideal.
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

export default Blog;
