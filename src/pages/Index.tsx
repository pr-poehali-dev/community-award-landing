import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

export default function Index() {
  const documents = [
    {
      id: 'regulations',
      title: 'Положение о премии',
      description: 'Основные правила и принципы проведения премии сообществ',
      items: [
        'Общие положения о премии',
        'Цели и задачи премирования',
        'Критерии оценки сообществ',
        'Номинации и категории'
      ]
    },
    {
      id: 'application',
      title: 'Документы для участия',
      description: 'Необходимые материалы для подачи заявки',
      items: [
        'Анкета сообщества',
        'Презентация проекта',
        'Отчет о деятельности',
        'Рекомендательные письма'
      ]
    },
    {
      id: 'timeline',
      title: 'Временные рамки',
      description: 'График проведения премии и ключевые даты',
      items: [
        'Прием заявок: 1 марта - 30 апреля',
        'Экспертная оценка: 1-15 мая',
        'Публичное голосование: 16-31 мая',
        'Церемония награждения: 15 июня'
      ]
    }
  ]

  const contacts = [
    {
      type: 'Электронная почта',
      value: 'info@премиясообществ.рф',
      icon: 'Mail'
    },
    {
      type: 'Телефон',
      value: '+7 (495) 123-45-67',
      icon: 'Phone'
    },
    {
      type: 'Телеграм',
      value: '@премия_сообществ',
      icon: 'MessageCircle'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-slate-50 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iIzJmNmRmNCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHN2Zz4K')] opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img 
                  src="/img/d90e71bd-8bf6-4f27-89ac-fe1784c77585.jpg" 
                  alt="Премия сообществ" 
                  className="h-32 w-32 rounded-2xl shadow-xl ring-1 ring-primary/10 transition-transform hover:scale-105"
                />
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-primary text-white shadow-lg animate-pulse">
                    2024
                  </Badge>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Премия
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> сообществ</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Ежегодная премия, признающая выдающиеся достижения российских сообществ 
              в области технологий, образования и социального развития
            </p>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                О премии
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Узнайте больше о целях, принципах и процедуре проведения премии
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
                      <Icon name="Target" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">Наша миссия</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Поддержка и развитие активных сообществ, способствующих 
                    инновационному развитию России и укреплению гражданского общества
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">Для кого</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Технологические сообщества, образовательные инициативы, 
                    социальные проекты и некоммерческие организации всех регионов
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Категории премии
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Выберите категорию, соответствующую вашему проекту
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Code" className="text-blue-500" size={24} />
                  Технологии и инновации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Сообщества в сфере IT, разработки ПО, искусственного интеллекта и цифровых технологий.
                </p>
                <div className="space-y-1 text-sm text-gray-500">
                  <div>• Open Source проекты</div>
                  <div>• IT-сообщества</div>
                  <div>• Стартап-инкубаторы</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" className="text-green-500" size={24} />
                  Образование и наука
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Образовательные инициативы, научные сообщества и проекты популяризации знаний.
                </p>
                <div className="space-y-1 text-sm text-gray-500">
                  <div>• Образовательные платформы</div>
                  <div>• Научные клубы</div>
                  <div>• Курсы и тренинги</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Heart" className="text-purple-500" size={24} />
                  Социальные инициативы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Проекты, направленные на решение социальных проблем и помощь нуждающимся.
                </p>
                <div className="space-y-1 text-sm text-gray-500">
                  <div>• Благотворительность</div>
                  <div>• Волонтерские движения</div>
                  <div>• Экологические проекты</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Palette" className="text-orange-500" size={24} />
                  Культура и искусство
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Творческие объединения, культурные проекты и инициативы в области искусства.
                </p>
                <div className="space-y-1 text-sm text-gray-500">
                  <div>• Арт-сообщества</div>
                  <div>• Культурные фестивали</div>
                  <div>• Творческие мастерские</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" className="text-red-500" size={24} />
                  Молодежные сообщества
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Инициативы, созданные и развиваемые молодыми людьми для молодежи.
                </p>
                <div className="space-y-1 text-sm text-gray-500">
                  <div>• Студенческие объединения</div>
                  <div>• Молодежные центры</div>
                  <div>• Спортивные клубы</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Building" className="text-teal-500" size={24} />
                  Региональное развитие
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Проекты, способствующие развитию регионов и местных сообществ.
                </p>
                <div className="space-y-1 text-sm text-gray-500">
                  <div>• Местные инициативы</div>
                  <div>• Туристические проекты</div>
                  <div>• Предпринимательство</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Документы и материалы
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Вся необходимая информация для участия в премии
            </p>
          </div>
          
          <Card className="shadow-xl border-0">
            <CardContent className="p-0">
              <Accordion type="multiple" className="w-full">
                {documents.map((doc, index) => (
                  <AccordionItem key={doc.id} value={doc.id} className="border-b border-gray-100 last:border-b-0">
                    <AccordionTrigger className="px-6 py-6 hover:bg-slate-50/50 transition-colors [&[data-state=open]]:bg-primary/5">
                      <div className="flex items-center gap-4 text-left">
                        <div className="rounded-lg bg-primary/10 p-2 shrink-0">
                          <Icon 
                            name={index === 0 ? 'FileText' : index === 1 ? 'FolderOpen' : 'Clock'} 
                            className="text-primary" 
                            size={20} 
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{doc.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{doc.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="ml-12 space-y-3">
                        {doc.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                            <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors"></div>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors flex-1">{item}</span>
                            <Badge variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity">
                              {index === 0 ? 'PDF' : index === 1 ? 'DOCX' : 'Календарь'}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Criteria Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Критерии оценки
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              По каким параметрам оцениваются проекты
            </p>
          </div>
          
          <Accordion type="multiple" className="w-full space-y-4">
            <AccordionItem value="impact" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Icon name="TrendingUp" className="text-green-500" size={24} />
                  <span className="text-xl font-semibold">Социальное влияние (25 баллов)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">
                    Оценка влияния проекта на общество и количества людей, которым он принес пользу.
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2 text-green-900">Что оценивается:</h4>
                      <ul className="space-y-1 text-sm text-green-800">
                        <li>• Количество благополучателей</li>
                        <li>• Качественные изменения в жизни людей</li>
                        <li>• Решение важных социальных проблем</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2 text-blue-900">Документы:</h4>
                      <ul className="space-y-1 text-sm text-blue-800">
                        <li>• Отчеты о деятельности</li>
                        <li>• Статистика и метрики</li>
                        <li>• Отзывы благополучателей</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="innovation" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Icon name="Lightbulb" className="text-yellow-500" size={24} />
                  <span className="text-xl font-semibold">Инновационность (20 баллов)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">
                    Новизна подходов, использование современных технологий и уникальность решений.
                  </p>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <Icon name="Zap" className="text-yellow-600 mx-auto mb-2" size={32} />
                      <h4 className="font-medium text-yellow-900">Технологии</h4>
                      <p className="text-sm text-yellow-800 mt-1">Использование передовых технологий</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <Icon name="Puzzle" className="text-purple-600 mx-auto mb-2" size={32} />
                      <h4 className="font-medium text-purple-900">Подходы</h4>
                      <p className="text-sm text-purple-800 mt-1">Новые методы решения задач</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                      <Icon name="Sparkles" className="text-indigo-600 mx-auto mb-2" size={32} />
                      <h4 className="font-medium text-indigo-900">Уникальность</h4>
                      <p className="text-sm text-indigo-800 mt-1">Оригинальность идеи</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sustainability" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" className="text-blue-500" size={24} />
                  <span className="text-xl font-semibold">Устойчивость (20 баллов)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    Стабильность работы проекта, финансовая устойчивость и планы долгосрочного развития.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium mb-2 text-blue-900">Финансовая модель:</h4>
                      <ul className="space-y-1 text-sm text-blue-800">
                        <li>• Источники финансирования</li>
                        <li>• Планы по привлечению средств</li>
                        <li>• Прозрачность отчетности</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-blue-900">Организационная стабильность:</h4>
                      <ul className="space-y-1 text-sm text-blue-800">
                        <li>• Команда и управление</li>
                        <li>• Партнерские отношения</li>
                        <li>• Репутация в сообществе</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="scalability" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Icon name="ArrowUpRight" className="text-orange-500" size={24} />
                  <span className="text-xl font-semibold">Масштабируемость (20 баллов)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">
                    Потенциал распространения опыта на другие регионы и сферы деятельности.
                  </p>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium mb-3 text-orange-900 flex items-center gap-2">
                          <Icon name="Globe" size={16} />
                          Географическое масштабирование
                        </h4>
                        <ul className="space-y-1 text-sm text-orange-800">
                          <li>• Возможность работы в разных регионах</li>
                          <li>• Адаптация к местным условиям</li>
                          <li>• Создание филиалов и отделений</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-red-900 flex items-center gap-2">
                          <Icon name="Network" size={16} />
                          Тематическое масштабирование
                        </h4>
                        <ul className="space-y-1 text-sm text-red-800">
                          <li>• Применение в смежных областях</li>
                          <li>• Развитие новых направлений</li>
                          <li>• Создание экосистемы проектов</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="community" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Icon name="Users" className="text-purple-500" size={24} />
                  <span className="text-xl font-semibold">Развитие сообщества (15 баллов)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    Активность участников, вовлеченность, создание устойчивого сообщества вокруг проекта.
                  </p>
                  <div className="space-y-4">
                    <div className="grid gap-3 md:grid-cols-3">
                      <div className="text-center">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <Icon name="UserPlus" className="text-purple-600 mx-auto mb-2" size={28} />
                          <h4 className="font-medium text-purple-900">Рост участников</h4>
                          <p className="text-sm text-purple-700 mt-1">Увеличение аудитории</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <Icon name="MessageSquare" className="text-purple-600 mx-auto mb-2" size={28} />
                          <h4 className="font-medium text-purple-900">Активность</h4>
                          <p className="text-sm text-purple-700 mt-1">Участие в обсуждениях</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <Icon name="HandHeart" className="text-purple-600 mx-auto mb-2" size={28} />
                          <h4 className="font-medium text-purple-900">Вовлеченность</h4>
                          <p className="text-sm text-purple-700 mt-1">Глубина участия</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Контактная информация
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Свяжитесь с нами для получения дополнительной информации
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {contacts.map((contact, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={contact.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{contact.type}</h3>
                  <p className="text-primary font-medium">{contact.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="inline-block">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                  <span>•</span>
                  <Icon name="Clock" size={16} />
                  <span>Пн-Пт 9:00-18:00</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Премия сообществ 2024</h3>
          <p className="text-gray-400 mb-6">
            Поддерживаем инициативы, меняющие мир к лучшему
          </p>
          <div className="flex justify-center gap-6">
            {['Telegram', 'Github', 'Twitter'].map((social) => (
              <Button key={social} variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Icon name={social as any} size={20} />
              </Button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}