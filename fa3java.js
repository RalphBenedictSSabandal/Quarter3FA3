function letter(num){
    const cap = 65;
    return String.fromCharCode(num + cap);
}

function time(a, b){
    return a * b;
}

function hour(a){
    var b = parseInt(a/60);
    return b;
}

function minutes(a){
    var a = parseInt(a%60);
    return a;
}

function most(m, a, b, c){
    if(a==m && b==m && c==m){
        bronemoji.innerHTML="&#127936";
        camemoji.innerHTML="&#127936";
        lenemoji.innerHTML="&#127936";
        return 'The three of them ';
    }
    else if(a==m && b==m){
        bronemoji.innerHTML="&#127936";
        camemoji.innerHTML="&#127936";
        return 'Bronny James and Cam Reddish';
    }
    else if(b==m && c==m){
        camemoji.innerHTML="&#127936";
        lenemoji.innerHTML="&#127936";
        return 'Cam Reddish and Alex Len';
    }
    else if(a==m && c==m){
        bronemoji.innerHTML="&#127936";
        lenemoji.innerHTML="&#127936";
        return 'Bronny James and Alex Len';
    }
    else{
        switch (m){
            case a:
                bronemoji.innerHTML="&#127936";
                return 'Bronny James';
                break;
            case b:
                camemoji.innerHTML="&#127936";
                return 'Cam Reddish';
                break;
            case c:
                lenemoji.innerHTML="&#127936";
                return 'Alex Len';
                break; 
        }
    }
}
let n1 = Math.round(Math.random() * 20);
let n2 = Math.round(Math.random() * 20);
let n3 = Math.round(Math.random() * 20);
let m = Math.max(n1, n2, n3);
let c = letter(n1);
let t = time(n2, n3);

const letterMap = {
    A: 'Atlanta Hawks',
    B: 'Baltimore Barons',
    C: 'Charlotte Hornets',
    D: 'Dallas Mavericks',
    E: 'East Carolina Eagles',
    F: 'Florida Firebirds',
    G: 'Georgia Gladiators',
    H: 'Hawaii Hurricanes',
    I: 'Indiana Pacers',
    J: 'Jalisco Jaguars',
    K: 'Kansas City Royals',
    L: 'Los Angeles Clippers',
    M: 'Milwaukee Bucks',
    N: 'New York Knicks',
    O: 'Oklahoma City Thunder',
    P: 'Philadelphia 76ers',
    Q: 'Quarryville Quakes',
    R: 'Rhode Island Claws',
    S: 'San Antonio Spurs',
    T: 'Tucson Revolts',
    U: 'Urbana Queens'
}

Bronny.innerHTML=n1;
Cam.innerHTML=n2;
Len.innerHTML=n3;
highest.innerHTML=most(m, n1, n2, n3) + " scored the most points with " + m + " points."; 
game.innerHTML="They played against the NBA team " + letterMap[c] + ".";



if(60<=t && t%60!=0){
    totaltime.innerHTML="The other players combined for a total of " + hour(t) + " hours and " + minutes(t) + " minutes. (" + t + " mins)";
}
else if(60<=t && t%60==0){
    totaltime.innerHTML="The other players combined for a total of " + hour(t) + " hours. (" + t + " mins)";
}
else if(t!=0){
    totaltime.innerHTML="The other players combined for a total of " + minutes(t) + " minutes. (" + t + " mins)";
}
else{
    totaltime.innerHTML="The other players did not play.";
}

console.log(n1);
console.log(n2);
console.log(n3);
console.log(m);
console.log(c);
console.log(t);





