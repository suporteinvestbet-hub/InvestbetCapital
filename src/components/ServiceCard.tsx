import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  buttonText: string;
  buttonAction: () => void;
  highlighted?: boolean;
}

export default function ServiceCard({
  icon,
  title,
  description,
  benefits,
  buttonText,
  buttonAction,
  highlighted = false,
}: ServiceCardProps) {
  return (
    <Card
      className={`p-6 flex flex-col h-full transition-all duration-300 ${
        highlighted
          ? "border-2 border-accent shadow-lg shadow-accent/20 bg-accent/5"
          : "border-2 border-border hover:border-accent/50"
      }`}
    >
      {/* Ícone */}
      <div className="text-4xl mb-4">{icon}</div>

      {/* Título */}
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>

      {/* Descrição */}
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>

      {/* Benefícios */}
      <div className="space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
            <span className="text-sm text-foreground">{benefit}</span>
          </div>
        ))}
      </div>

      {/* Botão */}
      <Button
        onClick={buttonAction}
        className={`w-full font-semibold py-2 rounded-lg transition-colors ${
          highlighted
            ? "bg-accent hover:bg-accent/90 text-accent-foreground"
            : "bg-primary hover:bg-primary/90 text-primary-foreground"
        }`}
      >
        {buttonText}
      </Button>
    </Card>
  );
}
