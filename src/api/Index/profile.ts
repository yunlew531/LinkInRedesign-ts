import authReq from '../auth_req';

export const getProfile = () => authReq.get('/self/profile');
export const getPhoto = () => authReq.get('/self/photo');
export const uploadPhoto = (formData: FormData) => authReq.post('/self/photo', formData);
export const uploadBackgroundImg = (formData: FormData) => authReq.post('/self/background', formData);
export const updateDescription = (description: Object) => authReq.put('/self/description/update', { description });
export const updateAbout = (about: Object) => authReq.put('/self/about/update', { about });
export const createProject = (project: Project) => authReq.post('/self/project/create', { project });
export const updateProject = (project: Project, id: string) => authReq.put(`/self/project/${id}`, { project });
export const deleteProject = (id: string) => authReq.delete(`/self/project/${id}`);
export const updateExperienceImg = (formData: FormData) => authReq.post(`/self/experience/image`, formData);
export const createExperience = (experience: Experience) => authReq.post(`/self/experience/create`, experience);
export const updateExperience = (id: string, experience: Experience) => authReq.put(`/self/experience/${id}`, experience);
export const deleteExperience = (id: string) => authReq.delete(`/self/experience/${id}`);
export const updateEducation = (education: Education) => authReq.post('/self/education', education);
