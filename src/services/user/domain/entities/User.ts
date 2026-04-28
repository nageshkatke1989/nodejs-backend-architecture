export class User{
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public mobile: string,
        public id?: number
    ) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            throw new Error("Invalid email");
        }
        
        const mobileRegex = /^[6-9]\d{9}$/;
        if(!mobileRegex.test(String(mobile))) {
            throw new Error("Invalid mobile");
        }
    }
}