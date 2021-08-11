let products

export default class ProductsDAO {
    static async injectDB(conn) {
        if (products) {
          return
        }
        try {
          products = await conn.db(process.env.PRODUCTSREVIEW_NS).collection("products")
        } catch (e) {
          console.error(
            `Unable to establish a collection handle in restaurantsDAO: ${e}`,
          )
        }
    }

    static async getProducts({
        filters = null,
        page = 0,
        productsPerPage = 20,
    } = {}) {
        let query
        if (filters) {
          if ("name" in filters) {
            query = { $text: { $search: filters["name"] } }
          }
        }
    
        let cursor
        
        try {
          cursor = await products
            .find(query)
        } catch (e) {
          console.error(`Unable to issue find command, ${e}`)
          return { productsList: [], totalNumProducts: 0 }
        }
    
        const displayCursor = cursor.limit(productsPerPage).skip(productsPerPage * page)
    
        try {
          const productsList = await displayCursor.toArray()
          const totalNumProducts = await products.countDocuments(query)
    
          return { productsList, totalNumProducts }
        } catch (e) {
          console.error(
            `Unable to convert cursor to array or problem counting documents, ${e}`,
          )
          return { productsList: [], totalNumProducts: 0 }
        }
    }
}