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
            
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all">
                <Icon name="Trophy" className="mr-2" size={20} />
                Подать заявку
              </Button>
              <Button variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-all">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>
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

      {/* Documents Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Документы и регламенты
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Вся необходимая информация для участия в премии
            </p>
          </div>
          
          <Card className="shadow-xl border-0">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
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
                          <div key={itemIndex} className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                            <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors"></div>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                            <Button variant="ghost" size="sm" className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                              <Icon name="Download" size={16} />
                            </Button>
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