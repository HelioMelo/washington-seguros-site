import { Link } from "react-router-dom";
import { Shield, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8" />
              <span className="text-xl font-bold">Washington Seguros</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 mb-4">
              A proteção e tranquilidade que você e sua família merecem.
            </p>
            <div className="text-sm text-primary-foreground/80 space-y-1">
              <p>João Pessoa - PB</p>
              <a 
                href="tel:+5583988198121" 
                className="block hover:text-primary-foreground transition-colors"
              >
                +55 83 98819-8121
              </a>
              <a 
                href="mailto:wseguros@outlook.com" 
                className="block hover:text-primary-foreground transition-colors"
              >
                wseguros@outlook.com
              </a>
            </div>
          </div>

          {/* Seguros */}
          <div>
            <h3 className="font-semibold mb-4">Seguros</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/seguros" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Auto
                </Link>
              </li>
              <li>
                <Link to="/seguros" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Vida
                </Link>
              </li>
              <li>
                <Link to="/seguros" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Residencial
                </Link>
              </li>
              <li>
                <Link to="/seguros" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Empresarial
                </Link>
              </li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre-nos" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contato" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Área do Cliente
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-primary-foreground/80">
            <div className="text-center md:text-left">
              <p>© 2024 Washington Seguros. Todos os direitos reservados.</p>
              <p className="text-xs mt-1">Washington Seguros Corretora de Seguros Ltda - CNPJ: 23.300.836/0001-07</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
