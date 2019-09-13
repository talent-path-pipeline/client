const c1Lesson1 = {
  order: 0,
  title: 'Lesson 1: D&D 101',
  src: 'https://www.youtube.com/embed/MFCzwiqlnCE',
  length: 3603,
  description: `Welcome to a new series where I'll be talking about various topics to help you start DMing/GMing your own Tabletop RPGs.

      This episode focuses on the basics; What is a Dungeon Master. What things should you know? What can you do to prepare for your first session?
      
      This is an ongoing series that will cover a load of topics as we go!`,
};

const c1Lesson2 = {
  order: 1,
  title: 'Lesson 2: D&D 102',
  src: 'https://www.youtube.com/embed/MFCzwiqlnCE',
  length: 3344,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
};

const c1Lesson3 = {
  order: 2,
  title: 'Lesson 3: D&D 103',
  src: 'https://www.youtube.com/embed/MFCzwiqlnCE',
  length: 4475,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
};

const c1Lesson4 = {
  order: 3,
  title: 'Lesson 4: D&D 104',
  src: 'https://www.youtube.com/embed/MFCzwiqlnCE',
  length: 1343,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
};

const c1Lesson5 = {
  order: 4,
  title: 'Lesson 5: D&D 105',
  src: 'https://www.youtube.com/embed/UkWd0azv3fQ',
  length: 2754,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
};

// =============================================================

const course1 = {
  id: 1,
  title: 'Course 1',
  description: 'The first course',
  image_link: './images/splash-1.jpg',
  order: 0,
  curr_lesson_num: 0,
  lessons: [c1Lesson1, c1Lesson2, c1Lesson3, c1Lesson4, c1Lesson5],
};

// =============================================================
// =============================================================

const course2 = {
  title: 'Equipment',
  description: 'The second course',
  image_link: './images/splash-2.jpg',
  order: 1,
  curr_lesson_num: 0,
  lessons: [],
};

// =============================================================
// =============================================================

const course3 = {
  title: 'Story',
  description: 'The third course',
  image_link: './images/splash-3.jpg',
  order: 2,
  curr_lesson_num: 0,
  lessons: [],
};

// =============================================================
// =============================================================

const course4 = {
  title: 'Setup',
  description: 'The fourth course',
  image_link: './images/splash-5.jpg',
  order: 3,
  curr_lesson_num: 0,
  lessons: [],
};

// =============================================================
// =============================================================
// =============================================================

const DM_PATH = {
  title: 'Your path to becoming an expert Dungeon Master',
  subtitle: 'Core Coursework',
  image_link: './images/path-image-main.jpg',
  courses: [course1, course2, course3, course4],
};

export default DM_PATH;
