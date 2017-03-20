import { localeModule, test } from '../qunit';
import moment from '../../moment';
localeModule('en-gb');

test('parse', function(assert) {
  var tests = 'Нэгдүгээр-сар 1-сар_Хоёрдугаар 2-сар_Гуравдугаар 3-сар_Дөрөвдүгээр 4-сар_Тавдугаар 5-сар_Зургаадугаар 6-сар_Долоодугаар 7-сар_Наймдугаар 8-сар_Есдүгээр 9-сар_Аравдугаар 10-сар_Арван Нэгдүгээр 11-сар_Арван-Хоёрдугаар-сар 12-сар'.split('_'),
    i;

  function equalTest(input, mmm, i) {
    assert.equal(moment(input, mmm).month(), i, input + ' сар байх ёстой ' + (i + 1));
  }
  for (i = 0; i < 12; i++) {
    tests[i] = tests[i].split(' ');
    equalTest(tests[i][0], 'MMM', i);
    equalTest(tests[i][1], 'MMM', i);
    equalTest(tests[i][0], 'MMMM', i);
    equalTest(tests[i][1], 'MMMM', i);
    equalTest(tests[i][0].toLocaleLowerCase(), 'MMMM', i);
    equalTest(tests[i][1].toLocaleLowerCase(), 'MMMM', i);
    equalTest(tests[i][0].toLocaleUpperCase(), 'MMMM', i);
    equalTest(tests[i][1].toLocaleUpperCase(), 'MMMM', i);
  }
});

test('format', function(assert) {
  var a = [
      ['dddd, MMMM Do YYYY, h:mm:ss a', 'Ням гариг, Хоёрдугаар-сар 14нд 2010, 3:25:50 pm'],
      ['ddd, hA', 'Ням, 3PM'],
      ['M Mo MM MMMM MMM', '2 2нд 02 Хоёрдугаар-сар 2-сар'],
      ['YYYY YY', '2010 10'],
      ['D Do DD', '14 14нд 14'],
      ['d do dddd ddd dd', '0 0нд Ням гариг Ням Ня'],
      ['DDD DDDo DDDD', '45 45нд 045'],
      ['w wo ww', '6 6нд 06'],
      ['h hh', '3 03'],
      ['H HH', '15 15'],
      ['m mm', '25 25'],
      ['s ss', '50 50'],
      ['a A', 'pm PM'],
      ['[the] DDDo [day of the year]', 'жилийн 45 дахь өдөр'],
      ['LTS', '15:25:50'],
      ['L', '14/02/2010'],
      ['LL', '14 Хоёрдугаар-сар 2010'],
      ['LLL', '14 Хоёрдугаар-сар 2010 15:25'],
      ['LLLL', 'Ням гариг, 14 Хоёрдугаар сар 2010 15:25'],
      ['l', '14/2/2010'],
      ['ll', '14 2-сар 2010'],
      ['lll', '14 2-сар 2010 15:25'],
      ['llll', 'Ням, 14 2-сар 2010 15:25']
    ],
    b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
    i;
  for (i = 0; i < a.length; i++) {
    assert.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
  }
});

test('format ordinal', function(assert) {
  assert.equal(moment([2011, 0, 1]).format('DDDo'), '1нд', '1нд');
  assert.equal(moment([2011, 0, 2]).format('DDDo'), '2нд', '2нд');
  assert.equal(moment([2011, 0, 3]).format('DDDo'), '3нд', '3нд');
  assert.equal(moment([2011, 0, 4]).format('DDDo'), '4нд', '4нд');
  assert.equal(moment([2011, 0, 5]).format('DDDo'), '5нд', '5нд');
  assert.equal(moment([2011, 0, 6]).format('DDDo'), '6нд', '6нд');
  assert.equal(moment([2011, 0, 7]).format('DDDo'), '7нд', '7нд');
  assert.equal(moment([2011, 0, 8]).format('DDDo'), '8нд', '8нд');
  assert.equal(moment([2011, 0, 9]).format('DDDo'), '9нд', '9нд');
  assert.equal(moment([2011, 0, 10]).format('DDDo'), '10нд', '10нд');

  assert.equal(moment([2011, 0, 11]).format('DDDo'), '11нд', '11нд');
  assert.equal(moment([2011, 0, 12]).format('DDDo'), '12нд', '12нд');
  assert.equal(moment([2011, 0, 13]).format('DDDo'), '13нд', '13нд');
  assert.equal(moment([2011, 0, 14]).format('DDDo'), '14нд', '14нд');
  assert.equal(moment([2011, 0, 15]).format('DDDo'), '15нд', '15нд');
  assert.equal(moment([2011, 0, 16]).format('DDDo'), '16нд', '16нд');
  assert.equal(moment([2011, 0, 17]).format('DDDo'), '17нд', '17нд');
  assert.equal(moment([2011, 0, 18]).format('DDDo'), '18нд', '18нд');
  assert.equal(moment([2011, 0, 19]).format('DDDo'), '19нд', '19нд');
  assert.equal(moment([2011, 0, 20]).format('DDDo'), '20нд', '20нд');

  assert.equal(moment([2011, 0, 21]).format('DDDo'), '21нд', '21нд');
  assert.equal(moment([2011, 0, 22]).format('DDDo'), '22нд', '22нд');
  assert.equal(moment([2011, 0, 23]).format('DDDo'), '23нд', '23нд');
  assert.equal(moment([2011, 0, 24]).format('DDDo'), '24нд', '24нд');
  assert.equal(moment([2011, 0, 25]).format('DDDo'), '25нд', '25нд');
  assert.equal(moment([2011, 0, 26]).format('DDDo'), '26нд', '26нд');
  assert.equal(moment([2011, 0, 27]).format('DDDo'), '27нд', '27нд');
  assert.equal(moment([2011, 0, 28]).format('DDDo'), '28нд', '28нд');
  assert.equal(moment([2011, 0, 29]).format('DDDo'), '29нд', '29нд');
  assert.equal(moment([2011, 0, 30]).format('DDDo'), '30нд', '30нд');

  assert.equal(moment([2011, 0, 31]).format('DDDo'), '31нд', '31нд');
});

test('format month', function(assert) {
  var expected = 'Нэгдүгээр-сар 1-сар_Хоёрдугаар 2-сар_Гуравдугаар 3-сар_Дөрөвдүгээр 4-сар_Тавдугаар 5-сар_Зургаадугаар 6-сар_Долоодугаар 7-сар_Наймдугаар 8-сар_Есдүгээр 9-сар_Аравдугаар 10-сар_Арван Нэгдүгээр 11-сар_Арван-Хоёрдугаар-сар 12-сар'.split('_'),
    i;
  for (i = 0; i < expected.length; i++) {
    assert.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
  }
});

test('format week', function(assert) {
  var expected = 'Ням Ням Ня_Даваа Дав Да_Мягмар Мяг Мя_Лхагва Лха Лх_Пүрэв Пүр Пү_Баасан Баа Ба_Бямба Бям Бя'.split('_'),
    i;
  for (i = 0; i < expected.length; i++) {
    assert.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
  }
});

test('from', function(assert) {
  var start = moment([2007, 1, 28]);
  assert.equal(start.from(moment([2007, 1, 28]).add({ s: 44 }), true), 'хэдэн хором', '44 секунд = хэдэн хором');
  assert.equal(start.from(moment([2007, 1, 28]).add({ s: 45 }), true), '1 минут', '45 секунд = 1 минут');
  assert.equal(start.from(moment([2007, 1, 28]).add({ s: 89 }), true), '1 минут', '89 секунд = 1 минут');
  assert.equal(start.from(moment([2007, 1, 28]).add({ s: 90 }), true), '2 минут', '90 seconds = 2 минут');
  assert.equal(start.from(moment([2007, 1, 28]).add({ m: 44 }), true), '44 минут', '44 минут = 44 минут');
  assert.equal(start.from(moment([2007, 1, 28]).add({ m: 45 }), true), '1 цаг', '45 минут = 1 цаг');
  assert.equal(start.from(moment([2007, 1, 28]).add({ m: 89 }), true), '1 цаг', '89 минут = 1 цаг');
  assert.equal(start.from(moment([2007, 1, 28]).add({ m: 90 }), true), '2 цаг', '90 минут = 2 цаг');
  assert.equal(start.from(moment([2007, 1, 28]).add({ h: 5 }), true), '5 цаг', '5 цаг = 5 цаг');
  assert.equal(start.from(moment([2007, 1, 28]).add({ h: 21 }), true), '21 цаг', '21 цаг = 21 цаг');
  assert.equal(start.from(moment([2007, 1, 28]).add({ h: 22 }), true), '1 өдөр', '22 цаг = 1 өдөр');
  assert.equal(start.from(moment([2007, 1, 28]).add({ h: 35 }), true), '1 хоног', '35 цаг = 1 хоног');
  assert.equal(start.from(moment([2007, 1, 28]).add({ h: 36 }), true), '2 өдөр', '36 цаг = 2 өдөр');
  assert.equal(start.from(moment([2007, 1, 28]).add({ d: 1 }), true), 'өдөр', '1 өдөр = өдөр');
  assert.equal(start.from(moment([2007, 1, 28]).add({ d: 5 }), true), '5 өдөр', '5 өдөр = 5 өдөр');
  assert.equal(start.from(moment([2007, 1, 28]).add({ d: 25 }), true), '25 өдөр', '25 өдөр = 25 өдөр');
  assert.equal(start.from(moment([2007, 1, 28]).add({ d: 26 }), true), '1 сар', '26 өдөр = 1 сар');
  assert.equal(start.from(moment([2007, 1, 28]).add({ d: 30 }), true), '1 сар', '30 өдөр = 1 сар');
  assert.equal(start.from(moment([2007, 1, 28]).add({ d: 43 }), true), 'a сар', '43 өдөр = a сар');
  assert.equal(start.from(moment([2007, 1, 28]).add({ d: 46 }), true), '2 сар', '46 өдөр = 2 сар');
  assert.equal(start.from(moment([2007, 1, 28]).add({ d: 74 }), true), '2 сар', '75 өдөр = 2 сар');
  assert.equal(start.from(moment([2007, 1, 28]).add({ d: 76 }), true), '3 сар', '76 өдөр = 3 сар');
  assert.equal(start.from(moment([2007, 1, 28]).add({ M: 1 }), true), 'a сар', '1 сар = a сар');
  assert.equal(start.from(moment([2007, 1, 28]).add({ M: 5 }), true), '5 сар', '5 сар = 5 сар');
  assert.equal(start.from(moment([2007, 1, 28]).add({ d: 345 }), true), 'a жил', '345 өдөр = a жил');
  assert.equal(start.from(moment([2007, 1, 28]).add({ d: 548 }), true), '2 жил', '548 өдөр = 2 жил');
  assert.equal(start.from(moment([2007, 1, 28]).add({ y: 1 }), true), 'a жил', '1 жил = a жил');
  assert.equal(start.from(moment([2007, 1, 28]).add({ y: 5 }), true), '5 жил', '5 жил = 5 жил');
});

test('suffix', function(assert) {
  assert.equal(moment(30000).from(0), 'хэдэн хормын дотор', 'prefix');
  assert.equal(moment(0).from(30000), 'хэдэн хормын өмнө', 'suffix');
});

test('now from now', function(assert) {
  assert.equal(moment().fromNow(), 'хэдэн хормын өмнө', 'одоогын одоо нь өнгөрсөн цаг дээр хэвлэгдэнэ');
});

test('fromNow', function(assert) {
  assert.equal(moment().add({ s: 30 }).fromNow(), 'хэдэн хормын дотор', 'хэдэн хормын дотор');
  assert.equal(moment().add({ d: 5 }).fromNow(), '5 өдөрт', '5 өдөрт');
});

test('calendar day', function(assert) {
  var a = moment().hours(12).minutes(0).seconds(0);

  assert.equal(moment(a).calendar(), 'Өнөөдөр 12 цагт', 'Өнөөдөр ижил цагт');
  assert.equal(moment(a).add({ m: 25 }).calendar(), 'Өнөөдөр 12:25 цагт', 'одоогоос 25мин дараа');
  assert.equal(moment(a).add({ h: 1 }).calendar(), 'Өнөөдөр 13:00 цагт', 'одоогоос 1 цагын дараа');
  assert.equal(moment(a).add({ d: 1 }).calendar(), 'Маргааш 12:00', 'маргааш ижил цагт');
  assert.equal(moment(a).subtract({ h: 1 }).calendar(), 'Өнөөдөр 11:00 цагт', 'одоогоос 1 цагын өмнө');
  assert.equal(moment(a).subtract({ d: 1 }).calendar(), 'Өчигдөр 12:00', 'өчигдөр ижил цагт');
});

test('calendar next week', function(assert) {
  var i, m;
  for (i = 2; i < 7; i++) {
    m = moment().add({ d: i });
    assert.equal(m.calendar(), m.format('dddd [at] LT'), 'Өнөөдөр + ' + i + ' days current time');
    m.hours(0).minutes(0).seconds(0).milliseconds(0);
    assert.equal(m.calendar(), m.format('dddd [at] LT'), 'Өнөөдөр + ' + i + ' days beginning of day');
    m.hours(23).minutes(59).seconds(59).milliseconds(999);
    assert.equal(m.calendar(), m.format('dddd [at] LT'), 'Өнөөдөр + ' + i + ' days end of day');
  }
});

test('calendar last week', function(assert) {
  var i, m;

  for (i = 2; i < 7; i++) {
    m = moment().subtract({ d: i });
    assert.equal(m.calendar(), m.format('[Last] dddd [at] LT'), 'Өнөөдөр - ' + i + ' яг одоо цаг');
    m.hours(0).minutes(0).seconds(0).milliseconds(0);
    assert.equal(m.calendar(), m.format('[Last] dddd [at] LT'), 'Өнөөдөр - ' + i + ' өдөр эхлэх цаг');
    m.hours(23).minutes(59).seconds(59).milliseconds(999);
    assert.equal(m.calendar(), m.format('[Last] dddd [at] LT'), 'Өнөөдөр - ' + i + ' өдөр дуусах цаг');
  }
});

test('calendar all else', function(assert) {
  var weeksAgo = moment().subtract({ w: 1 }),
    weeksFromNow = moment().add({ w: 1 });

  assert.equal(weeksAgo.calendar(), weeksAgo.format('L'), '1 долоо хоногын өмнө');
  assert.equal(weeksFromNow.calendar(), weeksFromNow.format('L'), '1 долоо хоногт');

  weeksAgo = moment().subtract({ w: 2 });
  weeksFromNow = moment().add({ w: 2 });

  assert.equal(weeksAgo.calendar(), weeksAgo.format('L'), '2 долоо хоногын өмнө');
  assert.equal(weeksFromNow.calendar(), weeksFromNow.format('L'), '2 долоо хоногт');
});

test('weeks year starting sunday formatted', function(assert) {
  assert.equal(moment([2012, 0, 1]).format('w ww wo'), '52 52 52nd', '1-сар  1 2012 52дахь долоо хоног');
  assert.equal(moment([2012, 0, 2]).format('w ww wo'), '1 01 1st', '1-сар  2 2012 эхний долоо хоног');
  assert.equal(moment([2012, 0, 8]).format('w ww wo'), '1 01 1st', '1-сар  8 2012 эхний долоо хоног');
  assert.equal(moment([2012, 0, 9]).format('w ww wo'), '2 02 2nd', '1-сар  9 2012 2дахь долоо хоног');
  assert.equal(moment([2012, 0, 15]).format('w ww wo'), '2 02 2nd', '1-сар 15 2012 2дахь долоо хоног');
});