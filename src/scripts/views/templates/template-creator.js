import CONFIG from '../../globals/config';

const createHeroElement = `
  <div class="hero">
    <div class="hero__inner">
        <h1 class="hero__title">Kumpulan Restoran Indonesia Favorit</h1>
        <p class="hero__tagline">Temukan rekomendasi restoran terbaik sepanjang masa dari seluruh penjuru indonesia</p>
    </div>
  </div>
`;

const createRestoItemTemplate = (resto) => `
    <article class="post-item">
        <img class="lazyload post-item__thumbnail" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${resto.name}">
        <div class="post-item__rating">
            <p class="post-item__rating-tv">Rating:</p>
            <p class="post-item__rating-value">${resto.rating}</p>
        </div>
        <div class="post-item__content">
            <p class="post-item__city">Kota ${resto.city}</p>
            <h1 class="post-item__title">
                <a aria-label="${resto.name}" href="${`/#/detail/${resto.id}`}">${resto.name}</a>
            </h1>
            <p class="post-item__description">${resto.description}</p>
        </div>
    </article>
`;

const createRestoDetailTemplate = (resto) => `
  <article class="resto-detail">
      <h1 class="resto-detail__title">${resto.restaurant.name}</h1>
      <div class="resto-detail__content">
        <div class="resto-detail__thumbnail">
            <img src="${CONFIG.BASE_IMAGE_URL}${resto.restaurant.pictureId}" alt="${resto.restaurant.name}"/>
        </div>
        <div class="resto-detail__menu">
          <h2>Daftar Menu</h2>
          <h2 class="resto-detail__subtitle">Makanan</h2>
          <div class="foods__container">
            <ol>
              ${resto.restaurant.menus.foods.map(
    (food) => `
                <li>${food.name}</li>
                `,
  ).join('')}
            </ol>
          </div>
          <h2 class="resto-detail__subtitle">Minuman</h2>
          <div class="foods__container">
            <ol>
            ${resto.restaurant.menus.drinks.map(
    (drink) => `
                  <li>${drink.name}</li>
              `,
  ).join('')}
            </ol>
          </div>
          <h2 class="resto-detail__subtitle">Alamat</h2>
          <p>${resto.restaurant.address}, ${resto.restaurant.city}</p>
          <h2 class="resto-detail__subtitle">Kategori</h2>
          <View class="category__container">
              ${resto.restaurant.categories.map((menu) => `<div class="item"><p>${menu.name}</p></div>`).join('\n')}
          </View>
          <h2 class="resto-detail__subtitle">Rating</h2>
          <p class="post-item__rating-value">${resto.restaurant.rating}</p>
        </div>
      </div>
      <div class="resto-detail__description">
          <div>
              <h1 class="resto-detail__title">Overview</h1>
              <p class="resto-detail__desc">${resto.restaurant.description}</p>
          </div>
          <div>
              <h1 class="resto-detail__desctitle">Customer Review</h1>
              ${resto.restaurant.customerReviews
    .map((review) => `
                <div class="user-review-box">
                    <div class="user__info">
                      <p>${review.name}</p>
                      <p class="user__info-date">${review.date}</p>
                      <p>${review.name}</p>
                    </div> 
                </div>
    `).join('')}
          </div>
      </div>
    </article>
`;

const createLikeRestoButtonTemplate = () => `
<button aria-label="like this resto" id="likeButton" class="like">
<i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createUnlikeRestoButtonTemplate = () => `
<button aria-label="unlike this resto" id="likeButton" class="like">
<i class="fa fa-heart" aria-hidden="true"></i> 
</button>
`;

export {
  createHeroElement,
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
