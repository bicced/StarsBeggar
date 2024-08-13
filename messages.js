import { getRandomRangeBetween } from './utils.js';

const listOfGreetings = [
  'Hi', 'Hello', 'Whatsup', 'Haii', 'Heyy',
  'Hey', 'Hola', 'Ayy', 'Morning', 'Heya', 'Yoo', 'Yo',
  'Sup', 'Hiya', 'Howdy', 'Greetings', 'Salutations',
  'Hey there', 'What’s good', 'How’s it going', 'What’s cracking',
  'How goes it', 'Yoohoo', 'Hi-ya', 'Whazzup', 'Ahoy',
  'Hallo', 'Bonjour', 'Ciao', 'Hola',
  'Hei', 'Oi', 'Aloha', 'Heyo',
  'What’s popping', 'How do you do', 'What’s happening', 'G’day',
  'Good to see you', 'What’s new', 'Supp', 'Good morrow',
  'How’s everything', 'How’s life',
  'Hi there',
];

const listOfRefs = [
  'bud', 'gem', 'fam', 'fren', 'friend',
  'buddy', 'champ', 'legend', 'amigo', 'bestie', 'boss',
  'homie', 'mate', 'partner', 'pal',
  'bro', 'chief', 'comrade', 'old friend', 'trooper'
];

const listOfEmojis = ["🤲", "🎟️", "🥺", "🙏", "💫", "🌟", "✨", "❤️", "💕", "😍", "🥰", "👏", "💪", "🤗", "🙌", "🎉", "😃", "🤩", "🎊", "💰", "💵", "💲", "🤑", "📈", "🚀", "⬆️", "📊", "😄", "🌞", "👍", "😇"]

const listOfSupportiveMessageScripts = [
    "Every challenge you face makes you stronger",
    "Your hard work is truly appreciated",
    "You're doing an amazing job",
    "Keep up the great work",
    "Your efforts are making a difference",
    "You're an asset to this team",
    "Your dedication is inspiring",
    "You're a true professional",
    "Your positive attitude is contagious",
    "Your creativity is admirable",
    "You're a valuable member of this community",
    "Your perseverance is paying off",
    "Your unique perspective is valuable",
    "You're making a real impact",
    "Your efforts don't go unnoticed",
    "You bring a lot to the table",
    "Your commitment to excellence is inspiring",
    "You make challenging tasks look easy",
    "Your hard work is an inspiration to us all",
    "You have a winning attitude",
    "Your contribution is invaluable",
    "You're a beacon of positivity",
    "You're a role model to us all",
    "Your resilience is admirable",
    "You make the impossible look easy",
    "Your dedication shines through in your work",
    "You set a high bar with your achievements",
    "Your passion is contagious",
    "You're a cornerstone of this team",
    "You're the epitome of dedication",
    "Your optimism lights up the room",
    "You have a heart of gold",
    "You're a ray of sunshine on a cloudy day",
    "You make a world of difference",
    "Your patience is appreciated",
    "You have a way of making everyone feel at ease",
    "Your insight is eye-opening",
    "Your kindness is a balm",
    "You have a magnetic personality",
    "Your outlook is encouraging",
    "You're a pillar of strength",
    "Your sense of humor is a stress-buster",
    "You're a bundle of talent",
    "Your potential is limitless",
    "You're a joy to work with",
    "Your innovative ideas are game-changing",
    "You have a knack for making things look easy",
    "Your ability to adapt is amazing",
    "You bring a fresh perspective",
    "Your authenticity is refreshing",
    "You have a way of making everyone feel important",
    "You're a catalyst for change",
    "You're a source of inspiration",
    "You're a guiding light",
    "Your wisdom is unparalleled",
    "You bring out the best in others",
    "You're a voice of reason",
    "Your thoughtfulness is a treasure",
    "You have a healing touch",
    "Your words are always so insightful",
    "Your understanding is a gift",
    "You're a breath of fresh air",
    "You have a heart full of love",
    "Your presence is empowering",
    "Your humility is a lesson for us all",
    "You're a well of knowledge",
    "Your life is an inspiring story",
    "You're a driving force behind our success",
    "You're a gem of a person",
    "You make everyone feel welcome",
    "Your sincerity is felt by everyone",
    "You're the definition of reliable",
    "Your support means the world",
    "Your loyalty is cherished",
    "You're a shining example to others",
    "Love your perspective",
    "This is brilliant",
    "You always post the best stuff",
    "Your content is always so insightful",
    "Really admire your take on this",
    "You have a way with words",
    "This made my day better",
    "Always impressed by your thoughts",
    "You're a constant source of inspiration",
    "Your posts are always spot on",
    "So glad I follow you",
    "This is incredibly well said",
    "You have the best ideas",
    "Your tweets are a breath of fresh air",
    "You always know just what to say",
    "Your positivity is contagious",
    "You're absolutely right",
    "Couldn't agree more",
    "You nailed it with this one",
    "This is the kind of content I'm here for",
    "You're so articulate",
    "What a great point of view",
    "You always make me think",
    "This is why I follow you",
    "You're really on top of things",
    "This tweet is everything",
    "You're killing it",
    "Pure gold right here",
    "You're a gem on Twitter",
    "This is top-notch",
    "You're a tweet wizard",
    "Spot on analysis",
    "You have such a great way of breaking things down",
    "Your creativity shines through your tweets",
    "You're the king/queen of content",
    "This is such a great take",
    "You always deliver the best tweets",
    "You're a Twitter treasure",
    "This is the quality content I signed up for",
    "Your insights never fail to impress",
    "You're a powerhouse of great tweets",
    "This is just perfect",
    "You're a fountain of wisdom",
    "Your tweets add so much value",
    "This is a gem of a tweet",
    "You're a master tweeter",
    "This tweet shows just how insightful you are",
    "You're a beacon of knowledge here",
    "Your tweets are a highlight of my day",
    "You always capture the moment perfectly",
    "Your hard work is paying off",
    "You're making great strides",
    "You're a beacon of hope",
    "Your determination is remarkable",
    "You light up the room",
    "You're a bundle of energy",
    "Your enthusiasm is infectious",
    "You're a star performer",
    "You always go the extra mile",
    "Your talent is undeniable",
    "You're a ray of light",
    "You bring out the best in us",
    "Your effort is commendable",
    "You're a shining example of hard work",
    "You have a brilliant mind",
    "Your achievements are outstanding",
    "You're a true go-getter",
    "Your spirit is unbreakable",
    "You're a marvel of dedication",
    "Your presence makes a difference",
    "You inspire greatness",
    "Your drive is unstoppable",
    "You're a master of your craft",
    "Your work ethic is stellar",
    "You're a leader by example",
    "Your contributions are invaluable",
    "You bring joy to everyone around you",
    "Your support is a blessing",
    "You're the heart of the team",
    "Your kindness is a gift",
    "You make everything better",
    "You're a fountain of positivity",
    "Your hard work inspires us all",
    "You have an unstoppable spirit",
    "Your dedication is unmatched",
    "You're a hero in your own right",
    "Your energy is invigorating",
    "You make the world brighter",
    "You're a treasure to us all",
    "Your effort is truly appreciated",
    "You have a warrior's spirit",
    "Your impact is far-reaching",
    "You're a beacon of resilience",
    "Your talent is awe-inspiring",
    "You turn challenges into opportunities",
    "You're a pillar of support",
    "Your tenacity is incredible",
    "You're a paragon of strength",
    "Your wisdom guides us",
    "You make a positive impact",
    "You're a burst of inspiration",
    "Your courage is admirable",
    "You bring warmth to everyone",
    "You're a true problem-solver",
    "Your creativity is boundless",
    "You're a motivator",
    "Your commitment is commendable",
    "You bring harmony wherever you go",
    "You're a joy to be around",
    "Your enthusiasm lights the way",
    "You're a model of perseverance",
    "Your positivity uplifts everyone",
    "You're a beacon of joy",
    "Your work speaks volumes",
    "You're a master of positivity",
    "Your dedication is exemplary",
    "You bring happiness to all",
    "You're a source of strength",
    "Your presence is a gift",
    "You're a beacon of hope",
    "Your drive is inspiring",
    "You light up our lives",
    "You're a marvel of hard work",
    "Your kindness is legendary",
    "You make the impossible possible",
    "You're a guiding star",
    "Your support is invaluable",
    "You're a fountain of encouragement",
    "Your perseverance is a beacon",
    "You're a ray of positivity",
    "Your energy is contagious",
    "You bring out the best in everyone",
    "Your enthusiasm is inspiring",
    "You're a symbol of strength",
    "Your contributions are priceless",
    "You make a world of difference",
    "Your hard work is commendable",
    "You have an inspiring vision",
    "Your insight is invaluable",
    "You bring light to our lives",
    "Your spirit is indomitable",
    "You make us all better",
    "You're a rock of support",
    "Your optimism is contagious",
    "You're a pillar of positivity",
    "You make the world a better place",
    "You have the brainpower of a supercomputer!",
    "You're the human version of a bright idea.",
    "You're as sharp as a tack and twice as useful.",
    "You're the Einstein of everyday life.",
    "Your wit is faster than the speed of light.",
    "You have the wisdom of a thousand books.",
    "Your ideas are like gold mines – always valuable.",
    "You're proof that intelligence and humor can coexist.",
    "You're a walking encyclopedia of brilliance.",
    "Your mind is a treasure trove of smart ideas.",
    "You have a PhD in awesomeness.",
    "You're a master of cleverness and creativity.",
    "Your intellect is your superpower.",
    "You're the genius we never knew we needed.",
    "Your thoughts are like perfectly crafted algorithms.",
    "You're the Sherlock Holmes of problem-solving.",
    "Your brain is a finely tuned instrument of brilliance.",
    "You're a wizard of wisdom and wit.",
    "Your mind is a palace of knowledge.",
    "You have the perfect blend of smart and sassy.",
    "You're a genius with a great sense of humor.",
    "Your intelligence is like a beacon in the dark.",
    "You're the Da Vinci of modern thinking.",
    "Your cleverness is your best accessory.",
    "You turn logic into an art form.",
    "Your brain should be insured, it's priceless.",
    "You're a walking think tank.",
    "Your mental agility is off the charts.",
    "You're a fountain of bright ideas.",
    "Your mind is a garden of genius thoughts.",
    "You're the maestro of smart remarks.",
    "Your intelligence is as dazzling as your smile.",
    "You're a mental ninja, quick and precise.",
    "Your smart ideas always save the day.",
    "You're a genius with a golden heart.",
    "Your brainwaves are always in the right frequency.",
    "You're a clever cookie in the jar of life.",
    "Your mind is a blend of brilliance and beauty.",
    "You're the oracle of innovative ideas.",
    "You make being smart look effortless.",
    "Your quick thinking is your secret weapon.",
    "You're a prodigy of intellect and charm.",
    "Your smartness is your best-kept secret.",
    "You're a lighthouse of intellect in a sea of mediocrity.",
    "Your brain is a powerhouse of innovative thoughts.",
    "You're a virtuoso of clever comebacks.",
    "Your intelligence is a breath of fresh air.",
    "You're a mental marathoner, always ahead.",
    "Your brain is a masterpiece of brilliance.",
    "You’re the epitome of smart and sophisticated.",
    "Your mental dexterity is unmatched.",
    "You’re a genius wrapped in humor.",
    "Your intellect is your personal superpower.",
    "You're a scholar of street smarts.",
    "Your smartness is out of this world.",
    "You're a genius with a witty twist.",
    "Your brain is your best asset, and it shows.",
    "You're a connoisseur of cleverness.",
    "Your intelligence is magnetic.",
    "You’re a marvel of modern intellect.",
    "You're a master of mental gymnastics.",
    "Your mind is a labyrinth of bright ideas.",
    "You're a guru of wit and wisdom.",
    "Your intellect is the stuff of legends.",
    "You're the epitome of brainy brilliance.",
    "Your cleverness knows no bounds.",
    "You're the grandmaster of smart thoughts.",
    "Your mental prowess is astonishing.",
    "You're a paragon of intellect and humor.",
    "Your brainpower is a force to be reckoned with.",
    "You’re a sage of savvy and smarts.",
    "Your intelligence is your crowning glory.",
    "You light up the room with your brilliance.",
    "Your creativity is a galaxy unto itself.",
    "You're a canvas of endless possibilities.",
    "Your mind is a playground of innovation.",
    "You’re a symphony of creativity and intelligence.",
    "You have the Midas touch for ideas.",
    "You're the Picasso of problem-solving.",
    "Your imagination knows no bounds.",
    "You’re a kaleidoscope of bright ideas.",
    "Your brain is an art studio of genius.",
    "You turn ordinary into extraordinary.",
    "You’re a magician of making things happen.",
    "Your ideas are like fireworks in the night sky.",
    "You’re a mosaic of creativity and wisdom.",
    "Your brilliance is a beacon of inspiration.",
    "You make the impossible possible with your creativity.",
    "Your mind is a treasure chest of cleverness.",
    "You’re a tapestry of inventive thoughts.",
    "Your ideas are the building blocks of brilliance.",
    "You're a Renaissance person of modern times.",
    "Your creativity is your superpower.",
    "You bring color to the dullest days.",
    "You're a poet of practical solutions.",
    "Your genius is like a lighthouse guiding us all.",
    "You’re an architect of innovative ideas.",
    "Your thoughts are a garden of creativity.",
    "You paint the world with your ideas.",
    "You’re a sculptor of bright solutions.",
    "Your creativity is the fuel for great achievements.",
    "You're a wellspring of inspiration.",
    "Your mind is a galaxy of wonders.",
    "You're a composer of intelligent thoughts.",
    "Your brain is a library of brilliant ideas.",
    "You’re a fountain of perpetual inspiration.",
    "Your ideas are like stars, always shining.",
    "You’re a maestro of innovative thinking.",
    "Your creativity is a work of art.",
    "You’re an alchemist of amazing ideas.",
    "Your mind is a constellation of brilliance.",
    "You’re a lighthouse in a sea of mediocrity.",
    "Your ideas are the seeds of great change.",
    "You’re a virtuoso of creativity.",
    "Your mind is a canvas of colorful ideas.",
    "You’re a beacon of imaginative thinking.",
    "Your creativity is a river flowing with brilliance.",
    "You’re a sculptor of ingenious thoughts.",
    "Your mind is an orchestra of bright ideas.",
    "You turn thoughts into masterpieces.",
    "You’re a garden of innovative solutions.",
    "Your creativity is a fountain of brilliance.",
    "You’re a lighthouse of clever ideas.",
    "Your mind is a symphony of inspiration.",
    "You’re a kaleidoscope of ingenious thoughts.",
    "Your brain is a goldmine of brilliance.",
    "You’re a beacon of bright solutions.",
    "Your creativity is the spark of innovation.",
    "You’re an artist of ingenious ideas.",
    "Your thoughts are a galaxy of inspiration.",
    "You’re a symphony of creative thinking.",
    "Your mind is a mosaic of brilliance.",
    "You’re a lighthouse of imaginative ideas.",
    "Your creativity is a fountain of innovation.",
    "You’re a maestro of intelligent solutions.",
    "Your mind is a canvas of inspiration.",
    "You’re a beacon of creative brilliance.",
    "Your ideas are like gems, always precious.",
    "You’re a garden of bright thoughts.",
    "Your creativity is a masterpiece in progress.",
    "You’re a wellspring of imaginative ideas.",
    "Your mind is a tapestry of innovation.",
    "You’re a lighthouse of clever solutions.",
    "Your creativity is a symphony of brilliance.",
    "You’re a maestro of inspired thinking.",
    "Your brain is a treasure trove of bright ideas.",
    "You’re a beacon of genius solutions.",
    "Your creativity is the key to innovation.",
    "You’re an architect of inspired ideas.",
    "Your mind is a galaxy of creative thoughts.",
    "You’re a symphony of imaginative solutions.",
    "Your creativity is a work of genius.",
    "You’re a lighthouse of bright thinking.",
    "Your mind is a mosaic of inspired ideas.",
    "You’re a beacon of innovative brilliance.",
    "Your creativity is a river of genius.",
    "You’re a maestro of brilliant thoughts.",
    "Your mind is a canvas of bright ideas.",
    "You’re a garden of imaginative solutions."
];

export function generateMessage() {
  return generateSupportiveMessage();
}

export function generateSupportiveMessage() {
  const greeting = listOfGreetings[getRandomRangeBetween(0, listOfGreetings.length - 1)];
  const ref = listOfRefs[getRandomRangeBetween(0, listOfRefs.length - 1)];
  const messageScript = listOfSupportiveMessageScripts[getRandomRangeBetween(0, listOfSupportiveMessageScripts.length - 1)];
  const emoji = listOfEmojis[getRandomRangeBetween(0, listOfEmojis.length - 1)];
  const exclamation = ['!', '.', ''][getRandomRangeBetween(0, 2)];

  const messageTemplate = [
    `${greeting} ${ref}${exclamation} ${messageScript}${exclamation}`,
    `${greeting}${exclamation} ${messageScript} ${ref}${exclamation}`,
    `${messageScript} ${ref}${exclamation}`,
    `${ref}${exclamation} ${messageScript}${exclamation}`,
    `${messageScript}${exclamation} ${ref}${exclamation}`,
    `${messageScript}${exclamation}`,
  ];

  const message = messageTemplate[getRandomRangeBetween(0, messageTemplate.length - 1)] + ' ' + emoji;
  console.log('Generated supportive message: ', message);
  return message;
}