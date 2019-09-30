let keylist = "abcdefghijklmnopqrstuwvxyz123456789!@#$%&^*?";
let tmp = "";

function generatePass(plenth) {
    tmp = "";
    for (i = 0; i < plenth; i++) {
        tmp += keylist.charAt(Math.floor(Math.random() * keylist.length));
    }
    return tmp;
};

function populateForm(enterLength) {
    document.passGen.output.value = generatePass(enterLength);
}