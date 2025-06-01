import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const skills = [
    { name: "React & TypeScript", level: 95, icon: "Code2" },
    { name: "UI/UX Design", level: 88, icon: "Palette" },
    { name: "Vite & Modern Tools", level: 92, icon: "Zap" },
    { name: "Responsive Design", level: 90, icon: "Smartphone" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">О себе</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Опытный разработчик с космическим взглядом на код. Создаю
            приложения, которые не только работают, но и вдохновляют.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <Card className="p-6 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-800">
                  <Icon name="Rocket" size={28} />
                  Космический подход
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Как астронавт исследует космос, так я исследую возможности
                  современного веба. Каждый проект — это новая миссия с четкими
                  целями и безупречным исполнением.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-800">
                  <Icon name="Heart" size={28} />
                  Философия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Верю в силу простых решений и чистого кода. Создаю компоненты,
                  которые легко читать, поддерживать и масштабировать.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Навыки
            </h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon
                      name={skill.icon as any}
                      size={20}
                      className="text-purple-600"
                    />
                    <span className="font-medium text-gray-900">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-purple-600 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 200}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
