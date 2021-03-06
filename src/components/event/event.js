import './event.less';
import { Column } from '../../../utils/utils';
import src1 from '../../../images/anisa.jpg';

const event = require('./event.html');
const opt = {
  items: [
    {
      src: src1,
      alt: 'Аниса Гарданова',
      description: 'Профессиональный сертифицированный инструктор по йоге, основной своей задачей видит помощь людям в укреплении здоровья и умении быть в гармонии с собой. Прошла обучение в компании WellFitness (г. Казань) по направлению: Инструктор по фитнес-йоге. Анна принимает активное участие в  различных тематических семинарах школы Йоги "Место Силы", г. Ижевск, Школы Йоги "Сурья" г. Казань.'
    },
    {
      src: src1,
      alt: 'Ольга Шестакова',
      description: 'Сертифицированный Преподаватель Йоги (сертификат международного класса Yoga Alliance International).  Личная практика началась с 2014 года, а опыт работы преподавателем йоги - с 2015 года.  Ольга проводит групповые и индивидуальные практики  по Хатха-Йоге, Парной Йоге, Мантропению, является организатором йога-лагеря, ретритов/випассан на Урале. Йога для Ольги это не спорт и не фитнес, а образ жизни.'
    },
    {
      src: src1,
      alt: 'Евгения Денисова',
      description: 'Сертифицированный преподаватель по программе «Инструктор по йоге». Ее направления - это Хатха-йога, Йога-терапия позвоночника, Йога-интенсив, Женская практика. Особое внимание Евгения  всегда уделяет правильному положению тела в позах для эффективной и безопасной практики. Для нее йога - это идеальное сочетание физической нагрузки, духовного развития и оздоровления всего организма в целом.'
    },
    {
      src: src1,
      alt: 'Евгения Денисова',
      description: 'Сертифицированный преподаватель по программе «Инструктор по йоге». Ее направления - это Хатха-йога, Йога-терапия позвоночника, Йога-интенсив, Женская практика. Особое внимание Евгения  всегда уделяет правильному положению тела в позах для эффективной и безопасной практики. Для нее йога - это идеальное сочетание физической нагрузки, духовного развития и оздоровления всего организма в целом.'
    }
  ]
};

export default class Event extends Column {
  init() {
    super.init(event, opt);
  }
};
