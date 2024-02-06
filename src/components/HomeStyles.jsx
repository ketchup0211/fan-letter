import styled from "styled-components";
import "../fonts.css";

//  HomeHeader
const HomeBanner = styled.div`
  background-image: url("images/chim-ha-ha.png");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  text-align: center;
  padding: 60px;
  border-bottom: 3px dashed black;
`;

const Title = styled.h1`
  font-family: GangwonEduPowerExtraBoldA;
  font-size: 80px;
  & * {
    text-decoration: none;
    color: black;
  }
`;

const SubTitle = styled.p`
  margin-top: 6px;
  font-family: NEXON Lv2 Gothic;
  font-size: 20px;
`;

//  HomeBody > HorizontalScrollBox
const NameContainer = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 50px 30px 0px 30px;
`;

//  HomeBody > TelegramForm
const FormContainer = styled.form`
  margin: 31.5px;
  margin-bottom: 50px;
  border: 2px solid black;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const FormReceiver = styled.p`
  text-align: left;
  font-size: 21px;
  font-family: NEXON Lv2 Gothic;
`;

const FormSender = styled.p`
  text-align: right;
  font-size: 21px;
  font-family: NEXON Lv2 Gothic;
  margin-top: 20px;

  & * {
    font-family: NEXON Lv2 Gothic;
    border-width: 0px;
    &:focus {
      outline: none;
      &::placeholder {
        color: transparent;
      }
    }
    font-size: 18px;
    width: 190px;
  }
`;

const FormMessage = styled.textarea`
  padding: 10px 0px 0px 0px;
  margin-top: 12px;
  font-size: 18px;
  text-indent: 10px;
  border: 0px;
  resize: none;
  height: auto;
  &:focus {
    outline: none;
    border-width: 0px;
    &::placeholder {
      color: transparent;
    }
  }
  font-family: NEXON Lv2 Gothic;
`;

const SubmitBtn = styled.button`
  align-self: flex-end;
  border: 2px solid black;
  background-color: white;
  font-size: 20px;
  font-family: NEXON Lv2 Gothic;
  border-radius: 8px;
  padding: 3px;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  &:hover {
    cursor: pointer;
    background-color: #fca600;
  }
`;
//  HomeBody > TelegramList
const Telegrams = styled.div`
  height: 500px;
  padding-top: 31.5px;
  border-top: 3px dashed black;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: #f6ebe2;
  text-align: center;
`;

const AlertMessage = styled.div`
  color: black;
  font-size: 18px;
`;

//  TelegramList > TelegramBox
const TelegramContainer = styled.div`
  margin: 0px 31.5px 10px 31.5px;
  padding: 3px;
  background-color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  margin: 20px;
  width: 100px;
  height: 100px;
`;

const ContentsContainer = styled.div`
  padding: 5px 20px 5px 5px;
  margin: 20px 0px;
  color: white;
  font-family: NEXON Lv2 Gothic;
  line-height: 23px;
  text-align: left;
  min-height: 90px;
  min-width: 0px;
`;

const Sender = styled.p`
  font-size: 20px;
`;

const Time = styled.p`
  font-size: 12px;
  color: grey;
`;
const Message = styled.p`
  margin-top: 5px;
  font-size: 16px;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

/*
 * Export
 */

//  HomeHeader
export { HomeBanner, Title, SubTitle };

//  HomeBody > HorizontalScrollBox
export { NameContainer };

//  HomeBody > TelegramForm
export { FormContainer, FormReceiver, FormSender, FormMessage, SubmitBtn };

//  HomeBody > TelegramList
export { Telegrams, AlertMessage };

//  TelegramList > TelegramBox
export {
  TelegramContainer,
  ProfileImg,
  ContentsContainer,
  Sender,
  Time,
  Message,
};
