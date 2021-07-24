// Задание 6.

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

// Задание 7.

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let mass = [ 5, 5, 3, 4, 6, 0, 'qwe']

let equal = function(mass) {
    for(let i = 0; i < mass.length; i++){
        if (mass[0] != mass[i]){
            return false;
        }
    }
    return true;
    }

console.log(equal(mass))

let ifeven = function(mass) {
    let even = 0;
    let uneven = 0;
    let zeroes = 0;
    for(let i = 0; i < mass.length; i++){
            let j = +mass[i];
            if (!Number.isNaN(j)){
                if(j === 0){
                    zeroes += 1;} 
                else if((j % 2) === 0){
                    even += 1;} 
                else{
                    uneven += 1;}
            }
    }
    return(`В массиве ${even} четных, ${uneven} нечетных и ${zeroes} нулевых значений.`)
}

console.log(ifeven(mass))

