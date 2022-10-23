const CategoryService = require('../../services/categoryService')
const categoryServ = new CategoryService()

function getCategories(){
    const categories = categoryServ.list()
    return categories
}

function getCategory({id}){
    const category = categoryServ.read(id)
    if(!category){
        throw new Error('Category not found')
    }
    return category
}

function createCategory({data}){
    const newCategory = categoryServ.create(data)
    return newCategory
}

function updateCategory({data}){
    const category = categoryServ.update(data)
    return category
}

function deleteCategory({data}){
    const category = categoryServ.delete(data)
    return category
}

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}