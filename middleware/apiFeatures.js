class apiFeatures{
    constructor(query, queryStr){
        this.query = query
        this.queryStr = queryStr || {}
    }
    search(){
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i'
            }
        } : {}
        this.query = this.query.find(keyword)
        return this
    }
    filter(){
        const queryCopy = {...this.queryStr}
        const removeFields = ["keyword", "page", "limit"]

        removeFields.forEach(key => {
            delete queryCopy[key]
        });
        let queryString = JSON.stringify(queryCopy)
        // there should be no space in b/w the regular exp => /\b(lt|lte|gt|gte)\b/g <= g=global i=insensitive
        queryString = queryString.replace(/\b(lt|lte|gt|gte)\b/gi, (key) => `$${key}`)
        this.query = this.query.find(JSON.parse(queryString))

        return this
    }
}
module.exports = apiFeatures