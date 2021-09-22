// Selectet element
var elForm = document.querySelector('.form');
var elUserName = document.querySelector('.inputusername');
var elLastName = document.querySelector('.inputlastname');
var elList = document.querySelector('.list')
// Additional variables

var userInfo = [];
var user
function userAdd(name, lastname) {
   var todo = {
      id: userInfo.length + 1,
      UserName: name,
      LastName: lastname,
   };

   userInfo.push(todo);
   console.log(userInfo);
}

// Listening form

elForm.addEventListener('submit', function(evt){
   evt.preventDefault();

   var userName = elUserName.value.trim();
   var lastName = elLastName.value.trim();
   elUserName.value = null;
   elLastName.value = null;

   userAdd(userName, lastName);

   elList.innerHTML = null;

   for (var item of userInfo) {

      var newImg = document.createElement('img');
      newImg.setAttribute('scr', 'https://www.seekpng.com/png/full/367-3670099_delete-comments-delete-icon-svg.png');
      newImg.setAttribute('width', '20');
      newImg.setAttribute('height', '20');
      var newBtn = document.createElement('button');
      newBtn.appendChild(newImg);
      var newLi = document.createElement('li');
      newLi.textContent = item.id + ':  ' + item.UserName + '  ' + item.LastName + ';';
      newLi.appendChild(newBtn);
      newLi.setAttribute('display', 'flex');
      newLi.setAttribute('align-items', 'center');
      newLi.setAttribute('justify-content', 'space-between');
		elList.appendChild(newLi);
   }
})