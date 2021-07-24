let newMap = new Map(
    [
        ['apple','red'],
        ['fresh', 'meat'],
        [6, true]
    ]
);

newMap.set('pepper', 'hot')

for (let key of newMap.keys()){
    console.log(`Ключ ${key} занчение ${newMap.get(key)}`)
}