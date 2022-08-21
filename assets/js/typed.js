const sleep = ms => new Promise(res => setTimeout(res, ms));

var typed = new Typed('#typed', {
    strings: ["Software Engineering...", "Machine Learning..."],
    typeSpeed : 100,
    backSpeed: 70,
    backDelay: 1200,
    loop: true,
    // onComplete: async(self)=> {
    //     await sleep(1600);
    //     self.cursor.remove();
    // },
});