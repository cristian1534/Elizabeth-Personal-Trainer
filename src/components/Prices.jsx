import React from "react";

const Prices = () => {
  return (
    <div>
      <div class="pricing pricing--yama pb-5 row" id="price">
        <div class="col-lg-12">
          <div class="section-heading">
            <h2>Planes acorde</h2>
            <p class="text-dark">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iure
              quasi consequatur doloremque natus iusto labore laborum laboriosam
              odit veritatis alias fugit possimus voluptatem maxime, suscipit
              tempora? Tempore, hic. Molestiae!
            </p>
          </div>
        </div>
        <div class="pricing__item col-lg-3 col-md-6 col-sm-12">
          <h3 class="pricing__title">Basic</h3>
          <div class="pricing__price">
            <span class="pricing__currency">$</span>199
            <span class="pricing__period">/month</span>
          </div>
          <ul class="pricing__feature-list">
            <li class="pricing__feature">Lorem, ipsum dolor.</li>
          </ul>
          <a href="#" class="pricing__action">
            Choose plan
          </a>
        </div>
        <div class="pricing__item col-lg-3 col-md-6 col-sm-12">
          <h3 class="pricing__title">Standart</h3>
          <div class="pricing__price">
            <span class="pricing__currency">$</span>350
            <span class="pricing__period">/month</span>
          </div>
          <ul class="pricing__feature-list">
            <li class="pricing__feature">Lorem, ipsum dolor.</li>
            <li class="pricing__feature">Lorem, ipsum dolor.</li>
          </ul>
          <a href="#" class="pricing__action">
            Choose plan
          </a>
        </div>
        <div class="pricing__item col-lg-3 col-md-6 col-sm-12">
          <h3 class="pricing__title">Popular</h3>
          <div class="pricing__price">
            <span class="pricing__currency">$</span>450
            <span class="pricing__period">/month</span>
          </div>
          <ul class="pricing__feature-list">
            <li class="pricing__feature">Lorem, ipsum dolor.</li>
            <li class="pricing__feature">Lorem, ipsum dolor.</li>
            <li class="pricing__feature">Lorem, ipsum dolor.</li>
          </ul>
          <a href="#" class="pricing__action">
            Choose plan
          </a>
        </div>
        <div class="pricing__item col-lg-3 col-md-6 col-sm-12">
          <h3 class="pricing__title">Premium</h3>
          <div class="pricing__price">
            <span class="pricing__currency">$</span>899
            <span class="pricing__period">/month</span>
          </div>
          <ul class="pricing__feature-list">
            <li class="pricing__feature">Lorem, ipsum dolor.</li>
            <li class="pricing__feature">Lorem, ipsum dolor.</li>
            <li class="pricing__feature">Lorem, ipsum dolor.</li>
            <li class="pricing__feature">Lorem, ipsum dolor.</li>
          </ul>
          <a href="#" class="pricing__action">
            Choose plan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prices;
