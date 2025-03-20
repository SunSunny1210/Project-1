const DB_JSON_URL = './public/db.json'

const _loadProjects = async () => {
    const response = await fetch(DB_JSON_URL)
    return response.json()
}

function updateHref(id, queryParam, projectId) {
    const identificator = document.querySelector(id);
    const newHref = new URL(identificator.href);
    newHref.searchParams.set(queryParam, projectId);
    identificator.href = newHref.toString();
}

const _loadRelatedProjects = (projects) => {
    document.querySelector('#i4 .tiny-title').innerText = projects[0].title;
    document.querySelector('#i5 .tiny-title').innerText = projects[1].title;
    document.querySelector('#i6 .tiny-title').innerText = projects[2].title;
    document.querySelector('#i4 img').src = projects[0].image;
    document.querySelector('#i5 img').src = projects[1].image;
    document.querySelector('#i6 img').src = projects[2].image;
    document.querySelector('#i4 #info-text').innerText = projects[0].description;
    document.querySelector('#i5 #info-text').innerText = projects[1].description;
    document.querySelector('#i6 #info-text').innerText = projects[2].description;
    updateHref('#i4', 'projectId', projects[0].uuid);
    updateHref('#i5', 'projectId', projects[1].uuid);
    updateHref('#i6', 'projectId', projects[2].uuid);
}

const _loadProject = (project) => {
    document.querySelector('h1').innerText = project.title;
    document.querySelector('.titles p').innerText = project.description;
    document.querySelector('.date span').innerText = project.completed_on;
    document.querySelector('.images img').src = project.image;
    document.querySelector('.text').innerHTML = project.content;
}

window.onload = async () => {
    const queryParams = window.location.search;
    const projectId = parseInt(new URLSearchParams(queryParams).get('projectId')) || 1;
    const { projects } = await _loadProjects() || {};

    const actualProject = projects.find(pr => parseInt(pr.uuid) === projectId);

    const relatedProjects = actualProject.related_projects.map(prID => projects.find(pr => parseInt(pr.uuid) === prID) || null).filter(Boolean);
    _loadRelatedProjects(relatedProjects);
    _loadProject(actualProject);
}
