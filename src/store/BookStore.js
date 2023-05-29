import { reactive } from 'vue';
export const state = reactive({
  books: [
    {
      id: 1,
      title: '"Анна Каренина"',
      author: 'Лев Толстой',
      //coverImage: '@/src/assets/images/anna-karenina.jpg',
      coverImage:
        'https://i.ibb.co/xsvtQZs/imgonline-com-ua-Resize-Xtco-S3zat34-Xn-Db-Z.jpg',
    },
    {
      id: 2,
      title: '"Преступление и наказание"',
      author: 'Федор Достоевский',
      coverImage:
        'https://i.ibb.co/rHSF44C/imgonline-com-ua-Resize-0s-Yo-Ajmcy-Vs64.jpg',
      //coverImage: '@/src/assets/images/prest-nakaz.jpg',
    },
    {
      id: 3,
      title: '"Война и мир"',
      author: 'Лев Толстой',
      coverImage:
        'https://i.ibb.co/dpSJJ4J/imgonline-com-ua-Resize-3b-JLjg-Dvh-Qug-Q.jpg',
      //coverImage: '@/src/assets/images/war-and-peace.jpg',
    },
    {
      id: 4,
      title: '"Мастер и Маргарита"',
      author: 'Михаил Булгаков',
      coverImage:
        'https://i.ibb.co/StDJ4bm/imgonline-com-ua-Resize-Ckd-Dv-W8-W0-XMGZ.jpg',
      //coverImage: '@/src/assets/images/master-and-margarita.jpg',
    },
  ],
});