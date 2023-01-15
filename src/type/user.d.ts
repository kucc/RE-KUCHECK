interface User {
  id: string;
  comment: string;
  detailComment?: string;
  email: string;
  emoji: string;
  link?: string;
  instaLink?: string;
  role: '정회원' | '준회원';
  courseHistory: Course[];
}
