fetch('json/guides.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  	const contentDiv = document.getElementsByClassName("content")[0];
  	for (const guide in data){
  		const guideDiv = document.createElement("div");
  		guideDiv.classList.add("guide");

  		const guideHeader = document.createElement('div');
  		guideHeader.classList.add("colorFull");
  		const guideName = document.createElement('h3');
  		guideName.textContent = guide.name;
  		guideHeader.appendChild(guideName);
  		guideDiv.appendChild(guideHeader);

  		const guideContent = document.createElement('div');
  		guideContent.classList.add("guideContent");

  		const guideImg = document.createElement("img");
  		guideImg.src = "../images/"+guide.img;
  		guideImg.alt = "Salmon River Guide "+ guide.name;
  		guideContent.appendChild(guideImg);

  		const certDiv = document.createElement("div");
  		const certH4 = document.createElement("h4");
  		certH4.textContent = "certification level:";
  		const certData = document.createElement("p");
  		const certSpan = document.createElement("span");
  		certSpan.textContent = guide.level;
  		certData.appendChild(certSpan);
  		certDiv.appendChild(certH4);
  		certDiv.appendChild(certData);
  		guideContent.appendChild(certDiv);

  		const expDiv = document.createElement("div");
  		const expH4 = document.createElement("h4");
  		expH4.textContent = "years of experience:";
  		const expData = document.createElement("p");
  		const expSpan = document.createElement("span");
  		expSpan.textContent = guide.experience;
  		expData.appendChild(expSpan);
  		expDiv.appendChild(expH4);
  		expDiv.appendChild(expData);
  		guideContent.appendChild(expDiv);

  		const emailDiv = document.createElement("div");
  		const emailH4 = document.createElement("h4");
  		emailH4.textContent = "contact:";
  		const emailData = document.createElement("p");
  		const emailSpan = document.createElement("span");
  		emailSpan.textContent = guide.email;
  		emailData.appendChild(emailSpan);
  		emailDiv.appendChild(emailH4);
  		emailDiv.appendChild(emailData);
  		guideContent.appendChild(emailDiv);

  		guideDiv.appendChild(guideContent);

  		const bio = document.createElement('p');
  		bio.textContent = guide.bio;
  		guideDiv.appendChild(bio);

  		contentDiv.appendChild(guideDiv);
  	}
  });