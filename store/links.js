export const state = () => ({
  links: [
    {
      icon: 'mdi-home',
      title: 'Главная',
      to: '/',
      isActive: true,
    },
    {
      icon: 'mdi-basket',
      title: 'Корзина',
      to: '/basket',
    },
    {
      icon: 'mdi-moped',
      title: 'Доставка',
      to: '/delivery',
    },
    {
      icon: 'mdi-credit-card-outline',
      title: 'Оплата',
      to: '/payment',
    },
    {
      icon: 'mdi-phone',
      title: 'Контакты',
      to: '/contacts',
    },
  ],
})

export const getters = {
  links: (state) => {
    return state.links
  },
}
