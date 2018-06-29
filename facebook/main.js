var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender || (Gender = {})); //types of gender
var Relationship;
(function (Relationship) {
    Relationship["Single"] = "Single";
    Relationship["InArelation"] = "In a RelationShip";
    Relationship["Engaged"] = "Engaged";
    Relationship["Separated"] = "Separated";
    Relationship["Married"] = "Married";
    Relationship["Divorced"] = "Divorced";
    Relationship["Widowed"] = "Widowed";
})(Relationship || (Relationship = {})); // types of relationships
var InterstedIn;
(function (InterstedIn) {
    InterstedIn["Men"] = "Men";
    InterstedIn["Women"] = "Women";
})(InterstedIn || (InterstedIn = {})); // types of interstedin
var Blood;
(function (Blood) {
    Blood["Apositive"] = "A+";
    Blood["Bpositive"] = "B+";
    Blood["ABpositive"] = "AB+";
    Blood["O"] = "O";
    Blood["Anegative"] = "A-";
    Blood["idk"] = "I Dont Know";
})(Blood || (Blood = {})); // blood groups
var FbAbout = /** @class */ (function () {
    function FbAbout(email, gender /*enum*/, workPlaces, livedPlaces, relationship /*enum*/, socialSites, dateBirth, yearBirth, professionalSkills, university, highSchool, mobile, address, interstedIn /*enum*/, languages, religiousViews, politicalViews, mother, father, brother, sister, uncle, aunt, cousin, aboutYou, nickName, maidenName, marriedName, fatherName, birthName, favQuotes, bloodGroup /*enum*/, donatedBlood) {
        var _this = this;
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
        this.mobile = mobile;
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
        //getter and setter of all the instance variables
        this.getEmail = function () {
            return _this.email;
        };
        this.setEmail = function (email) {
            _this.email = email;
        };
        this.getGender = function () {
            return _this.gender;
        };
        //no setter for Gender
        this.getWorkplace = function () {
            return _this.workPlaces;
        };
        //adding workplace to the existing array
        this.setWorkplace = function (workPlace) {
            if (_this.workPlaces == undefined) {
                _this.workPlaces = [];
                _this.workPlaces.push(workPlace);
            }
            else {
                _this.workPlaces.push(workPlace);
            }
        };
        // concatenating university and high school arrays
        this.getEducation = function () {
            if (_this.university && _this.highSchool) {
                return _this.university.concat(_this.highSchool);
            }
            else if (_this.university) {
                return _this.university;
            }
            else if (_this.highSchool) {
                return _this.highSchool;
            }
        };
        this.getLivedPlaces = function () {
            return _this.livedPlaces;
        };
        this.setLivedPlaces = function (livedPlace) {
            if (_this.livedPlaces == undefined) {
                _this.livedPlaces = [];
                _this.livedPlaces.push(livedPlace);
            }
            else {
                _this.livedPlaces.push(livedPlace);
            }
        };
        this.getRelationships = function () {
            return _this.relationship;
        };
        this.setRelationships = function (relationship) {
            _this.relationship = relationship;
        };
        this.getSocialSites = function () {
            return _this.socialSites;
        };
        this.setSocialSites = function (socialSite) {
            if (_this.socialSites == undefined) {
                _this.socialSites = [];
                _this.socialSites.push(socialSite);
            }
            else {
                _this.socialSites.push(socialSite);
            }
        };
        this.getDateBirth = function () {
            return _this.dateBirth;
        };
        this.setDateBirth = function (dateBirth) {
            _this.dateBirth = dateBirth;
        };
        this.getYearBirth = function () {
            return _this.yearBirth;
        };
        this.setYearBirth = function (yearBirth) {
            _this.yearBirth = yearBirth;
        };
        // generating date of birth using date and year of birth
        this.generateDOB = function () {
            return _this.dateBirth + " " + _this.yearBirth;
        };
        this.getProfessionalSkills = function () {
            return _this.professionalSkills;
        };
        this.setProfessionalSkills = function (professionalSkill) {
            if (_this.professionalSkills == undefined) {
                _this.professionalSkills = [];
                _this.professionalSkills.push(professionalSkill);
            }
            else {
                _this.professionalSkills.push(professionalSkill);
            }
        };
        this.getUniversity = function () {
            return _this.university;
        };
        this.setUniversity = function (uni) {
            if (_this.university == undefined) {
                _this.university = [];
                _this.university.push(uni);
            }
            else {
                _this.university.push(uni);
            }
        };
        this.getHighSchool = function () {
            return _this.highSchool;
        };
        this.setHighSchool = function (hs) {
            if (_this.highSchool == undefined) {
                _this.highSchool = [];
                _this.highSchool.push(hs);
            }
            else {
                _this.highSchool.push(hs);
            }
        };
        this.getMobile = function () {
            return _this.mobile;
        };
        // logic of 10 digit mobile number
        this.setMobile = function (mobile) {
            if (mobile != undefined) {
                if (mobile.toString().length == 10) {
                    _this.mobile = mobile;
                }
                else {
                    console.log('mobile no should be 10 digit long');
                    _this.mobile = undefined;
                }
            }
            else {
                _this.mobile = undefined;
            }
        };
        this.getAddress = function () {
            return _this.address;
        };
        this.setAddress = function (address) {
            _this.address = address;
        };
        this.getInterstedIn = function () {
            return _this.interstedIn;
        };
        this.setInterstedIn = function (interstedIn) {
            _this.interstedIn = interstedIn;
        };
        this.getLangauges = function () {
            return _this.languages;
        };
        this.setLanguages = function (language) {
            if (_this.languages == undefined) {
                _this.languages = [];
                _this.languages.push(language);
            }
            else {
                _this.languages.push(language);
            }
        };
        this.getReligiousViews = function () {
            return _this.religiousViews;
        };
        this.setReligiousViews = function (religiousViews) {
            _this.religiousViews = religiousViews;
        };
        this.getPoliticalViews = function () {
            return _this.politicalViews;
        };
        this.setPoliticalViews = function (politicalViews) {
            _this.politicalViews = politicalViews;
        };
        this.getMother = function () {
            return _this.mother;
        };
        this.setMother = function (mother) {
            _this.mother = mother;
        };
        this.getFather = function () {
            return _this.father;
        };
        this.setFather = function (father) {
            _this.father = father;
        };
        this.getBrother = function () {
            return _this.brother;
        };
        this.setBrother = function (brother) {
            _this.brother = brother;
        };
        this.getSister = function () {
            return _this.sister;
        };
        this.setSister = function (sister) {
            _this.sister = sister;
        };
        this.getUncle = function () {
            return _this.uncle;
        };
        this.setUncle = function (uncle) {
            _this.uncle = uncle;
        };
        this.getAunt = function () {
            return _this.aunt;
        };
        this.setAunt = function (aunt) {
            _this.aunt = aunt;
        };
        this.getCousin = function () {
            return _this.cousin;
        };
        this.setCousin = function (cousin) {
            _this.cousin = cousin;
        };
        this.getAboutYou = function () {
            return _this.aboutYou;
        };
        this.setAboutYou = function (aboutYou) {
            _this.aboutYou = aboutYou;
        };
        this.getNickName = function () {
            return _this.nickName;
        };
        this.setNickName = function (nickName) {
            _this.nickName = nickName;
        };
        this.getMaidenName = function () {
            return _this.maidenName;
        };
        this.setMaidenName = function (maidenName) {
            _this.maidenName = maidenName;
        };
        this.getMarriedName = function () {
            return _this.marriedName;
        };
        this.setMarriedName = function (marriedName) {
            _this.marriedName = marriedName;
        };
        this.getFatherName = function () {
            return _this.fatherName;
        };
        this.setFatherName = function (fatherName) {
            _this.fatherName = fatherName;
        };
        this.getBirthName = function () {
            return _this.birthName;
        };
        this.setBirthName = function (birthName) {
            _this.birthName = birthName;
        };
        this.getFavQuotes = function () {
            return _this.favQuotes;
        };
        this.setFaveQuotes = function (favQuotes) {
            _this.favQuotes = favQuotes;
        };
        this.getBloodGroup = function () {
            return _this.bloodGroup;
        };
        this.setBloodGroup = function (bloodGroup) {
            _this.bloodGroup = bloodGroup;
        };
        this.getDonated = function () {
            return _this.donatedBlood;
        };
        this.setDonated = function (donatedBlood) {
            _this.donatedBlood = donatedBlood;
        };
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
        if (mobile != undefined) {
            if (mobile.toString().length == 10) {
                this.mobile = mobile;
            }
            else {
                console.log('mobile no should be 10 digit long');
                this.mobile = undefined;
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
    return FbAbout;
}());
var user1 = new FbAbout('something@gmail.com', Gender.Male, ["Infosys"], ["Chandigarh"], Relationship.Single, ["instagram"], "30 September", "1994", ["python", "js", "ts"], ["Punjab Uni"], ["HighSchool School"], 9055, "My Address", InterstedIn.Women, ["punjabi", "english"], "No religious views", "no political views", "My mother", "My father", undefined, undefined, undefined, undefined, undefined, "This is about me", "My nickname", undefined, undefined, undefined, "This is my birthName", "This my favequote", Blood.ABpositive, false);
console.log('');
console.log('--OVERVIEW--');
if (user1.getWorkplace()) {
    console.log("WorkPlaces: " + user1.getWorkplace());
}
if (user1.getLivedPlaces()) {
    console.log("From: " + user1.getLivedPlaces());
}
if (user1.getRelationships()) {
    console.log("RelationShip: " + user1.getRelationships());
}
console.log('');
console.log('--WORK AND EDUCATION--');
if (user1.getWorkplace()) {
    console.log("WorkPlaces: " + user1.getWorkplace());
}
if (user1.getProfessionalSkills()) {
    console.log("Professional Skills: " + user1.getProfessionalSkills());
}
if (user1.getUniversity()) {
    console.log("University: " + user1.getUniversity());
}
if (user1.getHighSchool()) {
    console.log("High School: " + user1.getHighSchool());
}
console.log('');
console.log('--PLACES YOU HAVE LIVED--');
if (user1.getLivedPlaces()) {
    console.log("From: " + user1.getLivedPlaces());
}
console.log('');
console.log('--CONTACT AND BASIC INFO--');
if (user1.getEmail()) {
    console.log("Email: " + user1.getEmail());
}
if (user1.getMobile()) {
    console.log("Mobile: " + user1.getMobile());
}
if (user1.getAddress()) {
    console.log("Address: " + user1.getAddress());
}
if (user1.getSocialSites()) {
    console.log("Social Links: " + user1.getSocialSites());
}
if (user1.getDateBirth()) {
    console.log("Date of birth: " + user1.getDateBirth());
}
if (user1.getYearBirth()) {
    console.log("Year of birth: " + user1.getYearBirth());
}
if (user1.getGender()) {
    console.log("Gender: " + user1.getGender());
}
if (user1.getInterstedIn()) {
    console.log("Intersted In: " + user1.getInterstedIn());
}
if (user1.getLangauges()) {
    console.log("Languages: " + user1.getLangauges());
}
if (user1.getReligiousViews()) {
    console.log("Religious Views: " + user1.getReligiousViews());
}
if (user1.getPoliticalViews()) {
    console.log("Political Views: " + user1.getPoliticalViews());
}
if (user1.getRelationships()) {
    console.log("RelationShip: " + user1.getRelationships());
}
if (user1.getMother() || user1.getFather() || user1.getSister() || user1.getBrother() || user1.getUncle() || user1.getAunt() || user1.getCousin()) {
    console.log('Family members');
    if (user1.getMother()) {
        console.log("Mother: " + user1.getMother());
    }
    if (user1.getFather()) {
        console.log("Father: " + user1.getFather());
    }
    if (user1.getSister()) {
        console.log("Sister: " + user1.getSister());
    }
    if (user1.getBrother()) {
        console.log("Brother: " + user1.getBrother());
    }
    if (user1.getUncle()) {
        console.log("Uncle: " + user1.getUncle());
    }
    if (user1.getAunt()) {
        console.log("Aunt: " + user1.getAunt());
    }
    if (user1.getCousin()) {
        console.log("Cousin: " + user1.getCousin());
    }
}
console.log('');
console.log('--DETAILS ABOUT YOU--');
if (user1.getAboutYou()) {
    console.log("About: " + user1.getAboutYou());
}
if (user1.getNickName() || user1.getMaidenName() || user1.getMarriedName() || user1.getFatherName() || user1.getBirthName()) {
    console.log("Other Names");
    if (user1.getNickName()) {
        console.log("Nick Name: " + user1.getNickName());
    }
    if (user1.getBirthName()) {
        console.log("Birth Name: " + user1.getBirthName());
    }
    if (user1.getFatherName()) {
        console.log("Father Name: " + user1.getFatherName());
    }
    if (user1.getMaidenName()) {
        console.log("Maiden Name: " + user1.getMaidenName());
    }
    if (user1.getMarriedName()) {
        console.log("Married Name: " + user1.getMarriedName());
    }
}
if (user1.getFavQuotes()) {
    console.log("Favourite quote: " + user1.getFavQuotes());
}
if (user1.getBloodGroup() || user1.getDonated()) {
    console.log("Blood Donations");
    if (user1.getBloodGroup()) {
        console.log("Blood Group: " + user1.getBloodGroup());
    }
    if (user1.getDonated()) {
        console.log("Have Donated Blood: Yes");
    }
    if (user1.getDonated() == false) {
        console.log("Have Donated Blood: Not Yet");
    }
}
console.log('');
console.log('--LIFE EVENTS--');
if (user1.generateDOB()) {
    console.log("Date of birth: " + user1.generateDOB());
}
console.log('');
console.log('changing mobile number to 10 digits');
user1.setMobile(9041950140);
if (user1.getMobile()) {
    console.log("Mobile: " + user1.getMobile());
}
console.log('');
console.log('adding one more lived place');
user1.setLivedPlaces('Pune');
if (user1.getLivedPlaces()) {
    console.log("From: " + user1.getLivedPlaces());
}
console.log('');
user1.setHighSchool('HighSchool 2');
console.log('adding highschool and getting all education details i.e university and high school');
if (user1.getEducation()) {
    console.log("Education: " + user1.getEducation());
}
