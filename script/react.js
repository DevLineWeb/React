'use strict';

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return 'Você Clicou!';
  }

  return React.createElement(
    'button',
    {
      onClick: () => setLiked(true),
    },
    'Like'
  );
}

const rootNode = document.getElementById('like-button-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));

const anotherRootNode = document.getElementById('another-root');
const anotherRoot = ReactDOM.createRoot(anotherRootNode);
anotherRoot.render(React.createElement(LikeButton));