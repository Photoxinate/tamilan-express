const transform = categories => {
    if(!categories)
     return []

    categories.sort((cat1, cat2) => {
        if(cat1.parent && cat2.parent) return 0
        if(cat1.parent) return 1
        return -1
    })

    const transformed = []
    transformed['main'] = []
    categories.forEach(trans => {
        if(!trans.parent) {
            transformed['main'].push({...trans})
        }
        else {
            
            transformed['main'].forEach(main => {
                if(main._id === trans.parent) {
                    main.hasChild = true

                    if(!transformed[main.name]) 
                        transformed[main.name] = []
                    transformed[main.name].push({...trans})
                }  
            })
        }
    })

    transformed['main'].sort((cat1, cat2) => {
        if(cat1.hasChild && cat2.hasChild) return 0
        if(cat1.hasChild) return -1
        return 1
    })
  
    return {...transformed}
}

export default transform