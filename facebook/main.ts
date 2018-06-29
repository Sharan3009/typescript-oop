enum Gender {Male = "Male", Female = "Female" , Other = "Other"} //types of gender
enum Relationship {Single = "Single", InArelation = "In a RelationShip" , Engaged = "Engaged", Separated = "Separated", Married = "Married", Divorced = "Divorced", Widowed = "Widowed"} // types of relationships
enum InterstedIn {Men = "Men", Women = "Women"} // types of interstedin
enum Blood {Apositive = "A+" , Bpositive = "B+" , ABpositive = "AB+" , O = "O", Anegative = "A-", idk = "I Dont Know"} // blood groups
class FbAbout{
    constructor(private email:string,private gender: Gender /*enum*/, private workPlaces?:string[], private livedPlaces?:string[],private relationship?:Relationship/*enum*/,private socialSites?:string[],private dateBirth?:string,private yearBirth?:string, private professionalSkills?:string[], private university?:string[], private highSchool?: string[],private mobile?:number,private address?:string, private interstedIn?:InterstedIn/*enum*/, private languages?:string[],private religiousViews?:string, private politicalViews?:string,private mother?:string, private father?:string, private brother?:string, private sister?:string, private uncle?:string, private aunt?:string, private cousin?:string, private aboutYou?:string, private nickName?:string, private maidenName?:string, private marriedName?:string, private fatherName?:string, private birthName?:string,private favQuotes?:string,private bloodGroup?: Blood/*enum*/, private donatedBlood?:boolean){
        this.email = email;
        this.gender = gender;
        this.workPlaces = workPlaces;
        this.livedPlaces = livedPlaces;
        this.relationship = relationship;
        this.socialSites = socialSites;
        this.dateBirth = dateBirth;
        this.yearBirth = yearBirth;
        this.professionalSkills = professionalSkills;
        this.university = university;
        this.highSchool = highSchool;
        //logic for 10 digit mobile number
        if(mobile != undefined){
            if(mobile.toString().length == 10){
                this.mobile = mobile
            }
            else{
                console.log('mobile no should be 10 digit long')
                this.mobile = undefined
            }
        }
        this.address = address;
        this.interstedIn = interstedIn;
        this.languages = languages;
        this.religiousViews = religiousViews;
        this.politicalViews = politicalViews;
        this.mother = mother;
        this.father = father;
        this.brother = brother;
        this.sister = sister;
        this.uncle = uncle;
        this.aunt = aunt;
        this.cousin = cousin;
        this.aboutYou = aboutYou;
        this.nickName = nickName;
        this.maidenName = maidenName;
        this.marriedName = marriedName;
        this.fatherName = fatherName;
        this.birthName = birthName;
        this.favQuotes = favQuotes;
        this.bloodGroup = bloodGroup;
        this.donatedBlood = donatedBlood;
    }
    //getter and setter of all the instance variables
    getEmail = ()=>{
        return this.email;
    }
    setEmail = (email:string)=>{
        this.email = email;
    }
    getGender = ()=>{
        return this.gender;
    }
    //no setter for Gender
    getWorkplace = ()=>{
        return this.workPlaces;
    }
    //adding workplace to the existing array
    setWorkplace = (workPlace:any)=>{
        if(this.workPlaces == undefined){
            this.workPlaces = []
            this.workPlaces.push(workPlace)
        }
        else{
            this.workPlaces.push(workPlace)
        }
    }
    // concatenating university and high school arrays
    getEducation = ()=>{
        if(this.university && this.highSchool){
            return this.university.concat(this.highSchool)
        }
        else if(this.university){
            return this.university;
        }
        else if(this.highSchool){
            return this.highSchool
        }
    }
    getLivedPlaces = ()=>{
        return this.livedPlaces;
    }
    setLivedPlaces = (livedPlace:string)=>{
        if(this.livedPlaces == undefined){
            this.livedPlaces = []
            this.livedPlaces.push(livedPlace)
        }
        else{
            this.livedPlaces.push(livedPlace)
        }
    }
    getRelationships = ()=>{
        return this.relationship;
    }
    setRelationships = (relationship:Relationship)=>{
        this.relationship = relationship;
    }
    getSocialSites = ()=>{
        return this.socialSites;
    }
    setSocialSites = (socialSite:string)=>{
        if(this.socialSites == undefined){
            this.socialSites = []
            this.socialSites.push(socialSite)
        }
        else{
            this.socialSites.push(socialSite)
        }
    }
    getDateBirth = ()=>{
        return this.dateBirth;
    }
    setDateBirth = (dateBirth:string)=>{
        this.dateBirth = dateBirth;
    }
    getYearBirth = ()=>{
        return this.yearBirth;
    }
    setYearBirth = (yearBirth:string)=>{
        this.yearBirth = yearBirth;
    }
    // generating date of birth using date and year of birth
    generateDOB = () => {
        return this.dateBirth + " " + this.yearBirth;
    }
    getProfessionalSkills = ()=>{
        return this.professionalSkills;
    }
    setProfessionalSkills = (professionalSkill:string)=>{
        if(this.professionalSkills == undefined){
            this.professionalSkills = []
            this.professionalSkills.push(professionalSkill)
        }
        else{
            this.professionalSkills.push(professionalSkill)
        }
    }
    getUniversity = ()=>{
        return this.university;
    }
    setUniversity = (uni:string)=>{
        if(this.university == undefined){
            this.university = []
            this.university.push(uni)
        }
        else{
            this.university.push(uni)
        }
    }
    getHighSchool = ()=>{
        return this.highSchool;
    }
    setHighSchool = (hs:string)=>{
        if(this.highSchool == undefined){
            this.highSchool = []
            this.highSchool.push(hs)
        }
        else{
            this.highSchool.push(hs)
        }
    }
    getMobile = ()=>{
        return this.mobile;
    }
    // logic of 10 digit mobile number
    setMobile = (mobile:number)=>{
        if(mobile != undefined){
            if(mobile.toString().length == 10){
                this.mobile = mobile
            }
            else{
                console.log('mobile no should be 10 digit long')
                this.mobile = undefined
            }
        }
        else{
            this.mobile = undefined;
        }
    }
    getAddress = ()=>{
        return this.address;
    }
    setAddress = (address:string)=>{
        this.address = address;
    }
    getInterstedIn = ()=>{
        return this.interstedIn;
    }
    setInterstedIn = (interstedIn:InterstedIn)=>{
        this.interstedIn = interstedIn;
    }
    getLangauges = ()=>{
        return this.languages;
    }
    setLanguages = (language:string)=>{
        if(this.languages == undefined){
            this.languages = []
            this.languages.push(language)
        }
        else{
            this.languages.push(language)
        }
    }
    getReligiousViews = ()=>{
        return this.religiousViews;
    }
    setReligiousViews = (religiousViews:string)=>{
        this.religiousViews = religiousViews;
    }
    getPoliticalViews = ()=>{
        return this.politicalViews;
    }
    setPoliticalViews = (politicalViews:string)=>{
        this.politicalViews = politicalViews;
    }
    getMother = ()=>{
        return this.mother;
    }
    setMother = (mother:string)=>{
        this.mother = mother;
    }
    getFather = ()=>{
        return this.father;
    }
    setFather = (father:string)=>{
        this.father = father;
    }
    getBrother = ()=>{
        return this.brother;
    }
    setBrother = (brother:string)=>{
        this.brother = brother;
    }
    getSister = ()=>{
        return this.sister;
    }
    setSister = (sister:string)=>{
        this.sister = sister;
    }
    getUncle = ()=>{
        return this.uncle;
    }
    setUncle = (uncle:string)=>{
        this.uncle = uncle;
    }
    getAunt = ()=>{
        return this.aunt;
    }
    setAunt = (aunt:string)=>{
        this.aunt = aunt;
    }
    getCousin = ()=>{
        return this.cousin;
    }
    setCousin = (cousin:string)=>{
        this.cousin = cousin;
    }
    getAboutYou = ()=>{
        return this.aboutYou;
    }
    setAboutYou = (aboutYou:string)=>{
        this.aboutYou = aboutYou;
    }
    getNickName = ()=>{
        return this.nickName;
    }
    setNickName = (nickName:string)=>{
        this.nickName = nickName;
    }
    getMaidenName = ()=>{
        return this.maidenName;
    }
    setMaidenName = (maidenName:string)=>{
        this.maidenName = maidenName;
    }   
    getMarriedName = ()=>{
        return this.marriedName;
    }
    setMarriedName = (marriedName:string)=>{
        this.marriedName = marriedName;
    }
    getFatherName = ()=>{
        return this.fatherName;
    }
    setFatherName = (fatherName:string)=>{
        this.fatherName = fatherName;
    }
    getBirthName = ()=>{
        return this.birthName;
    }
    setBirthName = (birthName:string)=>{
        this.birthName = birthName;
    }
    getFavQuotes = ()=>{
        return this.favQuotes;
    }
    setFaveQuotes = (favQuotes:string)=>{
        this.favQuotes = favQuotes;
    }
    getBloodGroup = ()=>{
        return this.bloodGroup;
    }
    setBloodGroup = (bloodGroup:Blood)=>{
        this.bloodGroup = bloodGroup;
    }
    getDonated = ()=>{
        return this.donatedBlood;
    }
    setDonated = (donatedBlood:boolean)=>{
        this.donatedBlood = donatedBlood;
    }
}
let user1 = new FbAbout('something@gmail.com',Gender.Male, ["Infosys"],["Chandigarh"],Relationship.Single,["instagram"],"30 September","1994",["python","js","ts"],["Punjab Uni"],["HighSchool School"],9055,"My Address",InterstedIn.Women,["punjabi","english"],"No religious views","no political views","My mother","My father",undefined,undefined,undefined,undefined,undefined,"This is about me","My nickname", undefined,undefined,undefined,"This is my birthName","This my favequote",Blood.ABpositive,false)
console.log('')
console.log('--OVERVIEW--')
if(user1.getWorkplace()){
    console.log(`WorkPlaces: ${user1.getWorkplace()}`)
}

if(user1.getLivedPlaces()){
    console.log(`From: ${user1.getLivedPlaces()}`)
}
if(user1.getRelationships()){
    console.log(`RelationShip: ${user1.getRelationships()}`)
}
console.log('')
console.log('--WORK AND EDUCATION--')
if(user1.getWorkplace()){
    console.log(`WorkPlaces: ${user1.getWorkplace()}`)
}
if(user1.getProfessionalSkills()){
    console.log(`Professional Skills: ${user1.getProfessionalSkills()}`)
}
if(user1.getUniversity()){
    console.log(`University: ${user1.getUniversity()}`)
}
if(user1.getHighSchool()){
    console.log(`High School: ${user1.getHighSchool()}`)
}
console.log('')
console.log('--PLACES YOU HAVE LIVED--')
if(user1.getLivedPlaces()){
    console.log(`From: ${user1.getLivedPlaces()}`)
}
console.log('')
console.log('--CONTACT AND BASIC INFO--')
if(user1.getEmail()){
    console.log(`Email: ${user1.getEmail()}`)
}
if(user1.getMobile()){
    console.log(`Mobile: ${user1.getMobile()}`)
}
if(user1.getAddress()){
    console.log(`Address: ${user1.getAddress()}`)
}
if(user1.getSocialSites()){
    console.log(`Social Links: ${user1.getSocialSites()}`)
}
if(user1.getDateBirth()){
    console.log(`Date of birth: ${user1.getDateBirth()}`)
}
if(user1.getYearBirth()){
    console.log(`Year of birth: ${user1.getYearBirth()}`)
}
if(user1.getGender()){
    console.log(`Gender: ${user1.getGender()}`)
}
if(user1.getInterstedIn()){
    console.log(`Intersted In: ${user1.getInterstedIn()}`)
}
if(user1.getLangauges()){
    console.log(`Languages: ${user1.getLangauges()}`)
}
if(user1.getReligiousViews()){
    console.log(`Religious Views: ${user1.getReligiousViews()}`)
}
if(user1.getPoliticalViews()){
    console.log(`Political Views: ${user1.getPoliticalViews()}`)
}
if(user1.getRelationships()){
    console.log(`RelationShip: ${user1.getRelationships()}`)
}
if(user1.getMother() || user1.getFather() || user1.getSister() || user1.getBrother() || user1.getUncle() || user1.getAunt() || user1.getCousin()){
    console.log('Family members')
    if(user1.getMother()){
        console.log(`Mother: ${user1.getMother()}`)
    }
    if(user1.getFather()){
        console.log(`Father: ${user1.getFather()}`)
    }
    if(user1.getSister()){
        console.log(`Sister: ${user1.getSister()}`)
    }
    if(user1.getBrother()){
        console.log(`Brother: ${user1.getBrother()}`)
    }
    if(user1.getUncle()){
        console.log(`Uncle: ${user1.getUncle()}`)
    }
    if(user1.getAunt()){
        console.log(`Aunt: ${user1.getAunt()}`)
    }
    if(user1.getCousin()){
        console.log(`Cousin: ${user1.getCousin()}`)
    }
}
console.log('')
console.log('--DETAILS ABOUT YOU--')
if(user1.getAboutYou()){
    console.log(`About: ${user1.getAboutYou()}`)
}
if(user1.getNickName() || user1.getMaidenName() || user1.getMarriedName() || user1.getFatherName() || user1.getBirthName()){
    console.log(`Other Names`)
    if(user1.getNickName()){
        console.log(`Nick Name: ${user1.getNickName()}`)
    }
    if(user1.getBirthName()){
        console.log(`Birth Name: ${user1.getBirthName()}`)
    }
    if(user1.getFatherName()){
        console.log(`Father Name: ${user1.getFatherName()}`)
    }
    if(user1.getMaidenName()){
        console.log(`Maiden Name: ${user1.getMaidenName()}`)
    }
    if(user1.getMarriedName()){
        console.log(`Married Name: ${user1.getMarriedName()}`)
    }
}
if(user1.getFavQuotes()){
    console.log(`Favourite quote: ${user1.getFavQuotes()}`)
}
if(user1.getBloodGroup() || user1.getDonated()){
    console.log(`Blood Donations`)
    if(user1.getBloodGroup()){
        console.log(`Blood Group: ${user1.getBloodGroup()}`)
    }
    if(user1.getDonated()){
        console.log(`Have Donated Blood: Yes`)
    }
    if(user1.getDonated()==false){
        console.log(`Have Donated Blood: Not Yet`)
    }
}
console.log('')
console.log('--LIFE EVENTS--')
if(user1.generateDOB()){
    console.log(`Date of birth: ${user1.generateDOB()}`)
}
console.log('')
console.log('changing mobile number to 10 digits')
user1.setMobile(9041950140)
if(user1.getMobile()){
    console.log(`Mobile: ${user1.getMobile()}`)
}
console.log('')
console.log('adding one more lived place')
user1.setLivedPlaces('Pune')
if(user1.getLivedPlaces()){
    console.log(`From: ${user1.getLivedPlaces()}`)
}
console.log('')
user1.setHighSchool('HighSchool 2')
console.log('adding highschool and getting all education details i.e university and high school')
if(user1.getEducation()){
    console.log(`Education: ${user1.getEducation()}`)
}