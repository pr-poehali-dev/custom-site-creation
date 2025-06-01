import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      title: "SPA разработка",
      description:
        "Современные одностраничные приложения с React, TypeScript и Vite",
      icon: "Globe",
      features: [
        "React + TypeScript",
        "Vite сборка",
        "Responsive дизайн",
        "Высокая производительность",
      ],
    },
    {
      title: "UI компоненты",
      description:
        "Создаю переиспользуемые компоненты с Shadcn/ui и Tailwind CSS",
      icon: "Layers",
      features: [
        "Shadcn/ui",
        "Tailwind CSS",
        "Модульность",
        "Легкое сопровождение",
      ],
    },
    {
      title: "Оптимизация",
      description:
        "Улучшаю производительность и пользовательский опыт существующих проектов",
      icon: "Zap",
      features: [
        "Анализ производительности",
        "Оптимизация бандла",
        "SEO улучшения",
        "UX аудит",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Специализируюсь на создании современных веб-приложений с фокусом на
            качество и пользовательский опыт
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-purple-100 hover:border-purple-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-purple-700 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-6 border-purple-300 text-purple-700 hover:bg-purple-50 group-hover:border-purple-500"
                >
                  Подробнее
                  <Icon name="ArrowRight" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
