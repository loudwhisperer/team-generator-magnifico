function manager(data){
    const html = []
    data.forEach(member => {
        html.push(`<div>
        <p>${member.name}</p>
        <p>${member.id}</p>
        <p>${member.email}</p>
        <p>${member.officenumber}</p>
        </div>`);
    })
    return html.join('')
}

function intern(data) {
  const html = [];
  data.forEach((member) => {
    html.push(`<div>
        <p>${member.name}</p>
        <p>${member.id}</p>
        <p>${member.email}</p>
        <p>${member.school}</p>
        </div>`);
  });
  return html.join("");
}

function engineer(data) {
  const html = [];
  data.forEach((member) => {
    html.push(`<div>
        <p>${member.name}</p>
        <p>${member.id}</p>
        <p>${member.email}</p>
        <p>${member.github}</p>
        </div>);
  });
  return html.join("");
}

function teamMaker(members){
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${manager(members.filter((member) => member.getRole() === "Manager"))}
    ${engineer(members.filter((member) => member.getRole() === "Engineer"))}
    ${intern(members.filter((member) => member.getRole() === "Intern"))}
</body>
</html>`;
}

module.exports = teamMaker