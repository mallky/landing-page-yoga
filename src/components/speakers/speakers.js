import './speakers.less';
import { Column } from '../../../utils/utils';
import src1 from '../../../images/anisa.jpg';
import src2 from '../../../images/olga.jpg';
import src3 from '../../../images/evgenia.jpg';

const speakers = require('./speakers.html');
const opt = {
  items: [
    {
      src: src1,
      alt: 'Аниса Гарданова.',
      description: 'Я - профессиональный сертифицированный инструктор по ЙОГЕ, благодаря этому, у меня есть возможность помогать людям укреплять свое здоровье и быть в гармонии с собой. Прошла обучение в компании WellFitness (г. Казань) по направлению: Инструктор по фитнес-йоге. Принимаю участие в тематических семинарах школы Йоги "Место Силы", г. Ижевск (https://vk.com/mestoyogaschool); Школы Йоги "Сурья" г. Казань (https://vk.com/yogasyriakazan).'
    },
    {
      src: src2,
      alt: 'Ольга Шестакова.',
      description: 'Ольга Шестакова - Сертифицированный Преподаватель Йоги (сертификат международного класса Yoga Alliance International). Личная практика: с 2014 года Опыт работы преподавателем йоги: с 2015 года. Организатор и преподаватель: йога-лагеря, ретритов/випассан на Урале Групповые и индивидуальные практики:Хатха-Йога, Парная Йога, Медитации, Пранаямы, Мантропение. «Йога для меня это не спорт и не фитнес, это образ жизни!'
    },
    {
      src: src3,
      alt: 'Евгения Денисова.',
      description: 'Для меня йога - это идеальное сочетание физической нагрузки, духовного развития и оздоровления всего организма в целом. В основе моей практики лежит йога по методу Б.К.С. Айенгара, Аштанга-виньяса йога, а также йогатерапия.Основное внимание всегда уделяю правильному положению тела в позах для эффективной и безопасной практики. Йога, позволит почувствовать Вам контроль над телом и эмоциями и сделает вас более осознанным.'
    }
  ]
};

export default class Speakers extends Column {
  init() {
    super.init(speakers, opt);
  }
};
