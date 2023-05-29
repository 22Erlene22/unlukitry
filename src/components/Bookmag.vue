<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Представлены лучшие книги для прочтения</p>
    <h3>Список книг</h3>
    <div class="books">
      <div v-for="sl in state.books" :key="sl.id">
        <div class="bookCard">
          <img :src="sl.coverImage" />
          <div class="bookInfo">
            <span>{{ sl.title }}</span>
            <span>{{ sl.author }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { state } from '../store/BookStore';
export default {
  name: 'Bookmag',
  props: {
    msg: String,
  },
  data: () => ({
    state,
  }),

  mounted() {
    console.log('this.store');
    console.log(this.store);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.books {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.bookCard {
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;
  margin: 10px;
  background-color: #fafafa;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  min-width: 250px;
  max-width: 300px;
  height: 350px;
}
.bookCard img {
  display: block;
  margin: 0 auto;
  max-height: 250px;
  object-fit: contain;
}
.bookInfo {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 10px #000;
}
@media screen and (max-width: 768px) {
  .bookCard {
    max-width: 100%;
  }
}
</style>
