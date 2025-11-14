import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_LOGO } from "@/const";
import InvestmentSimulator from "@/components/InvestmentSimulator";
import ServiceCard from "@/components/ServiceCard";
import { ChevronDown, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log("Formulário enviado:", contactForm);
    alert("Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.");
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* ===== WATERMARK ===== */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <img
          src="/investbet-logo-full.png"
          alt="InvestBet Watermark"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-10">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={APP_LOGO}
              alt="InvestBet"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline">
              InvestBet
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("strategy")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Estratégia
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => window.open("https://investbetapp.netlify.app/", "_blank" )}>
              Acessar Conta
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => window.open("https://investbetapp.netlify.app/", "_blank" )}>
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("strategy")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Estratégia
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Contato
            </button>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="outline" className="w-full border-primary text-primary" onClick={() => window.open("https://investbetapp.netlify.app/", "_blank" )}>
                Acessar Conta
              </Button>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => window.open("https://investbetapp.netlify.app/", "_blank" )}>
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* ===== HERO SECTION ===== */}
      <section
        id="hero"
        className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <span className="text-accent font-semibold text-sm">
                  ⭐ Rentabilidade Comprovada
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Rentabilize Seus Investimentos em Apostas Esportivas
              </h1>

              <p className="text-lg text-muted-foreground">
                Estratégias inteligentes no mercado de empate com rentabilidade
                média de 2% a 10% ao mês. Gestão profissional de banca e análise
                estatística para maximizar seus ganhos.
              </p>

              <div className="grid grid-cols-3 gap-4 py-8">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent">
                    2-10%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Rentabilidade Mensal
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent">
                    Saque 
                  </p>
                  <p className="text-sm text-muted-foreground">todo dia 1°</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent">
                    24/7
                  </p>
                  <p className="text-sm text-muted-foreground">Operações Abertas</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 text-lg">
                  Começar Agora
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 font-semibold py-3 text-lg"
                >
                  Acessar Conta
                </Button>
              </div>
            </div>

            {/* Imagem/Ilustração */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
                <Card className="relative p-8 border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-primary/10">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">📊</div>
                    <h3 className="text-xl font-bold text-foreground">
                      Simulador Inteligente
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Calcule sua rentabilidade com base em seus objetivos
                    </p>
                    <div className="bg-background rounded-lg p-4 space-y-2 text-left">
                      <p className="text-sm">
                        <span className="font-semibold text-accent">R$ 10.000</span>{" "}
                        inicial
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold text-accent">5%</span> ao
                        mês
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold text-accent">12 meses</span>
                      </p>
                      <div className="border-t border-border pt-2 mt-2">
                        <p className="text-sm font-bold text-accent">
                          Resultado: R$ 17.959
                        </p>
                        <p className="text-xs text-muted-foreground">
                          (Valor final estimado)
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STRATEGY SECTION ===== */}
      <section id="strategy" className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa Estratégia Vencedora
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Focamos no mercado de empate, utilizando análise estatística avançada
              e gestão de risco rigorosa para maximizar a rentabilidade e proteger
              o capital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
              <div className="text-4xl text-primary mb-4">🎯</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Foco no Empate
              </h3>
              <p className="text-muted-foreground">
                Especialização no mercado de empate, que oferece odds mais
                estáveis e oportunidades de lucro consistentes.
              </p>
            </Card>
            <Card className="p-6 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
              <div className="text-4xl text-primary mb-4">📈</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Análise Estatística
              </h3>
              <p className="text-muted-foreground">
                Utilizamos modelos preditivos e dados históricos para identificar
                jogos com alta probabilidade de empate.
              </p>
            </Card>
            <Card className="p-6 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
              <div className="text-4xl text-primary mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Gestão de Risco
              </h3>
              <p className="text-muted-foreground">
                Aplicação de gestão de banca rigorosa para proteger o capital e
                garantir a sustentabilidade a longo prazo.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções completas para que você possa rentabilizar seu
              capital sem precisar ser um especialista em apostas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon="💰"
              title="Gestão de Banca Profissional"
              description="Seu capital é gerenciado por especialistas, seguindo estratégias de risco controladas e comprovadas."
            />
            <ServiceCard
              icon="💻"
              title="Acesso ao Painel de Controle"
              description="Acompanhe em tempo real o desempenho do seu investimento, saldo e histórico de operações."
            />
            <ServiceCard
              icon="📊"
              title="Análise Exclusiva"
              description="Receba relatórios periódicos com a análise detalhada das operações e projeções de rentabilidade."
            />
            <ServiceCard
              icon="🔒"
              title="Segurança e Transparência"
              description="Garantia de transparência em todas as operações e segurança dos seus dados e capital."
            />
            <ServiceCard
              icon="🤝"
              title="Suporte Dedicado"
              description="Equipe de suporte pronta para atender suas dúvidas e oferecer o melhor atendimento."
            />
            <ServiceCard
              icon="🚀"
              title="Rentabilidade Consistente"
              description="Foco em resultados consistentes a longo prazo, com metas de 2% a 10% ao mês."
            />
          </div>
        </div>
      </section>

      {/* ===== INVESTMENT SIMULATOR SECTION ===== */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simule Seu Investimento
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Descubra o potencial de crescimento do seu capital com base em
              nossa rentabilidade média.
            </p>
          </div>
          <InvestmentSimulator />
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Um processo simples e transparente para você começar a rentabilizar
              seu capital hoje mesmo.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                num: "1",
                title: "Cadastro",
                desc: "Crie sua conta em nossa plataforma de forma rápida e segura.",
              },
              {
                num: "2",
                title: "Aporte",
                desc: "Transfira o capital que deseja investir via PIX ou TED.",
              },
              {
                num: "3",
                title: "Gestão",
                desc: "Nossa equipe aplica as estratégias no mercado de empate.",
              },
              {
                num: "4",
                title: "Acompanhamento",
                desc: "Monitore o desempenho em tempo real pelo seu painel.",
              },
              {
                num: "5",
                title: "Resultados",
                desc: "Ganhos creditados em sua conta",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <Card className="p-6 text-center border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-primary/10 h-full">
                  <div className="text-3xl font-bold text-accent mb-3">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </Card>
                {idx < 4 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ChevronDown className="w-6 h-6 text-accent rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEGAL INFO SECTION ===== */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Informações Importantes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-2 border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                ⏱️ Tempo de Saque
              </h3>
              <p className="text-muted-foreground mb-4">
                Os saques de capital ficam disponíveis após <strong>90 dias</strong> da
                data de cada aporte. Esta política garante a estabilidade das
                operações e a longevidade do seu investimento.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Exemplo: Aporte em 01/01 → Saque disponível a partir de 01/04
              </p>
            </Card>

            <Card className="p-6 border-2 border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                💵 Pagamento de Ganhos
              </h3>
              <p className="text-muted-foreground mb-4">
                Os ganhos são pagos automaticamente todo dia <strong>1º do mês</strong> via
                PIX para a conta cadastrada. Sem necessidade de solicitação manual.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Transferências rápidas e seguras, direto na sua conta.
              </p>
            </Card>

            <Card className="p-6 border-2 border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                📋 Natureza da Atividade
              </h3>
              <p className="text-muted-foreground">
                A InvestBet Capital atua exclusivamente no segmento de apostas
                esportivas, classificado como atividade de entretenimento. Não
                realizamos captação de recursos ou administração de investimentos.
              </p>
            </Card>

            <Card className="p-6 border-2 border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                ⚠️ Isenção de Responsabilidade
              </h3>
              <p className="text-muted-foreground">
                A InvestBet Capital não garante lucros, não assegura rentabilidade
                mínima e não oferece retorno financeiro garantido. As apostas
                esportivas envolvem riscos inerentes.
              </p>
            </Card>

            <Card className="p-6 border-2 border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                🔒 Conformidade Legal
              </h3>
              <p className="text-muted-foreground">
                A InvestBet Capital está em conformidade com a Lei Geral de
                Proteção de Dados (LGPD), garantindo a confidencialidade e
                segurança de suas informações pessoais.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Qual é a rentabilidade média?",
                a: "A rentabilidade média varia de 2% a 10% ao mês, dependendo das condições do mercado e da estratégia aplicada.",
              },
              {
                q: "Quanto tempo leva para sacar meus ganhos?",
                a: "Os saques de capital ficam disponíveis após 12 meses da data de cada aporte. Os ganhos são pagos todo dia 1° rigorosamente em dia de forma automática no pix cadastrado.",
              },
              {
                q: "Posso sacar meus ganhos a qualquer momento?",
                a: "Toda rentabilidade é paga rigorosamente todo dia 1°. O capital inicial fica sujeito ao prazo de 12 meses.",
              },
              {
                q: "Como funciona o gerenciamento de banca?",
                a: "Aplicamos metodologias comprovadas para controlar exposição, diversificar apostas e proteger seu capital. Cada operação é cuidadosamente planejada.",
              },
              {
                q: "Posso acompanhar as operações em tempo real?",
                a: "Sim, você tem acesso a um painel de controle que mostra todas as operações, saldos e rentabilidade em tempo real.",
              },
              {
                q: "A InvestBet é regulada?",
                a: "A InvestBet Capital atua no segmento de apostas esportivas como atividade de entretenimento, operando em conformidade com a legislação vigente.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border-2 border-border">
                <h3 className="font-bold text-foreground mb-3">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Entre em Contato
              </h2>
              <p className="text-muted-foreground mb-8">
                Estamos prontos para esclarecer suas dúvidas e apresentar as
                melhores soluções para seus investimentos.
              </p>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleContactChange}
                    className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>

                <div className="flex gap-2">
                  <Button
                    type="submit"
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    Enviar via E-mail
                  </Button>
                  <Button
                    type="button"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    Enviar via WhatsApp
                  </Button>
                </div>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Contato
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      E-mail Suporte
                    </h4>
                    <p className="text-muted-foreground">
                      suporteinvestbet@gmail.com
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Respondemos em até 24h
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      WhatsApp
                    </h4>
                    <Button
                      onClick={() =>
                        window.open(
                          "https://wa.me/5522997291348?text=Ol%C3%A1%20InvestBet%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os",
                          "_blank"
                         )
                      }
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold mt-2"
                    >
                      Enviar Mensagem
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Atendimento comercial
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Horário
                    </h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Horário de Brasília
                    </p>
                  </div>
                </div>
              </div>

              <Card className="p-6 border-2 border-accent/30 bg-accent/5">
                <h4 className="font-semibold text-foreground mb-2">
                  ⚡ Atendimento Rápido
                </h4>
                <p className="text-sm text-muted-foreground">
                  Prefere falar conosco agora? Clique no ícone de WhatsApp no
                  canto inferior direito da tela.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-primary/5 border-t border-border py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">InvestBet</h4>
              <p className="text-sm text-muted-foreground">
                Rentabilize seus investimentos em apostas esportivas com
                estratégias inteligentes e gestão profissional.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Termos de Serviço
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>suporte@investbet.com</li>
                <li>+55 (11) 9999-9999</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground text-center mb-4">
              © 2025 InvestBet Capital. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground text-center">
              A InvestBet Capital atua exclusivamente no segmento de apostas
              esportivas, caracterizado como entretenimento. Não realizamos
              captação de recursos, administração de investimentos ou qualquer
              atividade financeira. A participação implica risco de perda
              financeira, e os resultados dependem de variáveis esportivas e
              probabilísticas.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
