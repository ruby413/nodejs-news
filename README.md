# IT 뉴스 사이트

---

#### 메인 페이지

![](https://user-images.githubusercontent.com/34808501/60937212-8487bf00-a30a-11e9-81be-dc8cbfd7a7f3.png)

### IT 분야별 뉴스 제공

- 방송/통신, 인터넷, 게임, 컴퓨팅, 홈/모바일 등

### 언론사별 뉴스 제공

- 블로터, ZDNet, 디지털 데일리, 디지털 타임즈 등

## 사용자 구분

- **관리자**
    - 뉴스 업로드, 수정, 삭제, 조회 가능
    - 댓글 달기, 회원 강퇴 가능

- **일반 사용자**
    - 뉴스 조회 및 댓글 달기 가능

## 주요 기능

- **회원가입 / 로그인**
    - passport / express-session 이용
    - 회원가입: `POST /register`
    - 로그인: `POST /login`
    - 로그아웃: `POST /logout`

- **뉴스 CRUD**
    - 뉴스 조회: `GET article/:articleId`
    - 뉴스 생성: `POST article/:articleId`
    - 뉴스 수정:  `PATCH article/:articleId`
    - 뉴스 삭제:  `DELETE article/:articleId`

- **좋아요**
    - 기사 또는 댓글에 좋아요 버튼을 누를 수 있음
    - 기사 좋아요: `PATCH article/:articleId`
    - 댓글 좋아요: `PATCH comment/:commentId`

- **댓글**
    - 로그인 한 사용자만 댓글 달 수 있음
    - 대댓글은 **depth 1**까지만 허용
    - 댓글 등록: `POST comment/:commentId`
    - 댓글 수정: `PATCH comment/:commentId`
    - 댓글 삭제: `DELETE comment/:commentId`

## 주요 페이지

- **회원가입 페이지**: `GET /register`
- **로그인 페이지**: `GET /login`
- **메인 페이지**: `GET /`
- **뉴스 게시물 페이지**: `GET /article/:articleId`
- **관리자 페이지**: `GET /admin`
- **회원 정보 페이지**: `GET /profile`

## DB 구조

![](https://user-images.githubusercontent.com/34808501/60937615-fb718780-a30b-11e9-8904-665a3387e605.png)

![](https://user-images.githubusercontent.com/34808501/60937587-e8f74e00-a30b-11e9-8b70-98f0c34985bd.png)