class BurgerMenu {
    constructor(obj) {
        this.button1 = document.querySelector(obj.button1)
        this.button2 = document.querySelector(obj.button2)
        this.aside = document.querySelector(obj.aside)
        this.content1 = document.querySelector(obj.content1)
        this.content2 = document.querySelector(obj.content2)
        this.content3 = document.querySelector(obj.content3)
        this.nav = document.querySelector(obj.nav)
        this.extra = document.querySelector(obj.extra)

        this.button1.addEventListener('click', () => {
            this.openClose()
            this.addRemove()
        })

        this.button2.addEventListener('click', () => {
            this.openClose()
            this.addRemove()
        })
    }

    openClose() {
        this.aside.classList.toggle('active')
    }

    addRemove() {
        if (this.aside.contains(this.content1) || this.aside.contains(this.content2) || this.aside.contains(this.content3)) {
            this.content1.remove()
            this.content2.remove()
            this.content3.remove()
        } else {
            this.aside.appendChild(this.content1)
            this.aside.appendChild(this.content3)
            this.aside.appendChild(this.content2)
        }
    }
}

let burgerMenu = new BurgerMenu({
    button1:'.nav__burger',
    button2:'.aside__btn',
    aside:'.nav__aside',
    content1:'.nav__logo',
    content2:'.nav__menu',
    content3:'.nav__search',
    nav:'.header__nav',
    extra:'.nav__bag',
})
