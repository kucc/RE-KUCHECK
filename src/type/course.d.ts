interface Attendance {
  attendance: (0 | 1 | 2 | 3)[];
  id: string;
}

interface Course {
  courseAttendance: Attendance[];
  courseCheckAdmin: string[];
  courseCurriculum: string[];
  courseDate: string;
  courseName: string;
  courseNotice: string;
  coursePlace: string;
  courseGoal: string;
  courseInfo: string;
  courseLeader: {
    id: string;
    name: string;
    emoji: string;
    comment: string;
  };
  id: string;
  courseMember: string[];
  courseStack: string[];
  language: Language[];
  // 1 : 세션, 2 : 스터디, 3: 프로젝트
  courseType: 1 | 2 | 3;
  difficulty: string;
  maxMemberNum: number;
  requireTime: string;
  semester: string;
}