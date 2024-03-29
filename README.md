# 침하하 전보

2024.01.29 ~ 2024.02.05 (4/7 days)

## 1. Git & GitHub

### 1-1. 브랜치 관리

상태 관리 단계에 따라 각각 Props Drilling → Context API → Redux 순서로 브랜치를 분기했으며, 최종적으로는 3개의 Branch가 Project에 남아있습니다.

> `props-drilling` 브랜치에서는 context나 redux 없이
> **useState만으로 상태관리**해서 코드를 작성합니다.
>
> - props-drilling 으로 코드를 모두 작성 및 커밋을 완료했으면 context 브랜치로 생성 및 이동합니다.

> `context` 브랜치에서는 props-drilling으로 작업한 코드에서
> **react context API를 사용하여 전역상태를 이용한 코드로 리팩터링**합니다.
>
> - context 브랜치에서 리팩터링 및 커밋을 완료했으면 redux 브랜치 생성 및 이동합니다.

> `redux` 브랜치에서는 context api로 전역상태를 관리한 코드를
> 모두 **redux 라이브러리를 이용한 코드로 리팩터링**합니다.

## 2. Resource 출처

- Banner Font : 강원교육튼튼체
- Banner Image : [감자만두님의 침하하 대지도](https://chimhaha.net/stream_fanart/21374)
- Profile Image : [침착맨 유튜브 프로필](https://www.youtube.com/@ChimChakMan_Official)

## 3. 개발 전 설계 과정

### 3-0. 아이디어 및 기능 구상

#### 1. 아이디어 및 초기 디자인 구상

해당 웹 개발자는 2020-2021 년 즈음부터 침착맨 유튜브를 보며 살아온 침튜브 애청자다. 심지어 안될과학, 오늘의 주우재 채널은 그 이전부터 좋아하던 유튜브 채널이었다. 이번 프로젝트의 주제가 “한 그룹에 대한 팬레터 함” 이었는데, 세븐틴 외에는 크게 좋아하는 아이돌 그룹이 없는지라 초기에는 세븐틴 팬레터함을 생각했다. 세븐틴 배경화면을 찾다 문득 머릿속에 ‘침하하’와 ‘배도라지’가 생각났고 프로젝트 방향을 바꾸었다. 꼭 아이돌 팬레터함이 아니어도 되지 않는가? 프로젝트를 완성하면 침하하에도 올려볼 수 있겠다는 생각에 <침하하 전보> 라는 이름으로 프로젝트를 시작하게 되었다. 나흘 안에 완성해야 하는데, 침하하 전보 아이디어는 아주 큰 동기부여가 되었다.

#### 2. 와이어 프레임 설계 및 기능 구상

![침하하 전보 와이어프레임](https://github.com/ketchup0211/fan-letter/assets/69431340/a8e33633-c714-4ca5-bf52-b5bbfc3b91fa)
<img width="1470" alt="스크린샷 2024-02-05 오전 11 28 09" src="https://github.com/ketchup0211/fan-letter/assets/69431340/f774443d-effe-4c82-9eb7-ac027357603d">


- **Main Page**
  - [x] 침하하 글자에 마우스 호버 시, ‘침하하 페이지로 이동’ 글자 표시
  - [x] 침하하 글자 클릭 시, 침하하 페이지로 이동
  - [x] 침착맨 포함 17개국에 대한 정보를 볼 수 있는 가로 스크롤 리스트
    - 각 이름이 적힌 버튼에 마우스를 올리면
      - [x] cursor가 pointer로 바뀐다.
      - [x] 버튼의 배경색이 #f39009 로 바뀐다.
    - 각 이름이 적힌 버튼을 클릭하면
      - [x] 해당 인물에게 전보를 쓸 수 있도록 Form 의 수신자에 대한 정보가 바뀐다.
      - [x] 선택된 인물에 대한 버튼의 색이 #dd364a 로 바뀐다.
      - [x] Form 하단에 해당 인물에게 도착한 전보를 요약된 형태로 보여준다.
  - [x] 전보를 쓸 수 있는 Form
    - [x] 선택된 인물에 대한 버튼의 색이 #dd364 로 바뀐다.
    - [x] 내용은 150자, 닉네임은 10자로 글자수 제한
    - [x] 전송 시, 메세지 작성 시간도 함께 저장
    - [x] 내용 또는 닉네임 둘 중 하나라도 공란이면 전보 송신 불가.
      - [x] 유효성 검사를 통해 선택/입력이 필요한 곳을 표시.
      - [x] 내용 또는 닉네임을 입력해달라는 모달 띄워주기
  - [x] 도착한 전보를 볼 수 있는 세로 스크롤 리스트
    - [x] 해당 인물에게 도착한 전보를 요약된 형태로 보여준다.
      - [x] 닉네임, 작성된 시간, 전보 내용 (한 줄을 넘어갈 시 … 표시)
    - [x] 도착한 전보가 많으면, 특정 컨테이너 내에서 스크롤하여 전보를 볼 수 있다.
    - [x] 전보를 클릭하면, 전체 내용을 보거나 수정 및 삭제할 수 있는 상세페이지로 이동한다.
  - [x] 전송하기 버튼에 마우스 호버 시, 버튼의 배경색이 #f39009 로 바뀐다.

<img width="1470" alt="스크린샷 2024-02-05 오전 11 41 14" src="https://github.com/ketchup0211/fan-letter/assets/69431340/60c20066-2e70-4d0f-a3b3-7ee5ad2a9ff6">
<img width="1470" alt="스크린샷 2024-02-05 오전 11 50 55" src="https://github.com/ketchup0211/fan-letter/assets/69431340/8128e050-d762-43c6-8931-5d1615138c70">

 - **Detail Page**
   - [x] 홈 화면으로 이동 시 디테일 정보를 보고 있던 인물 섹션 유지
     - [x] 홈으로 버튼 클릭 시 홈 화면으로 이동
     - [x] 삭제 버튼 클릭 && 확인 버튼 클릭 시 홈 화면으로 이동
     - [x] 수정 완료 버튼 클릭 시 홈 화면으로 이동
  - [x] 송, 수신자에 대한 정보 확인 가능
  - [x] 전보 전체 내용 확인 가능
  - [x] 수정 버튼 클릭 시 textarea를 통해 메세지 수정 가능 (autofocus)
    - [x] 취소 버튼을 통해 수정 취소 가능
    - [x] 수정 완료 후 변경사항 없을 시 '아무런 수정 사항이 없습니다' 문구, 변경사항 있을 시 '수정되었습니다.' 문구 표시
  - [x] 삭제 버튼 클릭 시, '삭제하시겠습니까? (삭제한 전보는 되돌릴 수 없습니다)' 문구를 띄우고 컨펌 받을 시 메세지 삭제


### 3-1. Basic Implement (Props-Drilling)

#### 1. **UI를 컴포넌트 계층으로 쪼개기**

#### 2. **React로 정적인 버전 구현하기**

#### 3. **최소한의 데이터만 이용해서 완벽하게 UI State 표현하기**

웹 어플리케이션 내 데이터들은 다음과 같다.

1. 17개국 인물들의 목록
2. 송신자 정보
3. 수신자 정보
4. 전보의 내용
5. 각 인물 별 도착한 전보의 목록

최소한의 데이터만 이용해서 UI state를 표시하기 위해, state를 사용하지 않아도 되는 경우를 추려보자. State가 아닌 경우는 다음과 같다.

1. **시간이 지나도 변하지 않는다.**
2. **부모로부터 props를 통해 전달된다.**
3. 컴포넌트 안의 다른 state나 props를 가지고 **계산 가능하다.**

따라서 우리가 가지고 있는 데이터 중 시간에 따라 변하는(클릭한 값에 따라 변하는) 송신자 정보, 사용자로부터 입력 받는 수신자 정보, 입력하는 전보의 내용. 총 3개의 state가 필요한 state의 최소 단위이다.

#### 4. **State가 어디에 있어야 할 지 정하기**

1. **송신자 정보 state**는 가로 스크롤의 버튼 또는 form 내부의 Option을 통해 변경될 수 있다.
또한, 이 정보는 다음의 argument로 넘겨주어야 한다.
    - form 전송 시 : 누구에게 보내는 전보인 지 구분하기 위해.
    - 해당 인물의 페이지에 들어왔을 때 : 해당 인물에게 도착한 전보들의 리스트를 보여주기 위해.
    
    ⇒ `StBody.jsx`에 있어야 한다. (`HorizontalScrollBox.jsx`, `TelegramForm.jsx`의 부모 컴포넌트)
    
2. **수신자 정보 state**는 input에서만 변경할 수 있으며, 이 정보는 다음의 argument로 넘겨주어야 한다.
    - form 전송 시 : local storage에 작성자명을 기록하기 위해.
    
    ⇒ `TelegramForm.jsx` 에 있어야 한다.
    
3. **입력하는 전보의 내용 state**는 input과 상세 페이지의 수정하기를 통해서만 변경할 수 있으며, 이 정보는 다음의 argument로 넘겨주어야 한다.
    - form 전송 시 : local storage에 작성 내용을 기록하기 위해.
    
    ⇒ `TelegramForm.jsx` 에 있어야 한다.
   
## 4. DataBase
저장소는 Local Storage를 사용하였습니다.
key는 인물, value는 message, sender, creationTime, id의 object로 구성된 list를 담고 있습니다.(JSON 형태 참고)

## 5. 기타
- CRA 대신 Vite를 사용하였습니다.
- useState, useContext, Redux 순으로 상태관리를 하였습니다. (branch 참고)
- styled-components 를 사용하여 css를 디자인하였습니다.
- reset.css 코드를 적용하였으며, box-sizing을 적용하였습니다.
- react-router-dom 을 이용해 홈화면과 상세화면에 대한 라우터 설정을 했습니다.

## 6. Q&A

#### 1. styled-components 는 CSS in JS 라이브러리 중 하나로 리액트 개발 시 자주 사용되는 방법입니다. 본인이 생각하는 styled-components의 장점과 단점을 말씀해 주세요.
- 장점 : props, JS를 사용해 css 디자인이 가능하다는 점에서, 재사용성이나 디자인 측면에서의 자유도가 좋았다. 또한 다른 css에 영향을 받지 않고 독립적으로 스타일링을 할 수 있다는 점에서 깔끔하다고 느꼈다. 스타일 오염이 적어 확장성이 좋다고 생각한다.
- 단점 : 개별적으로 스타일링을 하다 보니, 컴포넌트의 수가 많아졌다. 비슷한 부분이 있어 스타일을 공통으로 적용해주고 싶어도 조금이라도 다른 스타일이 있다면 개별 컴포넌트로 만들어 스타일링을 하는 것이 꽤 불편했다. 특성상 런타임에서 스타일을 처리하고 있기에, 잘못하면 에러나 성능 상의 문제가 발생할 가능성이 높아질 것 같다.

#### 2. props-drilling으로 전체를 먼저 구현하신 다음 context api와 redux로 리팩터링해서 전역 상태 관리를 경험해 보셨습니다. 어떤 상태들을 전역 상태로 관리하셨나요? context나 redux로 전역상태를 관리해봤을 때 어떤 문제를 해결해준다고 느끼셨나요?
- context(memo는 깜빡했네요..!)
  - 디테일 페이지 : 디테일 페이지에 parameter로 넘어오는 receiver와 id값을 이용해, 해당 페이지에서 사용되는 데이터에 해당하는 sender, receiver, message, id를 전역 상태로 관리하였습니다. 수정했을 때의 값도 넘겨받는 등의 작업이 필요했기에 modify와 관련된 작업을 하는 것도 context로 관리하였습니다.(특정 컴포넌트 내부에서만 쓰이는거라 이는 최상단에 두지 않았습니다.)
  - 메인 페이지 : receiver를 전역 상태로 관리했고, message, nickname은 Form내부의 최 상단에 있는 컴포넌트에 두었습니다.
  - 해결해주는 문제 : 특정 props가 필요 없는 컴포넌트의 자식이 이를 필요로 할 때, 해당 컴포넌트가 props를 받지 않아도 자식에서 바로 이를 쓸 수 있도록 해줌으로써 구분 및 관리가 더욱 수월했다. 또한 여러 인자를 묶어 전달하고, 필요한 것만 받아 쓸 수 있는 것이 좋았다.
 
- redux
  - 메인 페이지의 데이터, 디테일 페이지의 데이터, 디테일 페이지에서의 수정과 관련된 파일 3개로 나누어 전역 상태 관리를 하였다.
  - 메인 페이지에서는 폼 작성을 위해 sender, receiver, message에 대한 상태들을 사용했다.
  - 디테일 페이지에서는 전달 받은 내용을 찾아 수정하고 저장하기 위해 sender, receiver, message, id에 대한 상태들과, 수정 여부를 알기 위한 modify, 수정 중인 메세지를 담을 modMessage(message) 상태를 사용했다.
  - 해결해주는 문제 : state와 setState의 위치를 고민하지 않고 전체 state pool에서 편리하게 필요한 기능들을 불러 사용 및 수정(새로운 state 생성) 할 수 있었다. 보다 깔끔한 코드를 작성할 수 있었고, context와 달리 트리 구조를 그리지 않고 사용할 수 있었다는 점에서 상당한 편리함을 느꼈다.
