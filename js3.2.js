
let namePerson = prompt('Ваше имя?');
let login = (namePerson == 'Артём' || 'артём' || 'Артем' || 'артем') ? 'Директор' :
	(namePerson == 'Максим' || 'максим') ? 'Преподаватель' :
	'Студент';
	console.log(login);