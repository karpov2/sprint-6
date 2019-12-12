// Это класс, создающий карточку
class Card {
	constructor(params) {
		this.$like = params.isLiked;
		this.$container = params.container;
	}

	// Лайк карточки
	like() {
		event.target.classList.toggle(this.$like);
	}

	// Удаление карточки
	remove() {
		cardList.container.removeChild(event.target.closest(`.${this.$container}`));
	}

	// Он будет создавать DOM-элемент карточки
	create(name, link) {
		// Выводим список карточек
		return `
		<div class="place-card">
			<div class="place-card__image" style="background-image: url(${link});">
				<button class="place-card__delete-icon"></button>
			</div>
			<div class="place-card__description">
				<h3 class="place-card__name">${name}</h3>
				<button class="place-card__like-icon"></button>
			</div>
		</div>
		`.trim();
	}
}