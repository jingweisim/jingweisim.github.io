const sleep = ms => new Promise(res => setTimeout(res, ms));

var typed = new Typed('#typed', {
    strings: ["hello!","i'm Jingwei", "Welcome to my website."],
    typeSpeed : 50,
    backSpeed: 20,
    backDelay: 1400,
    onComplete: async(self)=> {
        await sleep(1600);
        self.cursor.remove();
    },
});