import '../styles/index.scss';
console.log('Started');

const node = document.getElementById('test');

const patchStyle = {
  width: '200px',
  height: '200px',
  backgroundColor: 'blue',
};

Object.entries(patchStyle).forEach(entryPair => {
  node.style[entryPair[0]] = entryPair[1];
});

