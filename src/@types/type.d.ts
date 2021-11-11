interface ImportMetaEnv {
  VITE_APP_URL: string;
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
  articles: Article[];
}

interface ViewsUser {
  uid: string;
  name: string;
  job: string;
  photo: string;
}

interface Views {
  profile_views_total?: number;
  profile_views?: ViewsUser[];
}

interface User {
  uid?: string;
  name?: string;
  phone?: number;
  city?: string;
  job?: string;
  description?: string;
  about?: string;
  photo?: string;
  background_cover?: string;
  projects?: Project[];
  experience?: Experience[];
  profile_views_today?: number;
  views?: Views;
  connections_qty?: number;
  education?: Education;
  connections?: Connections;
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

interface ArticleLike {
  uid: string;
  name: string;
  photo: string;
  job: string;
}

interface ArticleComment {
  id: string;
  name: string;
  uid: string;
  comment: string,
  create_time: number;
  photo: string;
}

interface Article {
  id?: string;
  uid?: string;
  photo?: string;
  job?: string;
  name?: string;
  create_time?: number;
  content?: Object;
  likes?: ArticleLike[];
  comments?: ArticleComment[];
  favorites?: string[];
}

interface CommentData {
  name: string;
  photo: string;
  comment: string;
}

interface EmitSubmitCommentData {
  articleId: string;
  articleIdx: number;
  comment: string;
}

interface EmitDeleteCommentData {
  article: Article;
  articleIdx: number;
  commentId: string;
}

interface ConnectUser {
  uid: string;
  name: string;
  timestamp: number;
  connections_qty: number;
  job?: string;
  photo?: string;
  content?: string;
  connected_time?: number;
}

interface Connections {
  connected: ConnectUser[];
  received: ConnectUser[];
  sent: ConnectUser[];
}

interface Response {
  message: string;
  success: boolean;
  data: {
    [key: string]: any;
  }
}
