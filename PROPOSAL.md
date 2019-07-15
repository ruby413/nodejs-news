# News web application :newspaper:

<br> 

## Summary :pencil2:

### User :busts_in_silhouette: 

* 사용자는 등록된 게시물을 읽을 수 있습니다.
* 사용자는 회원 가입을 할 수 있습니다.
* 사용자가 댓글을 작성하거나, 좋아요, 팔로우 기능들을 사용하려면 로그인을 해야 합니다.

<br>

### Admin :bust_in_silhouette:

* 관리자는 게시물을 등록할 수 있습니다.
* 관리자는 게시물을 삭제할 수 있습니다.
* 관리자는 게시물을 수정할 수 있습니다.
* 관리자는 사용자 수, 게시물 수, 조회 수를 통계를 통해 확인할 수 있습니다.

<br>

## Wireframe :pencil2:

### Main Page :page_with_curl:

![image-20190710202546508](https://github.com/bestdevhyo1225/image_repository/blob/master/image-20190710202546508.png?raw=true)

* Category 별로 분류 합니다. (스포츠, 문화, 예술, 경제, IT, 과학)
* 게시물 조회 수 중 가장 높은 20개의 게시물을 슬라이드 형태로 보여줍니다.
* 그 외 나머지 게시물은 하단을 통해 볼 수 있습니다.

<br>

### SignUp Page :page_with_curl:

![image-20190710210601394](https://github.com/bestdevhyo1225/image_repository/blob/master/image-20190710210601394.png?raw=true)

* 회원 가입 페이지에서는 ID, Password, Name, E-Mail을 입력할 수 있습니다.
* ID 중복 체크를 위한 기능이 있습니다.

<br>

### Login Page :page_with_curl:

![image-20190710211803060](https://github.com/bestdevhyo1225/image_repository/blob/master/image-20190710211803060.png?raw=true)

* 사용자는 댓글, 좋아요, 팔로우과 같은 활동을 하기 위해 로그인을 하는 페이지 입니다.

<br>

### Post Page :page_with_curl:

![image-20190710214401956](https://github.com/bestdevhyo1225/image_repository/blob/master/image-20190710214401956.png?raw=true)

* 로그인 상태이면, 회원 정보가 나타납니다. 로그인 상태가 아니면, 회원 가입 또는 로그인을 할 수 있도록 현재 상태를 보여줍니다.
* 게시글의 제목, 작성자, 날짜를 확인할 수 있습니다.
* 게시글의 내용을 읽을 수 있고 댓글 작성, 좋아요, 팔로우를 할 수 있습니다.

<br>

### Admin Page :page_with_curl:

![image-20190710222748244](https://github.com/bestdevhyo1225/image_repository/blob/master/image-20190710222748244.png?raw=true)

* 관리자가 게시물을 등록, 삭제, 수정하는 것 이외에도 전체적인 통계를 확인할 수 있는 페이지입니다. 

<br>

## API :pencil2:

### User :busts_in_silhouette:

* 메인 페이지 이동 : `GET /`
* 로그인 페이지 이동 : `GET /login`
* 회원 가입 페이지 이동 : `GET /signUp`
* ID 중복 체크 : `POST /checkID/:user_id`
* 회원 가입 : `POST /signUp/:user_infomation`
* 로그인 : `POST /login/:user_id & user_pw`
* 로그아웃 : `POST /logout`

<br>

### Comment :speech_balloon:

* 댓글 보기 : `GET /comment`
* 댓글 등록 : `POST /comment/comment_information (number, contents, etc...)`
* 댓글 수정 : `PATCH /comment/comment_information (number, contetns, etc...)`
* 댓글 삭제 : `DELETE /comment/comment_number`

<br>

### Admin :bust_in_silhouette:

* 유저의 수 조회 : `GET /admin/user_count`
* 게시글의 수 조회 : `GET /admin/post_count`
* 댓글의 수 조회 : `GET /admin/comment_count`
* 전체 데이터 조회 : `GET /admin/total_data_count`

<br>

### Post :postbox:

* 전체 게시글 리스트 : `GET /post/`
* 특정 게시글 보기 : `GET /post/:post_number` 
* 게시글 등록 : `POST /post/:post_information (number, contents, etc...)`
* 게시글 수정 : `PATCH /post/:post_information (number, contents, etc...)`
* 게시글 삭제 : `DELETE /post/:post_number`

<br>

### Category :bookmark:

* 카테고리 보기 : `GET /category`
* 카테고리 등록 : `POST /category/category_information (number, title)`
* 카테고리 수정 : `PATCH /category/category_information (number, title)`
* 카테고리 삭제 : `DELETE /category/category_number`

<br>

## DataBase Structure :pencil2:

### User Table :file_folder:

| ID | PW | PW key | Name | E-Mail | Comment | Authority |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| ... | ... | ... | ... | ... | ... | ... |

<br>

### Post Table :file_folder:

| Category | Number | Writer | Date | Views | Contents | Like | Follow |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| ... | ... | ... | ... | ... | ... | ... | ... |

<br>

### Comment Table :file_folder:

| Category | Post Number | Writer | Comment |
| :-: | :-: | :-: | :-: |
| ... | ... | ... | ... |