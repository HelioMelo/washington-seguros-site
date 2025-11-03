import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

// Validation schema
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Nome é obrigatório" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z.string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "Email deve ter no máximo 255 caracteres" }),
  phone: z.string()
    .trim()
    .min(1, { message: "Telefone é obrigatório" })
    .max(20, { message: "Telefone deve ter no máximo 20 caracteres" }),
  insuranceType: z.string()
    .min(1, { message: "Selecione um tipo de seguro" }),
  message: z.string()
    .trim()
    .min(1, { message: "Mensagem é obrigatória" })
    .max(1000, { message: "Mensagem deve ter no máximo 1000 caracteres" }),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    try {
      const validated = contactSchema.parse(formData);
      
      // Prepare WhatsApp message
      const whatsappMessage = encodeURIComponent(
        `*Nova Cotação - Washington Seguros*\n\n` +
        `*Nome:* ${validated.name}\n` +
        `*Email:* ${validated.email}\n` +
        `*Telefone:* ${validated.phone}\n` +
        `*Tipo de Seguro:* ${validated.insuranceType}\n` +
        `*Mensagem:* ${validated.message}`
      );
      
      // Prepare email
      const emailSubject = encodeURIComponent(`Nova Cotação - ${validated.name}`);
      const emailBody = encodeURIComponent(
        `Nome: ${validated.name}\n` +
        `Email: ${validated.email}\n` +
        `Telefone: ${validated.phone}\n` +
        `Tipo de Seguro: ${validated.insuranceType}\n\n` +
        `Mensagem:\n${validated.message}`
      );
      
      // Open WhatsApp in new tab
      const whatsappWindow = window.open(`https://wa.me/5583988198121?text=${whatsappMessage}`, '_blank');
      
      // Open email client in new tab
      window.open(`mailto:wseguros@outlook.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
      
      // Check if popup was blocked
      if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed == 'undefined') {
        toast({
          title: "Atenção!",
          description: "Por favor, permita pop-ups no seu navegador e tente novamente. Clique no ícone de cadeado ao lado da URL.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "WhatsApp aberto!",
          description: "Verifique a nova aba para enviar sua mensagem pelo WhatsApp.",
        });
      }
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        insuranceType: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Erro no formulário",
          description: "Por favor, corrija os erros antes de enviar.",
          variant: "destructive",
        });
      }
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone/WhatsApp",
      value: "+55 83 98819-8121",
      link: "https://wa.me/5583988198121",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "wseguros@outlook.com",
      link: "mailto:wseguros@outlook.com",
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "R. Prof. Geraldo Von Sohsten, 114 - sl.107\nJaguaribe, João Pessoa - PB, 58015-190",
      link: "https://www.google.com/maps/place/WASHINGTON+SEGUROS/@-7.1305841,-34.8729675,17z/data=!3m1!4b1!4m6!3m5!1s0x7ace804e13051f7:0x2ed54074046e02fb!8m2!3d-7.1305841!4d-34.8703872!16s%2Fg%2F11cjq91pc6",
    },
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Fale Conosco e Peça sua Cotação
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Preencha o formulário abaixo ou utilize um de nossos canais de atendimento. Estamos prontos para ajudar a encontrar a melhor proteção para você.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg p-6 lg:p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">
                  Solicite sua Cotação Online
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        placeholder="Digite seu nome completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Telefone/WhatsApp</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(XX) XXXXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="insuranceType">Tipo de Seguro</Label>
                      <Select
                        value={formData.insuranceType}
                        onValueChange={(value) => setFormData({ ...formData, insuranceType: value })}
                      >
                        <SelectTrigger id="insuranceType" className={errors.insuranceType ? "border-destructive" : ""}>
                          <SelectValue placeholder="Selecione um seguro" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Auto">Auto</SelectItem>
                          <SelectItem value="Residencial">Residencial</SelectItem>
                          <SelectItem value="Vida">Vida</SelectItem>
                          <SelectItem value="Empresarial">Empresarial</SelectItem>
                          <SelectItem value="Outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.insuranceType && (
                        <p className="text-sm text-destructive mt-1">{errors.insuranceType}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva os detalhes para sua cotação..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="privacy" required className="mt-1" />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      Eu concordo com a{" "}
                      <a href="#" className="text-secondary hover:underline">
                        Política de Privacidade
                      </a>{" "}
                      e os{" "}
                      <a href="#" className="text-secondary hover:underline">
                        Termos de Uso
                      </a>
                      .
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    Enviar Solicitação
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-bold text-card-foreground mb-6">
                  Outras Formas de Contato
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-secondary hover:underline whitespace-pre-line block"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground whitespace-pre-line">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.667824324934!2d-34.8729675!3d-7.1305841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace804e13051f7%3A0x2ed54074046e02fb!2sWASHINGTON%20SEGUROS!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Washington Seguros"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
