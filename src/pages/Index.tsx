import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const projects = [
    {
      id: 1,
      title: "Редизайн веб-платформы",
      category: "Web Design",
      description: "Современный минималистичный дизайн для SaaS продукта",
      image: "https://cdn.poehali.dev/projects/27ec8301-348f-4dd4-8c8d-2f93d1909bbc/files/b29e1324-6e23-4fbe-8eef-9c3243834b0f.jpg",
      tags: ["UI/UX", "Figma", "React"]
    },
    {
      id: 2,
      title: "Мобильное приложение",
      category: "Mobile App",
      description: "Инновационный интерфейс для финтех стартапа",
      image: "https://cdn.poehali.dev/projects/27ec8301-348f-4dd4-8c8d-2f93d1909bbc/files/0c212658-0071-4a78-a206-129ef5059191.jpg",
      tags: ["Mobile", "iOS", "Android"]
    },
    {
      id: 3,
      title: "Фирменный стиль",
      category: "Branding",
      description: "Комплексная разработка бренд-идентичности",
      image: "https://cdn.poehali.dev/projects/27ec8301-348f-4dd4-8c8d-2f93d1909bbc/files/380138a0-a204-4702-97e5-22dd8ce98836.jpg",
      tags: ["Branding", "Identity", "Print"]
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Процесс создания дизайн-системы",
      excerpt: "Как мы разработали масштабируемую систему компонентов для крупного проекта",
      date: "15 ноября 2024",
      readTime: "8 мин"
    },
    {
      id: 2,
      title: "Тренды веб-дизайна 2024",
      excerpt: "Анализ актуальных направлений в современном дизайне интерфейсов",
      date: "8 ноября 2024",
      readTime: "6 мин"
    },
    {
      id: 3,
      title: "От идеи до релиза: наш подход",
      excerpt: "Детальный разбор этапов работы над проектом от концепции до запуска",
      date: "1 ноября 2024",
      readTime: "10 мин"
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
            <div className="hidden md:flex gap-8">
              {["home", "about", "portfolio", "blog"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section ? "text-primary" : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {section === "home" && "Главная"}
                  {section === "about" && "О нас"}
                  {section === "portfolio" && "Портфолио"}
                  {section === "blog" && "Блог"}
                </button>
              ))}
            </div>
            <Button size="sm" className="hidden md:flex">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl fade-in">
            <Badge variant="secondary" className="mb-4">
              Дизайн & Разработка
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Создаём проекты,
              <br />
              <span className="text-primary">которые вдохновляют</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Мы специализируемся на разработке веб-платформ, мобильных приложений 
              и создании визуальной идентичности для современных брендов
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => scrollToSection("portfolio")}>
                Смотреть работы
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("about")}>
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <Badge variant="outline" className="mb-4">
                О нас
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Превращаем идеи в цифровой опыт
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Мы — команда дизайнеров и разработчиков, влюблённых в своё дело. 
                Наш подход основан на глубоком понимании бизнес-задач клиента 
                и создании решений, которые работают.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                За 5+ лет работы мы реализовали более 100 проектов для стартапов 
                и крупных компаний, всегда делая акцент на качество и детали.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-gray-600">Клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative fade-in">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="hover-scale">
                    <CardContent className="p-6">
                      <Icon name="Palette" className="text-primary mb-3" size={32} />
                      <h3 className="font-semibold mb-2">Дизайн</h3>
                      <p className="text-sm text-gray-600">UI/UX для веб и мобильных приложений</p>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="p-6">
                      <Icon name="Code" className="text-primary mb-3" size={32} />
                      <h3 className="font-semibold mb-2">Разработка</h3>
                      <p className="text-sm text-gray-600">Frontend и backend решения</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4 mt-8">
                  <Card className="hover-scale">
                    <CardContent className="p-6">
                      <Icon name="Sparkles" className="text-primary mb-3" size={32} />
                      <h3 className="font-semibold mb-2">Брендинг</h3>
                      <p className="text-sm text-gray-600">Создание визуальной идентичности</p>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="p-6">
                      <Icon name="Zap" className="text-primary mb-3" size={32} />
                      <h3 className="font-semibold mb-2">Стратегия</h3>
                      <p className="text-sm text-gray-600">Консалтинг и аудит проектов</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <Badge variant="outline" className="mb-4">
              Портфолио
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Избранные проекты
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Примеры наших работ, в которые мы вложили душу и мастерство
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover-scale cursor-pointer group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <Badge variant="outline" className="mb-4">
              Блог
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Делимся опытом
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Статьи о дизайне, разработке и индустрии
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="hover-scale cursor-pointer group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold text-primary">Portfolio</div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
            <div className="text-sm text-gray-600">
              © 2024 Portfolio. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
