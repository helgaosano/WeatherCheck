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
    
  };

  return (
    <div>
        <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
            <span className="likes-counter">{ `♥ | ${likes} likes weather ` }</span>
        </button>
    </div>
  );
};

export default LikeButton;