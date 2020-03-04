const teamMembers = document.querySelectorAll('.accordion-team__item');

teamMembers.forEach(el =>
    el.addEventListener('click', function () {
        teamMembers.forEach(el => el.classList.remove('accordion-team__item--active'));
        el.classList.add('accordion-team__item--active');
    }));

