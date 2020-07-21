class User {
    constructor(name,age,email){
        this.name = name;
        this.age =age;
        this.email = email;
        this.Lucoins = 0;
        this.courses = [];
    }
    
    login(){
        console.log(`${this.name} has logged in!`)
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out!`)
        return this;
    }
    getdetail(){
        console.log(this)
    }

}


class Moderator extends User{

    Addcoins(user){
        let el = user
        el.Lucoins++;
        return el.getdetail()
    }

    Removecoins(user){
        let el = user
        el.Lucoins--;
        return el.getdetail()
    }

}

class Admin extends Moderator{ 

    CourseAdd(user,course){
        user.courses.push(course);
        console.log(user)
    }
    
    CourseDelte(user,course){
        user.courses.pop(course);
        console.log(user)
    }
}


let user1 = new User('abc',20,'abc@gmail.com')
let user2 = new User('cde',23,'cde@gmail.com')
let mod = new Moderator('MOD',24,'MOD@gmail.com');
let admin = new Admin('ADMIN',26,'ADMIN@gmail.com')
users = [user1,user2]


mod.Addcoins(user2)
mod.Removecoins(user2)



admin.CourseAdd(user1,'Pyhton')
admin.CourseAdd(user1,'Javascript')
admin.CourseAdd(user1,'Html')
admin.CourseDelte(user1,'Html')