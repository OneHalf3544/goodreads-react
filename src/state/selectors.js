export const getCategories = (store) => {
    return store.categories || []
}

export const getCategoryNames = (store) => getCategories(store).map(category => category.name)

export const getActiveCategory = (store) => getCategories(store).filter(category => category.name === store.activeCategory)?.[0]
