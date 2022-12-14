let keys = [];
let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let contactNoEl = document.getElementById("contactnumber");
let contactMsgEr = document.getElementById("contactErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let addressEl = document.getElementById("address");

let clgNmEl = document.getElementById("collegeName");
let clgNmErrMsgEl = document.getElementById("clgErrMsg");

let clgIdEl = document.getElementById("collegeId");
let clgIdErrMsgEl = document.getElementById("clgIdErrMsg");


let genderFirstEl = document.getElementById("genderFirst");
let genderSecondEl = document.getElementById("genderSecond");
let genderThreeEl = document.getElementById("genderThree");
let genderFourEl = document.getElementById("genderFour");

let event1El = document.getElementById("event1");
let event2El = document.getElementById("event2");
let event3El = document.getElementById("event3");

let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let myFormEl = document.getElementById("myForm");

let formData = {
    name: "",
    mobile: "",
    email: "",
    address: "",
    clgname: "",
    clgid: "",
    events: [],
    year: "First",
    status: "Active",
    gender: "Male"
};

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }

    formData.name = event.target.value;
});

contactNoEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        contactMsgEr.textContent = "Required*";
    } else {
        contactMsgEr.textContent = "";
    }

    formData.mobile = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }

    formData.email = event.target.value;
});

clgNmEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        clgNmErrMsgEl.textContent = "Required*";
    } else {
        clgNmErrMsgEl.textContent = "";
    }

    formData.clgname = event.target.value;
});

clgIdEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        clgIdErrMsgEl.textContent = "Required*";
    } else {
        clgIdErrMsgEl.textContent = "";
    }

    formData.clgid = event.target.value;
});


genderFirstEl.addEventListener("change", function(event) {
    formData.year = event.target.value;
});
genderSecondEl.addEventListener("change", function(event) {
    formData.year = event.target.value;
});
genderThreeEl.addEventListener("change", function(event) {
    formData.year = event.target.value;
});
genderFourEl.addEventListener("change", function(event) {
    formData.year = event.target.value;
});


genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

function validateFormData(formData) {
    let {
        name,
        email,
        mobile,
        clgname,
        clgid,
        events
    } = formData;
    if (name === "") {
        nameErrMsgEl.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsgEl.textContent = "Required*";
    }
    if (mobile === "") {
        contactMsgEr.textContent = "Required*";
    }
    if (clgname === "") {
        clgNmErrMsgEl.textContent = "Required*";
    }
    if (clgid === "") {
        clgIdErrMsgEl.textContent = "Required*";
    }
    if (event1El.checked) {
        events.unshift("Hackathon");
    }
    if (event2El.checked) {
        events.unshift("Coding-Competition");
    }
    if (event3El.checked) {
        events.unshift("Ideas-Fund");
    }
}
let yourId = document.getElementById("yourId");

function submitFormData(formData) {
    formData.address = addressEl.value;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer ef34bef8979bd4e1bdc5ec6579ec2fc3b5017fbe9ffb694b3ae4c0e728c95c19",
        },
        body: JSON.stringify(formData)
    };

    let url = "https://gorest.co.in/public-api/users/";

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            alert("Succefully registered");

            if (jsonData.data.id === undefined) {
                yourId.textContent = "Email has already been taken";
            } else {
                yourId.textContent = "Note the ID : " + jsonData.data.id;
            }


        });
    localStorage.setItem(formData.email, JSON.stringify(formData));
    keys.unshift(formData.name);

}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
    submitFormData(formData);
});