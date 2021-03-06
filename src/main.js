/**
 * txtgen
 * @ndaidong
**/

((name, factory) => {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    let root = window || {};
    if (root.define && root.define.amd) {
      root.define([], factory);
    } else if (root.exports) {
      root.exports = factory();
    } else {
      root[name] = factory();
    }
  }
})('txtgen', () => { // eslint-disable-line no-invalid-this

  /* eslint-disable */
  var nouns = [ 'alligator', 'ant', 'bear', 'bee', 'bird', 'camel', 'cat', 'cheetah', 'chicken', 'chimpanzee', 'cow', 'crocodile', 'deer', 'dog', 'dolphin', 'duck', 'eagle', 'elephant', 'fish', 'fly', 'fox', 'frog', 'giraffe', 'goat', 'goldfish', 'hamster', 'hippopotamus', 'horse', 'kangaroo', 'kitten', 'lion', 'lobster', 'monkey', 'octopus', 'owl', 'panda', 'pig', 'puppy', 'rabbit', 'rat', 'scorpion', 'seal', 'shark', 'sheep', 'snail', 'snake', 'spider', 'squirrel', 'tiger', 'turtle', 'wolf', 'zebra', 'apple', 'apricot', 'banana', 'blackberry', 'blueberry', 'cherry', 'cranberry', 'currant', 'fig', 'grape', 'grapefruit', 'grapes', 'kiwi', 'kumquat', 'lemon', 'lime', 'melon', 'nectarine', 'orange', 'peach', 'pear', 'persimmon', 'pineapple', 'plum', 'pomegranate', 'prune', 'raspberry', 'strawberry', 'tangerine', 'watermelon' ];
  var adjectives = [ 'adaptable', 'adventurous', 'affable', 'affectionate', 'agreeable', 'alert', 'alluring', 'ambitious', 'ambitious', 'amiable', 'amicable', 'amused', 'amusing', 'boundless', 'brave', 'brave', 'bright', 'bright', 'broad-minded', 'calm', 'calm', 'capable', 'careful', 'charming', 'charming', 'cheerful', 'coherent', 'comfortable', 'communicative', 'compassionate', 'confident', 'conscientious', 'considerate', 'convivial', 'cooperative', 'courageous', 'courageous', 'courteous', 'creative', 'credible', 'cultured', 'dashing', 'dazzling', 'debonair', 'decisive', 'decisive', 'decorous', 'delightful', 'detailed', 'determined', 'determined', 'diligent', 'diligent', 'diplomatic', 'discreet', 'discreet', 'dynamic', 'dynamic', 'eager', 'easygoing', 'efficient', 'elated', 'eminent', 'emotional', 'enchanting', 'encouraging', 'endurable', 'energetic', 'energetic', 'entertaining', 'enthusiastic', 'enthusiastic', 'excellent', 'excited', 'exclusive', 'exuberant', 'exuberant', 'fabulous', 'fair', 'fair-minded', 'faithful', 'faithful', 'fantastic', 'fearless', 'fearless', 'fine', 'forceful', 'frank', 'frank', 'friendly', 'friendly', 'funny', 'funny', 'generous', 'generous', 'gentle', 'gentle', 'glorious', 'good', 'good', 'gregarious', 'happy', 'hard-working', 'harmonious', 'helpful', 'helpful', 'hilarious', 'honest', 'honorable', 'humorous', 'imaginative', 'impartial', 'impartial', 'independent', 'industrious', 'instinctive', 'intellectual', 'intelligent', 'intuitive', 'inventive', 'jolly', 'joyous', 'kind', 'kind', 'kind-hearted', 'knowledgeable', 'level', 'likeable', 'lively', 'lovely', 'loving', 'loving', 'loyal', 'lucky', 'mature', 'modern', 'modest', 'neat', 'nice', 'nice', 'obedient', 'optimistic', 'painstaking', 'passionate', 'patient', 'peaceful', 'perfect', 'persistent', 'philosophical', 'pioneering', 'placid', 'placid', 'plausible', 'pleasant', 'plucky', 'plucky', 'polite', 'powerful', 'practical', 'pro-active', 'productive', 'protective', 'proud', 'punctual', 'quick-witted', 'quiet', 'quiet', 'rational', 'receptive', 'reflective', 'reliable', 'relieved', 'reserved', 'resolute', 'resourceful', 'responsible', 'rhetorical', 'righteous', 'romantic', 'romantic', 'sedate', 'seemly', 'selective', 'self-assured', 'self-confident', 'self-disciplined', 'sensible', 'sensitive', 'sensitive', 'shrewd', 'shy', 'silly', 'sincere', 'sincere', 'skillful', 'smiling', 'sociable', 'splendid', 'steadfast', 'stimulating', 'straightforward', 'successful', 'succinct', 'sympathetic', 'talented', 'thoughtful', 'thoughtful', 'thrifty', 'tidy', 'tough', 'tough', 'trustworthy', 'unassuming', 'unbiased', 'understanding', 'unusual', 'upbeat', 'versatile', 'vigorous', 'vivacious', 'warm', 'warmhearted', 'willing', 'willing', 'wise', 'witty', 'witty', 'wonderful' ];

  var vowels = [
    'a', 'e', 'i', 'o', 'u', 'y'
  ];

  var sentenceTemplates = [
    'the {{noun}} is {{a_noun}}',
    '{{a_noun}} is {{an_adjective}} {{noun}}',
    'the first {{adjective}} {{noun}} is, in its own way, {{a_noun}}',
    'their {{noun}} was, in this moment, {{an_adjective}} {{noun}}',
    '{{a_noun}} is {{a_noun}} from the right perspective',
    'the literature would have us believe that {{an_adjective}} {{noun}} is not but {{a_noun}}',
    '{{an_adjective}} {{noun}} is {{a_noun}} of the mind',
    'the {{adjective}} {{noun}} reveals itself as {{an_adjective}} {{noun}} to those who look',
    'authors often misinterpret the {{noun}} as {{an_adjective}} {{noun}}, when in actuality it feels more like {{an_adjective}} {{noun}}',
    'we can assume that any instance of {{a_noun}} can be construed as {{an_adjective}} {{noun}}',
    'they were lost without the {{adjective}} {{noun}} that composed their {{noun}}',
    'the {{adjective}} {{noun}} comes from {{an_adjective}} {{noun}}',
    '{{a_noun}} can hardly be considered {{an_adjective}} {{noun}} without also being {{a_noun}}',
    'few can name {{an_adjective}} {{noun}} that isn\'t {{an_adjective}} {{noun}}',
    'some posit the {{adjective}} {{noun}} to be less than {{adjective}}',
    '{{a_noun}} of the {{noun}} is assumed to be {{an_adjective}} {{noun}}',
    '{{a_noun}} sees {{a_noun}} as {{an_adjective}} {{noun}}',
    'the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}',
    '{{a_noun}} is {{a_noun}}\'s {{noun}}',
    '{{a_noun}} is the {{noun}} of {{a_noun}}',
    '{{an_adjective}} {{noun}}\'s {{noun}} comes with it the thought that the {{adjective}} {{noun}} is {{a_noun}}',
    '{{nouns}} are {{adjective}} {{nouns}}',
    '{{adjective}} {{nouns}} show us how {{nouns}} can be {{nouns}}',
    'before {{nouns}}, {{nouns}} were only {{nouns}}',
    'those {{nouns}} are nothing more than {{nouns}}',
    'some {{adjective}} {{nouns}} are thought of simply as {{nouns}}',
    'one cannot separate {{nouns}} from {{adjective}} {{nouns}}',
    'the {{nouns}} could be said to resemble {{adjective}} {{nouns}}',
    '{{an_adjective}} {{noun}} without {{nouns}} is truly a {{noun}} of {{adjective}} {{nouns}}'
  ];

  var phrases = [
    'to be more specific, ',
    'in recent years, ',
    'however, ',
    'by the way',
    'of course, ',
    'some assert that ',
    'if this was somewhat unclear, ',
    'unfortunately, that is wrong; on the contrary, ',
    'it\'s very tricky, if not impossible, ',
    'this could be, or perhaps ',
    'this is not to discredit the idea that ',
    'we know that ',
    'it\'s an undeniable fact, really; ',
    'framed in a different way, ',
    'what we don\'t know for sure is whether or not ',
    'as far as we can estimate, ',
    'as far as he is concerned, ',
    'the zeitgeist contends that ',
    'though we assume the latter, ',
    'far from the truth, ',
    'extending this logic, ',
    'nowhere is it disputed that ',
    'in modern times ',
    'in ancient times ',
    'recent controversy aside, ',
    'washing and polishing the car,',
    'having been a gymnast, ',
    'after a long day at school and work, ',
    'waking to the buzz of the alarm clock, ',
    'draped neatly on a hanger, ',
    'shouting with happiness, '
  ];
  /* eslint-enable */

  var unique = (a) => {
    let r = [];
    for (let i = 0; i < a.length; i++) {
      if (r.indexOf(a[i]) === -1) {
        r.push(a[i]);
      }
    }
    return r;
  };

  var addNouns = (ls = []) => {
    let a = nouns.concat(ls);
    nouns = unique(a);
    return nouns.length;
  };

  var addAdjectives = (ls) => {
    let a = adjectives.concat(ls);
    adjectives = unique(a);
    return adjectives.length;
  };

  var addTemplates = (ls) => {
    let a = sentenceTemplates.concat(ls);
    sentenceTemplates = unique(a);
    return sentenceTemplates.length;
  };

  var random = (min, max) => {
    let offset = min;
    let range = max - min + 1;
    let rd = Math.floor(Math.random() * range) + offset;
    return rd;
  };

  var rand = (a) => {
    let w;
    while (!w) {
      w = a[random(0, a.length - 1)];
    }
    return w;
  };

  var pickLastPunc = () => {
    let a = '.......!?!?;...'.split('');
    return rand(a);
  };

  var pluralize = (word) => {
    if (word.endsWith('s')) {
      return word;
    }
    if (word.match(/(ss|ish|ch|x|us)$/)) {
      word += 'e';
    } else if (word.endsWith('y') && !vowels.includes(word.charAt(word.length - 2))) {
      word = word.slice(0, word.length - 1);
      word += 'ie';
    }
    return word + 's';
  };

  var normalize = (word) => {
    let a = 'a';
    if (word.match(/^(a|e|i|o)/)) {
      a = 'an';
    }
    return `${a} ${word}`;
  };

  var actions = [
    'noun', 'a_noun', 'nouns',
    'adjective', 'an_adjective'
  ];

  var generator = {
    noun: () => {
      return rand(nouns);
    },
    a_noun: () => { // eslint-disable-line camelcase
      return normalize(rand(nouns));
    },
    nouns: () => {
      return pluralize(rand(nouns));
    },
    adjective: () => {
      return rand(adjectives);
    },
    an_adjective: () => { // eslint-disable-line camelcase
      return normalize(rand(adjectives));
    }
  };

  var trim = (s) => {
    let x = s.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
    return x.replace(/\r?\n|\r/g, ' ').replace(/\s\s+|\r/g, ' ');
  };

  var make = (template) => {
    let sentence = template;
    let occurrences = template.match(/\{\{(.+?)\}\}/g);

    if (occurrences && occurrences.length) {
      for (let i = 0; i < occurrences.length; i++) {
        let action = trim(occurrences[i].replace('{{', '').replace('}}', ''));
        let result;
        if (actions.includes(action)) {
          result = generator[action]();
        }
        sentence = sentence.replace(occurrences[i], result);
      }
    }
    return sentence;
  };

  var randomStartingPhrase = () => {
    if (Math.random() < 0.33) {
      return rand(phrases);
    }
    return '';
  };

  var makeSentenceFromTemplate = () => {
    return make(rand(sentenceTemplates));
  };

  var makeSentence = () => {
    let phrase = randomStartingPhrase();
    let s = phrase + makeSentenceFromTemplate();
    s = s.charAt(0).toUpperCase() + s.slice(1);
    s += pickLastPunc();
    return s;
  };

  var makeParagraph = (len = 0) => {
    if (!len) {
      len = random(3, 10);
    }
    let t = Math.min(len, 15);
    let a = [];
    while (a.length < t) {
      let s = makeSentence();
      a.push(s);
    }
    return a.join(' ');
  };

  var makeArticle = (len = 0) => {
    if (!len) {
      len = random(3, 10);
    }
    let t = Math.min(len, 15);
    let a = [];
    while (a.length < t) {
      let s = makeParagraph();
      a.push(s);
    }
    return a.join('\n\n');
  };

  return {
    sentence: makeSentence,
    paragraph: makeParagraph,
    article: makeArticle,
    addNouns,
    addAdjectives,
    addTemplates
  };
});
