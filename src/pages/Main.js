import React from "react";
import styled from "styled-components";
import Article from "../components/Article";
import { BsPlusCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Main = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.article.list);
  const is_session = sessionStorage.getItem("token")? true : false;
  
  React.useEffect(() => {
    dispatch(articleActions.getArticleFB());
  }, []);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img src="https://cdn.pixabay.com/photo/2016/11/29/04/54/photographer-1867417__340.jpg"/>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2019/11/20/11/15/knitting-4639828__340.jpg"/>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg"/>
        </div>
        <div>
        <img src="https://cdn.pixabay.com/photo/2020/06/09/03/08/craft-5276736__340.jpg"/>
        </div>
        <div>
        <img src="https://cdn.pixabay.com/photo/2020/09/03/13/53/fishing-boat-5541327__340.jpg"/>
        </div>
        <div>
        <img src="https://cdn.pixabay.com/photo/2017/01/13/09/23/magic-cube-1976725__340.jpg"/>
        </div>
      </Slider>
      {
        is_session
        ? <BsPlusCircleFill
        className="plus"
        size={60}
        onClick={() => {
          history.push("/add");
        }}
      />
      : null
      }
      
      <ArticleList>
        {articleList.map((a, idx) => {
          return <Article key={a.articleNum} {...a} />;
        })}
      </ArticleList>
    </>
  );
};

const ArticleList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 60px auto 0 auto;
  width: 80%;
`;

export default Main;
