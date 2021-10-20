interface ImportMetaEnv {
  VITE_APP_URL: string,
}

interface SignInForm {
  email: string;
  password: string;
}

interface RegisterForm {
  name: string;
  phone: string;
  email: string;
  password: string;
  city: string;
}

interface Project {
  id: string;
  title: 'string';
  content: any;
  create_time?: number;
}

interface State {
  isLogin: boolean;
  user: User;
  isOffcanvasShow: boolean;
}

interface User {
  name?: string;
  phone?: number;
  city?: string;
  jobs?: string;
  description?: string;
  about?: string;
  photo?: string;
  background_cover?: string;
  projects?: Project[];
  experience?: Experience[];
  profile_views_today?: number;
  profile_views?: number;
  connections_qty?: number;
  education?: Education;
}

interface Education {
  school?: string;
  major?: string;
  content?: string;
  time?: string;
}

interface Experience {
  id?: string,
  title?: string;
  place?: string;
  start_time?: number;
  end_time?: number;
  content?: string;
  image_url?: string;
}

interface Article {
  id?: string;
  username?: string;
  create_time?: string;
  content?: Object;
}