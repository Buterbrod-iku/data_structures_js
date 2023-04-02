const Rand = (min, max) => {
    let a = Math.random() * (max - min) + min;
    return Math.floor(a);
}

const Check = (array, number) => {
    let count = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] === number){
            count++;
        }
    }
    if (count === 0){
        return true;
    }
    else{
        return false;
    }
}

const ViborSort = (array) => {
    let min, cash;
    for (let i = 0; i < array.length - 1; i++){
        min = i;
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[min]){
                min = j;
            }
        }
        cash = array[i];
        array[i] = array[min];
        array[min] = cash;
    }
    return array;
}


function gg(){
    let x1 = document.getElementById('x1').value;
    let x2 = document.getElementById('x2').value;
    let K = [];
    let M = [];
    let A = [];
    for (let i = 0; i < 1900; i++){
        let border = Rand(100, 2000);
        if (border <= x1){
            if(Check(A, border)){
                A.push(border);
            }
        }
        else if (border >= x2){
            if(Check(M, border)){
                M.push(border);
            }
        }
        else{
            if(Check(K, border)){
                K.push(border);
            }
        }
    }
    let AQ = A;
    let KQ = K;
    let MQ = M;
    let startTime1 = performance.now()
    AQ.sort();
    KQ.sort();
    MQ.sort();
    let endTime1 = performance.now()

    let startTime2 = performance.now()
    A = ViborSort(A);
    K = ViborSort(K);
    M = ViborSort(M);
    let endTime2 = performance.now()

    let quick = document.getElementById('quick');
    let vibor = document.getElementById('vibor');
    quick.innerHTML = `
        Quick ${endTime1 - startTime1} milliseconds\n
        ${AQ}\n
        ${KQ}\n
        ${MQ}\n
    `;

    vibor.innerHTML = `
        Vibor ${endTime2 - startTime2} milliseconds\n
        ${A}\n
        ${K}\n
        ${M}\n
    `;
}

