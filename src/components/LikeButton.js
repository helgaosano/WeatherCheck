import React, {useState} from "react";


const LikeButton = () => {

  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    //setIsClicked(!isClicked);
  };

  return (
    <div className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
        <button className="like">
            <span className="likes-counter"> {` ${likes} ♥`}</span>
        </button>
    </div>
  );
};

export default LikeButton;