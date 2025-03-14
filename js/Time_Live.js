function day(){
    setInterval(() => {
        let now=new Date();
        document.getElementById("clock").innerHTML=now;
        let day=now.toLocaleDateString();

    }, 1000);
}
day();
