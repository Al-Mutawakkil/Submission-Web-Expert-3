import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
    <div class="content">
      <h2 class="latest__label">Your Favourite Restaurant</h2>
      <h1 id="empty-tag" class="empty-tag">Halaman Favorite Masih Kosong!,<a href="#/">List</a></h1>
      <div class="posts" id="posts"></div>
    </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const emptyFavorite = document.querySelector('#empty-tag');
    const restoContainer = document.querySelector('#posts');
    if (restos.length !== 0) {
      emptyFavorite.remove();
      restos.forEach((resto) => {
        restoContainer.innerHTML += createRestoItemTemplate(resto);
      });
    }
  },
};

export default Favourite;
