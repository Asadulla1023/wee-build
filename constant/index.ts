import IAdvantages from "@/interfaces/IAdvantages";
import ICard from "@/interfaces/ICard";
import IModal from "@/interfaces/IModal";

export const STYLE_OBJ = [
  {
    image: "/images/repair1.png",
    title: "Стандарт",
  },
  {
    image: "/images/repair2.png",
    title: "Неоклассика",
  },
  {
    image: "/images/repair3.png",
    title: "Классика",
  },
  {
    image: "/images/repair4.png",
    title: "Под дизайн",
  },
];


export const CARD_OBJECT_DESIGN: ICard[] = [
  {
    images: [
      "/images/Minimalizm/Zal/1.jpg",
      "/images/Minimalizm/Zal/2.jpg",
      "/images/Minimalizm/Zal/3.jpg",
      "/images/Minimalizm/Zal/4.jpg",
      "/images/Minimalizm/Zal/5.jpg",
      "/images/Minimalizm/Zal/6.jpg",
      "/images/Minimalizm/Zal/7.jpg",
      "/images/Minimalizm/Zal/8.jpg",
      "/images/Minimalizm/Zal/9.jpg",
      "/images/Minimalizm/Zal/10.jpg",
      "/images/Minimalizm/Zal/1.jpg",
    ],
    process: "Законченный проект",
    props: [
      {
        image: "icons/global.svg",
        title: "1000m2",
      },
      {
        image: "icons/watch.svg",
        title: "2 мес.",
      },
      {
        image: "icons/kom.svg",
        title: "2 ком.",
      },
      {
        image: "icons/payme.svg",
        title: "1400$",
      },
    ],
    title: "зал",
  },
  {
    images: [
      "/images/Minimalizm/Sanuzel/1.jpg",
      "/images/Minimalizm/Sanuzel/2.jpg",
      "/images/Minimalizm/Sanuzel/3.jpg",
      "/images/Minimalizm/Sanuzel/4.jpg",
      "/images/Minimalizm/Sanuzel/5.jpg",
      "/images/Minimalizm/Sanuzel/6.jpg",
    ],
    process: "На рассмотрении",
    props: [
      {
        image: "icons/global.svg",
        title: "1000m2",
      },
      {
        image: "icons/watch.svg",
        title: "2 мес.",
      },
      {
        image: "icons/kom.svg",
        title: "2 ком.",
      },
      {
        image: "icons/payme.svg",
        title: "1400$",
      },
    ],
    title: "Санузел",
  },
  {
    images: [
      "/images/Minimalizm/Kolidor/1.jpg",
      "/images/Minimalizm/Kolidor/2.jpg",
      "/images/Minimalizm/Kolidor/3.jpg",
      "/images/Minimalizm/Kolidor/4.jpg",
      "/images/Minimalizm/Kolidor/5.jpg",
      "/images/Minimalizm/Kolidor/6.jpg",
      "/images/Minimalizm/Kolidor/7.jpg",
      "/images/Minimalizm/Kolidor/55.jpg",
      "/images/Minimalizm/Kolidor/66.jpg",
      "/images/Minimalizm/Kolidor/77.jpg",
    ],
    process: "На рассмотрении",
    props: [
      {
        image: "icons/global.svg",
        title: "1000m2",
      },
      {
        image: "icons/watch.svg",
        title: "2 мес.",
      },
      {
        image: "icons/kom.svg",
        title: "2 ком.",
      },
      {
        image: "icons/payme.svg",
        title: "1400$",
      },
    ],
    title: "колидор",
  },
  {
    images: [
      "/images/Minimalizm/Spalnya/1.jpg",
      "/images/Minimalizm/Spalnya/2.jpg",
      "/images/Minimalizm/Spalnya/3.jpg",
      "/images/Minimalizm/Spalnya/4.jpg",
      "/images/Minimalizm/Spalnya/5.jpg",
      "/images/Minimalizm/Spalnya/6.jpg",
      "/images/Minimalizm/Spalnya/7.jpg",
    ],
    process: "Законченный проект",
    props: [
      {
        image: "icons/global.svg",
        title: "1000m2",
      },
      {
        image: "icons/watch.svg",
        title: "2 мес.",
      },
      {
        image: "icons/kom.svg",
        title: "2 ком.",
      },
      {
        image: "icons/payme.svg",
        title: "1400$",
      },
    ],
    title: "Спальня",
  },

  {
    images: [
      "/images/NeoCasik/Detiski/1.jpg",
      "/images/NeoCasik/Detiski/2.jpg",
      "/images/NeoCasik/Detiski/3.jpg",
      "/images/NeoCasik/Detiski/4.jpg",
      "/images/NeoCasik/Detiski/5.jpg",
      "/images/NeoCasik/Detiski/6.jpg",
    ],
    process: "На рассмотрении",
    props: [
      {
        image: "icons/global.svg",
        title: "1000m2",
      },
      {
        image: "icons/watch.svg",
        title: "2 мес.",
      },
      {
        image: "icons/kom.svg",
        title: "2 ком.",
      },
      {
        image: "icons/payme.svg",
        title: "1400$",
      },
    ],
    title: "дедский",
  },
  {
    images: [
      "/images/NeoCasik/Holl/1.jpg",
      "/images/NeoCasik/Holl/2.jpg",
      "/images/NeoCasik/Holl/3.jpg",
      "/images/NeoCasik/Holl/4.jpg",
      "/images/NeoCasik/Holl/5.jpg",
      "/images/NeoCasik/Holl/6.jpg",
      "/images/NeoCasik/Holl/7.jpg",
      "/images/NeoCasik/Holl/8.jpg",
      "/images/NeoCasik/Holl/9.jpg",
    ],
    process: "Законченный проект",
    props: [
      {
        image: "icons/global.svg",
        title: "1000m2",
      },
      {
        image: "icons/watch.svg",
        title: "2 мес.",
      },
      {
        image: "icons/kom.svg",
        title: "2 ком.",
      },
      {
        image: "icons/payme.svg",
        title: "1400$",
      },
    ],
    title: "холл",
  },
  {
    images: [
      "/images/NeoCasik/Holl/10.jpg",
      "/images/NeoCasik/Holl/11.jpg",
      "/images/NeoCasik/Holl/12.jpg",
      "/images/NeoCasik/Holl/13.jpg",
      "/images/NeoCasik/Holl/14.jpg",
      "/images/NeoCasik/Holl/15.jpg",
      "/images/NeoCasik/Holl/16.jpg",
      "/images/NeoCasik/Holl/17.jpg",
      "/images/NeoCasik/Holl/18.jpg",
      "/images/NeoCasik/Holl/19.jpg",
    ],
    process: "Законченный проект",
    props: [
      {
        image: "icons/global.svg",
        title: "1000m2",
      },
      {
        image: "icons/watch.svg",
        title: "2 мес.",
      },
      {
        image: "icons/kom.svg",
        title: "2 ком.",
      },
      {
        image: "icons/payme.svg",
        title: "1400$",
      },
    ],
    title: "холл",
  },
  {
    images: [
      "/images/NeoCasik/Kabinet/1.jpg",
      "/images/NeoCasik/Kabinet/2.jpg",
      "/images/NeoCasik/Kabinet/3.jpg",
      "/images/NeoCasik/Kabinet/4.jpg",
      "/images/NeoCasik/Kabinet/5.jpg",
      "/images/NeoCasik/Kabinet/6.jpg",
    ],
    process: "Законченный проект",
    props: [
      {
        image: "icons/global.svg",
        title: "1000m2",
      },
      {
        image: "icons/watch.svg",
        title: "2 мес.",
      },
      {
        image: "icons/kom.svg",
        title: "2 ком.",
      },
      {
        image: "icons/payme.svg",
        title: "1400$",
      },
    ],
    title: "кабинет",
  },
  {
    images: [
      "/images/NeoCasik/Kuxnya/1.jpg",
      "/images/NeoCasik/Kuxnya/2.jpg",
      "/images/NeoCasik/Kuxnya/3.jpg",
      "/images/NeoCasik/Kuxnya/4.jpg",
      "/images/NeoCasik/Kuxnya/5.jpg",
      "/images/NeoCasik/Kuxnya/6.jpg",
    ],
    process: "Законченный проект",
    props: [
      {
        image: "icons/global.svg",
        title: "1000m2",
      },
      {
        image: "icons/watch.svg",
        title: "2 мес.",
      },
      {
        image: "icons/kom.svg",
        title: "2 ком.",
      },
      {
        image: "icons/payme.svg",
        title: "1400$",
      },
    ],
    title: "кухния",
  },
  {
    images: [
      "/images/NeoCasik/Spalnya/1.jpg",
      "/images/NeoCasik/Spalnya/2.jpg",
      "/images/NeoCasik/Spalnya/3.jpg",
      "/images/NeoCasik/Spalnya/4.jpg",
      "/images/NeoCasik/Spalnya/5.jpg",
      "/images/NeoCasik/Spalnya/6.jpg",
      "/images/NeoCasik/Spalnya/7.jpg",
      "/images/NeoCasik/Spalnya/8.jpg",
    ],
    process: "Законченный проект",
    props: [
      {
        image: "icons/global.svg",
        title: "1000m2",
      },
      {
        image: "icons/watch.svg",
        title: "2 мес.",
      },
      {
        image: "icons/kom.svg",
        title: "2 ком.",
      },
      {
        image: "icons/payme.svg",
        title: "1400$",
      },
    ],
    title: "спальня",
  },
];

export const ADVANTAGES: IAdvantages[] = [
  {
    title: "Более 20 специалистов в команде.",
    desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта заказчику в готовом виде. ",
    image: "/images/workers.png",
  },
  {
    title: "Работаем строго по договору.",
    desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта заказчику в готовом виде. ",
    image: "/images/sign.png",
  },
  {
    title: "Гарантия на проделанные работы от 1-3 лет.",
    desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта",
    image: "",
  },
  {
    title: "Выполнение в срок.",
    desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта",
    image: "",
  },
  {
    title: "Бригада профессиональных мастеров.",
    desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта",
    image: "",
  },
  {
    title: "Прозрачность.",
    desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта",
    image: "",
  },
  {
    title: "Предварительный расчет стоимости.",
    desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта",
    image: "",
  },
];

export const NAV = [
  {
    title: "О компании",
    url: "#company",
  },
  {
    title: "Преимущества",
    url: "#advantages",
  },
  {
    title: "Расчет стоимости",
    url: "#cost",
  },
  {
    title: "Дизайн",
    url: "#design",
  },
  {
    title: "С нами сотрудничают",
    url: "#coop",
  },
  {
    title: "FAQ",
    url: "#faq",
  },
  {
    title: "Контакты",
    url: "#contact",
  },
];

export const CARD_PRICE = [
  {
    image: "/images/cardprice0.png",
    title: "Бронза 157$/м²",
    desc: "- Покупка материалов, Выравнивание потолка, стен, Шпаклевание, Отделка стен, потолка, Напольное покрытие, Установка сантехники, Установка розеток/выключателей, Установка карнизов, плинтусов, Уборка мусора, клининг",
    price: 157
  },
  {
    image: "/images/cardprice1.png",
    title: "Серебро 217$/м²",
    desc: "- Все работы включенные в стандарт, Материалы более высокого качества, Выравнивание стен по маякам, Демонтажные работы бесплатно",
    price: 217
  },
  {
    image: "/images/cardprice2.png",
    title: "Золото от 257$/м²",
    desc: "- Все работы включенные в премиум, Дизайн бесплатно, Дополнительные пожелания заказчика",
    price: 257
  }
]

export const LOGO = [
  {
    image: "/images/flugger.png",
  },
  {
    image: "/images/namunaLogo.png",
  },
  {
    image: "/images/boschLogo.png",
  },
  {
    image: "/images/knaufLogo.png",
  },
  {
    image: "/images/dmLogo.webp",
  },
  {
    image: "/images/vLogo.png",
  },
];

export const MODAL = [
  {
    ques: "Что такое ремонт под ключ?",
    answ: "Ремонт под ключ - это полный комплекс работ, который включает в себя все этапы ремонта помещения, начиная от демонтажа старых материалов и заканчивая установкой мебели и бытовой техники.",
  },
  {
    ques: "Как долго длится ремонт под ключ?",
    answ: "Сроки ремонта зависят от масштаба работ и состояния помещения. Обычно, ремонт под ключ занимает от нескольких недель до нескольких месяцев.",
  },
  {
    ques: "Нужно ли мне самому закупать материалы для ремонта под ключ?",
    answ: "Вы можете закупать материалы самостоятельно, но мы также можем предоставить услугу закупки необходимых материалов.",
  },
  {
    ques: "Какие материалы используются при ремонте под ключ? ",
    answ: "Мы используем только качественные материалы, которые соответствуют требованиям и стандартам. Мы работаем с надежными поставщиками, чтобы гарантировать качество материалов.",
  },
  {
    ques: "Какие гарантии вы предоставляете на ремонт под ключ? ",
    answ: "Мы предоставляем гарантию на все выполненные работы в течение 1-3 год после завершения ремонта. Этот период может варьироваться в зависимости от типа работ.",
  },
  {
    ques: "Каковы условия оплаты за ремонт под ключ?",
    answ: "Мы обсуждаем условия оплаты с каждым клиентом индивидуально. Мы можем предложить различные варианты оплаты, включая оплату поэтапно.",
  },
  {
    ques: "Будет ли мусор убран после ремонта?",
    answ: "Да, мы уберем весь мусор после завершения работ.",
  },
];
