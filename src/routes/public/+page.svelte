<script>
	import headerPackage from '$lib/scripts/packages.js';
	import font from '$lib/scripts/font.js';
	import basicDeatils from '$lib/scripts/basicdetails.js';
	import educateFunction from '$lib/scripts/education.js';
	import experienceFunction from '$lib/scripts/experience.js';
	import projectFunction from '$lib/scripts/projects.js';
	import skillsFunction from '$lib/scripts/skills.js';
	import achievementsFunction from '$lib/scripts/achievements.js';
	import { fade, scale, slide } from 'svelte/transition';
	import Glowbtn from '../../lib/components/comps/glowbtn.svelte';

	let latexGenerated = 'hello';

    // Pagination Component
	let progressTracker = 0;
	let stepArray = [true, false, false, false,false,false,false];

	function forward() {
        merger()
		if (progressTracker < stepArray.length-1) {
			stepArray[progressTracker] = false;
            console.log(progressTracker+'Before')
			progressTracker++;
		}
		if (progressTracker < stepArray.length) {
            console.log(progressTracker+'After')
			stepArray[progressTracker] = true;
		}
	}
    function backward() {
		if (progressTracker > 0) {
			stepArray[progressTracker] = false;
			progressTracker--;
		}
		if (progressTracker >= 0) {
			stepArray[progressTracker] = true;
		}
	}

	const userDetails = {
		firstName: '',
		lastName: '',
		contact: '',
		email: '',
		city: '',
		state: '',
		pincode: Number,
		linkedinUsername: '',
		gitUsername: ''
	};

	let educationVar = {
		vis: false,
		name: '',
		degree: '',
		gradeTitle: '',
		grade: '',
		city: '',
		state: '',
		endMonth: '',
		endYear: ''
	};
	const experienceVar = {
		companyName: '',
		startMonth: '',
		startYear: '',
		endMonth: '',
		endYear: '',
		city: '',
		state: '',
		designation: '',
		achievements: ['', '', '', ''],
		vis: true
	};

	let projectVar = {
		title: '',
		projectMonth: '',
		projectYear: '',
		skills: [],
		achievements: ['', '', ''],
		vis: false
	};
	let skillsVar = {
		vis: false,
		title: '',
		skillSet: []
	};
	let achievementVar = {
		title: ' ',
		lists: [],
		vis: true
	};
	let experience = [];
    let education = [];
	let projects = [];
	let techskills = [];


	function addExperience() {
		console.log('Adding new experience...');
		experience.push(JSON.parse(JSON.stringify(experienceVar)));
		experience = experience;
	}
	function deleteExp(index) {
		experience.splice(index, 1);
		experience = experience;
	}

    function addEducation() {
		console.log('Adding new education...');
		education.push(JSON.parse(JSON.stringify(educationVar)));
		education = education;
	}
	function deleteEducation(index) {
		education.splice(index, 1);
		education = education;
	}

	function addProject() {
		console.log('Adding new Project...');
		projects.push(JSON.parse(JSON.stringify(projectVar)));
		projects = projects;
	}
    function deleteProject(index) {
		projects.splice(index, 1);
		projects = projects;
	}
    let proj_skills=[]

    function addProjectSkill(project_index){
        if (proj_skills[project_index] !== '') {
            projects[project_index].skills.push(proj_skills[project_index])
            projects[project_index].skills = projects[project_index].skills
        }
        proj_skills[project_index]=''
    }
    function deleteProjectSkill(project_index,skill_index){
        projects[project_index].skills.splice(skill_index,1);
        projects[project_index].skills =  projects[project_index].skills
    }

    function addTechSkills() {
		console.log('Adding new Skill Section...');
		techskills.push(JSON.parse(JSON.stringify(skillsVar)));
		techskills = techskills;
	}

    function deleteTechSkills(index) {
		techskills.splice(index, 1);
		techskills = techskills;
	}

    let tech_skill_list=[]

    function addSkill(project_index){
        if (tech_skill_list[project_index] !== '') {
            techskills[project_index].skillSet.push(tech_skill_list[project_index])
            techskills[project_index].skillSet = techskills[project_index].skillSet
        }
        tech_skill_list[project_index]=''
    }

    function deleteSkill(project_index,skill_index){
        techskills[project_index].skillSet.splice(skill_index,1);
        techskills[project_index].skillSet =  techskills[project_index].skillSet
    }

    function addAchievement() {
		console.log('Adding new Achievement...');
        achievementVar.lists.push('')
		achievementVar.lists = achievementVar.lists
	}
    function deleteAchievement(index) {
		achievementVar.lists.splice(index, 1);
		achievementVar.lists = achievementVar.lists;
	}


	function merger() {
		latexGenerated =
			headerPackage +
			' ' +
			font +
			' ' +
			String.raw`\begin{document}  ` +
			basicDeatils(
				userDetails.firstName,
				userDetails.lastName,
				userDetails.contact,
				userDetails.email,
				userDetails.city,
				userDetails.state,
				userDetails.pincode,
				userDetails.linkedinUsername,
				userDetails.gitUsername
			) +
			educateFunction(education) +
			experienceFunction(experience) +
			projectFunction(projects) +
			skillsFunction(techskills) +
			achievementsFunction(achievementVar) +
			String.raw`\end{document}`;
	}
</script>

<!-- beautiful multi step form  -->
<div class="min-h-screen p-6 bg-gray-100 flex ">
	<div class="container max-w-screen-lg mt-20 mx-auto">
		<div
        >
			<div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <!-- Personal Details -->
                {#if stepArray[0]}
                <div 
                in:scale={{delay:100,duration:300,start:1.1}}
                class="flex flex-col min-h-64 md:flex-row p-4 px-4 md:p-8 mb-6">
                    <div class="text-gray-600">
						<p class="font-medium text-lg">Personal Details</p>
						<p>Please fill out all the fields.</p>
					</div>
                    <div class="w-full flex flex-col sm:px-3 ">
                        <div class="flex flex-col sm:flex-row w-full my-2 ">
                            <div class="w-full flex flex-col px-1  my-2 sm:my-0">
                                <div class="relative">
                                    <input 
                                    bind:value={userDetails.firstName}
                                    type="text" id="firstname" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="firstname" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">First Name</label>
                                </div>
                            </div>
                            <div class="w-full flex flex-col px-1  my-2 sm:my-0">
                                <div class="relative">
                                    
                                    <input type="text" 
                                    bind:value={userDetails.lastName}
                                    id="lastname" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="lastname" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full flex flex-col px-1  my-2 sm:my-0">
                                <div class="relative">
                                    <input 
                                    bind:value={userDetails.city}
                                    type="text" id="user_city" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="user_city" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        City</label>
                                </div>
                            </div>
                            <div class="w-full flex flex-col px-1  my-2 sm:my-0">
                                <div class="relative">
                                    <input type="text" 
                                    bind:value={userDetails.state}
                                    id="user_state" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="user_state" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        State</label>
                                </div>
                            </div>
                            <div class="w-full flex flex-col px-1  my-2 sm:my-0">
                                <div class="relative">
                                    <input type="number" 
                                    bind:value={userDetails.pincode}
                                    id="user_pincode" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="user_pincode" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Pincode</label>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0">
                                <div class="relative">
                                    <input type="email"
                                    bind:value={userDetails.email}
                                    id="user_email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="user_email" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Email</label>
                                </div>
                            </div>
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0">
                                <div class="relative">
                                    <input type="number" 
                                    bind:value={userDetails.contact }
                                    id="user_number" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="user_number" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Phone Number</label>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0 ">
                                <div class="relative">
                                    <input type="text"
                                    bind:value={userDetails.gitUsername}
                                    id="user_github" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="user_github" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Github (Username Only)</label>
                                        
                                </div>
                            </div>
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0">
                                <div class="relative">
                                    <input 
                                    bind:value={userDetails.linkedinUsername}
                                    type="text" id="user_linkedin" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="user_linkedin" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        LinkedIn (Username Only)</label>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                        
                </div>
                {/if}


                <!-- Education Details -->
                {#if stepArray[1]}
                <div 
                in:scale={{delay:100,duration:300,start:1.1}}
                class="flex flex-col min-h-64 md:flex-row p-4 px-4 md:p-8 mb-6">
                        
                    <div class="text-gray-600">
						<p class="font-medium text-lg">Education Details</p>
						<p>Please fill out all the fields.</p>
					</div>
                    
                    <div class="w-full flex flex-col sm:px-3 ">
                        {#each education as item,index }
                        <div in:slide={{duration:500}} out:slide={{duration:500}} >
                        <div class="flex flex-col sm:flex-row w-full my-2 ">
                            <div class="w-full flex flex-row items-center px-1 my-2 sm:my-0">
                                <div class="relative w-full">
                                    <input type="text" 
                                    bind:value={item.name}
                                    id="edu_name{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="edu_name{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        College/School Name {item.name}  </label>
                                </div>
                                <button on:click={()=>{deleteEducation(index)}} class="w-10 p-1 text-red-600 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="w-7" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                      </svg>
                                </button>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2 ">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0">
                                <div class="relative">
                                    <input type="text" 
                                    bind:value={item.degree}
                                    id="edu_degree{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="edu_degree{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Degree With Branch </label>
                                </div>
                                <p class=" px-2 text-xs sm:text-sm  text-gray-500" >Eg: Bachelor of Science in Computer Science</p>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0">
                                <div class="relative">
                                    <input type="text" 
                                    bind:value={item.city}
                                    id="edu_city{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="edu_city{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        City</label>
                                </div>
                            </div>
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0">
                                <div class="relative">
                                    <input type="text" 
                                    bind:value={item.state}
                                    id="edu_state{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="edu_state{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        State</label>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0 ">
                                <div class="relative">
                                    <label for="edu_end_month{index}" class="block text-sm font-medium text-gray-600 ">
                                        End Month</label>
                                    <select 
                                    bind:value={item.endMonth}
                                    id="edu_end_month{index}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option value="">Select Month</option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                        
                                </div>
                            </div>
                            <div class="w-full flex flex-col px-1 my-2 sm:my-3">
                                <div class="relative">
                                    <input type="number" 
                                    bind:value={item.endYear}
                                    id="edu_end_year{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="edu_end_year{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        End Year</label>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0 ">
                                <div class="relative">
                                    <label for="gradeTitle{index}" class="block text-sm font-medium text-gray-600 ">
                                        Grade Title</label>
                                    <select 
                                    bind:value={item.gradeTitle}
                                    id="gradeTitle{index}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                      <option selected>Choose grade Type</option>
                                      <option value="cgpa">CGPA</option>
                                      <option value="percentage">Percentage</option>
                                    </select>
                                        
                                </div>
                            </div>
                            <div class="w-full flex flex-col px-1 my-2 sm:my-3">
                                <div class="relative">
                                    <input type="number" 
                                    bind:value={item.grade}
                                    id="edu_grade{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="edu_grade{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Grade</label>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/each}
                        <div class="w-full flex flex-row justify-center">
                            <button 
                            on:click={()=>addEducation()}
                            type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Add Education 
                            </button>
                        </div>
                    </div>
                    
                </div>
                {/if}


                <!-- Experience Details -->
                {#if stepArray[2]}
                <div 
                in:scale={{delay:100,duration:300,start:1.1}}
                
                class="flex flex-col min-h-64 md:flex-row p-4 px-4 md:p-8 mb-6">
                    <div class="text-gray-600">
						<p class="font-medium text-lg">Experience Details</p>
						<p>Please fill out all the fields.</p>
					</div>


                    <div class="w-full flex flex-col sm:px-3 ">
                    {#each experience as item,index }
                        <div in:slide={{duration:500}} out:slide={{duration:500}} >
                    
                        <div class="flex flex-col sm:flex-row w-full my-2 ">
                            <div class="w-full flex flex-row items-center px-1 my-2 sm:my-0">
                                <div class="relative w-full">
                                    <input 
                                    bind:value={item.companyName}
                                    type="text" id="exp_company_{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="exp_company_{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Company's Name </label>
                                </div>
                                <button 
                                on:click={()=>{deleteExp(index)}}
                                class="w-10 p-1 text-red-600 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="w-7" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                      </svg>
                                </button>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2 ">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0">
                                <div class="relative">
                                    <input 
                                    bind:value={item.designation}
                                    type="text" id="exp_desig{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="exp_desig{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Designation </label>
                                </div>
                                <!-- <p class=" px-2 text-xs sm:text-sm  text-gray-500" >Eg: Bachelor of Science in Computer Science</p> -->
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0">
                                <div class="relative">
                                    <input 
                                    bind:value={item.city}
                                    type="text" id="exp_city_{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="exp_city_{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        City</label>
                                </div>
                            </div>
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0">
                                <div class="relative">
                                    <input 
                                    bind:value={item.state}
                                    type="text" id="exp_state_{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="exp_state_{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        State</label>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0 ">
                                <div class="relative">
                                    <label for="exp_startmonth_{index}" class="block text-sm font-medium text-gray-600 ">
                                        Start Month</label>
                                    <select 
                                    bind:value={item.startMonth}
                                    id="exp_startmonth_{index}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option value="">Select Month</option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                        
                                </div>
                            </div>
                            <div class="w-full flex flex-col px-1 my-2 sm:my-3">
                                <div class="relative">
                                    <input 
                                    bind:value={item.startYear}
                                    type="number" id="exp_startyear_{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="exp_startyear_{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Start Year</label>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0 ">
                                <div class="relative">
                                    <label for="endMonth{index}" class="block text-sm font-medium text-gray-600 ">
                                        End Month</label>
                                    <select 
                                    bind:value={item.endMonth}
                                    id="endMonth{index}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option value="">Select Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                    </select>
                                        
                                </div>
                            </div>
                            <div class="w-full flex flex-col px-1 my-2 sm:my-3">
                                <div class="relative">
                                    <input 
                                    bind:value={item.endYear}
                                    type="number" id="end_year_{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="end_year_{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        End Year</label>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0 ">
                                <div class="relative">
                                    <label for="" class="block text-sm font-medium text-gray-600 ">
                                        Enter Your Contributions</label>
                                {#each item.achievements as element }
                                    <input 
                                    bind:value={element}
                                    type="text" class="w-full my-1 px-2.5 pb-2.5 pt-2.5 text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Enter Work" >  
                                {/each}
                                </div>
                            </div>
                        </div>
                        </div>
                        {/each}
                        <div class="w-full flex flex-row justify-center">
                            <button 
                            on:click={addExperience}
                            type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Add Experience 
                            </button>
                        </div>
                    </div>
                        
                        
                </div>
                {/if}


                <!-- Project Details -->
                {#if stepArray[3]}
                <div 
                in:scale={{delay:100,duration:300,start:1.1}}
                
                class="flex flex-col min-h-64 md:flex-row p-4 px-4 md:p-8 mb-6">
                    <div class="text-gray-600">
						<p class="font-medium text-lg">Project Details</p>
						<p>Please fill out all the fields.</p>
					</div>


                    <div class="w-full flex flex-col sm:px-3 ">
                        <!-- Top -->
                    {#each projects as item,index }
                    <div in:slide={{duration:500}} out:slide={{duration:500}} >
                        <div class="flex flex-col sm:flex-row w-full my-2 ">
                            <div class="w-full flex flex-row items-center px-1 my-2 sm:my-0">
                                <div class="relative w-full">
                                    <input 
                                    bind:value={item.title}
                                    type="text" id="project_name_{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="project_name_{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Project's Name </label>
                                </div>
                                <button 
                                on:click={()=>{deleteProject(index)}}
                                class="w-10 p-1 text-red-600 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="w-7" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                      </svg>
                                </button>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0 ">
                                <div class="relative">
                                    <label for="proj_month_{index}" class="block text-sm font-medium text-gray-600 ">
                                        Project Month</label>
                                    <select id="proj_month_{index}" 
                                    bind:value={item.projectMonth}
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option value="">Select Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                    </select>
                                        
                                </div>
                            </div>
                            <div class="w-full flex flex-col px-1 my-2 sm:my-3">
                                <div class="relative">
                                    <input 
                                    bind:value={item.projectYear}
                                    type="number" id="project_year_{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="project_year_{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Project Year</label>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0 ">
                                <div class="relative">
                                    <label for="" class="block text-sm font-medium text-gray-600 ">
                                        Achievements</label>
                                        {#each item.achievements as element }
                                        <input bind:value={element} type="text" class="w-full my-1 px-2.5 pb-2.5 pt-2.5 text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Enter Work done" >  
                                        {/each}
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full relative">
                                <input 
                                bind:value={proj_skills[index]}
                                type="text" id="project_skills_{index}" class=" block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label for="project_skills_{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                    Add Skills Used</label>
                            </div>
                            <button 
                            on:click={()=>{addProjectSkill(index)}}
                            class="w-10 p-1 text-black rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7 m-1" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                                  </svg>
                            </button>
                        </div>
                        <div class="flex flex-col overflow-hidden sm:flex-row flex-wrap w-full my-2">
                            {#each item.skills as skill,skillindex }
                                <button
                                on:click={()=>{deleteProjectSkill(index,skillindex)}}
                                class="inline-flex m-1 items-center bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-sm">
                                    <svg class="cursor-pointer h-4 w-4 text-green-900"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <div class="select-none">
                                        {skill}
                                    </div>
                                </button>
                            {/each}

                        </div>
                    </div>
                    {/each}

                        <div class="w-full flex flex-row justify-center mt-5">
                            <button 
                            on:click={addProject}
                            type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Add Project 
                            </button>
                        </div>
                    </div> 
                </div>
                {/if}


                <!-- Technical Skills -->
                {#if stepArray[4]}
                <div 
                in:scale={{delay:100,duration:300,start:1.1}}
                class="flex flex-col min-h-64 md:flex-row p-4 px-4 md:p-8 mb-6">
                    <div class="text-gray-600">
						<p class="font-medium text-lg">Enter Your Skills</p>
						<p>Please fill out all the fields.</p>
					</div>
                    <div class="w-full flex flex-col sm:px-3 ">
                        <!-- Top -->
                        {#each techskills as item,index}
                        <div in:slide={{duration:500}} out:slide={{duration:500}} >

                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full flex flex-col px-1 my-2 sm:my-0 ">
                                <div class="flex flex-row w-full">
                                    <div class="relative w-full">
                                        <input 
                                        bind:value={item.title}
                                        type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                            Title</label>
                                    </div>
                                    <button 
                                    on:click={()=>{deleteTechSkills(index)}}
                                    class="w-10 p-1 text-red-600 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="w-7" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                        </svg>
                                    </button>
                                </div>
                                <p class="mx-1 text-xs sm:text-sm text-gray-600">Eg: Back-End /Languages</p>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="w-full relative">
                                <input 
                                bind:value={tech_skill_list[index]}
                                type="text" id="project_skills_{index}" class=" block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label for="project_skills_{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                    Add Skills Used</label>
                            </div>
                            <button 
                            on:click={()=>{addSkill(index)}}
                            class="w-10 p-1 text-black rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7 m-1" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                                  </svg>
                            </button>
                        </div>
                        <div class="flex flex-col overflow-hidden sm:flex-row flex-wrap w-full my-2">
                            {#each item.skillSet as skill,skillindex }
                                <button
                                on:click={()=>{deleteSkill(index,skillindex)}}
                                class="inline-flex m-1 items-center bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-sm">
                                    <svg class="cursor-pointer h-4 w-4 text-green-900"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <div class="select-none">
                                        {skill}
                                    </div>
                                </button>
                            {/each}

                        </div>
                        </div>
                        {/each}

                        <div class="w-full flex flex-row justify-center mt-5">
                            <button 
                            on:click={addTechSkills}
                            type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Add Skill Section 
                            </button>
                        </div>
                    </div> 
                </div>
                {/if}

                <!-- certificates / extracurricular -->
                {#if stepArray[5]}
                <!-- Leadership Skills -->
                <div 
                in:scale={{delay:100,duration:300,start:1.1}}
                class="flex flex-col min-h-64 md:flex-row p-4 px-4 md:p-8 mb-6">
                    <div class="text-gray-600">
						<p class="font-medium text-lg">Enter Your Extra's</p>
						<p>Please fill out all the fields.</p>
					</div>
                    <div class="w-full flex flex-col sm:px-3 ">
                        <!-- Top -->
                        <div class="flex flex-col sm:flex-row w-full my-2">
                            <div class="flex flex-col sm:flex-row w-full my-2">
                                <div class="w-full flex flex-col px-1 my-2 sm:my-0 ">
                                    <div class="relative">
                                        <label for="countries" class="block text-sm font-medium text-gray-600 ">
                                            Select Category</label>
                                        <select id="countries" 
                                        bind:value={achievementVar.title}
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option value=" " selected>Select Title</option>
                                            <option value="Certificates">Certificates</option>
                                            <option value="Achievements">Achievements</option>
                                            <option value="Leadership">Leadership</option>
                                            <option value="Extra Curricular">Extra Curricular</option>
                                        </select>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        {#each achievementVar.lists as item,index }
                        <div class="w-full flex flex-col px-1 my-2 sm:my-0 ">
                            <div class="flex flex-row w-full">
                                <div class="relative w-full">
                                    <input 
                                    bind:value={item}
                                    type="text" id="achievement{index}" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="achievement{index}" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Write Achievement</label>
                                </div>
                                <button 
                                on:click={()=>{deleteAchievement(index)}}
                                class="w-10 p-1 text-red-600 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="w-7" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                    </svg>
                                </button>
                            </div>
                            <p class="m-1 text-gray-400 " >Eg: Crossed 4000 rating on Codeforces</p>
                        </div>
                        {/each}

                        <div class="w-full flex flex-row justify-center mt-5">
                            <button 
                            on:click={addAchievement}
                            type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Add Achievements
                            </button>
                        </div>
                    </div> 
                </div>
                {/if}

                {#if stepArray[6]}
                <div 
                in:scale={{delay:100,duration:300,start:1.1}}
                class="flex flex-col min-h-64 p-4 px-4 md:p-8 mb-6">
                    <div class="w-full flex flex-row justify-center">
                        <img class="w-32 h-32" src="/verified.png" alt="">
                    </div>
                    <div class="w-full text-center mb-5">
                        <h1 class="font-bold text-lg ">ATS Friendly Resume Created</h1>
                    </div>

                    <form action="https://www.overleaf.com/docs" method="post" target="_blank">
                        <textarea rows="8" cols="60" name="snip" bind:value={latexGenerated} hidden></textarea>

                        <div class="flex items-center justify-center mb-4 px-3 py-1">
                            <button
                                class=""
                                value="Open in Overleaf"
                                type="submit"
                            >
                            <Glowbtn title='View PDF' />
                            </button>
                        </div>
                    </form>
                </div>
                {/if}

                <!-- pagination button -->
                <div class="w-full flex flex-row justify-end">
                    <button 
                    type="button" 
                    on:click={backward}
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Previous
                    </button>
                        <button 
                        type="button" 
                        on:click={forward}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Next 
                        </button>
                </div>

            </div>
		</div>
	</div>
</div>
