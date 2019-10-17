// channel page: https://www.youtube.com/channel/UCqJ-Xo29CKyLTjn6z2XwYAw
// api call: https://www.googleapis.com/youtube/v3/videos?part=[PART TYPE]&id=[VIDEO ID]key=[API KEY]
// part type = snippet gets: publishedAt, channelId, title, description, thumbnails, channelTitle, tags, categoryId
// part type = contentDetails gets: duration, dimension, definition, caption, licensedContent, projection

const example_session = {
  order: 0,
  src: 'https://www.youtube.com/embed/MFCzwiqlnCE',
  length: 3603,
  title: 'An Example Session',
  description: `There's no better way to understand D&D than to see a session in action! Watch a D&D group in action as a DM leads their party through a basic roleplaying session.`,
};

const sourcing_books = {
  order: 1,
  src: 'https://www.youtube.com/embed/wizuCHNGvwc?start=0&end=878;',
  length: 878,
  title: 'Sourcing Your Books',
  description:
    'Wizards of the Coast, the publishers of D&D, have a number of resources--some free online, others available for purchase as print boosk--that you can use to help craft a campaign. Learn here a brief summary of each one so you can decide which you need for your game.',
};

const sourcing_equipment = {
  order: 2,
  src: 'https://www.youtube.com/embed/wizuCHNGvwc?start=878&end=1055;',
  length: 177,
  title: 'Sourcing Your Equipment',
  description:
    'So you have your books, but what else do you need? There are DM screens, dice, play mats, dice towers, dice trays, miniatures, map tiles, spell cards, and more, but what are all of these things and which do you actually need?',
};

const choices = {
  order: 3,
  src: 'https://www.youtube.com/embed/TEeuWEM63Uc',
  length: 4475,
  title: 'Choices, Choices...',
  description: `If you've decided that DMing is for you, you'll have to decide what kind of campaign to run before you get started. Homebrew or storebought? Battle grid or Theater of the Mind? Character-focused or combat-heavy? There's more than one way to roll the dice, and this video will walk you through the different options so you know what's best for you.`,
};

const finding_a_party = {
  order: 4,
  src: 'https://www.youtube.com/embed/xQHAPEoqdVw',
  length: 1343,
  title: 'Finding Your Party',
  description: `So you know what story you'd like to tell... now it's time to find the characters! This lesson walks through different places you can find potential players, and how to choose who will join your table.`,
};

// =============================================================

const adventure_begins = {
  slug: 'beginnings',
  title: 'The Adventure Begins! Getting Started with D&D',
  description:
    'So... what is Dungeons & Dragons, anyway? What do all these acronyms mean? Why do I have all these dice?! Learn the answers to the most basic questions here in this course.',
  image_link: './images/splash-1.jpg',
  order: 0,
  curr_lesson_num: 0,
  lessons: [
    example_session,
    sourcing_books,
    sourcing_equipment,
    choices,
    finding_a_party,
  ],
};

// =============================================================
// =============================================================

const make_rules = {
  order: 0,
  src: 'https://www.youtube.com/embed/g5lrIDoEPOw',
  length: 'PT3H9M7S',
  title: 'You Make the Rules!',
  description: `The published D&D sourcebooks have their fair share of suggested rules... but as the DM, you have the special privilege to bend those to your will! Learn in this video how to set house rules for your campaign and your world, and begin collecting these guidelines in a Player's Guide for your party.`,
  yt_chan_name: 'Nerdarchy',
  yt_chan_src: 'https://www.youtube.com/channel/UCHLzgnQu3OWn31g2PebQV5Q',
  yt_title: 'How to Use House Rules in Your D&D Campaign| Game Master Tips',
  yt_desc: 'formatted youtube description',

};

const expectations = {
  order: 1,
  src: 'https://www.youtube.com/embed/aBOH8YLUPjE',
  length: 3603,
  title: 'Setting Expectations',
  description: `If your players are expecting a lighthearted comedy romp through the meadows, but you planned a dark, sober story of political intrigue... Nobody is going to have a good time. This video talks about aligning with your players on what your campaign will be... and coming to a compromise when you don't already agree.`,
};

const etiquette = {
  order: 2,
  src: 'https://www.youtube.com/embed/_9X2Tz7QegM',
  length: 3603,
  title: 'You Make the Rules!',
  description: `D&D is all about having fun, and the best way to make sure that happens is to treat everyone around the table with respect. In this lesson, learn best practices to maintain harmony with your party members--both in and outside the game!`,
};

const char_creation = {
  order: 3,
  src: 'https://www.youtube.com/embed/d0vZFBFs4WQ',
  length: 3603,
  title: 'Character Creation',
  description: `At this point, your players should be building their characters--and you should be helping! All the data on those character sheets can be daunting, but with this video, you can get comfortable with what it all means.`,
};

// =============================================================

const countdown_session0 = {
  slug: 'session0',
  title: 'Countdown to Session 0',
  description: `Session 0 is the most important session a D&D group will ever have--it's a gathering before gameplay starts, where everyone gets aligned on their characters, their expectations, and their house rules. Prep for it with these lessons!`,
  image_link: './images/splash-2.jpg',
  order: 1,
  curr_lesson_num: 0,
  lessons: [make_rules, expectations, etiquette, char_creation],
};

// =============================================================
// =============================================================

const flavortown = {
  order: 0,
  src: 'https://www.youtube.com/embed/NjmkolUrrB4',
  length: 3603,
  title: 'Flavortown',
  description: `Settings are better when they're spruced up with smells, sights, and sounds! Learn how to describe environments and situations that your characters find themselves in with aplomb to fully immerse your players in the fantasy.`,
};

const actor_in_you = {
  order: 1,
  src: 'https://www.youtube.com/embed/MXh7-UFxXc8',
  length: 3603,
  title: 'The Actor In You',
  description: `You don't need to be Mel Blanc or Matt Mercer to play many different characters at once! Practice your improv chops and learn how to craft compelling and differentiated NPCs for your party to love... or hate.`,
};

const creatures = {
  order: 2,
  src: 'https://www.youtube.com/embed/X78D3pmHVp0',
  length: 3603,
  title: 'Lions and Tigers and Owlbears, Oh My!',
  description: `The D&D world is filled with fascinating creatures--they can be your players' enemies, allies, or even pets! Watch this video for some suggestions of creatures to incorporate into your story to scare and delight your players.`,
};

const treasure = {
  order: 3,
  src: 'https://www.youtube.com/embed/NmPZ7oLmS5s',
  length: 3603,
  title: 'Stuff Yourself',
  description: `Whether it's valuables hoarded by an evil red dragon you've just thwarted, a gift awarded by a grateful dryad, or simply the contents of a treasure chest in an abandoned dungeon room, interesting and exciting items are everywhere in the world of D&D... and this video shows how best to include them.`,
};

const random_tables = {
  order: 4,
  src: 'https://www.youtube.com/embed/3hdGi_Bwjd8',
  length: 3603,
  title: 'Well, That Was Random.',
  description: `Random encounter tables are a DM's best friend. Learn how to create a list of possible situations and sights that fit your setting that will flavor your party's experience--and keep things always in the hands of fate!`,
};

// =============================================================

const worldbuilding = {
  slug: 'worldbuilding',
  title: 'Worldbuilding',
  description:
    'What world does your story live in? These next lessons cover the basics to crafting all of the essential D&D setpieces that will make your adventure special, from compelling characters to lofty locations.',
  image_link: './images/splash-3.jpg',
  order: 2,
  curr_lesson_num: 0,
  lessons: [flavortown, actor_in_you, creatures, treasure, random_tables],
};

// =============================================================
// =============================================================

const rules_rolls = {
  order: 0,
  src: 'https://www.youtube.com/embed/rKU2e5Xrx1k',
  length: 3603,
  title: 'Rules and Rolls',
  description: `Searching rooms, seducing spies, and triggering traps. This video covers the rules of rolling--learn how to respond when your players need to make a skill check, cast a saving throw, and more.`,
};

const combat = {
  order: 1,
  src: 'https://www.youtube.com/embed/cOGFmSXIvc8',
  length: 3603,
  title: 'Roll for Initiative!',
  description: `A combat encounter has begun! This can be one of the most daunting experiences for new D&D-ers, but with this video, you'll know just how to run any battle or brawl with the perfect balance of challenge and fun.`,
};

const magic = {
  order: 2,
  src: 'https://www.youtube.com/embed/YkwhS-RPEhw',
  length: 3603,
  title: 'Witchcraft and Wizardry',
  description: `Magic exists in the world of D&D, and it has its own strict set of rules. Learn the ins and outs of spellcasting, magic materials, and more.`,
};

const unexpected = {
  order: 3,
  src: 'https://www.youtube.com/embed/K0SjRJNENME',
  length: 3603,
  title: 'Expect the Unexpected',
  description: `So, your players were supposed to imprison the escaped orc convict... and they decided to adopt him as a foster son instead. In this video, learn what to do when everything goes exactly NOT as planned.`,
};

// =============================================================

const lets_play = {
  slug: 'letsplay',
  title: `Let's Play!`,
  description: `Your party is formed, your world is built... now there's nothing left to do but play! Learn the nitty-gritty of the D&D 5e mechanics in the following lessons.`,
  image_link: './images/splash-5.jpg',
  order: 3,
  curr_lesson_num: 0,
  lessons: [rules_rolls, combat, magic, unexpected],
};

// =============================================================
// =============================================================
// =============================================================

const DM_PATH = {
  title: 'Your path to becoming an expert Dungeon Master',
  subtitle: 'Core Coursework',
  image_link: './images/path-image-main.jpg',
  courses: [adventure_begins, countdown_session0, worldbuilding, lets_play],
};

export default DM_PATH;
