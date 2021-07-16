import CrowdRestoSource from '../../data/crowd-resto-source';
import { createHeroElement, createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="jumbotron" id="jumbotron"></div>

    <section class="content">
      <div class="latest">
        <h1 class="latest__label">Explore Restaurants</h1>
        <div class="posts" id="posts"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const jumbotronContainer = document.querySelector('#jumbotron');
    jumbotronContainer.innerHTML = createHeroElement;

    const datas = await CrowdRestoSource.listResto();
    const restoContainer = document.querySelector('#posts');
    datas.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
