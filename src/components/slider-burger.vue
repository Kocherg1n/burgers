<template lang="pug">
    carousel(:per-page='1',
        :mouse-drag='true',
        :navigationEnabled='true',
        :paginationEnabled='false',
        :loop='true'

    )
        slide
            .slider__item
                .slider__dropdown-composition
                    include ../pug/includes/modules/composition
                .slider__kkal
                    svg.slider__icon-pic
                        use(xlink:href='../assets/img/icons/sprite.svg#kkal')
                    .slider__kkal-title ккал
                .slider__picture
                    img.slider__img(src='../assets/img/slider/burger-4.png', alt='Фото бургера')
                .slider__desc
                    h2.title Dark BEEF Burger
                    p.slider__text
                        | Ваш старый добрый знакомый, с рубленым бифштексом из
                        | 100%
                        | говядины,
                        | тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и
                        | соусом
                        | гриль
                        | теперь с добавлением экзотического соуса чураско.
                    .slider__order
                        .slider__price 500
                            span рублей
                        button.main-button(href='#order') Заказать
        slide
            .slider__item
                .slider__dropdown-composition
                    include ../pug/includes/modules/composition
                .slider__kkal
                    svg.slider__icon-pic
                        use(xlink:href='../assets/img/icons/sprite.svg#kkal')
                    .slider__kkal-title ккал
                .slider__picture
                    img.slider__img(src='../assets/img/slider/burger-1.png', alt='Фото бургера')
                .slider__desc
                    h2.title Dark BEEF Burger
                    p.slider__text
                        | Ваш старый добрый знакомый, с рубленым бифштексом из
                        | 100%
                        | говядины,
                        | тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и
                        | соусом
                        | гриль
                        | теперь с добавлением экзотического соуса чураско.
                    .slider__order
                        .slider__price 500
                            span рублей
                        button.main-button(href='#order') Заказать
</template>

<script>
    export default {
        name: "slider-burger"
    }
</script>

<style lang="scss" scoped>

</style>