import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

interface SimulationResult {
  initialValue: number;
  monthlyContribution: number;
  monthlyReturn: number;
  months: number;
  finalValue: number;
  totalContributed: number;
  totalGains: number;
  gainPercentage: number;
}

export default function InvestmentSimulator() {
  const [initialValue, setInitialValue] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(1000);
  const [monthlyReturn, setMonthlyReturn] = useState<number>(5);
  const [timeUnit, setTimeUnit] = useState<"months" | "years">("months");
  const [period, setPeriod] = useState<number>(12);
  const [showResults, setShowResults] = useState<boolean>(false);

  const result = useMemo(() => {
    const months = timeUnit === "months" ? period : period * 12;
    let balance = initialValue;
    let totalContributed = initialValue;

    for (let i = 0; i < months; i++) {
      balance += monthlyContribution;
      totalContributed += monthlyContribution;
      balance = balance * (1 + monthlyReturn / 100);
    }

    const totalGains = balance - totalContributed;
    const gainPercentage = ((totalGains / totalContributed) * 100).toFixed(2);

    return {
      initialValue,
      monthlyContribution,
      monthlyReturn,
      months,
      finalValue: balance,
      totalContributed,
      totalGains,
      gainPercentage: parseFloat(gainPercentage),
    };
  }, [initialValue, monthlyContribution, monthlyReturn, timeUnit, period]);

  const handleSimulate = () => {
    setShowResults(true);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="w-full py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simule Sua Rentabilidade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcule quanto seus aportes podem render com base na rentabilidade
            média que você espera. Customize a porcentagem de rentabilidade
            mensal para diferentes cenários.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulário */}
          <Card className="p-6 border-2 border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-2xl">📊</span> Dados da Simulação
            </h3>

            <div className="space-y-6">
              {/* Valor Inicial */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Valor Inicial do Aporte
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-foreground">
                    R$
                  </span>
                  <input
                    type="text"
                    value={initialValue.toLocaleString('pt-BR')}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\./g, '').replace(',', '.');
                      setInitialValue(isNaN(Number(value)) ? 0 : Number(value));
                    }}
                    className="w-full pl-8 pr-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="10.000,00"
                  />
                </div>
              </div>

              {/* Aporte Mensal */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Aporte Mensal (Opcional)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-foreground">
                    R$
                  </span>
                  <input
                    type="text"
                    value={monthlyContribution.toLocaleString('pt-BR')}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\./g, '').replace(',', '.');
                      setMonthlyContribution(isNaN(Number(value)) ? 0 : Number(value));
                    }}
                    className="w-full pl-8 pr-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="1.000,00"
                  />
                </div>
              </div>

              {/* Rentabilidade Mensal */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Rentabilidade Mensal (%)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="2"
                    max="10"
                    step="0.5"
                    value={monthlyReturn}
                    onChange={(e) => setMonthlyReturn(Number(e.target.value))}
                    className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <input
                    type="number"
                    value={monthlyReturn}
                    onChange={(e) => setMonthlyReturn(Number(e.target.value))}
                    min="2"
                    max="10"
                    step="0.5"
                    className="w-16 px-3 py-2 border border-input rounded-lg bg-background text-foreground text-center focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <span className="text-foreground font-medium">%</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Intervalo: 2% a 10% ao mês
                </p>
              </div>

              {/* Unidade de Tempo */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Unidade de Tempo
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setTimeUnit("months")}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                      timeUnit === "months"
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    Meses
                  </button>
                  <button
                    onClick={() => setTimeUnit("years")}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                      timeUnit === "years"
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    Anos
                  </button>
                </div>
              </div>

              {/* Período */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Período ({timeUnit === "months" ? "meses" : "anos"})
                </label>
                <input
                  type="number"
                  value={period}
                  onChange={(e) => setPeriod(Number(e.target.value))}
                  min="1"
                  className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  {period} {timeUnit === "months" ? "meses" : "ano(s)"} ({result.months}{" "}
                  meses)
                </p>
              </div>

              {/* Botão Simular */}
              <Button
                onClick={handleSimulate}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-lg transition-colors"
              >
                Simular Rentabilidade
              </Button>

              {/* Aviso */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900 text-sm mb-2">
                      ⚠️ AVISO IMPORTANTE SOBRE RISCOS:
                    </h4>
                    <ul className="text-xs text-red-800 space-y-1">
                      <li>
                        • Esta simulação usa uma rentabilidade customizável (2%
                        a 10% ao mês)
                      </li>
                      <li>
                        • NÃO é uma promessa ou garantia de ganho
                      </li>
                      <li>
                        • Apostas esportivas envolvem riscos e podem gerar
                        perdas
                      </li>
                      <li>
                        • Rentabilidade passada não garante resultados futuros
                      </li>
                      <li>
                        • Resultados dependem de variáveis esportivas e
                        probabilísticas
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Resultados */}
          <Card className="p-6 border-2 border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-2xl">📈</span> Resultados da Simulação
            </h3>

            {showResults ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">
                      Valor Inicial
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {formatCurrency(result.initialValue)}
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">
                      Aporte Mensal
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {formatCurrency(result.monthlyContribution)}
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">
                      Rentabilidade Mensal
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {result.monthlyReturn}%
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Período</p>
                    <p className="text-lg font-bold text-foreground">
                      {result.months} meses
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Total Aportado:</span>
                    <span className="font-bold text-lg text-foreground">
                      {formatCurrency(result.totalContributed)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Ganhos Obtidos:</span>
                    <span className="font-bold text-lg text-accent">
                      {formatCurrency(result.totalGains)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-accent/10 p-4 rounded-lg">
                    <span className="text-foreground font-semibold">
                      Valor Final:
                    </span>
                    <span className="font-bold text-2xl text-accent">
                      {formatCurrency(result.finalValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Rentabilidade Total:</span>
                    <span className="font-bold text-lg text-accent">
                      +{result.gainPercentage}%
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="w-full"
                >
                  Ajustar Simulação
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-96 text-center">
                <div className="text-5xl mb-4">📋</div>
                <p className="text-muted-foreground">
                  Preencha os dados ao lado para ver sua simulação
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
