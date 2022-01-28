const getJob = async() => await ((await fetch("./data.json")).json()) ;
const jobContainer = document.getElementById("main-container");
const allJobs = getJob().then(res =>{
        for(i=0 ; i<res.length ; i++){
            const subJobContainer = document.createElement("div");
            const div1 = document.createElement("div");
            const div2 = document.createElement("div");
            const logo = document.createElement("img");
            logo.classList.add("company-logo")
            logo.src = res[i]['logo'];
            const job = document.createElement('h1');
            job.innerHTML = res[i]['company'];
            job.classList.add("company-name");
            const pos = document.createElement("h2");
            pos.innerHTML = res[i]['position'];
            const date = document.createElement("p");
            date.innerHTML = res[i]['postedAt'];
            const dur = document.createElement("p");
            dur.innerHTML = res[i]['contract'];
            const loc = document.createElement("p");
            loc.innerHTML = res[i]['location'];
            const role = document.createElement("p");
            role.innerHTML = res[i]["role"];
            const lang = document.createElement("p");
            lang.innerHTML = res[i]["languages"];
            const tools = document.createElement("p");
            tools.innerHTML = res[i]["tools"];
            subJobContainer.appendChild(logo);
            div1.appendChild(job);
            if (res[i]["new"] === true) {
                const newLogo = document.createElement("span");
                newLogo.innerHTML = "NEW!"; 
                newLogo.classList.add("new");
                div1.append(newLogo);
            }
            if (res[i]["featured"] === true) {
                const newFeature = document.createElement("span");
                newFeature.innerHTML = "FEATURED"; 
                div1.append(newFeature);
            }
            div1.appendChild(pos);
            div1.appendChild(date);
            div1.appendChild(dur);
            div1.appendChild(loc);
            subJobContainer.appendChild(div1);
            div1.classList.add("info");
            div2.appendChild(role);
            div2.appendChild(lang);
            div2.appendChild(tools);
            subJobContainer.appendChild(div2);
            div2.classList.add("skills");
            jobContainer.appendChild(subJobContainer);
            subJobContainer.classList.add("jobs")
        }
});
