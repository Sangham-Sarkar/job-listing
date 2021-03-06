let filterState = [];
const getJob = async () => await (await fetch("./data.json")).json();
const jobContainer = document.getElementById("main-container");
const searchBox = document.getElementById("searchBox");

let cardTemplate = ``

const jobCard = () => {
  getJob().then(jobs => {
    for (let job of jobs) {
      cardTemplate += `<div class="job">
        <img class="logo" src='${job.logo}'/>
        <div class="context">
          <h2 class="companyName">${job.company}</h2>
          ${job.new ? '<span class="newTag">NEW!</span>' : ''}
          ${job.featured ? '<span class="featureTag">FEATURED</span>':''}
          <h2 class="pos">${job.position}</h2>
          <p>
            <span class="subInfo">${job.postedAt}</span>
            <span class="dot">●</span>
            <span class="subInfo">${job.contract}</span>
            <span class="dot">●</span>
            <span class="subInfo">${job.location}</span>
          </p>
        </div>
        ${skillCreator(job.role,job.tools,job.languages)}
      </div>  
      `
    }
    jobContainer.innerHTML =  cardTemplate;
  })
}

const skillCreator = (role,tools,languages) =>{
  return `<div class="skills">
    <span class="skillBtn" onclick="checker(this)">${role}</span>
    ${tools.map(tool => `<span class="skillBtn" onclick="checker(this)">${tool}</span>`).join('')}
    ${languages.map(lang => `<span class="skillBtn" onclick="checker(this)">${lang}</span>`).join('')}
    </div>
  `
}

const checker = (e) =>{
  if (filterState.includes(e.innerHTML)){
  }else{
    filterState.push(e.innerHTML);
    filterBarCreator();
    console.log(filterState);
  }
}

const filterChecker = (job) =>{
  console.log(job);
  if(filterState.length != 0){
    return true;
  }else{
    return false;
  }
}

const filterBarCreator = () =>{
  let template = ``;
  template += `<div class="searchFilterBox">
  ${filterState.map(filter => `<div class="filters">
  <div class="filterValues">${filter}</div>
    <div class="removeBtn">
      <img src="./images/icon-remove.svg"/>
    </div>
  </div>`
    ).join('')}
    </div>
    <div id="clearBtn" onclick="removefnc(this)">Clear</div>`
    searchBox.innerHTML = template;
}

const removefnc = (e) =>{
  filterState = [];
  searchBox.innerHTML = '';
}

jobCard();