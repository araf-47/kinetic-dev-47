function maxArr(){
    // let input = parseInt(document.getElementById('textInput').value);
    
    let input = document.getElementById('textInput').value; 
    let vangaVangi = input.split("-");
    // console.log(vngaVangi);
    // console.log(vngaVangi.length);
    let coop2num = vangaVangi.map(Number);
    // console.log(coop2num);

    for (let boroAraf = 0; boroAraf < coop2num.length; boroAraf++) {
        for (let chutoAraf = 0; chutoAraf < coop2num.length - 1; chutoAraf++) {
        
            // if (coop2num[chutoAraf] < coop2num[chutoAraf + 1]) <- এইটা উল্টা কাজ করে বড় টা সামনে চইলা যায়। 
            if (coop2num[chutoAraf] > coop2num[chutoAraf + 1]) { 
                let blank = coop2num[chutoAraf];
                coop2num[chutoAraf] = coop2num[chutoAraf + 1];
                coop2num[chutoAraf + 1] = blank;
            }
        }
    }
    // `The MAX is 🫴 ${coop2num}.` <- এইটা লাস্ট নাম্বার টা ধরে না ।
    document.getElementById("output").innerHTML = `The MAX is 🫴 ${coop2num[coop2num.length - 1]} .`
    /*
    let line1 = "The MAX number out of:\n";
    let line2 = "\n" + input;
    let line3 = "\nis";
    let line4 = "\n" + coop2num;
    document.getElementById("output").innerHTML = line1 + line2 + line3 + line4;
    // document.getElementById("output").innerHTML = `The MAX number out of\n ${input}\nis ${coop2num}.`;
    */
}