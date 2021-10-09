import authReq from '../auth_req';

export const getProfile = () => authReq.get('/self/profile');
export const getPhoto = () => authReq.get('/self/photo');
export const uploadPhoto = (formData: FormData) => authReq.post('/self/photo', formData);
export const uploadBackgroundImg = (formData: FormData) => authReq.post('/self/background', formData);
export const updateDescription = (description: Object) => authReq.put('/self/description/update', { description });
export const updateAbout = (about: Object) => authReq.put('/self/about/update', { about });
export const createProject = (project: IProject) => authReq.post('/self/project/create', { project });
export const updateProject = (project: IProject, id: string) => authReq.put(`/self/project/${id}`, { project });
export const deleteProject = (id: string) => authReq.delete(`/self/project/${id}`);
