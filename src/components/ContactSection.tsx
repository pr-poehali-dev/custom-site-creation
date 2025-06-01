import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contactMethods = [
    {
      title: "Telegram",
      value: "@poehali_dev",
      icon: "MessageCircle",
      link: "https://t.me/+QgiLIa1gFRY4Y2Iy",
      description: "Быстрая связь и обсуждение проектов",
    },
    {
      title: "Email",
      value: "dev@poehali.dev",
      icon: "Mail",
      link: "mailto:dev@poehali.dev",
      description: "Для официальных предложений",
    },
    {
      title: "GitHub",
      value: "github.com/poehali",
      icon: "Github",
      link: "https://github.com",
      description: "Мои проекты и код",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Связаться со мной
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готов обсудить ваш проект и помочь воплотить идеи в жизнь. Выберите
            удобный способ связи.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method) => (
            <Card
              key={method.title}
              className="group hover:shadow-xl transition-all duration-300 border-purple-200 hover:border-purple-400 bg-white/70 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors">
                  <Icon
                    name={method.icon as any}
                    size={24}
                    className="text-purple-600"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-purple-700 font-medium">{method.value}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-purple-300 text-purple-700 hover:bg-purple-50"
                  onClick={() => window.open(method.link, "_blank")}
                >
                  Связаться
                  <Icon name="ExternalLink" size={14} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Block */}
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 border-none">
          <CardContent className="text-center py-12 px-8">
            <Icon name="Rocket" size={48} className="text-white mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Готовы запустить проект? 🚀
            </h3>
            <p className="text-purple-100 mb-6 text-lg">
              Присоединяйтесь к нашему сообществу разработчиков и будьте в курсе
              всех обновлений
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3"
              onClick={() =>
                window.open("https://t.me/+QgiLIa1gFRY4Y2Iy", "_blank")
              }
            >
              <Icon name="Users" size={20} />
              Присоединиться к сообществу
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
