<script>
        import headerPackage from '$lib/scripts/packages.js'
        import font from '$lib/scripts/font.js'
        import basicDeatils from '$lib/scripts/basicdetails.js'
        import educateFunction from '$lib/scripts/education.js'
        import experienceFunction from '$lib/scripts/experience.js'
        import projectFunction from '$lib/scripts/projects.js'
        import skillsFunction from '$lib/scripts/skills.js'
        import achievementsFunction from '$lib/scripts/achievements.js'
        import { slide } from 'svelte/transition';
	import Navbar from '../../lib/components/navbar.svelte';
        let latexGenerated= 'hello'

        const userDetails = {
            firstName: '',
            lastName: '',
            contact: '',
            email: '',
            city: '',
            state: '',
            pincode:Number ,
            linkedinUsername: '',
            gitUsername: ''
            };

            let eduVar ={
                vis:false,
                name:'',
                degree:'',
                gradeTitle:'',
                grade:'',
                city:'',
                state:'',
                endMonth:'',
                endYear:'',
            }
            let experienceVar={
                companyName:'',
                startMonth:'',
                startYear:'',
                endMonth:'',
                endYear:'',
                city:'',
                state:'',
                designation:'',
                achievements:['','','',''],
                vis:false,
            }
            let projectVar={
                title:'',
                projectMonth:'',
                projectYear:'',
                skills:[],
                achievements:['','',''],
                vis:false
                ,
            }
            let skillsVar={
                vis:false,
                title:'',
                skillSet:[],
            }
            let achievementVar={
                title:' ',
                lists:[],
                vis:true,
            }
            // const experience = Array(10).fill(0).map(() => ({...experienceVar}));
           const experience= [{...experienceVar},{...experienceVar},{...experienceVar},{...experienceVar},{...experienceVar},{...experienceVar},{...experienceVar},{...experienceVar},{...experienceVar},{...experienceVar},]
           const education = [{...eduVar}, {...eduVar}, {...eduVar}, {...eduVar}, {...eduVar}, {...eduVar}, {...eduVar}, {...eduVar}];
           const projects = [{...projectVar}, {...projectVar}, {...projectVar}, {...projectVar}, {...projectVar}, {...projectVar}, {...projectVar}]; 
           const technicalSkills = [{...skillsVar},{...skillsVar},{...skillsVar},{...skillsVar},{...skillsVar}] 
            let eduFieldCount = 0
            let experienceFieldCount = 0
            let projectCount = 0
            let skillLine = 0
            let skillInputs = [];
            let techSkillInputs = [];

            function addEducation(index){

                if (index >= 0) {
                    education[index].vis = true
                    eduFieldCount++
                    } else if(index<0) {
                        education[-index-1].vis = false
                        eduFieldCount--
                }
            }
            function addExperience(index){
                if (index >= 0) {
                experience[index].vis = true
                experience[index].achievements = ['', '', '', '']
                experienceFieldCount++
                } else if(index<0) {
                        experience[-index-1].vis = false
                        experienceFieldCount--
                }
            }
            function addProject(index){
                if (index >= 0) {
                projects[index].vis = true
                projects[index].achievements = ['', '', '']
                projectCount++
                } else if(index<0) {
                    projects[-index-1].vis = false
                    projectCount--
                    }
            }
            function addSkillField(index){
                if (index >= 0) {
                technicalSkills[index].vis = true
                skillLine++
                } else if(index<0) {
                    technicalSkills[-index-1].vis = false
                    skillLine--
                }
            }

            function addSkill(index) {
                if (skillInputs[index] !== '') {
                    projects[index].skills = [...projects[index].skills, skillInputs[index]];
                    skillInputs[index] = '';
                }
            }
            function addTechSkill(index) {
                if (techSkillInputs[index] !== '') {
                    technicalSkills[index].skillSet = [...technicalSkills[index].skillSet, techSkillInputs[index]];
                    techSkillInputs[index] = '';
                }
            }
            function addAchievement() {
                if (achievementVar.lists[achievementVar.lists.length - 1] !== '') {
                    achievementVar.lists = [...achievementVar.lists, ''];
                }
            }
            function deleteAchievement() {
                if (achievementVar.lists.length > 0) {
                    achievementVar.lists = achievementVar.lists.slice(0, -1);
                }
            }
            function deleteSkill(index) {
                if (projects[index].skills.length > 0) {
                    projects[index].skills = projects[index].skills.slice(0, -1);
                }
            }

            function deleteTechSkill(index) {
                if (technicalSkills[index].skillSet.length > 0) {
                    technicalSkills[index].skillSet = technicalSkills[index].skillSet.slice(0, -1);
                }
            }
        

            function merger(){
                latexGenerated = headerPackage+ ' ' +font+' ' + 
                String.raw`\begin{document}  `+
                basicDeatils(userDetails.firstName,userDetails.lastName,userDetails.contact,userDetails.email,userDetails.city,userDetails.state,userDetails.pincode,userDetails.linkedinUsername,userDetails.gitUsername)
                +educateFunction(education)
                +experienceFunction(experience)
                +projectFunction(projects)
                +skillsFunction(technicalSkills)
                +achievementsFunction(achievementVar)
                +String.raw`\end{document} `
            }


</script>

<!-- Basic Details -->
 <div class=" w-full h-full pt-20 sm:pt-24">

 
  <div class="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="text-2xl py-4 px-6 bg-blue-900 text-white text-center font-bold uppercase">
        Basic Details 
    </div>
        <div class="mb-4 px-3 py-1 flex flex-row">
            <div class="w-full mr-5">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                   First Name
                </label>
                <input
                bind:value={userDetails.firstName}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter your name">
            </div>
            <div class="w-full">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                    Last Name
                </label>
                <input
                bind:value={userDetails.lastName}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter your name">
            </div>
        </div>
        <div class="mb-4 px-3 py-1 flex flex-row">
            <div class="w-full mr-5">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                   City
                </label>
                <input
                bind:value={userDetails.city}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter your name">
            </div>
            <div class="w-full mr-5">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                   State
                </label>
                <input
                bind:value={userDetails.state}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter your name">
            </div>
            <div class="w-full">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                    pincode
                </label>
                <input
                bind:value={userDetails.pincode}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="number" placeholder="Pincode">
            </div>
        </div>
        <div class="mb-4 px-3 py-1">
            <label class="block text-gray-700 font-bold mb-2" for="email">
                Email
            </label>
            <input
                bind:value={userDetails.email}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Enter your email">
        </div>
        <div class="mb-4 px-3 py-1">
            <label class="block text-gray-700 font-bold mb-2" for="email">
                Linkedin Username
            </label>
            <input
            bind:value={userDetails.linkedinUsername}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Enter your email">
        </div>
        <div class="mb-4 px-3 py-1">
            <label class="block text-gray-700 font-bold mb-2" for="email">
                Github Username
            </label>
            <input
            bind:value={userDetails.gitUsername}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Enter your email">
        </div>
        <div class="mb-4 px-3 py-1">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
                Phone Number
            </label>
            <input
            bind:value={userDetails.contact}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="number" placeholder="Enter your phone number">
        </div>
       
       
  </div>

    <!-- Education -->
<div class="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="text-2xl py-4 px-6 mb-4 bg-red-900 text-white text-center font-bold uppercase">
        Education 
    </div>

        {#each education as item,index }
            
        {#if item.vis}
        <div 
        in:slide={{ duration: 600, axis: 'y' }}
        out:slide={{ duration: 800, axis: 'y' }}
        >

        
        <div class="mb-4 px-3 py-1 ">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                   School/College Name
                </label>
                <input
                bind:value={item.name}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="collegeName{index}" type="text" placeholder="Enter Institution Name">
        </div>
        <div class="mb-4 px-3 py-1 ">
            <label class="block text-gray-700 font-bold mb-2" for="name">
               Degree with Branch
            </label>
            <input
            bind:value={item.degree}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="degree{index}" type="text" placeholder="Bachelor of Science in Computer Science ">
    </div>
        <div class="mb-4 px-3 py-1 flex flex-row">
            <div class="w-full mr-5">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                   city
                </label>
                <input
                bind:value={item.city}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="edcity{index}" type="text" placeholder="Enter Institution city">
            </div>
            <div class="w-full mr-5">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                   state
                </label>
                <input
                bind:value={item.state}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="edstate{index}" type="text" placeholder="Enter Institution state">
            </div>
        </div>

        <div class="mb-4 px-3 py-1 flex flex-row">
            <div class="w-full mr-5">
                <label class="block text-gray-700 font-bold mb-2" for="service">
                    End Month
                </label>
                <select
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="edmonth{index}" name="edmonth{index}" bind:value={item.endMonth}>
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
            <div class="w-full mr-5">
                <label class="block text-gray-700 font-bold mb-2" for="service">
                    End Year
                </label>
                <input
                bind:value={item.endYear}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="number" placeholder="Enter year of Completetion">
            </div>
        </div>
        <div class="mb-4 px-3 py-1 flex flex-row">
            <div class="w-full mr-5">
                <label class="block text-gray-700 font-bold mb-2" for="service">
                    Grade Title
                </label>
                <select
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="gradeTitle" name="gradeTitle" bind:value={item.gradeTitle}>
                    <option value="">Select one</option>
                    <option value="cgpa">CGPA</option>
                    <option value="percentage">Percentage</option>
                </select>
            </div>
            <div class="w-full mr-5">
                <label class="block text-gray-700 font-bold mb-2" for="service">
                    Grades
                </label>
                <input
                bind:value={item.grade}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="number" placeholder="92">
            </div>
        </div>
    </div>
        {/if}
        {/each}

        <div class="py-4 px-6 mb-4 text-white text-center font-bold uppercase">
            <button
            class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            on:click={addEducation(eduFieldCount)}
            >
            Add Education
        </button>
        <button
            class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            on:click={addEducation(-eduFieldCount)}
            >
            Remove Education
        </button>
        </div>
</div>

<!-- Experience -->
<div class="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="text-2xl py-4 px-6 mb-4 bg-emerald-700 text-white text-center font-bold uppercase">
        Experience 
    </div>

    {#each experience as item,index }
        
    {#if item.vis}
    <div 
    in:slide={{ duration: 600, axis: 'y' }}
    out:slide={{ duration: 800, axis: 'y' }}
    >

    
    <div class="mb-4 px-3 py-1 ">
            <label class="block text-gray-700 font-bold mb-2" for="name">
               Company Name
            </label>
            <input
            bind:value={item.companyName}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="companyName{index}" type="text" placeholder="Enter Company Name">
    </div>
    <div class="mb-4 px-3 py-1 ">
        <label class="block text-gray-700 font-bold mb-2" for="name">
           Designation
        </label>
        <input
        bind:value={item.designation}
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="designation{index}" type="text" placeholder="Enter Designation">
    </div>
    <div class="mb-4 px-3 py-1 flex flex-row">
        <div class="w-full mr-5">
            <label class="block text-gray-700 font-bold mb-2" for="name">
               Start Month
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="startMonth{index}" name="startMonth{index}" bind:value={item.startMonth}>
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
        <div class="w-full mr-5">
            <label class="block text-gray-700 font-bold mb-2" for="name">
               Start Year
            </label>
            <input
            bind:value={item.startYear}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startYear{index}" type="number" placeholder="eg 2020">
        </div>
    </div>

    <div class="mb-4 px-3 py-1 flex flex-row">
        <div class="w-full mr-5">
            <label class="block text-gray-700 font-bold mb-2" for="name">
               End Month
            </label>
            <select
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startMonth{index}" name="startMonth{index}" bind:value={item.endMonth}>
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
        <div class="w-full mr-5">
            <label class="block text-gray-700 font-bold mb-2" for="name">
               End Year
            </label>
            <input
            bind:value={item.endYear}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="endYear{index}" type="number" placeholder="eg 2022">
        </div>
    </div>
        <div class="mb-4 px-3 py-1 flex flex-row">
            <div class="w-full mr-5">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                   City
                </label>
                <input
                bind:value={item.city}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="edcity{index}" type="text" placeholder="Enter Company's city / remote">
            </div>
            <div class="w-full mr-5">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                   State
                </label>
                <input
                bind:value={item.state}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="edstate{index}" type="text" placeholder="Enter Company's state / India if Remote">
            </div>
        </div>

        <div class="mb-4 px-3 py-1">
            <label class="block text-gray-700 font-bold mb-2" for="name">
               Achievements
            </label>
            {#each item.achievements as achievement, achievementIndex}
                <input
                bind:value={achievement}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="achievement{index}{achievementIndex}" type="text" placeholder="Enter Your Work {achievementIndex+1}">
            {/each}
        </div>
        </div>
        {/if}
        {/each}
        

        <div class="py-4 px-6 mb-4 text-white text-center font-bold uppercase">
            <button
            class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            on:click={addExperience(experienceFieldCount)}
            >
            Add Experience
        </button>
        <button
            class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            on:click={addExperience(-experienceFieldCount)}
            >
            Remove Experience
        </button>
        </div>
</div>

<!-- Projects -->
<div class="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="text-2xl py-4 px-6 mb-4 bg-violet-700 text-white text-center font-bold uppercase">
        Projects 
    </div>

    {#each projects as item,index }
        
    {#if item.vis}
    <div 
    in:slide={{ duration: 600, axis: 'y' }}
    out:slide={{ duration: 800, axis: 'y' }}
    >

    
    <div class="mb-4 px-3 py-1 ">
            <label class="block text-gray-700 font-bold mb-2" for="name">
               Project Title
            </label>
            <input
            bind:value={item.title}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="companyName{index}" type="text" placeholder="Enter Company Name">
    </div>

    <div class="mb-4 px-3 py-1 flex flex-row">
        <div class="w-full mr-5">
            <label class="block text-gray-700 font-bold mb-2" for="name">
               Project Month
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="startMonth{index}" name="startMonth{index}" bind:value={item.startMonth}>
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
        <div class="w-full mr-5">
            <label class="block text-gray-700 font-bold mb-2" for="name">
               Project Year
            </label>
            <input
            bind:value={item.startYear}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startYear{index}" type="number" placeholder="eg 2020">
        </div>
    </div>
        <div class="mb-4 px-3 py-1">
            <label class="block text-gray-700 font-bold mb-2" for="name">
               Achievements
            </label>
            {#each item.achievements as achievement, achievementIndex}
            <input
            bind:value={achievement}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="achievement{index}{achievementIndex}" type="text" placeholder="Enter Your Work {achievementIndex+1}">
            {/each}
        </div>
        </div>
        

        <div class="mb-4 px-3 py-1 ">
           
            <label class="block text-gray-700 font-bold mb-2" for="name">
               Add Skill Used
            </label>
           
            <input
                bind:value={skillInputs[index]}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="companyName{index}" 
                type="text" placeholder="Enter Company Name">
            
            <button class="bg-gray-900 my-2 rounded text-white py-2 px-4" 
                on:click={() => addSkill(index)}>Add Skill</button>
            <button class="bg-gray-900 my-2 rounded text-white py-2 px-4" 
                on:click={() => deleteSkill(index)}>Delete Skill</button>
            
            <div class="w-full">
                {#each item.skills as ele,indexx }
                    <!-- <span class='bg-emerald-50 text-emerald-600 border border-emerald-400 text-xs font-medium mr-2 px-1.5 rounded-full py-1'>{ele}</span> -->
                    <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300">
                        {ele}
                        <button type="button" 
                        on:click={() => deleteSkill(indexx)}
                        class="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                        <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Remove badge</span>
                        </button>
                        </span>
                    {/each}
            </div>
            
    </div>
    {/if}
    {/each}
        

        <div class="py-4 px-6 mb-4 text-white text-center font-bold uppercase">
            <button
            class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            on:click={addProject(projectCount)}
            >
            Add Projects
        </button>
        <button
            class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            on:click={addProject(-projectCount)}
            >
            Remove Project
        </button>
        </div>
</div>

<!-- skills -->
<div class="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="text-2xl py-4 px-6 mb-4 bg-lime-600  text-white text-center font-bold uppercase">
        Technical Skills 
    </div>

    {#each technicalSkills as item,index }
        {#if item.vis}
        <div 
        in:slide={{ duration: 600, axis: 'y' }}
        out:slide={{ duration: 800, axis: 'y' }}
        >

            <div class="mb-4 px-3 py-1 flex flex-col sm:flex-row">
                <div>
                    <label class="block text-gray-700 font-bold mb-2" for="name">
                    Title
                    </label>
                    <input
                    bind:value={item.title}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="companyName{index}" type="text" placeholder="eg: Languages">
                </div> 
                <div class="w-full">
                    <label class="block text-gray-700 font-bold mb-2" for="name">
                    Skills Under {item.title}
                    </label>
                    
                    <input
                        bind:value={techSkillInputs[index]}
                        class="shadow appearance-none border rounded w-full py-2 px-3 ml-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="companyName{index}" type="text" 
                        placeholder="eg Java">
                    
                    <button class="bg-gray-900 mt-2 text-white text-sm py-1 px-2 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        on:click={()=>addTechSkill(index)}
                    >Add SKill</button>
                    
                    <button class="bg-gray-900 mt-2 text-white text-sm py-1 px-2 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        on:click={()=>deleteTechSkill(index)}
                    >Delete SKill</button>

                        <div class="w-full flex flex-row flex-wrap">
                            {#each item.skillSet as ele }
                                <span class='bg-emerald-50 m-1 text-emerald-600 border border-emerald-400 text-xs font-medium mr-2 px-1.5 rounded-full py-1'>{ele}</span>
                            {/each}
                        </div>
                </div> 
                   
            </div>

        </div>
            
        {/if}
    {/each}
        

        <div class="py-4 px-6 mb-4 text-white text-center font-bold uppercase">
            <button
            class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            on:click={addSkillField(skillLine)}
            >
            Add Row
        </button>
        <button
        class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
        on:click={addSkillField(-skillLine)}
        >
        Remove Row
    </button>
        </div>
</div>

<!-- Leadership / Extracurricular  -->
<div class="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="text-2xl py-4 px-6 mb-4 bg-cyan-600   text-white text-center font-bold uppercase">
        Leadership / Extracurricular 
    </div>
    <div class="mb-4 px-3 py-1">
        <div class="w-full">
            <label class="block text-gray-700 font-bold mb-2" for="name">
               Select Category 
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="startMonth" name="startMonth" bind:value={achievementVar.title}>
                <option value=" " selected>Select Title</option>
                <option value="Certificates">Certificates</option>
                <option value="Achievements">Achievements</option>
                <option value="Leadership">Leadership</option>
                <option value="Extra Curricular">Extra Curricular</option>
            </select>
        </div>
    </div>
    
    {#each achievementVar.lists as item, index}
        <div class="mb-4 px-3 py-1">
            <input
                bind:value={item}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="achievement" type="text" placeholder="Enter {achievementVar.title}">
        </div>
    {/each}
        
    <div class="py-4 px-6 mb-4  text-white text-center font-bold uppercase">
        <button
        class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
        on:click={addAchievement}
        >
            Add {achievementVar.title}
        </button>

        <button
            class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            on:click={deleteAchievement}
            >
            Delete Row
        </button>
</div>
</div>
<!-- Form Submission -->
<form action="https://www.overleaf.com/docs" method="post" target="_blank">
    <textarea rows="8" cols="60" name="snip" bind:value={latexGenerated} hidden></textarea>
    <div class="flex items-center justify-center mb-4 px-3 py-1">
        <button
            class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            on:click={merger}
            value="Open in Overleaf"
            type="button">
            Generate
        </button>
    </div>
    <div class="flex items-center justify-center mb-4 px-3 py-1">
        <button
            class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            value="Open in Overleaf"
            type="submit">
            Create PDF
        </button>
    </div>
</form>

{latexGenerated}
</div>

  