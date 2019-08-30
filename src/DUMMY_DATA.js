const path_data = {
  title: 'Dungeon Master Path',
  description: 'Learn how to become a dungeon master!',
  image_link: './images/path-splash-main.jpg',
  courses: [
    {
      title: 'Rules',
      description: 'The first course',
      image_link: './images/splash-1.jpg',
      order: 1,
      lessons: [],
    },
    {
      title: 'Equipment',
      description: 'The second course',
      image_link: './images/splash-2.jpg',
      order: 2,
      lessons: [],
    },
    {
      title: 'Story',
      description: 'The third course',
      image_link: './images/splash-3.jpg',
      order: 3,
      lessons: [],
    },
    {
      title: 'Setup',
      description: 'The fourth course',
      image_link: './images/splash-5.jpg',
      order: 4,
      lessons: [],
    },
  ],
};

/**
 * title: PropTypes.string,
      description: PropTypes.string,
      image_link: PropTypes.string,
      lessons: PropTypes.arrayOf(PropTypes.object),
 */

export default path_data;
