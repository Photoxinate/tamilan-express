const removeDuplicates = arr => {
    return arr.filter((v,i,a) => a.findIndex( t=> (t.id === v.id)) === i)
}

export default removeDuplicates;