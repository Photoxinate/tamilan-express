const transform = cats => {
    const categories = [...cats]
    categories.sort((cat1, cat2) => {
        if(cat1.parent && cat2.parent) return 0
        if(cat1.parent) return 1
        return -1
    })
    
    const transformed = []
  
    categories.forEach(cat => {
        if(cat.parent) {
            transformed.forEach(trans => {
                if(cat.parent === trans._id) {
                    if(!trans.child) trans.child = []
                    trans.child.push(cat)
                }
            })
        }
        else {
            transformed.push(cat)
        }
    })

    transformed.sort((cat1, cat2) => {
        if(cat1.child && cat2.child) return 0
        if(cat1.child) return -1
        return 1
    })
  
    return transformed
}

export default transform