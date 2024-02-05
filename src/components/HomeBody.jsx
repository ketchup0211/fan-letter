import TelegramForm from "./TelegramForm";
import TelegramList from "./TelegramList";
import HorizontalScrollBox from "./HorizontalScrollBox";

function HomeBody() {
  //  Main
  return (
    <>
      <HorizontalScrollBox />
      <TelegramForm />
      <TelegramList />
    </>
  );
}

export default HomeBody;
